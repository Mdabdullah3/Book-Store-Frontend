import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="">
      </div>
      <Outlet />
    </div>
  );
}