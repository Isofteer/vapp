import * as Artifacts from './index'

export function SaveUserToBlockchain   (_user){
    //web3.utils.fromAscii(this.state.password
    let web3 = Artifacts.web3;
    let _params = {
        address:_user.address.trim(),
        fname:web3.utils.fromAscii(_user.firstname),
        sname:web3.utils.fromAscii(_user.surname),
        privilage:_user.privilage
    }

    Artifacts.votingContract.methods.RegisterUser(_params.fname,_params.sname,_params.privilage).send({from: _params.address,gas:3000000},
        (error, response)=>{
           if(error)
           {
             alert("Theres was an error with this activity");
           }
           else{
            alert("Success");
           }
        });

}



export function GetUsersFromBlockchain   (){
   

    Artifacts.votingContract.methods.GetUsers().call({from: Artifacts.defaultAccount},
        (error, response)=>{
            console.log(error);
            console.log(response);
        });

}