import React from 'react';
import Report from './Report/Report';
import Aux from '../../hoc/Aus/Aus';


const WFChart = (props) => {

    const reportName = props.reportData.name;
    const reportApp = props.reportData.app;
    const reportParms = props.reportData.parms;

    return (
            <Aux>
                <Report
                    reportName={reportName}
                    reportApp={reportApp}
                    reportParms={reportParms}
                />   
            </Aux>                
    );
}

export default WFChart;