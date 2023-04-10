import node from 'node:os';

async function main() {
  console.log(`Hello ${node.userInfo().username}!`);
}

main();
