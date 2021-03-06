import Web3 from 'web3'

var DefaultAccount = '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1'

var ContractAddress = "0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab"

 var web3Instance = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

 var votingappContract = [{"constant":true,"inputs":[],"name":"chairperson","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_surname","type":"bytes32"},{"name":"_privilage","type":"uint256"}],"name":"RegisterUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"UserAccounts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GetUsers","outputs":[{"name":"","type":"address[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"Login","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"userAddress","type":"address"},{"indexed":false,"name":"firstName","type":"bytes32"},{"indexed":false,"name":"surname","type":"bytes32"},{"indexed":false,"name":"privilage","type":"uint256"}],"name":"UserCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"userAddress","type":"address"},{"indexed":false,"name":"firstName","type":"bytes32"},{"indexed":false,"name":"surname","type":"bytes32"},{"indexed":false,"name":"privilage","type":"uint256"}],"name":"UserLoggedIn","type":"event"}];

 var votingappContract =new  web3Instance.eth.Contract(votingappContract,ContractAddress);


console.log(votingappContract);

votingappContract.events.UserCreated({}, function(error, event){ 
             console.log(event); })
        .on('data', function(event){
            console.log(event); // same results as the optional callback above
        })
        .on('changed', function(event){
           console.log(event)
        })
        .on('error', console.error);


//  var E_UserCreated = votingappContract.UserCreated();

//  E_UserCreated.watch(function(error, result){
   
//     if (!error)
//         console.log(result);
// });
 
export  const web3 = web3Instance;
export  const votingContract = votingappContract;
export  const defaultAccount = DefaultAccount;
export  const contractAddress = ContractAddress;