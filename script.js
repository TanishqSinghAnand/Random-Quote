$(document).ready(newQuote);
function newQuote() {
$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",function(json){
  $(".quote").html(json.quoteText);
  $("address").html(json.quoteAuthor);
});
}

function tweet() {
  var text= $('.quote').text() + "-" + $('address').text();
  var href = "https://twitter.com/intent/tweet?text=" + text;
  window.location = href;
  //console.log($('.quote').text());
}
