import { render } from 'react-dom';
import App from './App';

// mock all fetch requests during development
if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    const { worker } = require('./mocks/browser');
    worker.start();
}

// render app
render(<App />, document.getElementById('root'));
