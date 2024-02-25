import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import DashboardView from './components/DashboardView';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="flex">
            <div className='basis-[12%] h-[100vh]'>
                <SideBar/>
            </div>
            <div className='basis-[88%] border'>
                <DashboardView/>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}

export default App;
