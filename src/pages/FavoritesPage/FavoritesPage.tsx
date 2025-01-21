import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { Favourites } from '@/components/Favorites/Favorites';

const FavoritesPage = () => (
  <AnimatedSection animationType={'fade-right'}>
    <Favourites />
  </AnimatedSection>
);

export default FavoritesPage;
