const express = require('express');
const app = express();


app.use('/', express.static('public'));

const PORT = process.env.PORT || 8085;
app.listen(PORT, function() {
  console.log( `App escutando na porta ${PORT}`);
});