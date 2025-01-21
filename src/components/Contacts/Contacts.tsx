import { useTranslation } from 'react-i18next';

import { ContactCard } from '../../components/Contacts/ContactCard/ContactCard';

import s from './Contacts.module.scss';

import { Container } from '@/UI/Container/Container';
import { developers } from '@/constants/developers';

export const Contacts = () => {
  const { t } = useTranslation();

  return (
    <Container title={t('footer.contacts')}>
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
};
