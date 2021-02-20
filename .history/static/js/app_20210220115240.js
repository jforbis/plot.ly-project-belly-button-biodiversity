// reading in my data
d3.json("data/samples.json").then((importedData) => {
    // console.log(importedData);
    // console.log(importedData.names);
    // console.log(importedData.metadata);
    console.log(importedData.samples);

    let id = importedData.samples[0].otu_ids;
    console.log(id)
    let sampleValues =  importedData.samples[0].sample_values.slice(0,10).reverse();
    console.log(sampleValues)
    let hovertext =  importedData.samples[0].otu_labels.slice(0,10);
    console.log (hovertext)

    // Create the Trace
    let trace = {
    x: sample_values,
    type: "bar"
    };
    console.log(trace);

    // Create the data array for the plot
    let info = [trace];

    // Define the plot layout
    let layout = {
    title: "Eye Color vs Flicker",
    xaxis: { title: "Eye Color" },
    yaxis: { title: "Flicker Frequency" }
    };

    // Plot the chart to a div tag with id "bar"
    Plotly.newPlot("bar", data, layout);
})