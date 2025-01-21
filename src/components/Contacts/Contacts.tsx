import { ContactCard } from '../../components/Contacts/ContactCard/ContactCard';

import s from './Contacts.module.scss';

import { Container } from '@/UI/Container/Container';
import { developers } from '@/constants/developers';

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
