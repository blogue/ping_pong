$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault();
    var number = parseInt(($("#userNumber").val()));
    var convertedNumbers = (numberToPingPong(number));

    var listResult = function(resultArray) {
      if (resultArray <= 0) {
        return false;
      }
      for (j=0; j < resultArray.length; j++) {
      $("ul").append("<li>" + resultArray[j] + "</li>");
      }
      $("#output").show( "slow" );
    }
    listResult(convertedNumbers);
  });
});

var numberToPingPong = function(value){
  var pingPong = [];
  for (i=1; i <= value; i++) {
  	if (i % 15 === 0) {
    	pingPong.push("pingpong");
    }	else if (i % 5 === 0) {
    	pingPong.push("pong");
    } else if (i % 3 === 0) {
    	pingPong.push("ping");
    } else {
    	pingPong.push(i)
    }
 }
 return pingPong;
}
