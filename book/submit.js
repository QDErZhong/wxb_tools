function textjudge(){ 
  var a = 6;
  if(document.getElementsByName('type').value == '视频') a = 5;
  for(var i=1;i<a;i++){
    if(document.getElementById(i).value==""){
      alert("请填写必填项");
      return false;
    }
  }
}
