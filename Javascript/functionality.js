$(function() {
  feather.replace();
  

  $("#start").hover(
    function() {
      $(this).animate(
        {
          backgroundColor: "white",
          color: "#E31B6D"
        },
        "fast",
        "linear"
      );
    },
    function() {
      $(this).animate(
        {
          backgroundColor: "#130f40",
          color: "#E31B6D"
        },
        "fast",
        "linear"
      );
    }
  );
});
