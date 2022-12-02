import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Routes } from './routes';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  return (
    <SkeletonTheme baseColor="#999696" highlightColor="#cbc9c9">
      <Provider store={ store }>
        <Routes />
      </Provider>
    </SkeletonTheme>
  );
}

export default App;
