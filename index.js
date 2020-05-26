// STATIC RATING DATA - REMOVE IT WHEN YOU START OBTAINING IT FROM YOUR API
var RATING_DATA = {
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
      .attr("r", function (d) { return d.dependeded_value_third_circle; })
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
      .attr("r", function (d) { return d.dependeded_value_second_circle; })
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
      .attr("r", function (d) { return d.dependeded_value_first_circle; })
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
      .text(function(d) { return d.dependeded_value_third_circle; });
  circle2.append("title")
      .text(function(d) { return d.dependeded_value_second_circle; });
  circle3.append("title")
      .text(function(d) { return d.dependeded_value_first_circle; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("stroke-width", function(d){ return d.dependeded_value_thickness; })
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