const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'Cache-Control': 'no-store'
};

export function sendJson(res, status, obj) {
  const body = Buffer.from(JSON.stringify(obj), 'utf8');
  res.writeHead(status, {
    ...SECURITY_HEADERS,
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': body.length
  });
  res.end(body);
}

export function sendError(res, status, code, message, extra) {
  sendJson(res, status, { ok: false, error: { code, message, ...(extra || {}) } });
}

export class HttpError extends Error {
  constructor(status, code, message, extra) {
    super(message);
    this.status = status;
    this.code = code;
    this.extra = extra;
  }
}

export function httpError(status, code, message, extra) {
  return new HttpError(status, code, message, extra);
}

export function readJsonBody(req, maxBytes) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    let done = false;
    req.on('data', (chunk) => {
      if (done) return;
      size += chunk.length;
      if (size > maxBytes) {
        done = true;
        reject(new HttpError(413, 'BODY_TOO_LARGE', 'request body too large', { maxBytes }));
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      if (done) return;
      done = true;
      const raw = Buffer.concat(chunks).toString('utf8').trim();
      if (!raw) {
        reject(new HttpError(400, 'EMPTY_BODY', 'request body is empty'));
        return;
      }
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch (err) {
        reject(new HttpError(400, 'INVALID_JSON', 'request body is not valid JSON'));
        return;
      }
      if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
        reject(new HttpError(400, 'INVALID_BODY', 'request body must be a JSON object'));
        return;
      }
      resolve(parsed);
    });
    req.on('error', () => {
      if (done) return;
      done = true;
      reject(new HttpError(400, 'BODY_READ_FAILED', 'request body read failed'));
    });
  });
}
