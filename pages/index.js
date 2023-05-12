import Cards from '../components/cards';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to my app!</h1>

      <div id="your-app-widget-placeholder"></div>
      <script src="http://localhost:3000/cardwidget?widgetId=creditcards"></script>
      
    </div>



  );
}

