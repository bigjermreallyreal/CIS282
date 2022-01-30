$(document).ready(function(){
    $("#click").click(function(){
        if ($("#box").is(":visible")) {
          $("#box").fadeOut(1000);
        } else {
          $("#box").fadeIn(1000);
        }
    });
  });