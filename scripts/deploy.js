const { ethers, run, network } = require("hardhat"); //run can be use to run any hardhat task
require("dotenv").config();

async function main() {
    const simpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    );
    console.log("Deploying contract...");
    const simpleStorage = await simpleStorageFactory.deploy();
    //compiles and deployed without rpc url and private key
    await simpleStorage.deployed();
    //It deployed to hardhat network which is a built in local etherium network for devlopment just like ganache
    console.log(`Deployed contract to ${simpleStorage.address}`);

    if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
        //i.e. network is rinkeby then only we want to verify
        await simpleStorage.deployTransaction.wait(6);
        await verify(simpleStorage.address, []);
    }

    const currentValue = await simpleStorage.retrieve();
    console.log(`Current value is: ${currentValue}`);

    //update the value
    const transactionResponse = await simpleStorage.store(7);
    await transactionResponse.wait(1);
    const updatedValue = await simpleStorage.retrieve();
    console.log(`Updated value is: ${updatedValue}`);
}

//function to automatically verify the contract
//since our contract doesn't have any contructor the arguments will be blank
async function verify(contractAddress, args) {
    console.log("Verifying the contract...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructor: args,
        });
    } catch (e) {
        //will throw an error when the contract is already verified
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified");
        } else {
            console.log(e);
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
