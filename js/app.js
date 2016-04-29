// Store Original html
// Display filtered html
// divide filtered html by page


// Show first 10 items
$(".student-item").hide();
$(".student-item:lt(9)").show();

var studentNumber=$(".student-item").length;
var pageNumber = Math.floor(studentNumber/10)+1;

// Defining how many pages
/*
function getPageNumber() {
  console.log(pageNumber);
  return pageNumber
};
*/

//  Creating pagination buttons
function makeButtons() {
  var htmlButton = ""
  var i;
  for (i = 0; i < pageNumber; i++) {
    var n = i+1;
  htmlButton += "<li><a class='' href='#'>" + n + "</a></li>"
};
document.getElementById("page-number").innerHTML = htmlButton;
}

makeButtons();
// Create Search Bar

var searchInputHtml = "<input id='search-input' placeholder='Search for students...' value=''>";
var searchButtonHtml = "<button>Search</button>";
var searchField = "<div class = 'student-search'>" + searchInputHtml + searchButtonHtml + "</div>";

$( "h2" ).after( searchField );


// create change page function
// When button is clicked, show student-item accordingly
var pageSelect;
pageSelect = function() {
  var activePageNumber = parseInt(this.innerHTML);
  var x = activePageNumber * 10;
  $(".student-item").hide();
  $(".student-item").slice(x-10,x).show();

  // take out the active class from the previous button
  for (i = 0; i < pageNumber; i++) {
    document.getElementById("page-number").children[i].children[0].setAttribute("class","");
  }
  // add active class to current button
  $(this).attr("class","active");
}


// Creating Search function
var searchStudents;
var searchInput;
searchStudents = function() {
  $(".student-item").hide();
  // cycle through each element, and show it if there's is a match
  for ( i = 0; i < studentNumber; i++ ) {
    var name, email, info
    name =  $(".student-item").eq(i).find("h3").html();
    email = $(".student-item").eq(i).find("span").html();
    info = name + " " + email;
  //  console.log(name);
    var listHtml;
   if (info.includes(searchInput)) {
      $(".student-item").eq(i).show();
//    $(".student-list").append($(".student-item").eq(i)[0])
   }

  }
  console.log(listHtml)
  $(".student-list").html(listHtml);
  makeButtons();
  bindButtons();
};




// Bind each button with a click event
function bindButtons() {
  var i
  for (i = 0; i < document.getElementById("page-number").children.length; i++) {
    var paginationButton,
    paginationButton = document.getElementById("page-number").children[i].children[0];
    paginationButton.onclick = pageSelect;
  };
}

bindButtons();


// Bind Type to create value
$("#search-input").keyup(function() {
  searchInput = $(this).val();
});

// Bind the search function with pressing enter;
$("#search-input").keyup(function(e) {
  if(e.keyCode == 13) {
    searchStudents();
  }
});

// bind search button with search event
// var searchButton = document.getElementsByTagName("button")[0];
var searchButton = $("button")[0];
searchButton.onclick = searchStudents;
