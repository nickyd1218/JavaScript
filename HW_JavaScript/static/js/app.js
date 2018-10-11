var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach(function(UFO) {
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
  });
});

var submit = d3.select("#filter-btn");

submit.on("click", function() {
    tbody.html('');               
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(info => info.datetime === inputValue);

    filteredData.forEach(function(UFO) {

                var row = tbody.append("tr");
        Object.entries(UFO).forEach(function([key, value]) {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });
    console.log(filteredData);
    d3.event.preventDefault();
});