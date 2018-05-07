'use strict';

const MyContract = artifacts.require('MyContract.sol');


module.exports = function(deployer, network) {
    deployer.deploy(MyContract, "FirstContract");
};
