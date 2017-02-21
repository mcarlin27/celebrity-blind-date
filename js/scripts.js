$(document).ready(function() {
  $("form#dating").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var personality = $("select#personality").val();

    if (age <= 26 && personality = "happy") {
      ("#date") = "Miley Cyrus"
    }

    $("#date").empty().append(match);
    $("#match").show();

    event.preventDefault();


  })
})
