import { Store01Icon } from 'hugeicons-react';
import { adminSidebarMenu } from '../constants';
import { Link, useLocation } from 'react-router';

export const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className='sidemenu'>
      <div className='sidemenu--logo'>
        <Store01Icon size={28} />
      </div>
      <ul className='sidemenu--items'>
        {adminSidebarMenu.map((option) => (
          <li key={option.path}>
            <Link
              to={option.path}
              className={`sidemenu__link ${pathname == option.path ? 'sidemenu__link--active' : ''}`}
            >
              <span>{option.icon}</span>
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
