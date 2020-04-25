/**
 * Store.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cep: {
      type: 'string',
      required: true
    },  
    address: {
      type: 'string',
      required: true
    },  
    number: {
      type: 'string',
      required: true
    }, 
    complement: {
      type: 'string'
    }, 
    neighborhood: {
      type: 'string',
      required: true
    }, 
    city: {
      type: 'string',
      required: true
    }, 
    state: {
      type: 'string',
      required: true
    },
    country: {
      type: 'string',
      required: true
    },
    placeID: {
      type: 'string',
      required: true
    },
  },
  connection: 'mongodb'
};
