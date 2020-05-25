
// from data.js
var tableData = data; 



//convert data to uppercase

// console.log(JSON.stringify(tableData).toUpperCase());


// YOUR CODE HERE!
// Select the button

var button  = d3.select("#filter-btn");

//Select the form

var form = d3.select("#datetime");

// //Create event handlesrs after clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

//Create function to run for both events

function runEnter() {
        //Prevent page from refreshing
        d3.event.preventDefault();

        // Clears previously created table and update with new search input
        document.getElementById("myTable").innerHTML = "";

        //Select the input element and get the raw HTML node
        var inputElement = d3.select("#datetime");

        // Get value property of the input element

        var inputValue = inputElement.property("value");

        //print value to console
        // console.log(inputValue);
  

        var filteredData = tableData.filter(time => time.datetime === inputValue);
//        var objectArray = Object.entries(filteredData);
//        // console.log(objectArray);

        

//     //    var date = filteredData.map(time => time.datetime);
//     //     var city = filteredData.map(time => time.city);

//         console.log(date);
//     // //     console.log(city);

//     // // used as test, puts input value into table
        var tbody = d3.select("tbody");
   

        filteredData.forEach((date) => { tbody.append("tr");
            Object.entries(date).forEach(([key,value]) => {
                            tbody.append("td").text(value);

        })});



}

