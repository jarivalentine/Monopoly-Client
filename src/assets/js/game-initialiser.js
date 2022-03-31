"use strict";
let _token = null;

document.addEventListener('DOMContentLoaded',init);

function init(){
    testConnection();
    document.querySelector('form').addEventListener('submit', processConnectionForm)
}


function testConnection(){
    fetchFromServer('/tiles','GET').then(tiles => console.log(tiles)).catch(errorHandler);
}