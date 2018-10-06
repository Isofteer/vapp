import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {MergeAllUsersInStore} from '../../../Util/Converter'

let counter = 0;
function createData(name,  address,privilage,status,actions) {
  counter += 1;
  return { id: counter, name, address,privilage, status, actions};
}

  class UsersTable extends React.Component{

    constructor (props){
        super(props);
    }
              
    CreateUsers  =e =>{
    
        console.log(this.props.store)
      
      let allUsers =MergeAllUsersInStore(this.props.store);
  
       let NewdData = [];
  
      allUsers.map((_user)=>{
     NewdData.push(createData(_user.firstName + " "+_user.surname, _user.address,_user.privilage , "Active",""));
      });
     
  
      return NewdData;
        
      }
    render(){

        const data = this.CreateUsers(this.props.store);

        return (
        <div>
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
                             <TableCell> <a> edit</a> </TableCell>
                         
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