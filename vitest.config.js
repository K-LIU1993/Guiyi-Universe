// node:test suites keep their native runner; Vitest owns the TypeScript rule suites.
export default { test: { include: ["src/**/*.test.ts"] } };
