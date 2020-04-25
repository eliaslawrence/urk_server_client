/**
 * UserService
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Services
 */

module.exports = {
  // delete: (sessionUser) => {
  //   const deferred = require('q').defer();
  //   User
  //     .update({ id: sessionUser.id }, { deleted: true })
  //     .then((updated) => {
  //       deferred.resolve(sessionUser);
  //     })
  //     .catch((err) => {
  //       deferred.reject({
  //         type: "SERVER_ERROR",
  //         error: sails.config.errors.internal
  //       });
  //     });
  //   return deferred.promise;
  // },
  createStoreMock: (req, res) => {  
    console.log('createStoreMock')
    let newStore = {name: 'Lojinha do Sr. Raimundo'};      
    return Store.create(newStore).then((result) => {
      res.created(result);
    }).catch((err) => {
      ResponseService.sendError(res, err);
    });
  },
  
  createStore: (req, res) => {  
    let newStore = req.body;      
    return Store.create(newStore).then((result) => {
      res.created(result);
    }).catch((err) => {
      ResponseService.sendError(res, err);
    });
  },

  findStoreMock: (req, res) => {
    let storeName = 'Lojinha do Sr. Raimundo';
    return Store.findOne({name: storeName}).then((result) => {
      res.ok(result);
    }).catch((err) => {
      ResponseService.sendError(res, err);
    });
  },

  findStore: (req, res) => {
    let storeName = req.body.storeName;
    return Store.findOne({name: storeName}).then((result) => {
      res.ok(result);
    }).catch((err) => {
      ResponseService.sendError(res, err);
    });
  }


};
