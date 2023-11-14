document.addEventListener('DOMContentLoaded', () => {

  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get('url') ? urlParams.get('url') : 'https://crmproductreview.com/';
  const text = urlParams.get('text') ? urlParams.get('text') : 'Google';
  const hours = urlParams.get('hours') ? urlParams.get('hours') : 24;

  // Use sessionStorage instead of localStorage
  const savedTwoDaysFromNow = sessionStorage.getItem('twoDaysFromNow');
  const timeInMilliseconds = hours * 60 * 60 * 1000;

  // Check if the URL and text parameters are not null
  if (!url || !text) {
    console.error('URL or text parameter is missing.');
    return; // Exit the function if URL or text is missing
  }

  // If a saved value exists, use it; otherwise, calculate a new value
  let twoDaysFromNow;
  if (savedTwoDaysFromNow) {
    twoDaysFromNow = parseInt(savedTwoDaysFromNow);
  } else {
    const currentTime = new Date().getTime();
    twoDaysFromNow = (currentTime / 1000) + hours * 60 * 60; // hours to seconds
  }

  // Save the calculated or retrieved value back to sessionStorage
  sessionStorage.setItem('twoDaysFromNow', twoDaysFromNow);

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Find the flipdown element
  var flipdownElement = document.getElementById('link');

  if (!flipdownElement) {
    console.error('Flipdown element not found.');
    return; // Exit the function if the flipdown element is not found
  }

  // Create a new link element
  // var link = document.createElement('a');

  flipdownElement.innerHTML = `<a href="${url}" target="_blank" id="text-link">${text}</a>`;

  // Append the link to the 'flipdown' element
  // flipdownElement.appendChild(link);

  // Show version number
  var ver = document.getElementById('ver');
  if (ver) {
    ver.innerHTML = flipdown.version;
  } else {
    console.warn('Version element not found.');
  }
});
