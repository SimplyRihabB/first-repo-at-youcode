/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...). Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day06/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let original = {
    nom : "John",
    dataPersonel : {
        age : 24,
        ville : "Nador",
        salaire : 30000,
    }
}
let originalCopie = {...original};
originalCopie.dataPersonel.age = 25;
console.log(original.dataPersonel.age);
console.log(originalCopie.dataPersonel.age);
/*on utilise l'operateur spread qui juste fait une copie de surface pour les memes données de l'original,
* mais au niveau de la deuxieme objet l'objet imbriqué seule la reference mémoire vers l'objet est copiée 
* et cela explique pourquoi lorsque on fait une modification au niveau de originalCopie.dataPersonel.age 
* il impact sur original.dataPersonel.age car ils pointent vers le meme objet en memoire */

//structuredClone :
let copieModerne = structuredClone(original);
copieModerne.dataPersonel.age = 26;
console.log(copieModerne.dataPersonel.age);
console.log(original.dataPersonel.age);
//JSON parse/stringify :
let copieJSON = JSON.parse(JSON.stringify(original));
copieJSON.dataPersonel.age = 27;
console.log(copieJSON.dataPersonel.age);
console.log(original.dataPersonel.age);
//ces deux solution n'impact pas l'origne il fait une copie profondeure.