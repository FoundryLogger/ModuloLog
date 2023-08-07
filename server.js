const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const logChange = (playerName, field, oldValue, newValue) => {
  const timestamp = new Date().toLocaleString('it-IT');
  const logFilePath = 'path to save log file - percorso per il file di log/logfile.txt';

  if (!fs.existsSync(logFilePath)) {
    const header = `| Date & Time           | Player     | Field                           | Old Value      | New Value      |\n` +
                   `|-----------------------|------------|---------------------------------|----------------|----------------|\n`;
    fs.writeFileSync(logFilePath, header);
  }

  const logMessage = `| ${timestamp} | ${playerName.padEnd(10)} | ${field.padEnd(32)} | ${JSON.stringify(oldValue).padEnd(14)} | ${JSON.stringify(newValue).padEnd(14)} |\n`;
  fs.appendFileSync(logFilePath, logMessage);
};

const compareObjects = (oldObj, newObj, path = '', changes = []) => {
  console.log(`Confronto tra: ${JSON.stringify(oldObj)} e ${JSON.stringify(newObj)}`);
  for (const key in oldObj) {
    if (oldObj.hasOwnProperty(key) && newObj.hasOwnProperty(key)) {
      const fullPath = path ? path + '.' + key : key;
      if (newObj[key] !== null && typeof oldObj[key] === 'object' && oldObj[key] !== null) {
        compareObjects(oldObj[key], newObj[key], fullPath, changes);
      } else if (newObj[key] !== null && JSON.stringify(oldObj[key]) !== JSON.stringify(newObj[key])) {
        changes.push({
          field: fullPath,
          oldValue: oldObj[key],
          newValue: newObj[key]
        });
      }
    }
  }
  return changes;
};

app.post('/log', (req, res) => {
  console.log('Dettagli della richiesta:', JSON.stringify(req.body, null, 2));
  const changes = compareObjects(req.body.oldValue, req.body.newValue);

  changes.forEach(change => {
    logChange(req.body.playerName, change.field, change.oldValue, change.newValue);
  });
  res.status(200).send('Registrato');
});

// The server is set up to handle an HTTPS connection; if it's not needed, remove the certificate parts
// and change the sections from HTTPS to HTTP. However, if you're using Foundry in SSL mode, you must
// enable the same certificates as follows:

//il server è settato per gestire la connessione https se non serve rimuovere la parte dei certificati
//e cambiare le parti da https a http , se però stai usando foundry in modalità ssl devi per forza
//abilitare gli stessi certificati come segue

const privateKey = fs.readFileSync('path/privkey.pem', 'utf8');
const certificate = fs.readFileSync('path/fullchain.pem', 'utf8');
const ca = fs.readFileSync('path/fullchain.pem', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(3000, () => {
  console.log('Server HTTPS in ascolto sulla porta 3000');
});
