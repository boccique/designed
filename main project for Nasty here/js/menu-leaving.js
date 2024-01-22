window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 121 || document.documentElement.scrollTop > 121) {
    document.getElementById("navbar").style.opacity = "0";
  } else {
    document.getElementById("navbar").style.opacity = "1";
  }
}