import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '../AppBar/AppBar';
import Helper from '../../Helpers/utils';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


const divStyle = {
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

const styles = theme => ({
    button: {
      display: 'block',
      marginTop: theme.spacing.unit * 2,
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
  });

class Filter extends Component {
    constructor(props) {
        super(props);
        this.filter = React.createRef();
    }
 
    state = {
        expanded: true,
        cardHeight: '300px',
        COUNTRY: '',
        open: false
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
        if(this.state.expanded)
            this.setState({expanded: false,cardHeight: '0px'});
        else
            this.setState({expanded: true,cardHeight: '300px'});
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.change(event);
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
     this.setState({ open: true });
    };
        //max-height: 500px;transition: max-height 0.25s ease-in;
    render() {
        const { classes } = this.props;

        return(
            <div ref={this.filter} style={divStyle}>
                <AppBar BarColorClass="primary" expandCapable={true} expandHandler={this.expandHandler} expanded={this.state.expanded}>
                Filters
                </AppBar>

                <Card raised={true} style={{width: '200px',height:this.state.cardHeight, transition: 'height 0.25s ease-in', borderRadius:'0'}}>
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="poc-select">Country</InputLabel>
                    <Select
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.COUNTRY}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'COUNTRY',
                            id: 'poc-select',
                        }}
                    >
                        {this.props.selectItems.map(item => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Filter);