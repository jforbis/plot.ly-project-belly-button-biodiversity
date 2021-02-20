// reading in my data
d3.json("data/samples.json").then((importedData) => {
    // console.log(importedData);
    // console.log(importedData.names);
    // console.log(importedData.metadata);
    console.log(importedData.samples);

    let id = importedData.samples[0].otu_ids;
    console.log(id)
    let samplevalues =  importedData.samples[0].sample_values.slice(0,10).reverse();
    console.log(samplevalues)
    let hovertext =  importedData.samples[0].otu_labels.slice(0,10);
    console.log (hovertext)

    // Create the Trace
    let trace = {
    x: samplevalues,
    y: id,
    type: "bar",
    orientation: "h"
    };
    console.log(trace);

    // Create the data array for the plot
    let data = [trace];

    // Define the plot layout
    let layout = {
    title: "Top 10 OTUs",
    xaxis: { title: "Backteria Values" },
    yaxis: { title: "OTUs" }
    };

    // Plot the chart to a div tag with id "bar"
    Plotly.newPlot("bar", data, layout);
})