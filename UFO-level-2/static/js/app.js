
// from data.js
var tableData = data; 



//convert data to uppercase

// console.log(JSON.stringify(tableData).toUpperCase());


// YOUR CODE HERE!
// Select the button

var button  = d3.select("#filter-btn");

//Select the form

var form = d3.select("#datetime");
var form = d3.select("#city")

// //Create event handlesrs after clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);


// finds tbody and adds all of tableData to the webpage
var tbody = d3.select("tbody");
   

        tableData.forEach((date) => { tbody.append("tr");
            Object.entries(date).forEach(([key,value]) => {
                            tbody.append("td").text(value);

        })});

function runEnter() {
        //Prevent page from refreshing
        d3.event.preventDefault();

        // Clears previously created table and update with new search input
        document.getElementById("myTable").innerHTML = "";

        //Select the input element and get the raw HTML node
        var inputElement = d3.select("#datetime");
        var inputElement2 = d3.select("#city");
        var inputElement3 = d3.select("#state");
        var inputElement4 = d3.select("#country");
        var inputElement5 = d3.select("#shape");

        // Get value property of the input element

        var inputValue = inputElement.property("value");
        var inputValue2 = inputElement2.property("value");
        var inputValue3 = inputElement3.property("value");
        var inputValue4 = inputElement4.property("value");
        var inputValue5 = inputElement5.property("value");
        
        //print value to console
        // console.log(inputValue);
  

        var filteredDate = tableData.filter(time => time.datetime === inputValue);
        var filteredCity = tableData.filter(place => place.city === inputValue2);
        var filteredState = tableData.filter(place => place.state === inputValue3);
        var filteredCountry = tableData.filter(place => place.country === inputValue4);
        var filteredShape = tableData.filter(place => place.shape === inputValue5);

//        var objectArray = Object.entries(filteredData);
//        // console.log(objectArray);

        

//     //    var date = filteredData.map(time => time.datetime);
//     //     var city = filteredData.map(time => time.city);

//         console.log(date);
//     // //     console.log(city);

//     // // used as test, puts input value into table
        var tbody = d3.select("tbody");
   

        filteredDate.forEach((date) => { tbody.append("tr");
            Object.entries(date).forEach(([key,value]) => {
                            tbody.append("td").text(value);

        })});

        filteredCity.forEach((date) => { tbody.append("tr");
        Object.entries(date).forEach(([key,value]) => {
                        tbody.append("td").text(value);

    })});

        filteredState.forEach((date) => { tbody.append("tr");
        Object.entries(date).forEach(([key,value]) => {
                    tbody.append("td").text(value);

})});
        filteredCountry.forEach((date) => { tbody.append("tr");
        Object.entries(date).forEach(([key,value]) => {
                        tbody.append("td").text(value);

    })});

        filteredShape.forEach((date) => { tbody.append("tr");
        Object.entries(date).forEach(([key,value]) => {
                    tbody.append("td").text(value);

})});



}

