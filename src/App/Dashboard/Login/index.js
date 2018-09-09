import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText,Button,TextField , Divider,Card,CardHeader,CardContent}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';
import Web3 from 'web3'
class Login extends Component {

constructor(props)
{
    super(props);
    this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

    this.state ={
        username:'',
        password:''
    }
}
handleChange = (e)=>{
this.setState({[e.target.name]:e.target.value});
console.log(this.web3);

}
handleLogin  = (e) =>{

    console.log(this.state);
    console.log(this.web3);
    (async () => {
        let newAccount = await this.web3.eth.create('9222');
        console.log(newAccount);
        let accounts = await this.web3.eth.getAccounts();
        console.log(accounts);
    })();





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