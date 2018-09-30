import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Chip,TextField,List,ListItem,ListItemIcon,ListItemText,ListItemSecondaryAction, Divider,Avatar,Checkbox}from '@material-ui/core';
import {Image,BeachAccess,Work} from '@material-ui/icons';



import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class UserList extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            search:""
        }
    }

    handleInputChange = (e)=>{
        console.log(e.target.value);
    }
    render (){
        return (
            <div>

               <div>
               <ExpansionPanel defaultExpanded>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div >
                            <Typography >Metrics </Typography>
                        </div>
                        <div>
                            <Typography ></Typography>
                        </div>
                    </ExpansionPanelSummary>

                 <ExpansionPanelDetails className="">       

                        <div  className="user-metrics">
                        <Typography variant="caption">   
                        <ul>
                               <li>
                                   <span className="theme-emphasizer"> 20 </span>
                                   <span> Admin </span>
                               </li>
                               <li>
                                   <span className="theme-emphasizer"> 1500 </span>
                                   <span> Registrars </span>
                               </li>
                             
                           </ul>                    
                        </Typography>
                        </div>
                     </ExpansionPanelDetails>           
                    

                    
               </ExpansionPanel>
               
               <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div >
                            <Typography >Registrars </Typography>
                        </div>
                        <div>
                            <Typography ></Typography>
                        </div>
                    </ExpansionPanelSummary>

                 <ExpansionPanelDetails className="">                                            
                        <div >
                        <Typography variant="caption">   
                           <ul>
                               <li>
                                   <span className="theme-emphasizer"> 23 </span>
                                   <span> Admin </span>
                               </li>
                               <li>
                                   <span className="theme-emphasizer"> 2344 </span>
                                   <span> Registrars </span>
                               </li>
                           </ul>               
                        </Typography>
                        </div>
                     </ExpansionPanelDetails>
               </ExpansionPanel>
             
               
               </div>

            </div>
        )
    }
}

export default UserList;