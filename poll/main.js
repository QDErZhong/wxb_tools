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

function getfile() {
  file = document.getElementById('refresh').value;
}

function getpath() {
  var type = [0, 0, 0];
  for(var i = 0; i < 3; i++){
    if(document.getElementById('c' + (i+1)).checked === true){
      type[i] = 1;
    }
  }
  request('refresh', 'GET', './getdir.php?c1='+type[0]+'&c2='+type[1]+'&c3='+type[2], false, getresponse);
  display();
}
function display() {
  getfile();
  request('content', 'GET', './getcontent.php?file=' + file, false, getresponse);
}
function removei() {
  getfile();
  request('void', 'GET', './delete.php?file=' + file + '&type=驳回', true, function(id, xmlhttp){display();});
}
function pass() {
  getfile();
  request('void', 'GET', './delete.php?file=' + file +'&type=通过', true, function(id, xmlhttp){display();});
} 

window.onload = function(){
  getpath();
}
