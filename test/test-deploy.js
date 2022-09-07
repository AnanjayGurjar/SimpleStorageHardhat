//hardhat test work with mocha framework(a js based framework for running the tests)
const { ethers } = require("hardhat");
const { expect, assert } = require("chai");
//we'll start with describe() function identified by mocha
describe("SimpleStorage", () => {
    let simpleStorageFactory, simpleStorage;
    beforeEach(async () => {
        //before each of our task we're gonna deploy the contract
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
    });

    //it() will contain the code we want this test to do
    it("Should start with a favorite number of 0", async () => {
        const currentValue = await simpleStorage.retrieve();
        const expectedValue = "0";
        //assert
        assert.equal(currentValue.toString(), expectedValue);

        //expect: another way of writing tests
        // expect(currentValue.toString()).to.equal(expectedValue);
    });

    //use 'yarn hardhat test --grep <a keyword of function>' to run a particular test
    //OR use it.only to run that function only
    it("Should update when we call store", async () => {
        const expectedValue = "7";
        const transactionResponse = await simpleStorage.store(expectedValue);
        await transactionResponse.wait(1);
        const currentValue = await simpleStorage.retrieve();
        assert.equal(currentValue.toString(), expectedValue);
    });
});
