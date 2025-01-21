import { useTranslation } from 'react-i18next';

import s from './Rights.module.scss';

export const Rights = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <h2 className={s.title}>{t('rights.titleInfo')}</h2>
      <p className={s.description}>
        {t('rights.textInfo.part1')} <span className={s.highlight}>{t('rights.textInfo.highlight1')}</span>{' '}
        {t('rights.textInfo.part2')} <span className={s.highlight}> {t('rights.textInfo.highlight2')}</span>
        {t('rights.textInfo.part3')} <span className={s.highlight}> {t('rights.textInfo.highlight3')}</span>,{' '}
        <span className={s.highlight}>{t('rights.textInfo.highlight4')}</span>,{' '}
        <span className={s.highlight}>{t('rights.textInfo.highlight5')}</span>, {t('rights.textInfo.part4')}{' '}
        <span className={s.highlight}>{t('rights.textInfo.highlight6')}</span>. {t('rights.textInfo.part5')}
      </p>

      <h2 className={s.title}>{t('rights.titleConfidentiality')}</h2>
      <p className={s.description}>
        {t('rights.textConfidentiality.part1')}{' '}
        <span className={s.highlight}>{t('rights.textConfidentiality.highlight1')}</span>
        {t('rights.textConfidentiality.part2')}{' '}
        <span className={s.highlight}>{t('rights.textConfidentiality.highlight2')}</span>
        {t('rights.textConfidentiality.part3')}{' '}
        <span className={s.highlight}>{t('rights.textConfidentiality.highlight3')}</span>
        {t('rights.textConfidentiality.part4')}{' '}
        <span className={s.highlight}>{t('rights.textConfidentiality.highlight4')}</span>
        {t('rights.textConfidentiality.part5')}
      </p>

      <h2 className={s.title}>{t('rights.titleReturn')}</h2>
      <p className={s.description}>
        {t('rights.textReturn.part1')} <span className={s.highlight}>{t('rights.textReturn.highlight1')}</span>
        {t('rights.textReturn.part2')} <span className={s.highlight}>{t('rights.textReturn.highlight2')}</span>
        {t('rights.textReturn.part3')} <span className={s.highlight}>{t('rights.textReturn.highlight3')}</span>
        {t('rights.textReturn.part4')} <span className={s.highlight}>{t('rights.textReturn.highlight4')}</span>
        {t('rights.textReturn.part5')}
      </p>
    </div>
  );
};
