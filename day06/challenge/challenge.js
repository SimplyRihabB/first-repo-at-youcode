/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day06/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.
let utilisateurs = [];
function ajouterUtilisateur(nom, email) {
    let id = utilisateurs.length + 1;
    let user = {
        id : id,
        nom : nom,
        email : email
    }
    utilisateurs.push(user);
    return user;
}
function trouverParEmail(email) {
    for ( let i=0; i<utilisateurs.length; i++ ) {
        if (utilisateurs[i].email === email) {
            return utilisateurs[i];
        }
    }
}
function supprimerParId(id) {
    for ( let i=0; i<utilisateurs.length; i++ ) {
        if (utilisateurs[i].id === id) {
            utilisateurs.splice(i,1);
            break;
        }
    }
}
function afficherAnnuaire() {
    for (let i=0; i<utilisateurs.length; i++) {
        let user = utilisateurs[i];
        console.log("- [" + user.id + "] " + user.nom + " <" + user.email + ">");
    }
}
ajouterUtilisateur("Anna", "anna@mail.com");
ajouterUtilisateur("Harry", "harry@mail.com");
afficherAnnuaire();
console.log(trouverParEmail("harry@mail.com"));
supprimerParId(1);
afficherAnnuaire();
