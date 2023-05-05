const fs = require('fs');
const {resolve} = require('path');

const filreReadCallback = (error, data)=> {
    if(error){
        console.log('gagal membaca data');
        return;
    }
    console.log(data);
};

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', filreReadCallback);