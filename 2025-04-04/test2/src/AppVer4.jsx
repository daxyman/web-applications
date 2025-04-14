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
    alert(
      "salut! " +
        nom +
        " ton email est : " +
        email +
        " et ton mot de passe est : " +
        password
    );

    formElem.reset();
  }

  function signUp(formData) {
    //does not receive an event, receives formData directly

    const email = formData.get("email");
    const nom = formData.get("test");
    const password = formData.get("password");
    const favColor = formData.get("favColor")
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    const employmentStatus = formData.get("employmentStatus");

    console.log(email);
  }

  return (
    <section className="container">
      <h2>Inscription</h2>

      <form
        className="form"
        action={
          signUp
        } /* this is different to a onclick, (i dont rlly get why, ask) */
      >
        <label htmlFor="nom">Nom :</label>
        <input
          type="name"
          id="nom"
          /* formData.get(test) takes this mf  -------> */ name="test"
          /* <------- */ placeholder="John Doe"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          /* this is different from a input, you can write as much as you want and it will acoomodate to it*/
        ></textarea>

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          /* formData.get(test) takes this mf  -------> */ name="email" /* <------- */
          placeholder="john-doe@exemple.com"
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          /* formData.get(test) takes this mf  -------> */ name="password" /* <------- */
        />

        <fieldset>
          <legend>Situation professionnelle :</legend>

          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Sans emploi
          </label>

          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Temps partiel
          </label>

          <label>
            <input
              type="radio"
              name="employmentStatus"
              defaultChecked={true}
              value="full-time"
            />
            Temps plein
          </label>
        </fieldset>

        <fieldset>
          <legend>Restrictions alimentaires :</legend>

          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Cachère
          </label>

          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>

          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              defaultChecked={true}
              value="gluten-free"
            />
            Sans gluten
          </label>
        </fieldset>

        <button className="submit-btn">Inscription</button>
      </form>
    </section>
  );
}

export default App;
