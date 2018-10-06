import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Paper,Chip} from '@material-ui/core';
import {MergeAllUsersInStore} from '../../../Util/Converter'
import  OpenUserDialog from './OpenUserDialog'

let counter = 0;
function createData(name,  address,privilage,status,actions) {
  counter += 1;
  return { id: counter, name, address,privilage, status, actions};
}

  class UsersTable extends React.Component{

    constructor (props){
        super(props);
        this.state= {
                user:{},
                DialogOpen:false
        }
    }
              
    CreateUsers  =filter =>{
    
  
      let allUsers = [...new Set(MergeAllUsersInStore(this.props.store,filter))];
  
       let NewdData = [];
  
      allUsers.map((_user)=>{
     NewdData.push(createData(_user.firstName + " "+_user.surname, _user.address,_user.privilage , "Active",""));
      });    
  
      return NewdData;
        
      }

      EditUser =user=>{
        
        this.setState({user:user,DialogOpen:!this.state.DialogOpen})
      }
      handleClickOpen = () => {
        this.setState({ DialogOpen: true });
      };
    
      handleClose = () => {
        this.setState({ DialogOpen: false });
      };
    
    render(){

        const data = this.CreateUsers(this.props.filterBy);

        return (
        <div>
          <OpenUserDialog   handleClickOpen = {this.handleClickOpen.bind(this)}  handleClose = {this.handleClose.bind(this)} open = {this.state.DialogOpen} user = {this.state.user} />
            <Table>
             <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell >Address</TableCell>
                    <TableCell >Privilage</TableCell>                  
                    <TableCell >Status</TableCell>
                    <TableCell >Action </TableCell>
                 </TableRow>
                </TableHead>
          
             <TableBody>

                {
                  data.map((user)=>{
                   return <TableRow key ={user.id}>
                             <TableCell> {user.name}</TableCell>                          
                             <TableCell> {user.address}</TableCell>
                             <TableCell> {user.privilage}</TableCell>
                             <TableCell> active </TableCell>
                             <TableCell> <Chip onClick = {()=>this.EditUser(user)} label ="edit"/> </TableCell>
                         
                          </TableRow>
                  })  
                }

             </TableBody>
          
            </Table>
        </div>
        )
    }
  }

  export default  UsersTable;