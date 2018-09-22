import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {TextField,List,ListItem,ListItemIcon,ListItemText, Divider,Button,MenuItem}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';




class CreateUser  extends Component {

    constructor (props) {
        super(props);
        this.state = {
            firstname:"",
            surname:"",
            privilage:"",
            password:"",
            PrivilageOptions:[
                {value:1,text:"Admin"},
                {value:2,text:"Registrar"},
                {value:3,text:"Voter"},
               
            ]

        }
    }
    handleInputChange = (e)=>
    {
    this.setState({[e.target.name]:e.target.value});
    }
    handleClear = (e)=>
    {
        let cloneState = {...this.state};

        Object.keys(cloneState).map(key=>{
            cloneState[key] = "";
        })

        this.setState(cloneState);
    this.setState({[e.target.name]:e.target.value});
    }

    
    handleSaveUser = ()=>
    {
     console.log(this.state)

    }

    render(){

        return (
            <div className = "content-page">
                <div className="admin-users">
                    <span> Created Users</span>
                    <ul>
                        <li>user 1 </li>
                        <li>user 1 </li>
                        <li>user 1 </li>
                    </ul>
                </div>
                 <div className = "user-form">
                 <div className = "UserActionTtitle"> Creating new user ...</div>
                 <TextField
                                id="uncontrolled"                                
                                label="Firstname"  
                                placeholder = "Ben ..."                            
                                name = "firstname"                     
                                onChange = { (e) =>this.handleInputChange(e)}
                                margin="normal"
                                value = {this.state.firstname}

                                />
                                 <TextField
                                id="uncontrolled"                                
                                label="surname"  
                                placeholder = "Ben ..."                            
                                name = "surname"                     
                                onChange = { (e) =>this.handleInputChange(e)}
                                margin="normal"
                                value = {this.state.surname}

                                />
                                 <TextField
                                id="uncontrolled"                                
                                label="Privilage"  
                                select
                                placeholder = "Ben ..."                            
                                name = "privilage"                     
                                onChange = { (e) =>this.handleInputChange(e)}
                                margin="normal"
                                value = {this.state.privilage}
                                helperText="Please select   Privilage"
                                >
                                {
                                    this.state.PrivilageOptions.map(
                                 (option)=>{
                                     return   <MenuItem key={option.value} value={option.value}>
                                                {option.text}
                                                </MenuItem>

                                        }
                                    )
                                }
                                </TextField>
                            <TextField
                                id="uncontrolled"     
                                                        
                                label="Password"  
                                placeholder = "Ben ..."                            
                                name = "password"                     
                                onChange = { (e) =>this.handleInputChange(e)}
                                margin="normal"
                                value = {this.state.password}
                                />
                                <div className="admin-actions">
                                    <Button onClick = {()=> { this.handleSaveUser()}}> Save </Button>
                                    <Button onClick = {()=> { this.handleClear()}}> Clear </Button>

                                </div>
                 </div>
            </div>
        );
    }

}


export default CreateUser;