import cp from 'child_process';

(async () => {
  const stdout = await cp.execSync('cargo build --release');
  console.log(stdout.toString());
})();
