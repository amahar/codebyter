$(function() {
  $("#search-term").on("submit", function(event) {
    event.preventDefault();
    var searchTerm = $("#query").val();
    getRequest(searchTerm);
  });
  function getRequest(searchTerm) {
    var params = {
      //s: searchTerm,
      //r:'json'
      part: "snippet",
      key: "AIzaSyATUqK1MDjw-pS65iQrszGrL5MyPb11Qg0",
      q: searchTerm
    };
    url = "https://www.googleapis.com/youtube/v3/search";

    $.getJSON(url, params, function(data) {
      //showResults(data.items.snippet);
      console.log(data.items[0]);
    });
  }
  // function showResults(results){
  // 	var html = '';
  // 	$.each(results, function(index,value){
  // 	console.log(value);
  // 	html += '<p>'+ value +'</p>';
  // 	});
  // 	$('#search-results').html(html);
  // }
});

function pretteri() {
  console.log("test for prettier");
}
