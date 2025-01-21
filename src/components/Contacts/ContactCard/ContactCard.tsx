import { Link } from 'react-router-dom';

import s from './ContactCard.module.scss';

import { Contact } from '@/types/Contact.type';

type Props = {
  developer: Contact;
};

export const ContactCard: React.FC<Props> = ({ developer }) => {
  const { name, photo, github, desc } = developer;

  return (
    <article className={s.contact}>
      <img
        src={photo}
        alt="photo"
        className={s.contact__img}
      />
      <span className={s.contacts__desc}>
        <h4>{name}</h4>
        <p className="small-text">{desc}</p>
        <Link
          to={github}
          target="_blank"
          className={s.link}
        >
          GitHub
        </Link>
      </span>
    </article>
  );
};
