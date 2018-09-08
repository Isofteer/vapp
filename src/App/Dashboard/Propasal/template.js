import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Chip,Avatar,List,ListItem,ListItemIcon,ListItemText, Divider, Paper,AppBar,Toolbar,Typography }from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';

class PropasalDisplay extends Component{

    constructor(props)
    {        super(props);

    }

    render(){
        return (
            <div>
                <div className="prop-template">
                    <div className="left-content"> 
                    <h1>General Election</h1>    
                    <h4> Mon 15th  May 2017</h4>                    
                    </div>
                    <div className="main-content">   
                            <List>
                                <ListItem >                                 
                                     <Avatar>
                                        <Work/>
                                    </Avatar>
                                    <ListItemText inset  primary="Chepukati  Mwilu"  secondary="Chairman" />
                                </ListItem>
                                
                                <ListItem >                                 
                                     <Avatar>
                                        <Work/>
                                    </Avatar>
                                    <ListItemText inset  primary="General Election "  secondary=" Propasal " />
                                </ListItem>
                                
                                <ListItem >                                 
                                     <Avatar>
                                        <Work/>
                                    </Avatar>
                                    <ListItemText inset  primary="Chepukati  kitu"  secondary="Chairman" />
                                </ListItem>
                                
                                <ListItem >                                 
                                     <Avatar>
                                        <Work/>
                                    </Avatar>
                                    <ListItemText inset  primary="Chepukati  kitu"  secondary="Chairman" />
                                </ListItem>
                             
                                <ListItem >                                 
                                     <Avatar>
                                        <Work/>
                                    </Avatar>
                                    <ListItemText inset  primary="Chepukati  kitu"  secondary="Chairman" />
                                </ListItem>
                                
                            </List>
                    </div>
                </div>
            </div>
        )
    }
}
export default PropasalDisplay;