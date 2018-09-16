import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText,Button,TextField , Divider,Card,CardHeader,CardContent}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';
import Web3 from 'web3'
import {web3,votingContract,defaultAccount} from '../../Contracts'
class Login extends Component {


   
constructor(props)
{
    super(props);  
    
    this.state ={
        username:'',
        password:'',
        usersArray: []
    }
}
handleChange = (e)=>{

this.setState({[e.target.name]:e.target.value});



}
handleLogin_  = (e) =>{   
    console.log( votingContract.methods);     
    let usersArray = [];      

    let self = this;
        votingContract.methods.GetUsers().call({from: defaultAccount},
        function(error, result){
            console.log(result);

            console.log(error); 


            if(error)
            {
                alert("there was an error")
            }
            else{
                console.log( result[0]);
                result[0].map((address,index)=>{                 
                  
                    usersArray.push({address:address,
                         firstName: web3.utils.hexToAscii(result[1][index]),
                         surname: web3.utils.hexToAscii(result[2][index]),
                         privilage:result[3][index]})
            
                        

                })

                self.setState({['usersArray']:[...usersArray]})
   
               
            }

    });

   
    console.log(this.state.usersArray);
}


handleLogin  = (e) =>{  


    console.log(this.state);

    // votingContract.methods.Login(this.state.username,this.state.password).call({from: defaultAccount},
    //     function(error, result){

    //            console.log(result);
    //            console.log(error);


    //     });
}


componentWillMount() {


}


render(){
    return (
            <div className = "login-page">  

             <div className="login-title">
                   <h1> Democratic Voting App</h1>
                   <span> iSofteer</span>
               </div> 
          
             <div className="login-area">
                <TextField
                    id="username"
                    name="username"
                    label="Account Address"                  
                    value={this.state.username}
                    onChange={(e) =>this.handleChange(e)}
                    margin="normal"
                />
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    defaultValue="*********"   
                    onChange={(e) =>this.handleChange(e)}  
                    value = {this.state.password}              
                    margin="normal"
                />
               <div className="login-actions">
               <Button variant="extendedFab"  aria-label="Delete">                   
                    Cancel
                </Button>
               <Button 
               variant="extendedFab"  
               aria-label="Delete"
               onClick = {(e)=> this.handleLogin(e) }               
               >                   
                    Login
                </Button>
               </div>

             </div>
            </div>
    )
}

}
export default Login