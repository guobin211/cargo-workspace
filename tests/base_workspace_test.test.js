import { beforeAll, assert, it } from 'vitest';

const fetchJson = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('success');
    }, 1000);
  });

it('fetchJson', () => {
  beforeAll(async () => {
    const result = await fetchJson();
    assert.equal(result, 'success');
  }, 4000);
});
