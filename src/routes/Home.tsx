import React from 'react';
import Background from '../components/Background';

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <>
      <Background />
      <div className="home-container">
        <div>
          <h1 className="title">Alexandre St-Laurent</h1>
          <h2 className="subtitle">Programmeur Analyste</h2>
          <div className="description">
            <p>Salut, moi c'est Alexandre.</p>
            <p>Je suis un passionné du web, et j'adore essayer touuuuuute les nouvelles technos possible et inimaginable. Ca gosse un peu ma femme parce-que je change toujours d'idée sur nos projets commun mais bref, je m'égare. J'adore javascript, et idéalement je ferais beaucoup de prog durant mes journée de travaille. J'aimerais réussir a monter une entreprise a son meilleur et pour y arriver je m'engage a continuer d'approfondir mes connaissances en suivant le courant des nouvelles technos.</p>
          </div>
          <h6 className="mt-0 mb-0">Pourquoi moi ?</h6>
          <ul>
            <li>
              <i className="fas fa-shoe-prints" />
              Je suis un passionné. sans joke, un vrai.
            </li>
            <li>
              <i className="fas fa-shoe-prints" />
              J'ai une très bonne écoute et j`aime collaborer et travailler en équipe
            </li>
            <li>
              <i className="fas fa-shoe-prints" />
              Je continue d`apprendre et de progresser sans cesse afin de pouvoir innover et être toujours à l'affut des nouvelles technos.
            </li>
          </ul>
          <div className="socials">
            <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
