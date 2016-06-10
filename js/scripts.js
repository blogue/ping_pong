/*This file is for your custom js.  All yours*/

// Calls input from form-input.html

$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault();
    var number = parseInt(($("#userNumber").val()));
    alert(number)


    $('#output').text(output);

  });
});
