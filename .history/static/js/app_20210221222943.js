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

    // bar chart
    let trace = {
    x: samplevalues,
    y: valuelabel,
    text: hovertext,
    type: "bar",
    orientation: "h"
    };

    let data = [trace];

    let layout = {
    title: "Top 10 OTUs",
    xaxis: { title: "Bacteria Values" },
    yaxis: { title: "OTUs" }
    };

    // Plot the chart to a div tag with id "bar"
    Plotly.newPlot("bar", data, layout);

    // bubble chart
    var trace1 = {
        x: sampledata.samples[0].otu_ids,
        y: sampledata.samples[0].sample_values,
        mode: "markers",
        marker: {
            size: sampledata.samples[0].sample_values,
            color: sampledata.samples[0].otu_ids
        },
        text:  sampledata.samples[0].otu_labels
    }
})

​
​