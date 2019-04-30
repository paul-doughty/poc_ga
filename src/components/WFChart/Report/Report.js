import React from 'react'
import Helper from '../../../Helpers/utils';

const report = (props) => {
    let parms = Object.keys( props.reportParms)
                .map( igKey => {
                    return [...Array(props.reportParms[igKey])].map((item) => {
                        return "&" + igKey + "=" + encodeURIComponent(item);
                    });
                })
                .join('');

    let url = Helper.getWFurl(props.reportName, props.reportApp, Helper.config()) + parms;
    
    const iframeStyle = {
        display: 'block',
        background: '#000',
        border: 'none',
        height: 'calc(100vh - 140px)',
        width:'100%'
    };

    return (
        <div>
            <iframe title="iframe1" target='_top' src={url} style={iframeStyle} />
        </div>

    )
}

export default report;


