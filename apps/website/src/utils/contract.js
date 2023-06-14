import Web3 from 'web3';
import { voteABI, userABI } from './abi';

const userContract = () => {
    const web3 = new Web3(window.ethereum);
    const address = "0x68B2c80B2c642fAEdc7Dd6F27d261bd903C21Ba7"
    const contract = web3.eth.Contract(userABI, address); 

    return contract;
}

const voteContract = () => {
    const web3 = new Web3(window.ethereum);
    const address = "0x6D402382B04846297834f89a688703B05ff3d729"
    const contract = web3.eth.Contract(userABI, address)

    return contract;
}

export { voteContract, userContract };
