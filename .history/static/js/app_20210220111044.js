// reading in my data
d3.json("data/samples.json").then((importedData) => {
    console.log(importedData);

    // Create the Trace
    let trace1 = {
    x: eyeColor,
    y: eyeFlicker,
    type: "bar"
    };

    // Create the data array for the plot
    let data = [trace1];

    // Define the plot layout
    let layout = {
    title: "Eye Color vs Flicker",
    xaxis: { title: "Eye Color" },
    yaxis: { title: "Flicker Frequency" }
    };

    // Plot the chart to a div tag with id "bar"
})

Plotly.newPlot("bar", data, layout);
