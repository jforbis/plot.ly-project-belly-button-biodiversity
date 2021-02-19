// reading in my data
d3.json("data/samples.json").then((importedData) => {
    console.log(importedData);
    let data = importedData;
