function loadXMLDoc(id, link) {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById(id).innerHTML = xmlhttp.responseText;
    }
  };
  xmlhttp.open("GET", link, true);
  xmlhttp.send();
}

function select(i) {
  $("#" + selected).css("background-color", "white");
  //$("#" + selected).css("color", "black");
  if (selected != i) {
    selected = i;
    $("#" + selected).css("background-color", "#d4d4d4");
    //$("#" + selected).css("color", "white");
  } else {
    selected = -1;
  }
}
function show() {
  var p = 10 * page + selected;
  if (selected != -1) {
    loadXMLDoc(
      "passage",
      "./tools/people/getxml.php?method=show&type=" + places[place] + "&page=" + p
    );
    $("#tables").hide();
  }
}
function pageset(i) {
  if (page + i >= 0 && page + i <= 9) {
    page += i;
    selected = -1;
    loadXMLDoc(
      "selections",
      "./tools/people/getxml.php?method=table&type=" + places[place] + "&page=" + page
    );
  }
  pagenum();
}
function pagenum() {
  if(page+1<10){
    $("#pagenum").html("0" + String(page + 1)+"/10");
  }else{
    $("#pagenum").html(String(page + 1) + "/10");
  }
}
function back() {
  document.getElementById("passage").innerHTML = "";
  $("#tables").show();
}
function switcher() {
  countryname();
  place = 1-place;
  loadXMLDoc("selections", "./tools/people/getxml.php?method=table&type=" + places[place] + "&page=0");
  page = 0;
  pagenum();
}
function countryname() {
  //$("#country").html(cname[place]);
  $("#switch").html("切换至"+cname[place]);
}
var page = 0;
var selected = -1;
var place = 0;
var places = ["china", "world"];
var cname = ["国内新闻", "国际新闻"];
loadXMLDoc("selections", "./tools/people/getxml.php?method=table&type=china&page=" + page);

