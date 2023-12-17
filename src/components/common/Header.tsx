import React, { useState } from 'react';
import '../../styles/common.scss'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n';

const Header: React.FC = () => {
    const { t } = useTranslation();
    const [isLangEn, setIsLangEn] = useState<boolean>(true);

    const changeLang = (lang: string) => {
      i18n.changeLanguage(lang);
      lang == 'no' ? setIsLangEn(false) : setIsLangEn(true);
    };

    
    return (
        <header>
            <a className='title' >{t('header')}</a>
            {isLangEn ? (
              <a href="#" className="lang" onClick={() => changeLang('no')}>
                {t('lang.norwegian')}
              </a>
            ) : (
              <a href="#" className="lang" onClick={() => changeLang('en')}>
                {t('lang.english')}
              </a>
            )}
        </header>
    );
};

export default Header;
