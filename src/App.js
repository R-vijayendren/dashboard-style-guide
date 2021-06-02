import './App.scss';
import Card from './components/Card/Card';
import NavigationBar from './components/Navigation/NavigationBar';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <div className='appContainer'>
        <div className='appSideBar'>
          <SideBar />
        </div>
        <div className='appContent'>
          <Card>Dashboard item</Card>
        </div>
      </div>
    </div>
  );
}

export default App;
