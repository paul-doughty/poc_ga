import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExpandMore from '@material-ui/icons/ExpandMoreTwoTone';



function SimpleAppBar(props) {

  return (
    <div style={props.appBarClass}>
      <AppBar position="static" color={props.BarColorClass}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {props.children}
          </Typography>
          <Typography variant="h6" color="inherit">
            <ExpandMore onClick={props.expandHandler} />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleAppBar;