import { useState } from 'react';

function FormulaireInscription() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    password: ''
  });
  const [inscrit, setInscrit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nom || !formData.email || !formData.password) return;
    setInscrit(true);
    alert(` Inscription réussie !\nNom : ${formData.nom}\nEmail : ${formData.email}`);
  };

  if (inscrit) {
    return (
      <div className="inscription-success">
        <span></span>
        <span>Merci {formData.nom} ! Votre inscription est confirmée.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="inscription-form">
      <div className="form-row">
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Nom complet"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Mot de passe"
      />
      <div className="form-actions">
        <button type="submit" className="btn-primary">S'inscrire</button>
      </div>
    </form>
  );
}

export default FormulaireInscription;