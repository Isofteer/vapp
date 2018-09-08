import React,{Component} from 'react'
import Contracts from './Contracts'



export default class Chairperson extends Component {
 constructor (props){
     super(props);

 }
    handledeploy = info =>{
        var  web3 = this.props.web3;
        web3.personal.unlockAccount(web3.eth.accounts[0], "9222");
        var electionContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"Users","outputs":[{"name":"name","type":"bytes32"},{"name":"account","type":"address"},{"name":"privilage","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"chairperson","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_address","type":"address"},{"name":"_privilage","type":"uint256"}],"name":"RegisterUsers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"GetUsers","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
        var election = electionContract.new(
           {
             from: web3.eth.accounts[0], 
             data: '0x608060405234801561001057600080fd5b5060008054600160a060020a031916331790556104b8806100326000396000f3006080604052600436106100615763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631e98fd1c81146100665780632e4176cf146100a457806376fb779d146100d5578063da3eec19146100fe575b600080fd5b34801561007257600080fd5b5061007e6004356101f1565b60408051938452600160a060020a03909216602084015282820152519081900360600190f35b3480156100b057600080fd5b506100b961022e565b60408051600160a060020a039092168252519081900360200190f35b3480156100e157600080fd5b506100fc600435600160a060020a036024351660443561023d565b005b34801561010a57600080fd5b5061011361030a565b60405180806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561015b578181015183820152602001610143565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561019a578181015183820152602001610182565b50505050905001848103825285818151815260200191508051906020019060200280838360005b838110156101d95781810151838201526020016101c1565b50505050905001965050505050505060405180910390f35b60018054829081106101ff57fe5b6000918252602090912060039091020180546001820154600290920154909250600160a060020a039091169083565b600054600160a060020a031681565b60408051606081018252938452600160a060020a039283166020850190815290840191825260018054808201825560009190915293517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6600390950294850155517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf78401805473ffffffffffffffffffffffffffffffffffffffff19169190931617909155517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf890910155565b6060806060806060806000600180549050604051908082528060200260200182016040528015610344578160200160208202803883390190505b506001546040805182815260208084028201019091529195508015610373578160200160208202803883390190505b5060015460408051828152602080840282010190915291945080156103a2578160200160208202803883390190505b509150600090505b60015481101561047f5760018054829081106103c257fe5b90600052602060002090600302016000015484828151811015156103e257fe5b6020908102909101015260018054829081106103fa57fe5b60009182526020909120600160039092020101548351600160a060020a039091169084908390811061042857fe5b600160a060020a03909216602092830290910190910152600180548290811061044d57fe5b906000526020600020906003020160020154828281518110151561046d57fe5b602090810290910101526001016103aa565b50919590945090925090505600a165627a7a723058205036f48439a789acdbec54fe4490cad961b92f81eb8bae32883063f22f1d58360029', 
             gas: '4700000'
           }, function (e, contract){
            console.log(e, contract);
            if (typeof contract.address !== 'undefined') {
                 console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
            }
         })
    }
handleRegisterUser = User =>{

    let  web3 = this.props.web3;

    let  ABI = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_name",
                    "type": "bytes32"
                },
                {
                    "name": "_address",
                    "type": "address"
                },
                {
                    "name": "_privilage",
                    "type": "uint256"
                }
            ],
            "name": "RegisterUsers",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "chairperson",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "GetUsers",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32[]"
                },
                {
                    "name": "",
                    "type": "address[]"
                },
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "Users",
            "outputs": [
                {
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "name": "account",
                    "type": "address"
                },
                {
                    "name": "privilage",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
   
    var electionContract = new web3.eth.Contract(ABI,'0x26c6f51c3f9da88bbee1591e5842069b8b25287b');
     
    var name =web3.utils.asciiToHex("mike");

        electionContract.methods.RegisterUsers(name ,User,10).send({from:'0xd60b9205e01461eb0835c4a8b245865d57ef2853', gas: 1000000})
        .then((e)=>{
            console.log(e);
           
        });
       

}

handleCreateUser  =User =>{

    let  web3 = this.props.web3;

    web3.eth.defaultAccount = '0xd60b9205e01461eb0835c4a8b245865d57ef2853';
    
    web3.eth.personal.unlockAccount(web3.eth.defaultAccount,"9222")

    web3.eth.personal.newAccount('9222',(error,address)=>{

        console.log(address);  

        User.address = address;
        
        this.handleRegisterUser(address);
       
})
    



}

handleGetUsers  =()=>{
    let  web3 = this.props.web3;    

    let  ABI = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_name",
                    "type": "bytes32"
                },
                {
                    "name": "_address",
                    "type": "address"
                },
                {
                    "name": "_privilage",
                    "type": "uint256"
                }
            ],
            "name": "RegisterUsers",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "chairperson",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "GetUsers",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32[]"
                },
                {
                    "name": "",
                    "type": "address[]"
                },
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "Users",
            "outputs": [
                {
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "name": "account",
                    "type": "address"
                },
                {
                    "name": "privilage",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
   
    var electionContract = new web3.eth.Contract(ABI,'0x26c6f51c3f9da88bbee1591e5842069b8b25287b');
             
        electionContract.methods.GetUsers().call({from:'0xd60b9205e01461eb0835c4a8b245865d57ef2853'},(error,result)=>{
            console.log(result);
           let users = result[0].map((name,index)=>{
           
                         return{
                             name:web3.utils.hexToUtf8(name),
                             address:result[1][index],
                             privilage:result[2][index]
                         } 
           });
           console.log(users);
        });
       
   
    
    }
    render (){
        return (
            <div className = "pane" >
                <input type = "text" id ="username" />
                <br/>
                <br/>
                <input type = "text" id ="nationalId"/>
                <button onClick = {(e)=>this.handledeploy(e) }> Create Chair </button>
                <br/>
                <br/>
                
                 <button onClick = {(e)=>this.handleRegisterUser(e) }> Get functions </button>
                 <br/>
                 <br/>
                 <button onClick = {(e)=>this.handleCreateUser(e) }> Create user </button>
                 <br/>
                 <br/>
                 <button onClick = {(e)=>this.handleGetUsers() }> Get Users </button>
            </div>
        )
    }
}