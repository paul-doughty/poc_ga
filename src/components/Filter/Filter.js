import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '../AppBar/AppBar';
import Helper from '../../Helpers/utils';
import Card from '@material-ui/core/Card';


const style = {
        position: 'absolute',
        padding: '0px',
        cursor: 'move',
        zindex: '10',
        backgroundcolor: '#2196F3',
        color: '#fff',
        top: '0',
        right: '0px',
        width: '200px'     
}
class Filter extends Component {
    constructor(props) {
        super(props);
        this.filter = React.createRef();
    }
 
    componentDidMount() {
        Helper.dragElement(this.filter.current);
        const filt = this.filter.current;
        window.addEventListener("resize", function(event){
            filt.style.left = '-1px'; // ccaters for padding
            filt.style.top = '68px';
        });
    }
    
    expandHandler = event => {
        alert('expanded');
    }

    render() {
        return(
            <div ref={this.filter} style={style}>
                <AppBar BarColorClass="primary" expandCapable={true} expandHandler={this.expandHandler}>
                Filters
                </AppBar>

                <Card raised={true} style={{width: '200px',height:'300px', borderRadius:'0'}}>
                    This is the filter area
                </Card>
            </div>
        )
    }
}

export default Filter;