// Define chart options
const chartOptions = {
    chart: {
        type: 'area',
        height: 180,
        toolbar: { show: false }, // Hide chart toolbar
        zoom: { enabled: false } // Disable chart zooming
    },
    colors: ['gold'], // Set chart color
    series: [{ name: 'Views', data: [0, 0, 1, 2, 2, 2] }], // Set chart data
    dataLabels: { enabled: false }, // Hide chart data labels
    stroke: { width: 1.2, curve: 'smooth' }, // Set chart stroke properties
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0,
            stops: [0, 90, 100] // Set chart fill gradient stops
        }
    },
    xaxis: {
        categories: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь'], // Set x-axis categories
        axisBorder: { show: false }, // Hide x-axis border
        labels: { style: { colors: '#a7a7a7', fontFamily: 'Poppins' } } // Set x-axis label properties
    },
    yaxis: { show: false }, // Hide y-axis
    grid: {
        borderColor: 'rgba(0, 0, 0, 0)', // Set grid border color
        padding: { top: -30, bottom: -8, left: 12, right: 12 } // Set grid padding
    },
    tooltip: {
        enabled: true, // Enable chart tooltip
        y: { formatter: value => `${value}` }, // Set y-axis tooltip label formatter
        style: { fontFamily: 'Poppins' } // Set tooltip font family
    },
    markers: { show: false } // Hide chart markers
};

// Create new ApexCharts instance with chart options and render it
const chart = new ApexCharts(document.querySelector('.chart-area'), chartOptions);
chart.render();