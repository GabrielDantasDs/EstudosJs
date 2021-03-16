const https = require('https');

https.get('https://api-pacientes.herokuapp.com/pacientes', (resp) => {
  
  let data = '';
  /*resp = Object.toString(resp.require.text);*/
  console.log(typeof(resp));

});
