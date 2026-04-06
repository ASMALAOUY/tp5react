import { useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';
import FormulaireInscription from './FormulaireInscription';
import './App.css';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Alice',
    connecte: true
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div className="app">
        <header className="app-header">
          <div className="header-badge">TP React</div>
          <h1>Formulaires & Contexte</h1>
          <p className="header-subtitle">Apprentissage des fondamentaux React</p>
        </header>

        <main className="app-main">
          <section className="section">
            <div className="section-label">Étape 2</div>
            <h2>Formulaire Contrôlé</h2>
            <p className="section-desc">Les champs sont reliés au <code>state</code> via <code>useState</code>.</p>
            <FormulaireControle />
          </section>

          <section className="section">
            <div className="section-label">Étape 3</div>
            <h2>Formulaire Non-Contrôlé</h2>
            <p className="section-desc">La valeur est lue directement via <code>useRef</code>.</p>
            <FormulaireNonControle />
          </section>

          <section className="section">
            <div className="section-label">Étape 5–6</div>
            <h2>Lifting State Up</h2>
            <p className="section-desc">L'état <code>celsius</code> est géré par le parent et partagé à l'enfant.</p>
            <TemperatureConvertor />
          </section>

          <section className="section">
            <div className="section-label">Étape 7–8</div>
            <h2>Profil Utilisateur</h2>
            <p className="section-desc">Les données sont partagées via <code>useContext</code>.</p>
            <Profil />
          </section>

          <section className="section">
            <div className="section-label">Bonus</div>
            <h2>Formulaire d'Inscription</h2>
            <p className="section-desc">Exercice facultatif avec validation des champs.</p>
            <FormulaireInscription />
          </section>
        </main>

        <footer className="app-footer">
          <p>TP React Débutant · Formulaires, Props & Contexte</p>
        </footer>
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;