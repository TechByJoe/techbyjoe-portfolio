fullscreenContent = document.getElementById("fullscreen");

//mobile navigation animation
function openNav() {
  document.getElementById("mobileNavOverlay").style.height = "100%";
}

function closeNav() {
  document.getElementById("mobileNavOverlay").style.height = "0%";
}

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Sticky
  let navbarMobile = document.getElementById("mobileNavHeader");
  let navPosMobile = navbarMobile.getBoundingClientRect().top;
  let spacerMobile = document.createElement('div'); // Create a new spacer element
  spacerMobile.style.height = `${navbarMobile.offsetHeight}px`; // Set its height
  spacerMobile.style.transition = "transform 0.3s ease"; // Add a CSS transition for smoothness using the transform property

  if (window.screen.width <= 600) {
    let isMobileSticky = false;

    window.addEventListener("scroll", e => {
      let scrollPosMobile = window.scrollY;
      if (scrollPosMobile > navPosMobile - 10) {
        if (!isMobileSticky) {
          setTimeout(() => {
            navbarMobile.classList.add('sticky');
            // Insert the spacer
            spacerMobile.textContent = '';
            navbarMobile.parentNode.insertBefore(spacerMobile, navbarMobile);
          }, 100); // Adjust the delay as needed
          isMobileSticky = true;
        }
      } else {
        if (isMobileSticky) {
          setTimeout(() => {
            navbarMobile.classList.remove('sticky');
            if (spacerMobile.parentNode === navbarMobile.parentNode) {
              spacerMobile.remove(); // Remove the spacer
            }
          }, 100); // Adjust the delay as needed
          isMobileSticky = false;
        }
      }
    });
  }

  // Desktop Navigation Sticky
  let navbar = document.getElementById("navHeader");
  let topNav = document.getElementById("topNav");
  let spacer = document.createElement('div'); // Create a single spacer element
  spacer.style.transition = "transform 0.3s ease"; // Add a CSS transition for smoothness using the transform property
  spacer.style.height = "4vw";

  if (window.screen.width > 600) {
    let isDesktopSticky = false;

    window.addEventListener("scroll", e => {
      let navPos = navbar.getBoundingClientRect().top;
      let scrollPos = window.scrollY;
      var spacerValue = 115;
      if (window.screen.width > 600 && window.screen.width < 700) {
        spacerValue = 220;
      }
      if (scrollPos > navPos + spacerValue) {
        if (!isDesktopSticky) {
          setTimeout(() => {
            navbar.classList.add('sticky');
            topNav.classList.add('sticky');
            // Insert the spacer
            spacer.textContent = '';
            navbar.parentNode.insertBefore(spacer, navbar);
          }, 100); // Adjust the delay as needed
          isDesktopSticky = true;
        }
      } else {
        if (isDesktopSticky) {
          setTimeout(() => {
            navbar.classList.remove('sticky');
            topNav.classList.remove('sticky');
            if (spacer.parentNode === navbar.parentNode) {
              spacer.remove(); // Remove the spacer
            }
          }, 100); // Adjust the delay as needed
          isDesktopSticky = false;
        }
      }
    });
  }

});


//Custom Scroll to Target
function scrollToTarget(targetId) {
  var offset = -40;
  if (window.screen.width <= 600) {
    offset = 0;
  }

  var targetElement = document.getElementById(targetId);
  if (targetElement) {

    var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth' // 'auto' or 'smooth' for scrolling behavior
    });
    if (window.screen.width <= 600) {
      console.log("this should run closeNav()...")
      document.getElementById("mobileNavOverlay").style.height = "0%";
    }
  }
}

// Fullscreen 
function openFullscreen(content) {
  // if (window.screen.width < 600) {
  if (window.screen.width > 1) {
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




// function closeFullscreen() {
//   fullscreenContent.innerHTML = '<div id="exit" onclick="closeFullscreen()">Exit</div>'
//   fullscreenContent.style.display = "none";
//   document.getElementById("topNav").style.display = "block";
//   document.body.classList.remove("no-scroll");
// }

// function hideSpinner() {
//   document.querySelector('.spinner').style.display = 'none';
// }

// document.addEventListener('keydown', evt => {
//   if (evt.key === 'Escape') {
//     closeFullscreen();
//   }
// });



// const targets = document.getElementsByClassName('shiny');

// for (const target of targets) {
//   target.addEventListener('mousemove', handleMouseMove);
//   target.addEventListener('mouseleave', handleMouseLeave);
// }

// function handleMouseMove(event) {
//   const height = window.innerHeight;
//   const width = window.innerWidth;

//   const target = event.currentTarget;

//   // Reduce the rotation angles for a less pronounced effect
//   // Adjust these values to control the intensity of the perspective effect
//   const yAxisDegree = event.pageX / width * 3 - 1.5; // Adjust the multiplication factor (e.g., 3) and constant values (e.g., -1.5)
//   const xAxisDegree = event.pageY / height * -3 + 1.5; // Adjust the multiplication factor (e.g., 3) and constant values (e.g., 1.5)
//   target.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;

//   setSheenPosition(target, event.pageX / width, event.pageY / height);
// }

// function handleMouseLeave(event) {
//   const target = event.currentTarget;

//   // Add a class to apply the transition smoothly when the mouse leaves
//   target.classList.add('smooth-transition');

//   // Reset the rotation angles to 0 with a smooth transition
//   target.style.transform = 'rotateY(0deg) rotateX(0deg)';

//   // Reset the sheen position with a smooth transition
//   setSheenPosition(target, 0.5, 0.5); // You can set this to the center position or any other desired position

//   // Remove the class after a small delay to avoid interfering with the rotation transition on hover
//   setTimeout(() => {
//     target.classList.remove('smooth-transition');
//   }, 500); // The duration here (500ms) should match the time set in the handleMouseLeave function
// }

// function setSheenPosition(target, xRatio, yRatio) {
//   // Adjust these values to control the sheen position effect
//   const xOffset = 1 - (xRatio - 0.5) * 0.1; // Adjust the multiplication factor (e.g., 0.1)
//   const yOffset = 1 - (yRatio - 0.5) * 0.1; // Adjust the multiplication factor (e.g., 0.1)
//   target.style.setProperty('--sheenX', `${xOffset}px`);
//   target.style.setProperty('--sheenY', `${yOffset}px`);
// }
