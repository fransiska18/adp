const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to get the JSON file
app.get('/get-json', (req, res) => {
  const filePath = path.join(__dirname, 'assets', req.query.file_json);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file', err);
      return res.status(500).json({ message: 'Error reading file' });
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to update the JSON file
app.post('/update-json', (req, res) => {
  const updatedData = req.body.data;
  const filePath = path.join(__dirname, 'assets', req.body.file_json);
  const task_path = path.join(__dirname, 'assets', 'tasklist.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file', err);
      return res.status(500).json({ message: 'Error reading file' });
    }
    //updated data here
    // console.log(updatedData.read.TransactionHistory)
    const FinalData = JSON.parse(data);
    FinalData.read.Identity.AccountNumber = updatedData.read.Identity.AccountNumber
    FinalData.read.Identity.Address = updatedData.read.Identity.Address
    FinalData.read.Identity.BankOffice = updatedData.read.Identity.BankOffice
    FinalData.read.Identity.Currency = updatedData.read.Identity.Currency
    FinalData.read.Identity.Name = updatedData.read.Identity.Name
    FinalData.read.Identity.Product = updatedData.read.Identity.Product
    FinalData.read.TransactionHistory = updatedData.read.TransactionHistory.__zone_symbol__value
    
    fs.writeFile(filePath, JSON.stringify(FinalData, null, 2), (err) => {
      if (err) {
        console.error('Error writing file', err);
        return res.status(500).json({ message: 'Error writing file' });
      }
      fs.readFile(task_path, 'utf8', (err, tasklist_data) => {
        if (err) {
          console.error('Error reading file', err);
          return res.status(500).json({ message: 'Error reading file' });
        }
        const Current_TaskList_data = JSON.parse(tasklist_data);
        Current_TaskList_data.find(Current_TaskList_data=>Current_TaskList_data.id===req.body.item_id).status = req.body.satus_tasklist
        fs.writeFile(task_path, JSON.stringify(Current_TaskList_data, null, 2), (err) => {
          if (err) {
            console.error('Error writing file', err);
            return res.status(500).json({ message: 'Error writing file' });
          }
          res.json({ message: 'File updated successfully' });
        });
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
