import { useState } from 'react';

function FormulaireControle() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom || !email) return;
    alert(`✅ Formulaire contrôlé\nNom : ${nom}\nEmail : ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-controlled">
      <div className="form-row">
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Nom"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary">Envoyer</button>
      </div>
    </form>
  );
}

export default FormulaireControle;