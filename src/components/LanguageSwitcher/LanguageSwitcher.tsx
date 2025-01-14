import { LANGUAGE } from '@/constants/language';
import { useLanguage } from '@/hooks/useLanguage';
import { Option } from '@/types/Options.type';
import { Dropdown } from '@/UI/Dropdown/Dropdown';

const LanguageOpt: Option<LANGUAGE>[] = [
  { id: 1, value: LANGUAGE.EN, label: 'EN' },
  { id: 2, value: LANGUAGE.UA, label: 'UA' },
];

export const LanguageSwitcher = () => {
  const { setLanguage } = useLanguage();

  return (
    <Dropdown
      options={LanguageOpt}
      onChange={setLanguage}
      width="60px"
    />
  );
};
