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
            address:"",
            isRegister:true,
            isCreateAccount:false,
            PrivilageOptions:[
                {value:1,text:"Admin"},
                {value:2,text:"Registrar"},
                {value:3,text:"Voter"},
               
            ]

        }
        console.log(this.props)
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
   
    }

    
    handleSave = ()=>
    {
        if (this.props.register){
            console.log(this.state)
            this.props.func.CreateUser(this.state);
        }
        if (this.props.create){
            console.log(this.state)
            this.props.func.CreateUser(this.state);
        }
     

    }
    
    handleCreateAccount = ()=>
    {
     console.log(this.state)
      this.props.func.CreateUser(this.state);
     

    }



    render(){

        return (
            <div className = "crte-user-form">             
                 <div className = "user-form">
                 <div className = ""> _</div>
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
                                label="Account Address"  
                                placeholder = "address ..."                            
                                name = "address"                     
                                onChange = { (e) =>this.handleInputChange(e)}
                                margin="normal"
                                value = {this.state.address}

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
                          
                                <div className="admin-crt-user">
                                    <Button onClick = {()=> { this.handleSave()}}> Register  </Button>
                                    <Button onClick = {()=> { this.handleClear()}}> Clear </Button>

                                </div>
                 </div>
            </div>
        );
    }

}


export default CreateUser;