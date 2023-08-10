import './App.css'
import { BreadCrumb } from './components/BreadCrumb';
import SideBarComponent from './components/SideBarComponent'
import { Flowbite } from 'flowbite-react';
import { Dashboard } from './pages/Dashboard';

function App() {

  return (
    <Flowbite>

      <SideBarComponent />

      <div className="p-4 sm:ml-64 dark:bg-gray-700">
        <BreadCrumb />
        <Dashboard />
      </div>

    </Flowbite>
  )
}

export default App
