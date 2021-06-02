import './App.scss';
import NavigationBar from './components/Navigation/NavigationBar';
import SideBar from './components/SideBar/SideBar';
import DashboardContent from './pages/Dashboard/DashboardContent';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <div className='appContainer'>
        <div className='appSideBar'>
          <SideBar />
        </div>
        <div className='appContent'>
          <DashboardContent />
        </div>
      </div>
    </div>
  );
}

export default App;
