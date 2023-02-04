// using d3 for convenience
const main = d3.select(".db-area");
const scrolly = main.select("#scrolly");
const figure = scrolly.select("figure");
const article = scrolly.select("article");
const step = article.selectAll(".step");

// initialize the scrollama
const scroller = scrollama();

// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  const stepH = Math.floor(window.innerHeight * 0.75);
  step.style("height", stepH + "px");

  const figureHeight = window.innerHeight / 2;
  const figureMarginTop = (window.innerHeight - figureHeight) / 2;

  figure
    .style("height", figureHeight + "px")
    .style("top", figureMarginTop * 1.5 + "px");

  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

const imgLists = document.querySelectorAll("#scrolly figure .img-area");
// scrollama event handlers
function handleStepEnter(response) {
  //console.log(response);
  // response = { element, direction, index }

  imgLists.forEach((el, index) => {
    if (response.index !== index) {
      el.style.display = "none";
    } else {
      el.style.display = "block";
    }
  });
}

function init() {
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.33,
      debug: false,
    })
    .onStepEnter(handleStepEnter);
}

// kick things off
init();
