/*
Écrire une fonction "createUser" qui permet de créer un utilisateur.

La fonction doit accepter trois paramètres :
    - nom (string) : le nom de l'utilisateur
    - age (number) : l'âge de l'utilisateur
    - estConnecte (boolean) : indique si l'utilisateur est connecté

La fonction doit retourner un objet contenant ces trois propriétés :
    - nom (string)
    - age (number)
    - estConnecte (boolean)
*/

function createUser(nom, age, estConnecte) {
  if (typeof nom !== "string") {
    return "Erreur : le nom doit être une chaîne de caractères.";
  }
  if (typeof age !== "number") {
    return "Erreur : l'âge doit être un nombre.";
  }
  if (typeof estConnecte !== "boolean") {
    return "Erreur : estConnecte doit être un booléen.";
  }
    return { nom, age, estConnecte };
}

console.log(createUser("Jean", 25, true));
console.log(createUser("Sarah", "25", false));



module.exports = {
    createUser,
};

