import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './tests/reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render( <App /> );
reportWebVitals();
