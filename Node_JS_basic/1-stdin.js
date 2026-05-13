// Affiche le message de bienvenue
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Écoute l'entrée de l'utilisateur (stdin)
process.stdin.on('readable', () => {
  const input = process.stdin.read();

  if (input !== null) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

// Écoute l'événement de fermeture (quand l'utilisateur finit ou via un pipe)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
