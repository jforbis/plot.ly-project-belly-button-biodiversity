// reading in my data
d3.json("data/samples.json").then((importedData) => {
    console.log(importedData);
    console.log(importedData.names);
    console.log(importedData.metadata);
    console.log(importedData.samples);

    // Create the Trace
    let sample_values = importedData.samples.map(samples =>  samples.samples);
    console.log(sample_values);
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