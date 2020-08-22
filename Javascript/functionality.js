$(function() {
  // window.sr = ScrollReveal();
  // sr.reveal(".navbar", {
  //   duration: 2000,
  //   origin: "top",
  //   distance: "100px"
  // });
  // sr.reveal(".about", {
  //   duration: 2000
  // });

  // sr.reveal("#start", {
  //   duration: 1500,
  //   delay: 1000,
  //   origin: "top",
  //   distance: "50px"
  // });

  // sr.reveal("#pf-description", {
  //   duration: 2000,
  //   viewFactor: 0.2
  // });

  // sr.reveal(".portfolio-container", {
  //   duration: 2000,
  //   viewFactor: 0.1
  // });

  // sr.reveal("#about-heading", {
  //   origin: "top",
  //   distance: "80px",
  //   duration: 2000,
  //   viewFactor: 0.2
  // });

  // sr.reveal(".profile_picture", {
  //   duration: 1500,
  //   viewFactor: 0.2
  // });

  // sr.reveal(".about-body-p", {
  //   duration: 1500,
  //   viewFactor: 0.2
  // });

  // sr.reveal("#about-heading", {
  //   duration: 2000,
  //   origin: "top"
  // });

  // sr.reveal(".designer", {
  //   duration: 1500,
  //   viewFactor: 0.2
  // });

  // sr.reveal(".web", {
  //   duration: 1500,
  //   viewFactor: 0.2
  // });

  // sr.reveal(".resume", {
  //   duration: 2000,
  //   viewFactor: 0.2
  // });
  // sr.reveal(".contact-head", {
  //   origin: "top",
  //   distance: "50px",
  //   duration: 1000,
  //   viewFactor: 0.2
  // });

  // sr.reveal(".email-desc", {
  //   duration: 1500,
  //   delay: 500,
  //   viewFactor: 0.2
  // });

  // sr.reveal(".main-email", {
  //   origin: "bottom",
  //   distance: "100px",
  //   delay: 500,
  //   duration: 1000,
  //   viewFactor: 0.2
  // });

  // sr.reveal(".icons",{desktop:false} {
  //   delay: 500,
  //   duration: 1500,
  //   viewFactor: 0.1
  // });

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
