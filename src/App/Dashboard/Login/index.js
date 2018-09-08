import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText,Button,TextField , Divider,Card,CardHeader,CardContent}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';

class Login extends Component {

constructor(props)
{
    super(props);
    this.state ={
        username:'',
        password:''
    }
}
handleChange = (e)=>{
this.setState({[e.name]:e.target.value})
}
handleLogin  = (e) =>{

    console.log(this.state);

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
                    label="Username"                  
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