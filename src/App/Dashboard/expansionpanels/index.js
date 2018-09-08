import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import {List,ListItem,ListItemText,Button,Avatar,Typography } from '@material-ui/core';

import {Image,BeachAccess,Work} from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import  GeneralSettings from '../GeneralSettings'
const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>General settings</Typography>
            <Typography className={classes.secondaryHeading}>Admin Options and Actions</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
             <GeneralSettings/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel0'} onChange={this.handleChange('panel0')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Users</Typography>
            <Typography className={classes.secondaryHeading}>
             See registered Users 
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
               <List>
                    
                     <ListItem button>
                        <Avatar>
                            <Image />
                        </Avatar>
                        <ListItemText primary="User A" secondary="Male / Admin" />            
                    </ListItem>
                     <ListItem button>
                        <Avatar>
                                <Image />
                            </Avatar>
                            <ListItemText primary="User A" secondary="Male / Admin" />   
                     </ListItem>
                     <ListItem button>
                        <Avatar>
                                <Image />
                            </Avatar>
                            <ListItemText primary="User A" secondary="Male / Admin" />    
                     </ListItem>
                    
                     <ListItem button>
                        <Avatar>
                                <Image />
                            </Avatar>
                            <ListItemText primary="User A" secondary="Male / Admin" />   
                     </ListItem>
                     <ListItem >
                         <Button> More Users</Button>
                     </ListItem>
               </List>
            
          </ExpansionPanelDetails>
        </ExpansionPanel>
       
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Advanced settings</Typography>
            <Typography className={classes.secondaryHeading}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Personal data</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Personal data</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Personal data</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
     
      </div>
    );
  }
}

ExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionPanels);
