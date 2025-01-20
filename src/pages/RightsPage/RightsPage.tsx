import s from './RightsPage.module.scss';

import { Container } from '@/UI/Container/Container';
import EarthScene from '@/UI/EarthScene/EarthScene';

const RightsPage = () => (
  <Container title="Rights">
    <div className={s.wrapper}>
      <EarthScene />{' '}
      <div className={s.container}>
        <h2>Right to information</h2>
        <p>Customers have the right to withdraw reliable information about products and services. </p>
        <h2>Right to confidentiality</h2>
        <p>We guarantee the protection of your personal data in accordance with the law.</p>
        <h2>Right to turn</h2>
        <p>
          Buyers have the right to return the goods in accordance with the terms for the preservation of their
          integrity.
        </p>
      </div>
    </div>
  </Container>
);

export default RightsPage;
