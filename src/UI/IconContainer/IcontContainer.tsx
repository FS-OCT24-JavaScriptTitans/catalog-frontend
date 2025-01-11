import s from './IconContainer.module.scss';

type Props = {
  icon: string;
};

const IconContainer: React.FC<Props> = ({ icon }) => (
  <div className={s.container}>
    <img
      src={icon}
      alt="navigation"
      className={s.icon}
    ></img>
  </div>
);

export default IconContainer;
