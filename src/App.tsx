import { Provider } from 'react-redux';
import { store } from './store';
import { HomePage } from './pages';
import { ThemeProvider } from './components/providers';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="App">
          <HomePage />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
