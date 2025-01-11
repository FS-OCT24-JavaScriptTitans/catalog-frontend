import { NavLink, NavLinkRenderProps } from 'react-router-dom';

type Props = {
  to: string;
  link: string | React.ReactNode;
  className?: string | ((props: NavLinkRenderProps) => string | undefined);
  handleClick?: () => void;
};

const NavigationLink: React.FC<Props> = (props) => {
  const { to, link, className, handleClick } = props;

  return (
    <NavLink
      to={to}
      className={className ? className : ''}
      onClick={handleClick}
    >
      {link}
    </NavLink>
  );
};

export default NavigationLink;
