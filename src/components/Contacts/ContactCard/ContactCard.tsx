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
      <span className={s.animation}>
        <img
          src={photo}
          alt="photo"
          className={s.contact__img}
        />
        <p className={s.name}>{name}</p>

        <span className={s.contact__desc}>
          <p className={s.text}>{desc}</p>
          <Link
            to={github}
            target="_blank"
            className={s.link}
          >
            GitHub
          </Link>
        </span>
      </span>
    </article>
  );
};
