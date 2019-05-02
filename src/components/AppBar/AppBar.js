import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExpandMore from '@material-ui/icons/ExpandMoreTwoTone';
import ExpandLess from '@material-ui/icons/ExpandLessTwoTone';

const accordionIcon = {
  position: 'absolute',
  right: '0px',
  cursor: 'pointer', 
  top: '40px'
}

const SimpleAppBar = (props) => {
      let expandedIcon= null;
      switch(props.expanded){

        case (true):
          expandedIcon = <ExpandLess onClick={props.expandHandler} />;
          break;
        
        case (false):
          expandedIcon = <ExpandMore onClick={props.expandHandler} />;
          break;

        default:
          expandedIcon= null;
      }

      return (
        <div style={props.appBarClass}>
          <AppBar position="static" color={props.BarColorClass}>
            <Toolbar>
              <Typography variant="h6" color="inherit">
                {props.children}
              </Typography>
              <Typography variant="h6" color="inherit" style={accordionIcon}>
                {expandedIcon}
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );

}

export default SimpleAppBar;