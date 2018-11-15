$(document).ready(function(){
  var links = $('.search-js');
  for(var i=0;i<links.length;i++){
    links[i].after(links[i].innerHTML);
    links[i].remove();
  }
  //$('#f').attr('id', 'ff');
});

function searchw(){
  var word = document.getElementById("query").value;
  var lan = document.getElementById("le").value;
  $(location).attr('href', './query.php?q='+word+'&to='+lan);
}

function deleteblock(){
  $('.dictvoice').remove();
  $('.add_to_wordbook').remove();
  $('.humanvoice').remove();
}
