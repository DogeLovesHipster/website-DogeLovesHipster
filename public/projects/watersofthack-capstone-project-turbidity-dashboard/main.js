// // Assuming you have a function to collect data
// function collectData() {
//     let turbidityData = [];  // Empty array to hold turbidity values

//     const data = {
//         turbidity: turbidityData,  // Array of turbidity values
//         dates: dateData           // Array of corresponding dates
//     };

//     fetch('/process_data', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Update the dashboard content with the image data
//         document.getElementById('decomposition-plot').src = data.image;
//     })
//     .catch(error => console.error(error));
// }

// Side navbar gradient follow
document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector("aside");

  aside.classList.add("gradient-follow");

  document.addEventListener("mousemove", (e) => {
    const rect = aside.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    aside.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  });
});

// Welcome message
document.addEventListener("DOMContentLoaded", function () {
  function getWelcomeMessage(user) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const now = new Date();
    const dayName = daysOfWeek[now.getDay()];
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return `Happy ${dayName}, ${user}! \n Your local time is currently: ${timeString}.`;
  }

  const user = "User"; // Replace this with the actual user's name if available
  const welcomeMessage = getWelcomeMessage(user);

  document.getElementById("welcome-message").innerText = welcomeMessage;
});

// Zoom button
document.addEventListener("DOMContentLoaded", function () {
  const zoomButton = document.querySelector(".zoom-button");
  const closeButton = document.getElementById("close-button");
  const image = document.getElementById("decomposition-plot");
  const overlay = document.getElementById("overlay");
  let isZoomed = false;

  zoomButton.addEventListener("click", function () {
    if (!isZoomed) {
      image.classList.add("zoomed");
      overlay.classList.add("active");
      zoomButton.style.display = "none"; // Hide zoom button
      closeButton.classList.add("active");
      isZoomed = true;
    }
  });

  image.addEventListener("click", function () {
    if (isZoomed) {
      image.classList.remove("zoomed");
      overlay.classList.remove("active");
      zoomButton.style.display = "block"; // Show zoom button
      closeButton.classList.remove("active");
      isZoomed = false;
    }
  });

  overlay.addEventListener("click", function () {
    if (isZoomed) {
      image.classList.remove("zoomed");
      overlay.classList.remove("active");
      zoomButton.style.display = "block"; // Show zoom button
      closeButton.classList.remove("active");
      isZoomed = false;
    }
  });
});

// Call collectData on page load (optional)
// window.onload = collectData;
