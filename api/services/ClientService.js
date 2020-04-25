/**
 * ClientService
 *
 * @description :: Server-side logic for managing clients
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
  
  createClient: (newClient) => {    
    return Client.create(newClient);
    
    // .then(result => {
    //     console.log(result);
    //     res.created(result);
    //   }      
    // ).catch((err) => {
    //   console.log(err);
    //   res.unprocessableEntity(err);
    // });

    // let deferred = Q.defer();
    // verifyEmail(newUser.email)
    //   .then(()=>{
    //     User
    //       .create(newUser)
    //       .then((user) => {
    //         deferred.resolve(user);
    //       })
    //       .catch((err) => {
    //         deferred.reject(err);
    //       });
    //   }).catch((err)=>{
    //   deferred.reject(err);
    // })

    // return deferred.promise;
  },
};
