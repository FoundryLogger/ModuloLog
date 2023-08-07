Hooks.on('ready', () => {
  game.socket.on('module.mio-modulo', async (data) => {
    const logMessage = `Giocatore ${data.playerName} ha modificato ${data.field} da ${data.oldValue} a ${data.newValue}\n`;

    // Scrivi su file utilizzando le API di Foundry
    const file = new FilePicker({
      type: "text",
      title: "Seleziona dove salvare il log",
      callback: async path => {
        await FilePicker.write(path, logMessage, { mode: "append" });
      }
    });
    
    file.browse();
  });
});
