import { useRouter } from 'next/router';
import Cards from '../components/cards';

export default function Widget() {
  const router = useRouter();
  let { widgetId: widget } = router.query;

  
  
    switch (widget) {
      case 'creditcards':
        return <div>widget found</div>;
      // Add more cases for other widgets
      default:
        return <div>Widget not found</div>;
    }
  
  
}