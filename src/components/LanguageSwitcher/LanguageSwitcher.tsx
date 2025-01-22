import { LANGUAGE } from '@/constants/language';
import { useLanguage } from '@/hooks/useLanguage';
import { Option } from '@/types/Options.type';
import { Dropdown } from '@/UI/Dropdown/Dropdown';

const languageOpt: Option<LANGUAGE>[] = [
  { id: 1, value: LANGUAGE.EN, label: 'lang.en' },
  { id: 2, value: LANGUAGE.UA, label: 'lang.ua' },
];

export const LanguageSwitcher = () => {
  const { setLanguage, getLanguage } = useLanguage();

  const selectedLanguage = languageOpt.find((opt) => opt.value === getLanguage()) || languageOpt[0];

  return (
    <Dropdown
      options={languageOpt}
      onChange={setLanguage}
      width="80px"
      selectedOption={selectedLanguage}
    />
  );
};
