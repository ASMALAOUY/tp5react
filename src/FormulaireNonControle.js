import { useRef } from 'react';

function FormulaireNonControle() {
  const nomRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nom = nomRef.current.value;
    const email = emailRef.current.value;
    if (!nom || !email) return;
    alert(` Formulaire non-contrôlé\nNom : ${nom}\nEmail : ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-uncontrolled">
      <div className="form-row">
        <input 
          type="text" 
          ref={nomRef} 
          placeholder="Nom" 
        />
        <input 
          type="email" 
          ref={emailRef} 
          placeholder="Email" 
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary">Envoyer</button>
      </div>
    </form>
  );
}

export default FormulaireNonControle;