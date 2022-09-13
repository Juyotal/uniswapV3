import hre, { ethers } from 'hardhat';

async function main() {
    const [deployer] = await ethers.getSigners();

    // Deploy MojoTrolls contract
    const MojoTrolls = await hre.ethers.getContractFactory('MojoTrolls');
    const mojoTrolls = await MojoTrolls.deploy();
    await mojoTrolls.deployed();

    // Deployment data
    const networkName = hre.network.name;
    console.log('Deploying to the network:', networkName);
    console.log('Sth deployed to the address:',);
    console.log("Deploying contracts by the account:", deployer.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });