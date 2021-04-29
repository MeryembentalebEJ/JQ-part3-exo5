
$(document).ready(function(){
  $("#nom").focusin(function(){
      $("#nom, #prenom").css('border','6px solid #38a758');
  });
  $("#nom").focusout(function(){
    $("#nom, #prenom").css('border','6px solid red');
});
});