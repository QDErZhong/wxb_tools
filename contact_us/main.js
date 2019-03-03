var file;
function request(id, type, page, async, process) {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      process(id, xmlhttp);
    }
  }
  xmlhttp.open(type, page, async);
  xmlhttp.send();
}

function getresponse(id, xmlhttp) {
  document.getElementById(id).innerHTML = xmlhttp.responseText;
}


function display() {
  var type = [0, 0];
  for(var i = 0; i < 2; i++){
    if(document.getElementById('c' + (i+1)).checked === true){
      type[i] = 1;
    }
  }
  request('content', 'GET', './getcontent.php?c1='+type[0]+'&c2='+type[1], false, getresponse);
}
function pass(f) {
  request('void', 'GET', './delete.php?file=' + f, true, function(id, xmlhttp){display();});
} 

window.onload = function(){
  display();
}
