window.addEventListener('load', () => {

    const inputField = document.querySelector('#inputUrl');
    const encodebtn = document.querySelector('#encodeButn');
    const decodebtn = document.querySelector('#decodeButn');
    const outputField = document.querySelector('#outputUrl');

    // inputField.addEventListener('input', event => {
       
    // });
    
    encodebtn.addEventListener('click', event => {
        const encoded=btoa(inputField.value);
        outputField.value=encoded;
    });

    decodebtn.addEventListener('click', event => {
        const decoded=atob(inputField.value);
        outputField.value=decoded;
    });

})