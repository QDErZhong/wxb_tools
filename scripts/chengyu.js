$(function(){
  $('.fold .ftitle').click(function(){
  var text = $(this).html();
  if($(this).closest('div').attr('class')=='fold'){
    $(this).html(text.replace('+','-'));
    $(this).closest('div').attr('class','unfold');
  } else {
    $(this).html(text.replace('-','+'));
    $(this).closest('div').attr('class','fold');
  }
  //console.log(text);
  //$(this).html(text);
})});
