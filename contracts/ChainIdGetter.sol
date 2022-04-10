//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract ChainIdGetter {
    function getChainId() public {
        console.log("block.chainid", block.chainid);

        uint chainId;
        assembly {
          chainId := chainid()
        }

        console.log("assembly chainid()", chainId);
    }
}
