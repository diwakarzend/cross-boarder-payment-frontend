export const dynamicDataWithXY = (xdata, yData, chartTitle, xLabel, yLabel, chartOptions) => {
     const chartObj = {
        type: 'bar', // also try bar or other graph types
        data: {
            labels: xdata,
            // Information about the dataset
        datasets: [{
                label: "",
                backgroundColor: 'lightblue',
                borderColor: 'royalblue',
                data: yData,
            }]
        },
    
        // Configuration options
        options: {
            layout: {
                padding: 10,
            },
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: chartTitle
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: yLabel
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: xLabel
                    }
                }]
            },
            ...chartOptions,
        }
    }
    return chartObj;
}