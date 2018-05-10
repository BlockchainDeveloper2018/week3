'use strict';

const MyToken = artifacts.require('MyToken.sol');


module.exports = function(deployer, network) {
    deployer.deploy(MyToken);
};
