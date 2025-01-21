import s from './ContactCard.module.scss';

import { Contact } from '@/types/Contact.type';

type Props = {
  developer: Contact;
};

export const ContactCard: React.FC<Props> = ({ developer }) => {
  const { name } = developer;

  return (
    <article className={s.container}>
      <p>{name}</p>
    </article>
  );
};
