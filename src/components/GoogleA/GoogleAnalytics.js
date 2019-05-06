import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';


class GoogleA extends Component {

    constructor(props) {
        super(props);
        this.embed = 'embed-api-auth-container'
        this.view = 'view-selector-container'
        this.main = 'main-chart-container'
        this.chart = 'breakdown-chart-container'
    }

    componentDidMount(){
        console.log(this.embed)
        window.gapi.analytics.ready(function() {

            /**
             * Authorize the user immediately if the user has already granted access.
             * If no access has been created, render an authorize button inside the
             * element with the ID "embed-api-auth-container".
             */
            window.gapi.analytics.auth.authorize({
              container: 'embed-api-auth-container',
              clientid: '552649223784-0f49hlddrh9c63m5matubl08l1da5eci.apps.googleusercontent.com'
            });
          
                    
            /**
             * Create a new ViewSelector instance to be rendered inside of an
             * element with the id "view-selector-container".
             */
            var viewSelector = new window.gapi.analytics.ViewSelector({
                container: 'view-selector-container'
            });

            // Render the view selector to the page.
            viewSelector.execute();

            /**
             * Create a table chart showing top browsers for users to interact with.
             * Clicking on a row in the table will update a second timeline chart with
             * data from the selected browser.
             */

            var mainChart = new window.gapi.analytics.googleCharts.DataChart({
                query: {
                'dimensions': 'ga:browser',
                'metrics': 'ga:sessions',
                'sort': '-ga:sessions',
                'max-results': '6'
                },
                chart: {
                type: 'TABLE',
                container: 'main-chart-container',
                options: {
                    width: '100%'
                }
                }
            });


            /**
             * Create a timeline chart showing sessions over time for the browser the
             * user selected in the main chart.
             */
            var breakdownChart = new window.gapi.analytics.googleCharts.DataChart({
                query: {
                'dimensions': 'ga:date',
                'metrics': 'ga:sessions',
                'start-date': '7daysAgo',
                'end-date': 'yesterday'
                },
                chart: {
                type: 'LINE',
                container: 'breakdown-chart-container',
                options: {
                    width: '100%'
                }
                }
            });


            /**
             * Store a refernce to the row click listener variable so it can be
             * removed later to prevent leaking memory when the chart instance is
             * replaced.
             */
            var mainChartRowClickListener;


            /**
             * Update both charts whenever the selected view changes.
             */
            viewSelector.on('change', function(ids) {
                var options = {query: {ids: ids}};

                // Clean up any event listeners registered on the main chart before
                // rendering a new one.
                if (mainChartRowClickListener) {
                    window.google.visualization.events.removeListener(mainChartRowClickListener);
                }

                mainChart.set(options).execute();
                breakdownChart.set(options);

                // Only render the breakdown chart if a browser filter has been set.
                if (breakdownChart.get().query.filters) breakdownChart.execute();
            });


            /**
             * Each time the main chart is rendered, add an event listener to it so
             * that when the user clicks on a row, the line chart is updated with
             * the data from the browser in the clicked row.
             */
            mainChart.on('success', function(response) {

                var chart = response.chart;
                var dataTable = response.dataTable;

                // Store a reference to this listener so it can be cleaned up later.
                mainChartRowClickListener = window.google.visualization.events
                    .addListener(chart, 'select', function(event) {

                // When you unselect a row, the "select" event still fires
                // but the selection is empty. Ignore that case.
                if (!chart.getSelection().length) return;

                var row =  chart.getSelection()[0].row;
                var browser =  dataTable.getValue(row, 0);
                var options = {
                    query: {
                    filters: 'ga:browser==' + browser
                    },
                    chart: {
                    options: {
                        title: browser
                    }
                    }
                };

                breakdownChart.set(options).execute();
                });
            });

          
          });
    }
    
    
    render () {
        return (
            <div>
                <Typography variant="h6" color="inherit">
                    Embedded Google Analytics Chart using Embed API
                </Typography>
                <div id={this.embed}  style={{display: 'none'}}></div>
                <div id={this.view}  style={{display: 'none'}}></div>
                <div style={{display: 'flex'}}>
                    <div style={{padding: '10px', width:'100%', minWidth: '25%'}} id={this.main}></div>
                    <div style={{padding: '10px', width:'100%', minWidth: '25%'}} id={this.chart}></div>
                </div>
            </div>
        )
    }
}

export default GoogleA;
