import React, {Component} from 'react';
import Aux from '../Aus/Aus';
import AppBar from '../../components/AppBar/AppBar';
import Widget from '../../components/Widget/Widget';
import Grid from '@material-ui/core/Grid';
import Filter from '../../components/Filter/Filter';
import "@material/layout-grid/dist/mdc.layout-grid.css";

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
                app: "a_component_library%252Fpoc_demo1%252Freports",
                parms: {
                    COUNTRY:"FOC_NONE"
                }
            },
            {
                name: "car2.fex",
                app: "a_component_library%252Fpoc_demo1%252Freports",
                parms: {
                    COUNTRY:"FOC_NONE"
                }
            }],
            items : [
                'All',
                'ENGLAND',
                'FRANCE',
                'ITALY',
                'W GERMANY',
                'JAPAN'
            ]
    };

    filterChangeHandler = (event) => {
        let newArray = [];
        let reportsCopy = JSON.parse(JSON.stringify(this.state.reports))
        
        reportsCopy.forEach( function (item) {
             item.parms[event.target.name] = event.target.value;
             newArray.push(item);
        });
        this.setState({reports:newArray }) ;
    }

/*
    <div style={{padding: '5px 5px 0px 5px'}}>
        <div class="mdc-layout-grid__inner mdc-layout-grid__cell--span-12-desktop">
            <div class="mdc-layout-grid__cell demo-cell">
                <Widget reportData={this.state.reports[0]}/>
            </div>
            <div class="mdc-layout-grid__cell demo-cell">
                <Widget reportData={this.state.reports[1]} />
            </div>
            <div class="mdc-layout-grid__cell demo-cell">
                <Widget reportData={this.state.reports[0]} />
            </div>
        </div>
    </div>
*/
/*
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
*/
    render() {

        return (
            <Aux>
                <div className="workaround" style={workaround} />
                <AppBar BarColorClass="default" appBarClass={appBar}>Proof of concept</AppBar>
                <div style={{padding: '5px 5px 0px 5px'}}>
                    <div class="mdc-layout-grid__inner">
                        <div class="mdc-layout-grid__cell demo-cell mdc-layout-grid__cell--span-12-tablet">
                            <Widget reportData={this.state.reports[0]}/>
                        </div>
                        <div class="mdc-layout-grid__cell demo-cell mdc-layout-grid__cell--span-12-tablet">
                            <Widget reportData={this.state.reports[1]} />
                        </div>
                        <div class="mdc-layout-grid__cell demo-cell mdc-layout-grid__cell--span-12-tablet">
                            <Widget reportData={this.state.reports[0]} />
                        </div>
                    </div>
                </div>
                <Filter selectItems={this.state.items} change={this.filterChangeHandler}/>
            </Aux>
        );
    }

}
export default Layout;