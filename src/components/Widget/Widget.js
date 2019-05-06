/**
 * Widget - this gets the props from the calling layout. These props are passed through to the
 * children of this to ensure the specific content is rendered
 */
import React from 'react';
import Card from '@material-ui/core/Card';



const Widget = (props) => {

    const widgetHeight = 'calc(' + props.height + 'vh - ' + props.adjust + 'px)';

    const widgetStyle = {
        minHeight: widgetHeight, 
        borderRadius:'0'
    }
    return (
    <div style={{padding: '0.3125'}}>
        <Card raised={true} style={widgetStyle}>
        {props.children}
        </Card>
    </div>
)};

export default Widget;