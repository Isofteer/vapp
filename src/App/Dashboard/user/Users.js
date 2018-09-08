import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText,TextField, Button ,Divider}from '@material-ui/core';
import {DraftsIcon,Inbox} from '@material-ui/icons';
import UserDialog from './UserDialog'

class User extends Component {

    constructor(props){
        super(props);
        this.state= {
            firstname:"",
            surname:"",
            nationalid:"",
            email:"",
            phone:"",
            address:"",
            adminlevel:"",
            accountname:"",
            open:false,
            trnscmplt:false,
            etherium:{

            }
        }
    }

handleInputChange = (e)=>{
    console.log(e.target.value);
    this.setState({[e.target.name]:e.target.value})
}


handleSaveUser =(_user)=>
{
console.log(this.state);
}

handleClose =()=>
{
    this.setState({open:false})
   
}

handleCreateAccount =()=>
{
    //this.setState({open:false})
    setTimeout(() => {
        this.setState({trnscmplt:true,address:"888232jhhf838434834383424"});
        console.log("dispatched")
    }, 2000);
   
}

    render(){
        return (
            <div className="users">
            <UserDialog 
             address = {this.state.address}
             trnscmplt = {this.state.trnscmplt}
             createAccount = {this.handleCreateAccount.bind(this)}
             handleClose  ={this.handleClose.bind(this)}
             handleInputChange = {this.handleInputChange.bind(this)}
             open = {this.state.open}/>
            <div className="user-header">
                <div>
                    User Registeration
                </div>
               <Button> Register </Button>
               <Button onClick = { () => { this.setState({open:!this.state.open})}}> Create Account</Button>
            </div>
               <div  className="content user-section">
               <table>
                   <tbody>
                     <tr>
                         <td>
                            First Name
                       </td>
                       <td>
                            <TextField
                                id="uncontrolled"                                
                                label="Uncontrolled"  
                                placeholder = "Ben ..."                            
                                name = "firstname"                     
                                onChange = { (e) =>this.handleInputChange(e)}
                                margin="normal"
                                value = {this.state.firstname}

                                />
                          </td>
                      </tr>
                      <tr>
                         <td>
                            Surname Name
                       </td>
                       <td>
                            <TextField
                                id="uncontrolled"
                                label="Uncontrolled"
                                placeholder="mike..."    
                                name = "surname"                     
                                 onChange = { (e) =>this.handleInputChange(e)}                        
                                margin="normal"
                                value = {this.state.surname}
                                />
                          </td>
                      </tr>
                      <tr>
                         <td>
                            National ID
                       </td>
                       <td>
                            <TextField
                                id="uncontrolled"
                                label="Uncontrolled"
                                placeholder="93437232"   
                                name = "nationalid"                     
                                onChange = { (e) =>this.handleInputChange(e)}                         
                                margin="normal"
                                value = {this.state.nationalid}
                                />
                          </td>
                      </tr>
                      <tr>
                         <td>
                            Email Address 
                       </td>
                       <td>
                            <TextField
                                id="uncontrolled"
                                label="Uncontrolled"
                                placeholder="Email"    
                                name = "email"                     
                                onChange = { (e) =>this.handleInputChange(e)}                        
                                margin="normal"
                                value = {this.state.email}
                                />
                          </td>
                      </tr>

                    <tr>
                         <td>
                            Phone Number
                       </td>
                       <td>
                            <TextField
                                id="uncontrolled"
                                label="Uncontrolled"
                                placeholder="Phone"     
                                name = "phone"                     
                                onChange = { (e) =>this.handleInputChange(e)}                       
                                margin="normal"
                                value = {this.state.phone}
                                />
                          </td>
                      </tr>

                          <tr>
                         <td>
                            Account Address
                         </td>
                          <td>
                            <TextField
                                id="uncontrolled"
                                label="Uncontrolled"
                                placeholder="Address"   
                                name = "address"                     
                                onChange = { (e) =>this.handleInputChange(e)}                         
                                margin="normal"
                                value = {this.state.address}
                                />
                            </td>
                        </tr>

                     <tr>
                          <td>
                               Admin Level
                         </td>
                          <td>
                            <TextField
                                id="uncontrolled"
                                label="Uncontrolled"
                                placeholder="Admin Level"
                                name = "adminlevel"                     
                                onChange = { (e) =>this.handleInputChange(e)}                            
                                margin="normal"
                                value = {this.state.adminlevel}
                                />
                            </td>
                     </tr>
                     </tbody>
                    </table>          
             
             <div>
              <Button> Cancel</Button>
              <Button onClick = { (e)=> this.handleSaveUser(e) }> Save User</Button>            
              </div>
                </div>         
            </div>
        )
    }

}
export default User;
