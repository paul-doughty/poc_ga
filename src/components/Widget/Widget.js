/**
 * Widget - this gets the props from the calling layout. These props are passed through to the
 * children of this to ensure the specific content is rendered
 */
import React from 'react';
import WFChart from '../WFChart/WFChart';


const Widget = (props) => (
    <div style={{padding: '5px'}}>
        <WFChart reportData={props.reportData}/>
    </div>
);

export default Widget;