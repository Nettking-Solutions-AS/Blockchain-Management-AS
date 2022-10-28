/*
Project : Blockchain Management Systems
FileName :  config.js
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the file which maintain globl variable for the application
*/
const config = {
    app: {
      port: 5000
    },
    db: {
      host: 'mongodb',
      port: 27017,
      username: '',
      password: '',
      name: 'metamask',
      prefix:'Nettking'
    },
    mail: {
      type:"smtp",
      smtp: {
        host:"mail.byggminblokkjede.no",
        secure:true,
        port:465,
        username:'post@byggminblokkjede.no',
        password:'Nettking2022!'
      }
    },
    site_name:'Cryptotrades',
    site_link:'#',
    site_email: '',
    secret_key:'jfVRtwN7xBl7LjRucIUdPnrh1UVUhzhZ',
    public_key:'6gluXXunc77uukLJbSmlQ31ckSlLq8Qi',
    converstion_url: "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",
    rpcurl: "https://rinkeby.infura.io/v3/64fa77a39b9a4c31b186fb2148edff70",
    owner: {
      address: "0xaCeEF0453dE61B48CF0159749f192F5fc6a77298",
      key: "1c0cf08b59bc41dab3553be46203a33e"
    }
   };
   
   
module.exports = config;