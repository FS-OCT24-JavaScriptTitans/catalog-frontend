import { ContactCard } from '../../components/Contacts/ContactCard/ContactCard';

import s from './Contacts.module.scss';

import { Container } from '@/UI/Container/Container';
import { Contact } from '@/types/Contact.type';

const developers: Contact[] = [
  {
    name: 'Mykhailo Nikolaiev',
    photo: '',
    github: '',
    desc: '',
  },
  {
    name: 'Nataliia Zaiats',
    photo: '',
    github: '',
    desc: '',
  },
  {
    name: 'Ivanyshyn Oleksii',
    photo: '',
    github: '',
    desc: '',
  },
  {
    name: 'Oleksandr Andrushchenko',
    photo: '',
    github: '',
    desc: '',
  },
  {
    name: 'Morderer Illia',
    photo: '',
    github: '',
    desc: '',
  },
];

export const Contacts = () => (
  <Container title={'Contacts'}>
    <section className={s.container}>
      {developers.map((developer) => (
        <ContactCard
          key={developer.name}
          developer={developer}
        />
      ))}
    </section>
  </Container>
);
