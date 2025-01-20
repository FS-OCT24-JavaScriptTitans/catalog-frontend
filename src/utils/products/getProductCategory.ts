export const getTranslatedCategory = (category: string) => {
  switch (category) {
    case 'телефони':
      return 'phones';

    case 'планшети':
      return 'tablets';

    case 'аксесуари':
      return 'accessories';

    default:
      return category;
  }
};
