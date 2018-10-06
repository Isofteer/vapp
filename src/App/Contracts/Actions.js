import * as Artifacts from './index'

export function GetUsersFromContract   (state){   

    return Artifacts.votingContract.methods.GetUsers().call({from: Artifacts.defaultAccount});
       

}
export function RegisterUsersToContract   (_user){   

    let web3 = Artifacts.web3;
    let _params = {
        address:_user.address.trim(),
        fname:web3.utils.fromAscii(_user.firstname),
        sname:web3.utils.fromAscii(_user.surname),
        privilage:_user.privilage
    }

    return Artifacts.votingContract.methods.RegisterUser(_params.fname,_params.sname,_params.privilage).send({from: _params.address,gas:3000000}); 

}