import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Intro from './Intro';

function AppLayout() {
  return (
    <>
      <div className="block sm:hidden">
        <Intro />
      </div>

      <div>
        <Nav />
      </div>

      <main className="grow overflow-scroll px-2 pt-4">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
