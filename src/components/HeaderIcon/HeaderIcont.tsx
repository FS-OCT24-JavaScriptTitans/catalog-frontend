import s from './HeaderIcon.module.scss';

type Props = {
  icon: string;
};

const HeaderIcon: React.FC<Props> = ({ icon }) => (
  <div className={s.container}>
    <img
      src={icon}
      alt="navigation"
      className={s.icon}
    ></img>
  </div>
);

export default HeaderIcon;
