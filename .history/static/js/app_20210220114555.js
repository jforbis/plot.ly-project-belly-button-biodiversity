// reading in my data
d3.json("data/samples.json").then((importedData) => {
    // console.log(importedData);
    // console.log(importedData.names);
    // console.log(importedData.metadata);
    // console.log(importedData.samples);

    let ids = importedData.samples[0].otu_ids;
    console.log(ids)
    // let sampleValues =  sampledata.samples[0].sample_values.slice(0,10).reverse();
    // console.log(sampleValues)
    // let labels =  sampledata.samples[0].otu_labels.slice(0,10);
    // console.log (labels)

    // Create the Trace
    // let trace = {
    // x: sample_values
    // y: importedData.samples,
    // type: "bar"
    // };

    // // Create the data array for the plot
    // let info = [trace];

    // // Define the plot layout
    // let layout = {
    // title: "Eye Color vs Flicker",
    // xaxis: { title: "Eye Color" },
    // yaxis: { title: "Flicker Frequency" }
    // };

    // // Plot the chart to a div tag with id "bar"
    // Plotly.newPlot("bar", data, layout);
})