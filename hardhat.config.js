require("@nomiclabs/hardhat-ethers");

let REMOTE_NODE_URL = "";

if (REMOTE_NODE_URL === "") {
  console.error("Set the REMOTE_NODE_URL variable in ", __filename);
  process.exit(1);
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        url: REMOTE_NODE_URL,
      },
    },
  },
};
