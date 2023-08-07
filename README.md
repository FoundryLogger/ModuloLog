# ModuloLog
Registra le modifiche ai personaggi su FoundryVTT da parte dei giocatori. Questo modulo richiede un server Express separato per funzionare












### Guida all'installazione del Server Express per il Modulo di Log

#### Requisiti:
- Node.js (scaricabile da [qui](https://nodejs.org/))
- Un editor di testo (come Notepad++, Visual Studio Code, ecc.)

#### Passaggi per l'installazione:

1. **Scarica il modulo**: Scarica e installa il modulo come al solito in Foundry VTT.

2. **Trova la cartella del server**: Nella cartella del modulo, troverai una sottocartella contenente i file necessari per il server Express. Dovrebbe contenere i file `server.js`, `package.json`, e `package-lock.json`.

3. **Apri un terminale o prompt dei comandi**: Puoi farlo cercando "cmd" o "Terminale" sul tuo computer e aprendo l'applicazione corrispondente.

4. **Naviga alla cartella del server**: Utilizza il comando `cd` per navigare alla cartella che contiene i file del server Express. Ad esempio:

   ```bash
   cd C:/Percorso/Alla/Cartella/Del/Server
   ```

5. **Installa le dipendenze**: Esegui il comando seguente per installare tutte le dipendenze necessarie:

   ```bash
   npm install
   ```

6. **Configura il server**: Apri il file `server.js` con un editor di testo e configura le opzioni necessarie. Se stai utilizzando Foundry in modalità SSL, dovrai configurare i percorsi ai certificati SSL. Troverai commenti nel file che ti guideranno in questo processo.

7. **Avvia il server**: Torna al terminale e esegui il comando seguente per avviare il server Express:

   ```bash
   node server.js
   ```

   Dovresti vedere un messaggio che indica che il server è in ascolto sulla porta 3000.

8. **Verifica la connessione**: Assicurati che il modulo sia configurato correttamente in Foundry VTT e prova a effettuare una modifica registrabile. Se tutto è configurato correttamente, dovresti vedere le modifiche registrate nel file di log.

---

Con questi passaggi, gli utenti dovrebbero essere in grado di installare e configurare il server Express necessario per il tuo modulo. Puoi personalizzare ulteriormente queste istruzioni in base alle specifiche esigenze del tuo modulo.
