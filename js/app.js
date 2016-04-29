// Store Original html
var students = $(".student-item");
var studentNumber = students.length;

// Create Search Bar
var searchInputHtml = "<input id='search-input' placeholder='Search for students...' value=''>";
var searchButtonHtml = "<button id='search-button'>Search</button>";
var searchField = "<div class = 'student-search'>" + searchInputHtml + searchButtonHtml + "</div>";

$( "h2" ).after( searchField );

// Display filtered html

// Creating Search function
var searchStudents;
var searchInput = "";

searchStudents = function($students) {
  // cycle through each element, and show it if there's is a match
  $(".student-list").empty()
  for ( i = 0; i < studentNumber; i++ ) {
    var name, email, info
    name =  students.eq(i).find("h3").html();
    email = students.eq(i).find("span").html();
    info = name + " " + email;

    var list = students.eq(i)[0];

   if (info.includes(searchInput)) {
     // Render the page with displayHtml
     $(".student-list").append(list);
   }
  }

  makeButtons();
  bindButtons();
  setActivePage(1);
};


// Creating pageSelect function
var pageSelect;
pageSelect = function() {
  // 1. take activae page number
  console.log("hi");
  var activePageNumber = parseInt(this.innerHTML);
  // 2. display active page
  // 3. set pagination class accordingly
  setActivePage(activePageNumber);
}


// Display active page
function setActivePage(n) {
  var x = n * 10;
  $(".student-item").hide();
  $(".student-item").slice(x-10,x).show();

  // take out the active class from the previous button
  for (i = 0; i < $("#page-number li").length; i++) {
    document.getElementById("page-number").children[i].children[0].setAttribute("class","");
  }
  // add active class to current button
  document.getElementById("page-number").children[n-1].children[0].setAttribute("class","active")

}


//  Creating pagination buttons
function makeButtons() {
  var htmlButton = "";
  var i;
  var listNumber = $(".student-item").length;
  var pageNumber = Math.floor(listNumber/10) + 1;
  for (i = 0; i < pageNumber; i++) {
    var n = i+1;
  htmlButton += "<li><a class='' href='#'>" + n + "</a></li>"
};
document.getElementById("page-number").innerHTML = htmlButton;
}


// Bind each button with a click event
function bindButtons() {
  var i
  for (i = 0; i < $("#page-number li").length; i++) {
  //  ???
  //  $("#page-number li")[i].click(function() {
  //    pageSelect();
  //  });
  var paginationButton;
  paginationButton = document.getElementById("page-number").children[i].children[0];
  paginationButton.onclick = pageSelect;

  //  console.log($("#page-number li")[i]);
  };
}


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
$("#search-button").click(function() {
  searchStudents();
})


makeButtons();
bindButtons();
setActivePage(1);
