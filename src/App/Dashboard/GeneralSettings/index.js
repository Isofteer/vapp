import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText, Divider,Chip,Avatar }from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';


class GeneralSettings extends Component{
    constructor (props){
        super(props);
    }

    handeClick = ()=>{
        console.log("hellow there");
    }

    render ()
    {
        return (
            <div className ="General-setting"> 
                <div className="row optial-btns">
                  <div className="col-md-6">
                     <ul>
                       
                        <li>
                            <Chip
                                onClick = {this.handeClick()}
                                label="Create User"    
                                clickable                                       
                                avatar={<Avatar>
                                        <Work />
                                        </Avatar>}
                                />
                        </li>
                        <li>
                            <Chip
                                onClick = {this.handeClick()}
                                label="Create Propasal"    
                                clickable                                       
                                avatar={<Avatar>
                                        <Work />
                                        </Avatar>}
                                />
                        </li>
                        <li>
                            <Chip
                                label="Register Voter"   
                                clickable                                        
                                avatar={<Avatar>
                                    <Work />
                                    </Avatar>}                   
                                onClick = {this.handeClick()}
                                />
                        </li>
                        <li>
                       <Chip
                        label="Mass Registeration"   
                        clickable                                        
                        avatar={<Avatar>
                            <Work />
                             </Avatar>}                        
                        onClick = {this.handeClick()}
                         />
                  </li>
                  </ul>
                  </div>
                  <div className="col-md-6">
                     <ul>
                        <li>
                            <Chip
                                onClick = {this.handeClick()}
                                label="Create Propasal"    
                                clickable                                       
                                avatar={<Avatar>
                                        <Work />
                                        </Avatar>}
                                />
                        </li>
                        <li>
                            <Chip
                                onClick = {this.handeClick()}
                                label="Create User"    
                                clickable                                       
                                avatar={<Avatar>
                                        <Work />
                                        </Avatar>}
                                />
                        </li>
                        <li>
                            <Chip
                                label="Settings"   
                                clickable                                        
                                avatar={<Avatar>
                                    <Work />
                                    </Avatar>}                   
                                onClick = {this.handeClick()}
                                />
                        </li>
                        <li>
                       <Chip
                        label="Settings Again"   
                        clickable                                        
                        avatar={<Avatar>
                            <Work />
                             </Avatar>}                        
                        onClick = {this.handeClick()}
                         />
                  </li>
                  </ul>
                  </div>

                </div>
             </div>
        )
    }
}

export default GeneralSettings;