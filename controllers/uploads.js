const path = require('path');
const { v4: uuidv4 } = require('uuid');
const {response} = require('express');

const cargarArchivo = (req, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).send('No files were uploaded.');
        return;
    }

}

module.exports = {
    cargarArchivo
}