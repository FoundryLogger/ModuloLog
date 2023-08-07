let oldActorState = null;

Hooks.on('preUpdateActor', (actor) => {
  oldActorState = duplicate(actor.data); // Cattura lo stato corrente
});

Hooks.on('updateActor', async (actor) => {
  if (game.user.isGM || !oldActorState) return;

  const newActorState = actor.data; // Cattura il nuovo stato

  const data = {
    playerName: game.user.name,
    oldValue: oldActorState,
    newValue: newActorState
  };

  // Effettua una richiesta POST al tuo server Express
  try {
    const response = await fetch('address:3000/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      console.error('Errore nella registrazione del log:', response.statusText);
    }
  } catch (err) {
    console.error('Errore nel contattare il server:', err);
  }

  oldActorState = null; // Resetta lo stato vecchio
});
