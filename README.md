# ModuloLog
Record changes to characters player sheet on FoundryVTT by players. This module requires a separate Express server to function.

**Installation and Activation**
After installing the module within Foundry VTT, activate it like you would with any other module. No specific configurations or customizations are required within Foundry.

**Express Server Configuration**
The module requires an Express server to function correctly. Here are the steps you need to follow:

**Installation**: Follow the instructions provided below to install the Express server and necessary files.
**SSL Certificates**: If you are using Foundry in SSL mode, you will need to enable the same certificates by following the detailed instructions provided.
**Firewall**: Ensure that your system’s firewall is configured to allow traffic on the port used by the Express server (e.g., port 3000). This might require adding a specific rule in your firewall software.

**Common Problem Resolution**
**Connection Problems**: If you encounter difficulties in connecting Foundry to the Express server, check the firewall settings and make sure the ports are configured correctly.
**SSL Problems**: If you are using an SSL connection, ensure that the certificates are installed and configured correctly. Errors at this stage can lead to connection problems.
**Log File Reading Problems**: The log file is saved in a specific location on your system. Make sure you have the appropriate read permissions to access this file.

**Privacy and Security**
The module records character changes within the game, but does not collect or transmit users' personal or sensitive data. All data is handled locally and securely.

### Guide to Installing the Express Server for the Log Module

#### Requirements:
- Node.js (downloadable from [here](https://nodejs.org/))
- A text editor (like Notepad++, Visual Studio Code, etc.)

#### Steps for Installation:

1. **Download the module**: Download and install the module as usual in Foundry VTT.

2. **Find the server folder**: In the module folder, you will find a subfolder containing the necessary files for the Express server. It should contain the files `server.js`, `package.json`, and `package-lock.json`.

3. **Open a terminal or command prompt**: You can do this by searching for "cmd" or "Terminal" on your computer and opening the corresponding application.

4. **Navigate to the server folder**: Use the `cd` command to navigate to the folder containing the Express server files. For example:

   
   *cd C:/Path/To/Server/Folder*
   

5. **Install dependencies**: Run the following command to install all required dependencies:

   
   *npm install*
 

6. **Configure the server**: Open the `server.js` file with a text editor and configure the necessary options. If you are using Foundry in SSL mode, you will need to configure the paths to the SSL certificates. You will find comments in the file guiding you through this process.

7. **Start the server**: Return to the terminal and run the following command to start the Express server:

  
   *node server.js*
 

   You should see a message indicating that the server is listening on port 3000.

8. **Verify the connection**: Make sure the module is configured correctly in Foundry VTT and try making a recordable change. If everything is set up correctly, you should see the changes recorded in the log file.

---

### How to Read the Results in the TXT File

1. **Locate the File**: The TXT file with the results of the changes is saved in a specific location on your server. For this module, the default path is `C:/path/logfile.txt`.

2. **Open the File**: You can open the TXT file using any text editor such as Notepad, Notepad++, Sublime Text, or Visual Studio Code. Simply double-click the file or open it through the text editor.

3. **Read the Results**: In the file, you will find an ASCII table that records each change made to the characters. Each line represents a separate change and includes details such as the date and time of the change, the player's name, the field changed, and the old and new values.
 
 Here how appear

| Date & Time        | Player     | Field                            | Old Value      | New Value      |
|--------------------|------------|----------------------------------|----------------|----------------|
| 8/8/2023, 00:38:09 | Tester     | system.abilities.str.value       | 18             | 19             |
| 8/8/2023, 00:38:09 | Tester     | _stats.modifiedTime              | 1691447676686  | 1691447888743  |
| 8/8/2023, 00:41:11 | Tester     | system.currency.pp               | 5              | 6              |
| 8/8/2023, 00:41:11 | Tester     | _stats.modifiedTime              | 1691447888743  | 1691448070846  |
| 8/8/2023, 00:41:21 | Tester     | system.attributes.ac.flat        | null           | 21             |
| 8/8/2023, 00:41:21 | Tester     | system.attributes.ac.calc        | "default"      | "flat"         |
| 8/8/2023, 00:41:21 | Tester     | _stats.modifiedTime              | 1691448070846  | 1691448080489  |

4. **Search and Filter**: If you wish to search for specific changes, you can use the search function (usually Ctrl+F) in your text editor. You can also copy and paste the data into a spreadsheet like Excel if you wish to filter or sort the information.

5. **Continuous Updates**: The file will be continuously updated with new entries every time a change is made. You can keep the file open and refresh it periodically to view new changes.

------
Notice: Support for Connections with SSL Certificates
This module has been designed to work with connections that utilize SSL certificates. Ensure that you have a valid SSL certificate installed on your server and configure the module properly to use it.

If you are using Foundry in SSL mode, you will need to enable the same certificates in the module.

If you do not need an SSL connection, you will have to make some changes to the server code. Specifically, you will need to remove the part related to certificates and change the parts from HTTPS to HTTP.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

**Lingua Italiana**
# ModuloLog
Registra le modifiche alle schede dei personaggi dei giocaotri su FoundryVTT da parte dei giocatori. Questo modulo richiede un server Express separato per funzionare

**Installazione e Attivazione**
Dopo aver installato il modulo all'interno di Foundry VTT, attivalo come faresti con qualsiasi altro modulo. Non sono richieste configurazioni o personalizzazioni specifiche all'interno di Foundry.

**Configurazione del Server Express**
Il modulo richiede un server Express per funzionare correttamente. Ecco i passaggi che devi seguire:

**Installazione**: Segui le istruzioni fornite di seguito per installare il server Express e i file necessari.
**Certificati SSL**: Se stai utilizzando Foundry in modalità SSL, dovrai abilitare gli stessi certificati seguendo le istruzioni dettagliate fornite.
**Firewall**: Assicurati che il firewall del tuo sistema sia configurato per consentire il traffico sulla porta utilizzata dal server Express (ad esempio, la porta 3000). Questo potrebbe richiedere l'aggiunta di una regola specifica nel tuo software firewall.

**Risoluzione dei Problemi Comuni**
**Problemi di Connessione**: Se incontri difficoltà nel collegare Foundry al server Express, verifica le impostazioni del firewall e assicurati che le porte siano configurate correttamente.
**Problemi SSL**: Se stai utilizzando una connessione SSL, assicurati che i certificati siano installati e configurati correttamente. Gli errori in questa fase possono portare a problemi di connessione.
**Problemi di Lettura del File di Log**: Il file di log è salvato in un percorso specifico sul tuo sistema. Assicurati di avere i permessi di lettura appropriati per accedere a questo file.

**Privacy e Sicurezza**
Il modulo registra le modifiche ai personaggi all'interno del gioco, ma non raccoglie o trasmette dati personali o sensibili degli utenti. Tutti i dati sono gestiti localmente e in modo sicuro.

### Guida all'installazione del Server Express per il Modulo di Log

#### Requisiti:
- Node.js (scaricabile da [qui](https://nodejs.org/))
- Un editor di testo (come Notepad++, Visual Studio Code, ecc.)

#### Passaggi per l'installazione:

1. **Scarica il modulo**: Scarica e installa il modulo come al solito in Foundry VTT.

2. **Trova la cartella del server**: Nella cartella del modulo, troverai una sottocartella contenente i file necessari per il server Express. Dovrebbe contenere i file `server.js`, `package.json`, e `package-lock.json`.

3. **Apri un terminale o prompt dei comandi**: Puoi farlo cercando "cmd" o "Terminale" sul tuo computer e aprendo l'applicazione corrispondente.

4. **Naviga alla cartella del server**: Utilizza il comando `cd` per navigare alla cartella che contiene i file del server Express. Ad esempio:

   
   *cd C:/Percorso/Alla/Cartella/Del/Server*
   

5. **Installa le dipendenze**: Esegui il comando seguente per installare tutte le dipendenze necessarie:

   
   *npm install*
 

6. **Configura il server**: Apri il file `server.js` con un editor di testo e configura le opzioni necessarie. Se stai utilizzando Foundry in modalità SSL, dovrai configurare i percorsi ai certificati SSL. Troverai commenti nel file che ti guideranno in questo processo.

7. **Avvia il server**: Torna al terminale e esegui il comando seguente per avviare il server Express:

  
   *node server.js*
 

   Dovresti vedere un messaggio che indica che il server è in ascolto sulla porta 3000.

8. **Verifica la connessione**: Assicurati che il modulo sia configurato correttamente in Foundry VTT e prova a effettuare una modifica registrabile. Se tutto è configurato correttamente, dovresti vedere le modifiche registrate nel file di log.

---

### Come Leggere i Risultati nel File TXT

1. **Localizza il File**: Il file TXT con i risultati delle modifiche viene salvato in una posizione specifica sul tuo server. Per questo modulo, il percorso predefinito è `C:/percorso/logfile.txt`.

2. **Apri il File**: Puoi aprire il file TXT utilizzando un qualsiasi editor di testo come Notepad, Notepad++, Sublime Text o Visual Studio Code. Basta fare doppio clic sul file o aprirlo tramite l'editor di testo.

3. **Leggi i Risultati**: Nel file, troverai una tabella ASCII che registra ogni modifica apportata ai personaggi. Ogni riga rappresenta una modifica separata e include dettagli come la data e l'ora della modifica, il nome del giocatore, il campo modificato e i valori vecchi e nuovi.

   Ecco un esempio di come apparirà 

| Date & Time        | Player     | Field                            | Old Value      | New Value      |
|--------------------|------------|----------------------------------|----------------|----------------|
| 8/8/2023, 00:38:09 | Tester     | system.abilities.str.value       | 18             | 19             |
| 8/8/2023, 00:38:09 | Tester     | _stats.modifiedTime              | 1691447676686  | 1691447888743  |
| 8/8/2023, 00:41:11 | Tester     | system.currency.pp               | 5              | 6              |
| 8/8/2023, 00:41:11 | Tester     | _stats.modifiedTime              | 1691447888743  | 1691448070846  |
| 8/8/2023, 00:41:21 | Tester     | system.attributes.ac.flat        | null           | 21             |
| 8/8/2023, 00:41:21 | Tester     | system.attributes.ac.calc        | "default"      | "flat"         |
| 8/8/2023, 00:41:21 | Tester     | _stats.modifiedTime              | 1691448070846  | 1691448080489  |


4. **Ricerca e Filtraggio**: Se desideri cercare modifiche specifiche, puoi utilizzare la funzione di ricerca (solitamente Ctrl+F) nel tuo editor di testo. Puoi anche copiare e incollare i dati in un foglio di calcolo come Excel se desideri filtrare o ordinare le informazioni.

5. **Aggiornamenti Continui**: Il file verrà aggiornato continuamente con nuove voci ogni volta che viene apportata una modifica. Puoi tenere aperto il file e aggiornarlo periodicamente per visualizzare le nuove modifiche.

------
Avviso: Supporto per Connessioni con Certificati SSL
Questo modulo è stato progettato per lavorare con connessioni che utilizzano certificati SSL. Assicurati di avere un certificato SSL valido installato sul tuo server e di configurare correttamente il modulo per utilizzarlo.

Se stai utilizzando Foundry in modalità SSL, è necessario abilitare gli stessi certificati nel modulo.

Se non hai bisogno di una connessione SSL, dovrai apportare alcune modifiche al codice del server. In particolare, dovrai rimuovere la parte relativa ai certificati e cambiare le parti da HTTPS a HTTP.

