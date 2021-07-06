window.addEventListener('load', () => {

    
    const inputField = document.querySelector('#inputUrl');
    const encodebtn = document.querySelector('#encodeButn');
    const decodebtn = document.querySelector('#decodeButn');
    const outputField = document.querySelector('#outputUrl');
    const s256hash = document.querySelector('#s256Butn');
    const s512hash = document.querySelector('#s512Butn');
    // inputField.addEventListener('input', event => {
       
    // });
    
    encodebtn.addEventListener('click', event => {
        // const crypto = require('crypto');
        // const algo = 'md5';  
        // const encoded=crypto.createHash(algo).update(inputField.value).digest('hex');
        const encoded = md5(inputField.value);
         outputField.value=encoded;
    });

    decodebtn.addEventListener('click', event => {
         
     const encoded =  sha1(inputField.value);
       outputField.value=encoded;
    });

    s256hash.addEventListener('click', event => {
         
        const encoded =  sha256(inputField.value);
          outputField.value=encoded;
       });

    s512hash.addEventListener('click', event => {
         
        const encoded =  sha512(inputField.value);
          outputField.value=encoded;
       });

     
});