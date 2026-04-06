import { useContext, useRef } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

function Profil() {
  const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);
  const nomRef = useRef();

  const deconnexion = () => {
    setUtilisateur({ nom: '', connecte: false });
  };

  const connexion = (e) => {
    e.preventDefault();
    const nom = nomRef.current.value.trim();
    if (!nom) return;
    setUtilisateur({ nom, connecte: true });
  };

  return (
    <div>
      {utilisateur.connecte ? (
        <>
          <div className="profil-card">
            <div className="profil-avatar">👤</div>
            <div className="profil-info">
              <div className="profil-name">{utilisateur.nom}</div>
              <div className="profil-status">Connecté</div>
            </div>
          </div>
          <div className="profil-actions">
            <button className="btn-danger" onClick={deconnexion}>
              Se déconnecter
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="profil-offline">
            <span>🔒</span>
            <span>Vous êtes déconnecté. Entrez votre nom pour vous reconnecter.</span>
          </div>
          <form onSubmit={connexion} className="inscription-form">
            <input 
              type="text" 
              ref={nomRef} 
              placeholder="Votre nom" 
            />
            <div className="form-actions">
              <button type="submit" className="btn-success">
                Se connecter
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Profil;