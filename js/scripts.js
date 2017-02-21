$(document).ready(function() {
  $("form#dating").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = parseInt($("input#gender").val());
    var personality = ($("input#personality").val());
    var date = parseInt (age + gender + personality);

    

    $("#date").empty().append(match);
    $("#match").show();

    event.preventDefault();


  })
})
