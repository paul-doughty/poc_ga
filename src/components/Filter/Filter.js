import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Helper from '../../Helpers/utils';

const style = {
        position: 'absolute',
        padding: '10px',
        cursor: 'move',
        zindex: '10',
        backgroundcolor: '#2196F3',
        color: '#fff',
        top: '0',
        right: '10px'        
}
class Filter extends Component {
    constructor(props) {
        super(props);
        this.filter = React.createRef();
    }
 
    componentDidMount() {
        Helper.dragElement(this.filter.current);
    }
    

    render() {
        return(
            <div ref={this.filter} style={style}>
                <Button variant="contained" size="large" color="primary">
                    Filters
                </Button>
            </div>
        )
    }
}

export default Filter;