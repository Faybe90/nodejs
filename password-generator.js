const generator = require("generate-password");

// Fonction pour générer un mot de passe
const password = generator.generate({
  length: 10, // Longueur du mot de passe
  numbers: true, // Inclure des chiffres
  symbols: true, // Inclure des symboles
  uppercase: true, // Inclure des majuscules
  lowercase: true, // Inclure des minuscules
});

console.log(`Generated password: ${password}`);
