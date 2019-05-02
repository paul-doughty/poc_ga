import React, {Component} from 'react';
import Aux from '../Aus/Aus';
import AppBar from '../../components/AppBar/AppBar';
import Widget from '../../components/Widget/Widget';
import Grid from '@material-ui/core/Grid';
import Filter from '../../components/Filter/Filter';

const workaround = {
    display: 'none',
    height: '100vh',
    width: '100%',
    position: 'absolute',
    bottom: '0'
};

const appBar = {
      flexGrow: 1,
      paddingLeft:'5px',
      paddingRight:'5px'
};
class Layout extends Component {

    state = {
        reports: [
            {
                name: "car.fex",
                app: "test",
                parms: {
                    parm1:"paul",
                    parm2:"doughty"
                }
            },
            {
                name: "car2.fex",
                app: "test",
                parms: {
                    parm1:"paul",
                    parm2:"doughty"
                }
            }]
    };

    render() {

        return (
            <Aux>
                <div className="workaround" style={workaround} />
                <AppBar BarColorClass="default" appBarClass={appBar}>Proof of concept</AppBar>
                    <Grid container spacing={8} style={{width: '100%',margin:'0px'}}>
                        <Grid item lg={4}>
                            <Widget reportData={this.state.reports[0]}/>
                        </Grid>
                        <Grid item lg={4}>
                            <Widget reportData={this.state.reports[1]} />
                        </Grid>
                        <Grid item lg={4}>
                            <Widget reportData={this.state.reports[0]} />
                        </Grid>              
                    </Grid>
                <Filter />
            </Aux>
        );
    }

}
export default Layout;