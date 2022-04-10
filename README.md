# Wrong chain ID on `eth_call` when forking a remote network

This is a minimal reproduction of a bug that Hardhat >2.7.1 has when forking a remote network.

The chain ID  is always the same of the remote network.

## How to run it?

1. `npm i`
2. Add a remote mainnet node url in `hardhat.config.js`
3. `npx hardhat run scripts/deploy.js`