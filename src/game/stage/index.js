import { createStage } from './runtime.js';

const seed = {
  sources: [
    { title: 'Boundary sample', excerpt: 'A testable working claim', fetchedAt: '2026-01-01', isTeachingSample: true },
    { title: 'Context sample', excerpt: 'Applicability can vary by context', fetchedAt: '2026-01-01', isTeachingSample: true },
    { title: 'Open question', excerpt: 'Evidence still needed', fetchedAt: '2026-01-01', isTeachingSample: true },
  ],
  claims: [{ text: 'A provisional judgment' }],
  conditions: [{ field: 'time.weekly_hours_plan', op: 'gte', value: 5, label: 'Plan is at least 5 hours weekly' }],
};
const acts = ['opening', 'structure', 'condition', 'counterexample', 'bridge', 'next_question'];
const names = ['Opening', 'Structure', 'Condition', 'Counterexample', 'Bridge', 'Forming card'];
const stage = createStage({ sessionId: 'stage-demo', questionId: 'divergence', seed });
const app = document.querySelector('#app');

function send(action, ok) {
  const result = stage.dispatch(action);
  render(result.ok ? ok : 'You can continue gently: ' + result.error.message);
}

function render(message = '') {
  const state = stage.getState(); const act = state.taskState.act; const index = acts.indexOf(act);
  const camera = act === 'opening' ? 'WORLD_OVERVIEW' : act === 'next_question' ? 'PUZZLE_FOCUS' : 'ISLAND_EXPLORE';
  app.innerHTML = '<h1>Divergence Island</h1><p>Act: ' + names[index] + ' | Camera: ' + camera + '</p><p>' + message + '</p>' + view(state) + '<p>Events: ' + state.eventLog.length + '</p><button id="advance">Next act</button>';
  bind(state);
}

function view(state) {
  const act = state.taskState.act;
  if (act === 'opening') return '<textarea id="stance" placeholder="My current stance..."></textarea><button id="record">Record</button>';
  if (act === 'structure') return '<p>Three slots: ' + Object.entries(state.slots).map(([k, v]) => k + '=' + (v || 'empty')).join(' | ') + '</p>' + state.sources.map((s, i) => '<button class="source" data-i="' + i + '">' + s.title + '</button>').join('') + '<button id="relation">Commit support relation</button>';
  if (act === 'condition') return '<select id="condition">' + state.conditions.map((c) => '<option value="' + c.id + '">' + c.label + '</option>').join('') + '</select><button id="switch">Switch</button>';
  if (act === 'counterexample') return '<p>limit_scope narrows scope; it is not challenge.</p>' + ['support', 'challenge', 'limit_scope', 'uncertain'].map((v) => '<button class="verdict" data-v="' + v + '">' + v + '</button>').join('');
  if (act === 'bridge') return '<p>Bridge is rebuilt from SaveDocument.</p><button id="bridge">Save bridge</button>';
  return '<p>Five elements: judgment, sources, conditions, open questions, revision triggers.</p><button id="form">Form card</button>';
}

function bind(state) {
  document.querySelector('#advance').onclick = () => send({ type: 'advance_act' }, 'Moved to next act.');
  if (state.taskState.act === 'opening') document.querySelector('#record').onclick = () => send({ type: 'record_stance', text: document.querySelector('#stance').value || 'A provisional judgment.' }, 'Stance recorded.');
  if (state.taskState.act === 'structure') bindStructure(state);
  if (state.taskState.act === 'condition') document.querySelector('#switch').onclick = () => send({ type: 'switch_condition', conditionId: document.querySelector('#condition').value }, 'Condition switched.');
  if (state.taskState.act === 'counterexample') document.querySelectorAll('.verdict').forEach((el) => { el.onclick = () => send({ type: 'judge_counterexample', relationId: state.relations[0]?.id || '', verdict: el.dataset.v }, 'Relation recorded.'); });
  if (state.taskState.act === 'bridge') document.querySelector('#bridge').onclick = () => send({ type: 'save_bridge' }, 'Bridge saved.');
  if (state.taskState.act === 'next_question') document.querySelector('#form').onclick = () => send({ type: 'form_card', card: { tentativeJudgment: 'A provisional judgment.', supportingSourceIds: state.sources.slice(0, 1).map((s) => s.id), applicableConditionIds: state.conditions.slice(0, 1).map((c) => c.id), openQuestions: ['What evidence is still needed?'], revisionTriggers: ['A different context appears.'] } }, 'Forming card saved.');
}

function bindStructure(state) {
  let active = null;
  document.querySelectorAll('.source').forEach((el) => {
    el.onpointerdown = () => { active = el.dataset.i; };
    el.onpointerup = () => { if (active !== null) send({ type: 'place_commit', slot: ['description', 'dependency', 'generalization'][+active % 3], sourceId: state.sources[+active].id }, 'Source placed.'); active = null; };
  });
  const cancel = () => { active = null; };
  ['pointercancel', 'pointerleave'].forEach((name) => document.addEventListener(name, cancel));
  document.addEventListener('visibilitychange', cancel);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') cancel(); });
  document.querySelector('#relation').onclick = () => send({ type: 'commit_relation', sourceId: state.sources[0].id, claimId: state.claims[0].id, kind: 'support' }, 'Relation recorded.');
}

stage.subscribe(() => render('Domain event updated the view.'));
render();
