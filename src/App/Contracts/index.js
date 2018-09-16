import Web3 from 'web3'

var DefaultAccount = '0x8347f5b7527dd1b580bf4173a9974d3e1eed3916'

var ContractAddress = "0x671e5abeac24c9853f61be7cc3168d26820a063c"

 var web3Instance = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

 var votingapp_01abi = [{"constant":true,"inputs":[],"name":"chairperson","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_firstName","type":"bytes32"},{"name":"_surname","type":"bytes32"},{"name":"_privilage","type":"uint256"}],"name":"CreateUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"},{"name":"_password","type":"bytes32"}],"name":"Login","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"UserAccounts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GetUsers","outputs":[{"name":"","type":"address[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

 var votingappContract =new  web3Instance.eth.Contract(votingapp_01abi,ContractAddress);

 
export  const web3 = web3Instance;
export  const votingContract = votingappContract;
export  const defaultAccount = DefaultAccount;
export  const contractAddress = ContractAddress;