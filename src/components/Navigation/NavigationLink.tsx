import { NavLink } from 'react-router-dom';

import s from './NavigationLink.module.scss';
// import cn from 'classnames';

type Props = {
  to: string;
  page: string | React.ReactNode;
};

const NavigationLink: React.FC<Props> = (props) => {
  const { to, page } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? s.active : s.link)}
    >
      {page}
    </NavLink>
  );
};

export default NavigationLink;
