const { ethers } = require("hardhat");

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
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
