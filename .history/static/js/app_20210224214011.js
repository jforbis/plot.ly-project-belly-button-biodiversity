// reading in my data
d3.json("data/samples.json").then((importedData) => {
    // console.log(importedData);
    // console.log(importedData.names);
    // console.log(importedData.metadata);
    console.log(importedData.samples);

    let otuid = importedData.samples[0].otu_ids;
    console.log(otuid)
    let otuid_topten = importedData.samples[0].otu_ids.slice(0,10).reverse();
    let samplevalues =  importedData.samples[0].sample_values;
    console.log(samplevalues)
    let samplevalues_topten = importedData.samples[0].sample_values.slice(0,10).reverse();
    let hovertext =  importedData.samples[0].otu_labels
    console.log (hovertext)
    let hovertext_topten =  importedData.samples[0].otu_labels.slice(0,10);
    let valuelabel = otuid.map(d => "OTU " + d);

    // bar chart
    let trace = {
    x: samplevalues_topten,
    y: valuelabel,
    text: hovertext_topten,
    type: "bar",
    orientation: "h"
    };

    let data = [trace];

    let layout = {
    title: "Top 10 OTUs",
    xaxis: { title: "Bacteria Values" },
    yaxis: { title: "OTUs" }
    };

    Plotly.newPlot("bar", data, layout);


    // bubble chart
    var trace2 = {
        x: otuid,
        y: samplevalues,
        mode: "markers",
        marker: {
            size: samplevalues,
            colorscale: [[0, 'rgb(200, 255, 200)'], [1, 'rgb(0, 100, 0)']],
            cmin: 0,
            cmax: 50,
            showscale: true,
        },
        text:  hovertext
    };

    let layout2 = {
        xaxis:{title: "OTU ID"},
    };

    let data2 = [trace2];

    Plotly.newPlot("bubble", data2, layout2); 
});