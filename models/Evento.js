const { Schema, model } = require('mongoose');

const EventoSchema = Schema({

    marca:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    pautada:{
        type: String,
        required: true
    },
    redes:{
        type: String,
        required: true 
    },
    description:{
        type: String,
        required: true
    },
    comments: {
        type: String,        
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }

});

EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Evento', EventoSchema );

