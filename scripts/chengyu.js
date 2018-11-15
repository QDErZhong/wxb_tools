$(function(){
  $('.fold .ftitle').click(function(){
  var text = $(this).html();
  if($(this).closest('div').attr('class')=='fold'){
    //text[0] = '+';
    $(this).closest('div').attr('class','unfold');
  } else {
    //text[0] = '-';
    $(this).closest('div').attr('class','fold');
  }
  //console.log(text);
  //$(this).html(text);
})});
