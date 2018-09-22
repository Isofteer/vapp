import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText, Divider,Button}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';

import   '../new_styles/style.css';


import Admin from '../Users/Admin'
import Registrar from '../Users/Registrars'
import Voter from '../Users/Voters'

 class Maindashboard  extends React.Component{
     constructor (props)
         {
           super(props);
              this.state = {
                 activeUserContent:{
                      Admin:true,
                      Registrar:false,
                      Voter:false,
                }
              }
           
         }

         handleUserDashboardSwitch  =(userType)=>{

            let stateClone=  {...this.state} 
            
         Object.keys (stateClone.activeUserContent).map (key=>{
               
            if(key ==userType)
            {
                stateClone.activeUserContent[key] = true;
            }
            else{
                stateClone.activeUserContent[key] = false;
            }
         });

          this.setState(stateClone);

          console.log(this.state);

         }

         handleViewStates = ()=>{
                 this.state.activeUserContent
         }
    render (){
        return (
        <div className = "parent">           
          <Button name = 'Admin' onClick = {(e)=>{this.handleUserDashboardSwitch('Admin') }} >Admin</Button>
          <Button name = 'Registrar' onClick = {(e)=>{this.handleUserDashboardSwitch('Registrar') }} >Registrar</Button>
          <Button name = 'Voter' onClick = {(e)=>{this.handleUserDashboardSwitch('Voter') }} >voter</Button>
          
            { this.state.activeUserContent['Admin']?<Admin/>:null}

            { this.state.activeUserContent['Registrar']?<Registrar/>:null}

            { this.state.activeUserContent['Voter']?<Voter/>:null}

           


        </div>)
    }

}

export default  Maindashboard;