import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../components/Background';

interface Props {}

const Home: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Background />
      <div className="home-container">
        <div>
          <h1 className="title">Alexandre St-Laurent</h1>
          <h2 className="subtitle">{t('profession')}</h2>
          <div className="description">
            <p>{t('intro')}</p>
            <p>{t('description')}</p>
          </div>
          <h6 className="mt-0 mb-0">{t('why')}</h6>
          <ul>
            <li>
              <i className="fas fa-shoe-prints" />
              {t('reason01')}
            </li>
            <li>
              <i className="fas fa-shoe-prints" />
              {t('reason02')}
            </li>
            <li>
              <i className="fas fa-shoe-prints" />
              {t('reason03')}
            </li>
          </ul>
          <div className="socials">
            <a href="https://github.com/astlaure">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/alexandre-st-laurent-326b19120/">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
