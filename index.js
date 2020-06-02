// STATIC RATING DATA - REMOVE IT WHEN YOU START OBTAINING IT FROM YOUR API
var RATING_DATA = {
  nodes: [
    { id: "party-1", name: "Партія 1", core: 3.0, reserve: 4.6, potential: 6.0 },
    { id: "party-2", name: "Партія 2", core: 7.6, reserve: 16.5, potential: 25.5 },
    { id: "party-3", name: "Партія 3", core: 0, reserve: 1.6, potential: 3.1 },
    { id: "party-4", name: "Партія 4", core: 10.9, reserve: 14.8, potential: 25.5 },
    { id: "party-5", name: "Партія 5", core: 0.5, reserve: 0.5, potential: 0.5 },
    { id: "party-6", name: "Партія 6", core: 8.2, reserve: 12.6, potential: 20.6 },
    { id: "party-7", name: "Партія 7", core: 0.3, reserve: 0.7, potential: 0.7 },
    { id: "party-8", name: "Партія 8", core: 0.0, reserve: 0.3, potential: 0.3 },
    { id: "party-9", name: "Партія 9", core: 0.0, reserve: 0.0, potential: 0.0 },
    { id: "party-10", name: "Партія 10", core: 11.4, reserve: 13.0, potential: 16.7 },
    { id: "party-11", name: "Партія 11", core: 0.0, reserve: 0.0, potential: 0.0 },
    { id: "party-12", name: "Партія 12", core: 0.4, reserve: 0.4, potential: 1.6 },
    { id: "party-13", name: "Партія 13", core: 4.6, reserve: 9.7, potential: 10.5 },
    { id: "party-14", name: "Партія 14", core: 3.1, reserve: 3.1, potential: 5.1 },
    /*     { id: "party-15", name: "Партія 15", core: 1.6, reserve: 1.6, potential: 3.2 },
        { id: "party-16", name: "Партія 16", core: 0.3, reserve: 0.3, potential: 0.3 }, */
    { id: "party-17", name: "Проти всіх", core: 0.0, reserve: 0.4, potential: 0.4 },
    /*    { id: "party-18", name: "Не відповіли", core: 0.0, reserve: 0.8, potential: 0.8 }, */
  ],
  links: [
    { source: "party-1", target: "party-2", value: 0.7 },
    { source: "party-1", target: "party-3", value: 0.0 },
    { source: "party-1", target: "party-4", value: 0.0 },
    { source: "party-1", target: "party-5", value: 0.0 },
    { source: "party-1", target: "party-6", value: 0.8 },
    { source: "party-1", target: "party-7", value: 0.0 },
    { source: "party-1", target: "party-8", value: 0.0 },
    { source: "party-1", target: "party-9", value: 0.0 },
    { source: "party-1", target: "party-10", value: 0.0 },
    { source: "party-1", target: "party-11", value: 0.0 },
    { source: "party-1", target: "party-12", value: 0.0 },
    { source: "party-1", target: "party-13", value: 0.0 },
    { source: "party-1", target: "party-14", value: 0.0 },
    { source: "party-1", target: "party-17", value: 0.0 },
    { source: "party-2", target: "party-3", value: 0.8 },
    { source: "party-2", target: "party-4", value: 4.2 },
    { source: "party-2", target: "party-5", value: 0.0 },
    { source: "party-2", target: "party-6", value: 2.0 },
    { source: "party-2", target: "party-7", value: 0.0 },
    { source: "party-2", target: "party-8", value: 0.0 },
    { source: "party-2", target: "party-9", value: 1.0 },
    { source: "party-2", target: "party-10", value: 0.4 },
    { source: "party-2", target: "party-11", value: 0.4 },
    { source: "party-2", target: "party-12", value: 0.4 },
    { source: "party-2", target: "party-13", value: 0.0 },
    { source: "party-2", target: "party-14", value: 0.0 },
    { source: "party-2", target: "party-17", value: 0.0 },
    { source: "party-3", target: "party-4", value: 0.8 },
    { source: "party-3", target: "party-5", value: 0.0 },
    { source: "party-3", target: "party-6", value: 0.4 },
    { source: "party-3", target: "party-7", value: 0.0 },
    { source: "party-3", target: "party-8", value: 0.0 },
    { source: "party-3", target: "party-9", value: 0.0 },
    { source: "party-3", target: "party-10", value: 0.0 },
    { source: "party-3", target: "party-11", value: 0.0 },
    { source: "party-3", target: "party-12", value: 0.4 },
    { source: "party-3", target: "party-13", value: 0.0 },
    { source: "party-3", target: "party-14", value: 0.0 },
    { source: "party-3", target: "party-17", value: 0.0 },
    { source: "party-4", target: "party-5", value: 0.0 },
    { source: "party-4", target: "party-6", value: 3.6 },
    { source: "party-4", target: "party-7", value: 0.0 },
    { source: "party-4", target: "party-8", value: 0.0 },
    { source: "party-4", target: "party-9", value: 2.1 },
    { source: "party-4", target: "party-10", value: 0.8 },
    { source: "party-4", target: "party-11", value: 0.4 },
    { source: "party-4", target: "party-12", value: 0.8 },
    { source: "party-4", target: "party-13", value: 0.0 },
    { source: "party-4", target: "party-14", value: 0.0 },
    { source: "party-4", target: "party-17", value: 0.0 },
    { source: "party-5", target: "party-6", value: 0.0 },
    { source: "party-5", target: "party-7", value: 0.0 },
    { source: "party-5", target: "party-8", value: 0.0 },
    { source: "party-5", target: "party-9", value: 0.0 },
    { source: "party-5", target: "party-10", value: 0.0 },
    { source: "party-5", target: "party-11", value: 0.0 },
    { source: "party-5", target: "party-12", value: 0.0 },
    { source: "party-5", target: "party-13", value: 0.0 },
    { source: "party-5", target: "party-14", value: 0.0 },
    { source: "party-5", target: "party-17", value: 0.0 },
    { source: "party-6", target: "party-7", value: 0.0 },
    { source: "party-6", target: "party-8", value: 0.0 },
    { source: "party-6", target: "party-9", value: 0.9 },
    { source: "party-6", target: "party-10", value: 0.0 },
    { source: "party-6", target: "party-11", value: 0.4 },
    { source: "party-6", target: "party-12", value: 0.4 },
    { source: "party-6", target: "party-13", value: 0.8 },
    { source: "party-6", target: "party-14", value: 0.0 },
    { source: "party-6", target: "party-17", value: 0.0 },
    { source: "party-7", target: "party-8", value: 0.0 },
    { source: "party-7", target: "party-9", value: 0.0 },
    { source: "party-7", target: "party-10", value: 0.0 },
    { source: "party-7", target: "party-11", value: 0.0 },
    { source: "party-7", target: "party-12", value: 0.0 },
    { source: "party-7", target: "party-13", value: 0.0 },
    { source: "party-7", target: "party-14", value: 0.0 },
    { source: "party-7", target: "party-17", value: 0.0 },
    { source: "party-8", target: "party-9", value: 0.0 },
    { source: "party-8", target: "party-10", value: 0.0 },
    { source: "party-8", target: "party-11", value: 0.0 },
    { source: "party-8", target: "party-12", value: 0.0 },
    { source: "party-8", target: "party-13", value: 0.0 },
    { source: "party-8", target: "party-14", value: 0.0 },
    { source: "party-8", target: "party-17", value: 0.0 },
    { source: "party-9", target: "party-10", value: 0.0 },
    { source: "party-9", target: "party-11", value: 0.0 },
    { source: "party-9", target: "party-12", value: 0.0 },
    { source: "party-9", target: "party-13", value: 0.0 },
    { source: "party-9", target: "party-14", value: 0.0 },
    { source: "party-9", target: "party-17", value: 0.0 },
    { source: "party-10", target: "party-11", value: 0.0 },
    { source: "party-10", target: "party-12", value: 0.4 },
    { source: "party-10", target: "party-13", value: 0.4 },
    { source: "party-10", target: "party-14", value: 0.0 },
    { source: "party-10", target: "party-17", value: 0.0 },
    { source: "party-11", target: "party-12", value: 0.0 },
    { source: "party-11", target: "party-13", value: 0.0 },
    { source: "party-11", target: "party-14", value: 0.0 },
    { source: "party-11", target: "party-17", value: 0.0 },
    { source: "party-12", target: "party-13", value: 0.0 },
    { source: "party-12", target: "party-14", value: 0.0 },
    { source: "party-12", target: "party-17", value: 0.0 },
    { source: "party-13", target: "party-14", value: 0.0 },
    { source: "party-13", target: "party-17", value: 0.0 },
    { source: "party-14", target: "party-14", value: 0.0 },
    { source: "party-14", target: "party-17", value: 0.0 },
  ]
}
// END OF STATIC RATING DATA


// ============================================================
function zooming() {
  modal.style.display = "none";
  svg.attr("transform", d3.event.transform);
}

var zoom = d3.zoom().on("zoom", zooming);

var svgWrapper = document.getElementsByClassName("svg-wrapper")

var svgStatic = d3.select("svg")
  .attr("width", svgWrapper[0].clientWidth)
  .attr("height", svgWrapper[0].clientHeight)
  .call(zoom)
  
var svg = svgStatic.append("g")
  .attr("width", svgWrapper[0].clientWidth)
  .attr("height", svgWrapper[0].clientHeight),
  

width = +svgStatic.attr("width"),
height = +svgStatic.attr("height");


var simulation = d3.forceSimulation()
  .force("link", d3.forceLink().id(function (d) { return d.id; }))
  .force("charge", d3.forceManyBody().strength(-2000))
  .force("center", d3.forceCenter(width / 2, height / 2));

// REPLACE THIS CALL WITH THE COMMENTED CODE BELOW AND SET URL WHICH RETRIEVES YOUR RATINGS
drawRatings(null, RATING_DATA);
//d3.json("http://your.website.here/api-to-get-data", drawRatings);


// MAIN FUNCTION TO DRAW RATINGS
function drawRatings(error, graph) {
  if (error) throw error;

  // Define Connections
  var link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")

  // Define circles
  var outline = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
    .attr("class", function (d) { return d.id + " outline"; })
    .attr("r", function (d) { return d.potential < 16 ? 16 : d.potential + 8; })
    .attr("fill", "transparent")
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended))
    .on("click", clicked)
    .on("mouseenter", mouseEntered)
    .on("mouseout", mouseOut);

  var potential = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
    .attr("class", function (d) { return d.id + " potential"; })
    .attr("r", function (d) { return d.potential == 0 ? 3 : d.potential; })
    .attr("fill", function (d) { return d.potential == 0 ? "grey" : "black"; })

  var reserve = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
    .attr("class", function (d) { return d.id + " reserve"; })
    .attr("r", function (d) { return d.reserve; })
    .attr("fill", "yellow")

  var core = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
    .attr("class", function (d) { return d.id + " core"; })
    .attr("r", function (d) { return d.core; })
    .attr("fill", "white")

  link.append("title")
    .text(function (d) { return d.value > 0 ? d.value + "%" : null; })
  outline.append("title")
    .text(function (d) { return d.name; })

  simulation
    .nodes(graph.nodes)
    .on("tick", ticked);

  simulation.force("link")
    .links(graph.links);

  function ticked() {
    link
      .attr("stroke-width", function (d) { return d.value > 0 ? d.value * 2 : 1; })
      .attr("class", function (d) { return d.value > 0 ? "" : "empty"; })
      .attr("x1", function (d) { return d.source.x; })
      .attr("y1", function (d) { return d.source.y; })
      .attr("x2", function (d) { return d.target.x; })
      .attr("y2", function (d) { return d.target.y; });

    outline
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; });

    potential
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; });

    reserve
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; });

    core
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; })
  }
}
// END OF THE MAIN FUNCTION

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d3.select(this).classed("moving", true);
  modal.style.display = "none";
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d3.select(this).classed("moving", false);
  d.fx = null;
  d.fy = null;
}

// on circle click function
function clicked(d) {
  modal.style.background = "white"
  modal.style.color = "black"
  content.innerHTML = ` <div class="popover-content">
                          <p class="popover-title">${d.name}</p>
                          <div class="pop-list"><a class="point-core">•</a><a>Ядро - ${d.core}</a></div>
                          <div class="pop-list"><a class="point-reserve">•</a><a> Резерв - ${d.reserve}</a></div>
                          <div class="pop-list"><a class="point-potential">•</a><a> Потенціал - ${d.potential}</a></div>
                        </div>`
  if(window.innerWidth - d3.event.clientX > 200) {
    modal.style.left = `${d3.event.clientX - -10}px`
    d3.select("#myModal").classed("left-popup", false)
  } 
  else {
    modal.style.left = `${d3.event.clientX - 200}px`
    d3.select("#myModal").classed("left-popup", true)
  }
  if(window.innerHeight - d3.event.clientY > 150) {
    modal.style.top = `${d3.event.clientY - 15}px`
    d3.select("#myModal").classed("bottom-popup", false)
  } else {
    modal.style.top = `${d3.event.clientY - 140}px`
    d3.select("#myModal").classed("bottom-popup", true)
  }
  modal.style.display = "block"
  
}

function mouseEntered() {
  d3.select(this).transition().attr("fill", "rgba(0, 0, 0, 0.1)");
}

function mouseOut(d) {
  d3.select(this).transition().attr("fill", "transparent");
}

// restore default zoom
function defaultZoom() {
  svgStatic.transition().duration(500).call(
    zoom.transform,
    d3.zoomIdentity
  );
}

// Get the modal
var modal = document.getElementById("myModal")

var legend = document.getElementById("legend")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]

// modal content
var content = document.getElementsByClassName('modal-value')[0]

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if(event.target.localName !== "circle" && event.target.localName !== "span") {
    modal.style.display = "none";
    legend.style.display = "none"
  }
 
}

var info = document.getElementsByClassName("info")[0]

info.onclick = function () {
  legend.style.display = "block"
  legend.style.top = `40px`
  legend.style.right = `20px`
  legend.style.background = "#282825"
  legend.style.color = "#d5d5d5"
}
