import './App.scss';
import NavigationBar from './components/Navigation/NavigationBar';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <div className='appContainer'>
        <div className='appSideBar'></div>
        <div className='appContent'></div>
      </div>
    </div>
  );
}

export default App;
