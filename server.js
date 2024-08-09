// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public')); // Serves static files from the 'public' directory

// Endpoint to receive and save the prompt
app.post('/save-prompt', (req, res) => {
  const prompt = req.body.prompt;

  // Read existing prompts from the JSON file
  fs.readFile('prompts.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading prompts file');
    }

    let prompts = [];
    if (data) {
      prompts = JSON.parse(data);
    }

    // Add the new prompt
    prompts.push(prompt);

    // Write back to the JSON file
    fs.writeFile('prompts.json', JSON.stringify(prompts, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing to prompts file');
      }
      res.send('Prompt saved successfully');
    });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
