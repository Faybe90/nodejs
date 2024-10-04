const fs = require("fs");

// Écriture dans le fichier
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File has been created");

  // Lecture du fichier après création
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
  });
});
