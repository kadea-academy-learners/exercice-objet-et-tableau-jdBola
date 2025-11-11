// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(listeUtilisateurs) {
	return utilisateurs
    .filter(user => user.estAdmin)
    .map(user => user.nom);
}
const listeUtilisateurs = [
  { nom: "Jean", age: 25, estAdmin: true },
  { nom: "Dino", age: 30, estAdmin: false },
  { nom: "Sarah", age: 22, estAdmin: true },
  { nom: "Ali", age: 28, estAdmin: false }
];
console.log(whoIsAdmin(listeUtilisateurs));
module.exports = {
	whoIsAdmin,
};


