// Show first 10 items
$(".student-item").hide();
$(".student-item:lt(9)").show();

// Defining how many pages
var studentNumber=$(".student-item").length;
var pageNumber = Math.floor(studentNumber/10)+1
var htmlButton = ""

//  Creating pagination buttons
function makeButton() {
  var i;
  for (i = 0; i < pageNumber; i++) {
    var n = i+1;
  htmlButton += "<li><a class='' href='#'>" + n + "</a></li>"
};
  return htmlButton;
}

makeButton();
document.getElementById("page-number").innerHTML = htmlButton;

// Create Search Bar

var searchInput = "<input placeholder='Search for students...'>";
var searchButton = "<button>Search</button>";
var searchField = "<div class = 'student-search'>" + searchInput + searchButton + "</div>";

$( "h2" ).after( searchField );


// create change page function
// When button is clicked, show student-item accordingly
var pageSelect;
pageSelect = function(x) {
  var activePageNumber = parseInt(this.innerHTML);
  var x = activePageNumber * 10;
  var attClass =
  $(".student-item").hide();
  $(".student-item").slice(x-10,x).show();

  // take out the active class from the previous button
  for (i = 0; i < pageNumber; i++) {
    document.getElementById("page-number").children[i].children[0].setAttribute("class","");
  }
  // add active class to current button
  $(this).attr("class","active");
}

// Bind each button with a click event
var i
for (i = 0; i < document.getElementById("page-number").children.length; i++) {
  var paginationButton,
  paginationButton = document.getElementById("page-number").children[i].children[0];
  paginationButton.onclick = pageSelect;
}
