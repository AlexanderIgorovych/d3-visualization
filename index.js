// STATIC RATING DATA - REMOVE IT WHEN YOU START OBTAINING IT FROM YOUR API
var RATING_DATA_EXAMPLE = {
  "nodes": [
    {"id": "Candidate1", "group": 1, "dependeded_value_first_circle": "7", "dependeded_value_second_circle":"12", "dependeded_value_third_circle":"24"},
    {"id": "Candidate2", "group": 1, "dependeded_value_first_circle": "2", "dependeded_value_second_circle":"8", "dependeded_value_third_circle":"30"},
    {"id": "Candidate3", "group": 1, "dependeded_value_first_circle": "10", "dependeded_value_second_circle":"18", "dependeded_value_third_circle":"20"},
    {"id": "Candidate4", "group": 1, "dependeded_value_first_circle": "5", "dependeded_value_second_circle":"10", "dependeded_value_third_circle":"15"},
    {"id": "Candidate5", "group": 1, "dependeded_value_first_circle": "7", "dependeded_value_second_circle":"12", "dependeded_value_third_circle":"24"},
    {"id": "Candidate6", "group": 1, "dependeded_value_first_circle": "2", "dependeded_value_second_circle":"8", "dependeded_value_third_circle":"30"},
    {"id": "Candidate7", "group": 1, "dependeded_value_first_circle": "10", "dependeded_value_second_circle":"18", "dependeded_value_third_circle":"20"},
    {"id": "Candidate8", "group": 1, "dependeded_value_first_circle": "5", "dependeded_value_second_circle":"10", "dependeded_value_third_circle":"15"}
  ],
  "links": [
    {"source": "Candidate2", "target": "Candidate1", "value": 10, "dependeded_value_thickness": "1"},
    {"source": "Candidate3", "target": "Candidate1", "value": 80, "dependeded_value_thickness": "2"},
    {"source": "Candidate4", "target": "Candidate1", "value": 0, "dependeded_value_thickness": "3"},
    {"source": "Candidate4", "target": "Candidate3", "value": 60, "dependeded_value_thickness": "4"},
    {"source": "Candidate5", "target": "Candidate1", "value": 10, "dependeded_value_thickness": "1"},
    {"source": "Candidate5", "target": "Candidate7", "value": 80, "dependeded_value_thickness": "2"},
    {"source": "Candidate7", "target": "Candidate1", "value": 0, "dependeded_value_thickness": "3"},
    {"source": "Candidate8", "target": "Candidate3", "value": 60, "dependeded_value_thickness": "4"},
    {"source": "Candidate6", "target": "Candidate1", "value": 0, "dependeded_value_thickness": "3"},
    {"source": "Candidate8", "target": "Candidate3", "value": 60, "dependeded_value_thickness": "4"},
    {"source": "Candidate8", "target": "Candidate7", "value": 60, "dependeded_value_thickness": "4"}
  ]
}

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
    { source: "party-12", target: "party-17", value: 0.0 },/*  */
    { source: "party-13", target: "party-14", value: 0.0 },
    { source: "party-13", target: "party-17", value: 0.0 },
    { source: "party-14", target: "party-14", value: 0.0 },
    { source: "party-14", target: "party-17", value: 0.0 },
  ]
}
// END OF STATIC RATING DATA


var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody().strength(-1000))
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
  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", function (d) { return d.potential; })
	    .attr("fill", "black")
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended))
          .on("click", clicked)
          .on("mouseover", handleMouseOver)
          .on("mouseout", handleMouseOut);
  
  var circle2 = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", function (d) { return d.reserve; })
      .attr("fill", "yellow")
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended))
          .on("click", clicked)
          .on("mouseover", handleMouseOver)
          .on("mouseout", handleMouseOut);
  
  var circle3 = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", function (d) { return d.core; })
	    .attr("fill", "white")
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended))
          .on("click", clicked)
          .on("mouseover", handleMouseOver)
          .on("mouseout", handleMouseOut);

  // on circle click function
  function clicked(d) {
    modal.style.display = "block"
    content.innerHTML = d.id
  }

  function handleMouseOver(d, i, event) {  
    // show popover
  }

  function handleMouseOut(d, i, event) {
    // hide popover
  }

  // Define titles inside circles
  node.append("data-title")
      .text(function(d) { return d.potential; });
  circle2.append("title")
      .text(function(d) { return d.reserve; });
  circle3.append("title")
      .text(function(d) { return d.core; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("stroke-width", function(d){ return d.value * 5; })
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });

    circle2
      .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });

    circle3
      .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
  }
};
// END OF THE MAIN FUNCTION

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

// Get the modal
var modal = document.getElementById("myModal")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]

// modal content
var content = document.getElementsByClassName('modal-value')[0]

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}