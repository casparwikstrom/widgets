window.yourAppWidget = window.yourAppWidget || {};

yourAppWidget.render = function (containerId, settings) {
  var iframe = document.createElement('iframe');
  iframe.width = '100%';
  iframe.height = '500';
  iframe.src = 'https://your-nextjs-app.com/your-component?apiKey=' + encodeURIComponent(settings.apiKey);

  var container = document.getElementById(containerId);
  container.innerHTML = '';
  container.appendChild(iframe);
};