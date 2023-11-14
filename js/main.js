document.addEventListener('DOMContentLoaded', () => {

  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get('url');
  const text = urlParams.get('text');
  // Använd parametrarna i din kod
  console.log('Parameter 1:', url);
  console.log('Parameter 2:', text);

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  // var interval = setInterval(() => {
  //   let body = document.body;
  //   body.classList.toggle('light-theme');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  // }, 5000);

  var flipdownElement = document.getElementById('link');

  // Create a new link element
  var link = document.createElement('a');

  link.innerHTML = `
    <a href="${url} target="_blank" id="${text}">test</a>
  `;
  // open link in new window

  // Append the link to the 'flipdown' element
  flipdownElement.appendChild(link);
  // Show version number
  var ver = document.getElementById('ver');
  
  ver.innerHTML = flipdown.version;
});


