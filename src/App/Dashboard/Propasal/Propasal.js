import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Chip,Avatar,List,ListItem,ListItemIcon,ListItemText, Divider, Paper,AppBar,Toolbar,Typography }from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';

import PropasalTemplate from './template'
import PropasalNew from './create'

class Propasal extends Component{
    constructor (props){
        super(props);
        this.state = {
            newpropasal:false
        }
    }


    render()
    {
        return (
            <div style ={{display:"relative"}}> 
          
              <AppBar position="static">
              <Toolbar>
                    <Typography variant="title" color="inherit">
                        iSofteer
                    </Typography>
                 </Toolbar>
              </AppBar>
             
               <div className='prop-body'>
                   <div className='prop-toolbar'>
                   <Chip
                        avatar={<Avatar>MB</Avatar>}
                        label="New Propasal"    
                        clickable  
                    />
                    
                   </div>
                   <div className="prob-content">

                                {
                                    (this.state.newpropasal)?
                                      <PropasalNew/>:
                                      <PropasalTemplate/>

                                }
                    
                   </div>
               </div>

             </div>
        )
    }
}
export default Propasal;