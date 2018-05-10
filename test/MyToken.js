'use strict';

import expectThrow from './helpers/expectThrow';

const MyToken = artifacts.require('MyToken.sol');

contract('MyTokenTest', function (accounts) {
    it('test construction', async function () {
        const token = await MyToken.new();
    });

    it('test freeze', async function () {
        const token = await MyToken.new({from: accounts[0]});
        await token.transfer(accounts[1], 1000, {from: accounts[0]});
        await token.freeze(1e10, {from: accounts[0]});
        await expectThrow(token.transfer(accounts[1], 1000, {from: accounts[0]}));
    });
});