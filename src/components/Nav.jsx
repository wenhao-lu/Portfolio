import { NavLink } from 'react-router-dom';
import {
  MdQueryStats,
  MdOutlineWork,
  MdCastForEducation,
} from 'react-icons/md';
function Nav() {
  return (
    <div className="flex items-center justify-center gap-4">
      <NavLink
        to="/project"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <MdQueryStats className="text-[1.2rem] text-gray-400 transition-all visited:bg-blue-400 hover:text-gray-500 active:bg-green-900 active:text-green-500" />
      </NavLink>

      <NavLink
        to="/work"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <MdOutlineWork className="text-[1.2rem] text-gray-400 transition-all visited:bg-blue-400 hover:text-gray-500 active:bg-green-900 active:text-green-500" />
      </NavLink>

      <NavLink
        to="/education"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <MdCastForEducation className="text-[1.2rem] text-gray-400 transition-all visited:bg-blue-400 hover:text-gray-500 active:bg-green-900 active:text-green-500" />
      </NavLink>
    </div>
  );
}

export default Nav;
