import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText,TextField, Button ,Divider}from '@material-ui/core';
import {DraftsIcon,Inbox} from '@material-ui/icons';
import {Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle }  from '@material-ui/core';




class  CreateAccountDialog extends Component {
   constructor(props){
       super(props)
       this.state ={
           accountname:""
       }
   }

handleDownload = (filename, text) =>{

    var element = document.createElement('a');

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    
    element.setAttribute('download', filename);
  
    element.style.display = 'none';

    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);

}

handleDOM =(bool)=>{
    
    if(bool){
        return "block"
    }
    else{
        return "none"
    }
}
   render (){
       return (
          
        <Dialog        
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
        >
            <DialogTitle>{" Create new account"}</DialogTitle>
            <DialogContent>
              
            <table>
                  <tbody>
                       <tr>
                            <td>
                              Account Name
                            </td>
                            <td>
                                <TextField
                                    id="uncontrolled"                                
                                    label="Accoun Name"  
                                    placeholder = "Ben ..."                            
                                    name = "accountname"                     
                                    onChange = { (e) =>this.props.handleInputChange(e)}
                                    margin="normal"
                                  

                                    />
                            </td>
                         </tr>
                      </tbody>
                      </table>
                      <div style={{display:this.handleDOM(this.props.trnscmplt)}}>
                          <h1>
                            Genarated Keys
                          </h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td> Address</td>
                                        <td>   {this.props.address} </td>
                                    </tr>
                                    <tr>
                                        <td> Private Key </td>
                                        <td>   {this.props.address} </td>
                                    </tr>

                                      <tr>
                                        <td> Harsh Key </td>
                                        <td>   {this.props.address} </td>
                                    </tr>
                                </tbody>
                            </table>
                          <div>
                              <Button onClick = {()=>{this.handleDownload( 'Account Details',this.props.address)}}> Save file </Button>
                          </div>
                      </div>
              
            </DialogContent>
            <DialogActions>
            <Button onClick ={()=> this.props.handleClose()}>
                No
            </Button>
            <Button onClick ={()=> this.props.createAccount()}>
               Yes go a head
            </Button>
            </DialogActions>
        </Dialog>
    )
   }
}
export default CreateAccountDialog;
