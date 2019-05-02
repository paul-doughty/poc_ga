import React from 'react';
import Card from '@material-ui/core/Card';
import Report from './Report/Report';


const WFChart = (props) => {

    const reportName = props.reportData.name;
    const reportApp = props.reportData.app;
    const reportParms = props.reportData.parms;

    return (
        <Card raised={true} style={{minWidth: '370px',minHeight:'calc(100vh - 72px)', borderRadius:'0'}}>
            <Report
                reportName={reportName}
                reportApp={reportApp}
                reportParms={reportParms}
            />                   
        </Card>
    );
}

export default WFChart;