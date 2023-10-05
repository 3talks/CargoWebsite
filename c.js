document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("floating-chat-button");
    const chatWindow = document.getElementById("chat-window");

    chatButton.addEventListener("click", function () {
        // Toggle the chat window when the button is clicked
        chatWindow.style.display = (chatWindow.style.display === "block") ? "none" : "block";
    });
});




  var modal1 = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}



var modal = document.getElementById('id01');
document.addEventListener("keydown", ({key}) => {
    if (key === "Escape"){
      if(modal.style.display="block"){
      modal.style.display = "none";
      }
    }
});

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


//store width of container in the obj variable
var obj = document.getElementsByClassName('containerfx')[0].clientWidth;

function goNext() {
  document.getElementsByClassName('containerfx')[0].scrollBy({ 
    left: obj, 
  });
}

//only "getelementbyid"(for container) works for scroll by. To use getelementsbyclassname for scrollby, use getelementsbyclassname('nameofContainerClass')[0]

function goPrevious() {
  document.getElementsByClassName('containerfx')[0].scrollBy({ 
    left: -obj,
  });
}

$(document).ready(function(){
    // MODAL
    $('.modal').modal();
    // DROPDOWNS
    $(".dropdown-button").dropdown(
      {
        belowOrigin: true
      }
    );
    // TABS
    $('ul.tabs').tabs();
    // SCROLLSPY
    $('.scrollspy').scrollSpy();
  });