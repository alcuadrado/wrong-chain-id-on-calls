const { ethers } = require("hardhat");

async function main() {
  const ChainIdGetter = await ethers.getContractFactory("ChainIdGetter");
  const chainIdGetter = await ChainIdGetter.deploy();

  // We already mined a block, because we deployed a contract.
  // `latest` is now a local block. It should have 31337 as chain id.

  console.log("ChainId with eth_call");
  await chainIdGetter.callStatic.getChainId();

  console.log("ChainId with tx");
  await chainIdGetter.getChainId();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
