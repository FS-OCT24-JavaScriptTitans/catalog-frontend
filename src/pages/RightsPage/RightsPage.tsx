import s from './RightsPage.module.scss';

import { Rights } from '@/components/Rights/Rights';
import { Container } from '@/UI/Container/Container';
import EarthScene from '@/UI/EarthScene/EarthScene';

const RightsPage = () => (
  <Container
    title="Rights"
    containerMb="10px"
  >
    <div className={s.wrapper}>
      <EarthScene />
      <Rights />
    </div>

    <p className={s.year}>© 2025</p>
  </Container>
);

export default RightsPage;
