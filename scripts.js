//mobile navigation animation
// function openNav() {
//   document.getElementById("mobileNavOverlay").style.height = "100%";
// }

// function closeNav() {
//   document.getElementById("mobileNavOverlay").style.height = "0%";
// }

document.addEventListener("DOMContentLoaded", function () {

  var words = ['Business', 'Organization', 'Project', 'Portfolio', 'Brand', 'Non-Profit'];
  var i = 0;
  var len = words.length;
  var speed = 70;
  var delayAfterWord = 2500; // Adjust the delay time in milliseconds

  function typeWord(word, index, offset) {
    var part = word.substr(0, offset);
    $('.changing-word').text(part);

    if (offset < word.length) {
      setTimeout(function () {
        typeWord(word, index, offset + 1);
      }, speed);
    } else {
      setTimeout(function () {
        eraseWord(word, index, word.length);
      }, delayAfterWord);
    }
  }

  function eraseWord(word, index, offset) {
    var part = word.substr(0, offset);
    $('.changing-word').text(part);

    if (offset > 0) {
      setTimeout(function () {
        eraseWord(word, index, offset - 1);
      }, speed);
    } else {
      i = (index + 1) % len;
      setTimeout(function () {
        typeWord(words[i], i, 0);
      }, speed);
    }
  }

  $(document).ready(function () {
    typeWord(words[i], i, 0);
  });

  // Mobile Navigation Sticky
  if (window.screen.width <= 600) {
    let headerText = document.getElementById("headerText");

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        headerText.style.fontSize = '0.8em'; // Change to the desired font size
      } else {
        headerText.style.fontSize = '1em'; // Return to the initial font size
      }
    });
  }


  //Change theme color on scroll
  if (window.screen.width < 600) {
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');

    function updateThemeColor() {
      const scrollPosition = window.scrollY;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      const threshold = 0.7431;

      if (scrollPosition >= threshold * documentHeight) {
        themeColorMetaTag.setAttribute("content", "#262626");
      } else {
        themeColorMetaTag.setAttribute("content", "#000000");
      }
    }
    window.addEventListener('scroll', updateThemeColor);
    updateThemeColor();
  }

});

// Custom Scroll to Target
function scrollToTarget(targetId) {
  var offset = -40;
  if (window.screen.width <= 600) {
    offset = -50;
  }

  var targetElement = document.getElementById(targetId);
  if (targetElement) {

    var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth' // 'auto' or 'smooth' for scrolling behavior
    });
  }
}

// Fullscreen
// function openFullscreen(content) {
//   if (window.screen.width < 600) {
//     var fullscreenContent = document.getElementById("fullscreen");
//     fullscreenContent.innerHTML = "";

//     var spinner = document.createElement("div");
//     spinner.classList.add("spinner");
//     fullscreenContent.appendChild(spinner);

//     var iframe = document.createElement("iframe");
//     iframe.style.border = "none";
//     iframe.src = content;
//     iframe.onload = function () {
//       hideSpinner();
//     };
//     fullscreenContent.appendChild(iframe);

//     var exitButton = document.createElement("div");
//     exitButton.id = "exit";
//     exitButton.innerText = "Exit";
//     exitButton.onclick = function () {
//       closeFullscreen();
//     };
//     fullscreenContent.appendChild(exitButton);

//     fullscreenContent.style.display = "block";
//     document.getElementById("topNav").style.display = "none";
//     document.body.classList.add("no-scroll");
//   }
// }

//   const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
//   let colorUpdated = false; // Flag to track if the color has been updated
//   let thresholdHeight = 0;

//   function updateThemeColor() {
//     const scrollPosition = window.scrollY;
//     const documentHeight = Math.max(
//       document.body.scrollHeight,
//       document.body.offsetHeight,
//       document.documentElement.clientHeight,
//       document.documentElement.scrollHeight,
//       document.documentElement.offsetHeight
//     );

//     const threshold = 0.7433;

//     if (scrollPosition >= threshold * documentHeight) {
//       if (!colorUpdated) {
//         themeColorMetaTag.setAttribute("content", "#000000"); // Change to black
//         colorUpdated = true; // Set the flag to true
//         thresholdHeight = scrollPosition; // Store the current threshold height
//       }
//     } else if (scrollPosition <= thresholdHeight) {
//       // Reset the color when scrolling back up to the stored threshold height
//       themeColorMetaTag.setAttribute("content", "#262626"); // Change to default color
//       colorUpdated = false; // Reset the flag
//     }
//   }

// window.addEventListener('scroll', updateThemeColor);
