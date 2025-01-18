import { NavLink, NavLinkRenderProps } from 'react-router-dom';

import s from './NavigationLink.module.scss';

import { useAddLangToUrl } from '@/hooks/useAddLangToUrl';

type Props = {
  to: string;
  label: string | React.ReactNode;
  className?: string | ((props: NavLinkRenderProps) => string | undefined);
  handleClick?: () => void;
};

const NavigationLink: React.FC<Props> = (props) => {
  const { to, label, className, handleClick } = props;
  const { getUrlWithLang } = useAddLangToUrl();

  return (
    <NavLink
      to={getUrlWithLang(to)}
      className={className ? className : s.link}
      onClick={handleClick}
    >
      {label}
    </NavLink>
  );
};

export default NavigationLink;
