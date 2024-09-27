import { Outlet, NavLink } from 'react-router-dom';

function ProjectLayout() {
  return (
    <>
      <div className="block sm:hidden">
        <NavLink
          to="project1"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Project 1
        </NavLink>
        <NavLink
          to="project2"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Project 2
        </NavLink>
        <NavLink
          to="project3"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Project 3
        </NavLink>
      </div>
      <main className="grow overflow-scroll px-2 pt-4">
        <Outlet />
      </main>
    </>
  );
}

export default ProjectLayout;
