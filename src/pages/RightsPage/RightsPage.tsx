import s from './RightsPage.module.scss';

import { Rights } from '@/components/Rights/Rights';
import { Container } from '@/UI/Container/Container';
import EarthScene from '@/UI/EarthScene/EarthScene';

const RightsPage = () => (
  <Container title="Rights">
    <div className={s.wrapper}>
      <EarthScene />
      <Rights />
    </div>
  </Container>
);

export default RightsPage;
