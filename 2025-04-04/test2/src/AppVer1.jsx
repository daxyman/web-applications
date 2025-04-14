function App() {
  function handleSubmit(event) {
    // prevenir le changement de la page
    event.preventDefault();

    // recuperer l'objet des donnees du formulaire
    const formElem = event.currentTarget;

    // recuperer les données du formulaire
    const formData = new FormData(formElem);

    //chercher la valeur du champ email
    const email = formData.get("email");
    const nom = formData.get("test");
    const password = formData.get("password");
    
    //affiche alert ; salut [ nom ] ton email est : [email] et ton mot de passe est : [ mdp ];
    alert("salut! "+ nom +" ton email est : "+email+" et ton mot de passe est : "+password);

    formElem.reset();
  }
  return (


    <section className="container">

      <h2>Inscription</h2>


      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom :</label>
        <input type="name" id="nom"   /* formData.get(test) takes this mf  -------> */  name="test"/* <------- */    placeholder="John Doe" />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          /* formData.get(test) takes this mf  -------> */  name="email"/* <------- */
          placeholder="john-doe@exemple.com"
        />

        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" /* formData.get(test) takes this mf  -------> */  name="password"/* <------- */ />

        <button className="submit-btn">
          Inscription
        </button>
      </form>


    </section>
  );
}

export default App;
