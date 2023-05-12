import * as child_process from 'child_process';
import { assert, it } from 'vitest';

const checkNodeVersion = () => {
  const stdout = child_process.execSync('node -v').toString();
  return stdout.startsWith('v18');
};

it('should be 18', () => {
  const res = checkNodeVersion();
  assert(res);
});
