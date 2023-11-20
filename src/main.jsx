import { hydrateRoot } from 'react-dom/client';
import App from './App.jsx';

hydrateRoot(document.getElementById('root'), <App />);
// createRoot(document.getElementById('root')).render(<App />);
