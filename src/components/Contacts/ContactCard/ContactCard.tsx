import { Link } from 'react-router-dom';

import s from './ContactCard.module.scss';

import { Contact } from '@/types/Contact.type';

type Props = {
  developer: Contact;
};

export const ContactCard: React.FC<Props> = ({ developer }) => {
  const { name, photo, github } = developer;

  return (
    <article className={s.contact}>
      <img
        src={photo}
        alt="photo"
        className={s.contact__img}
      />
      <h4>{name}</h4>
      <Link
        to={github}
        target="_blank"
      >
        GitHub
      </Link>
    </article>
  );
};
