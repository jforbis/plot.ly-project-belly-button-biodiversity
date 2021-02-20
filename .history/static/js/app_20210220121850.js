// reading in my data
d3.json("data/samples.json").then((importedData) => {
    // console.log(importedData);
    // console.log(importedData.names);
    // console.log(importedData.metadata);
    console.log(importedData.samples);

    let otuid = importedData.samples[0].otu_ids.slice(0,10).reverse();
    console.log(otuid)
    let samplevalues =  importedData.samples[0].sample_values.slice(0,10).reverse();
    console.log(samplevalues)
    let hovertext =  importedData.samples[0].otu_labels.slice(0,10);
    console.log (hovertext)
    let valuelabel = otuid.map(d => "OTU " + d);


    // Create the Trace
    let trace = {
    x: samplevalues,
    y: valuelabel
    text: otuid,
    type: "bar",
    orientation: "h"
    };

    // Create the data array for the plot
    let data = [trace];

    // Define the plot layout
    let layout = {
    title: "Top 10 OTUs",
    xaxis: { title: "Bacteria Values" },
    yaxis: { title: "OTUs" }
    };

    // Plot the chart to a div tag with id "bar"
    Plotly.newPlot("bar", data, layout);
})