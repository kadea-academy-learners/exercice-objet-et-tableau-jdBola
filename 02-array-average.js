// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"
const notes = [10, 16, 7, 9,13]
function averageNote(notes) {
	  const total = notes.reduce((acc, note) => acc + note, 0);
  		const moyenne = total / notes.length;

  		return moyenne >= 10 ? "Réussi" : "Échoué";
}

module.exports = {
	averageNote,
};



