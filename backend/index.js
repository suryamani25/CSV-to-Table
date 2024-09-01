const fs = require("fs");
const csv = require("csv-parser");
const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
// Uncomment this block if you want to generate the CSV file first
// const data = [
//     ['Name', 'Age', 'City',"Id"],
//     ['Surya', '28', 'New York','02'],
//     ['satyam', '34', 'Los Angeles','03'],
//     ['piyush', '25', 'Chicago','06'],
//     ['ayush', '40', 'Miami','09']
// ];

// const csvContent = data.map(row => row.join(',')).join('\n');

// fs.writeFile('data.csv', csvContent, (err) => {
//     if (err) throw err;
//     console.log('CSV file has been generated!');
// });

app.get("/data", (req, res) => {
  const results = [];
  
  fs.createReadStream("data.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      console.log(results);
      return res.json({results });  // Corrected from 'result' to 'results'
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
