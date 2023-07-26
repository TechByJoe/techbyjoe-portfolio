var Bench_Table = 'https://montclair225.autodesk360.com/shares/public/SH35dfcQT936092f0e43eeaf688337182486?mode=embed';
var Metal_Chair = 'https://montclair225.autodesk360.com/shares/public/SH35dfcQT936092f0e43da228a37809cc03d?mode=embed';
var Dough_Mixer = 'https://montclair225.autodesk360.com/shares/public/SH35dfcQT936092f0e436fdc65471082c9f8?mode=embed';
var Knife_Handle = 'https://montclair225.autodesk360.com/shares/public/SH35dfcQT936092f0e4375461eea497cc455?mode=embed';
var Drive_Pulley = 'https://montclair225.autodesk360.com/shares/public/SH35dfcQT936092f0e43fd87fc9973054022?mode=embed';
fullscreenContent = document.getElementById("fullscreen");

//mobile navigation animation
function openNav() {
  document.getElementById("mobileNavOverlay").style.height = "100%";
}

function closeNav() {
  document.getElementById("mobileNavOverlay").style.height = "0%";
}

// image gallery
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" activeDot", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " activeDot";
// }


// Mobile Navigation Sticky
let navbarMobile = document.getElementById("mobileNavHeader");
let navPosMobile = navbarMobile.getBoundingClientRect().top;
let spacerMobile = document.getElementById("spacer");

window.addEventListener("scroll", e => {
  let scrollPosMobile = window.scrollY;
  if (scrollPosMobile > navPosMobile) {
    navbarMobile.classList.add('sticky');
    spacerMobile.classList.add('navbarOffsetMargin');
  } else {
    navbarMobile.classList.remove('sticky');
    spacerMobile.classList.remove('navbarOffsetMargin');
  }
});

// Desktop Navigation Sticky

let navbar = document.getElementById("navHeader");
let topNav = document.getElementById("topNav");
let spacer = document.getElementById("spacer");



if (window.screen.width > 600) {
  window.addEventListener("scroll", e => {
    let navPos = navbar.getBoundingClientRect().top;
    let scrollPos = window.scrollY;
    if (scrollPos > navPos + 110) {
      navbar.classList.add('sticky');
      topNav.classList.add('sticky');
      spacer.classList.add('navbarOffsetMargin');
    } else {
      navbar.classList.remove('sticky');
      topNav.classList.remove('sticky');
      spacer.classList.remove('navbarOffsetMargin');
    }
  });
}


function openFullscreen(content) {
  if (window.screen.width < 600) {
    open(content, '_blank');
  } else {
    var fullscreenContent = document.getElementById("fullscreen");
    fullscreenContent.innerHTML = "";

    var spinner = document.createElement("div");
    spinner.classList.add("spinner");
    fullscreenContent.appendChild(spinner);

    var iframe = document.createElement("iframe");
    iframe.style.border = "none";
    iframe.src = content;
    iframe.onload = function () {
      hideSpinner();
    };
    fullscreenContent.appendChild(iframe);

    var exitButton = document.createElement("div");
    exitButton.id = "exit";
    exitButton.innerText = "Exit";
    exitButton.onclick = function () {
      closeFullscreen();
    };
    fullscreenContent.appendChild(exitButton);

    fullscreenContent.style.display = "block";
    document.getElementById("topNav").style.display = "none";
    document.body.classList.add("no-scroll");
  }
}


function closeFullscreen() {
  fullscreenContent.innerHTML = '<div id="exit" onclick="closeFullscreen()">Exit</div>'
  fullscreenContent.style.display = "none";
  document.getElementById("topNav").style.display = "block";
  document.body.classList.remove("no-scroll");
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closeFullscreen();
  }
});