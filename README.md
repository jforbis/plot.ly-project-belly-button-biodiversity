# plot.ly-project-belly-button-biodiversity

![Bacteria by filterforge.com](Images/bacteria.jpg)

In this assignment, I built an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset revealed that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Plotly

1. Used the D3 library to read in `samples.json`.

2. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

3. Created a bubble chart that displays each sample.

4. Displayed an individual's demographic information on an html card.

5. Displayed each key-value pair from the metadata JSON object somewhere on the page.

6. I was able to get my page to filter each time I changed the drop down item but was unsuccessful at getting the page to load the original item (id 940).

## Deployment

* Deployed my dashboard to GitHub Pages: https://jforbis.github.io/plot.ly-project-belly-button-biodiversity/. 