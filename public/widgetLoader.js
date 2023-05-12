window.yourAppWidget = window.yourAppWidget || {};

yourAppWidget.render = function (containerId, settings) {
  var iframe = document.createElement('iframe');
  iframe.width = '100%';
  iframe.height = '500';
  iframe.src = `https://widgets-theta-one.vercel.app/cardwidget?widgetId=${settings.widgetId}`;

  var container = document.getElementById(containerId);
  container.innerHTML = '';
  container.appendChild(iframe);
};
