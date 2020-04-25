/**
 * Created by eliaslawrence on 05/12/18.
 */

const passport = require('passport');

module.exports = {
   // createAccount: (newUser) => {
   //   const Q = require('q');
   //   let deferred = Q.defer();
   //   TimelineService
   //     .createTimeline({})
   //     .then((timeline) => {
   //       newUser.timeline = timeline;
   //       BookcaseService
   //         .createBookcase({})
   //         .then((bookcase) => {
   //           newUser.bookcase = bookcase;
   //           UserService
   //             .createUser(newUser)
   //             .then((user) => {
   //               deferred.resolve({
   //                 token: CipherService.createToken(user),
   //                 user: user
   //               });
   //             })
   //             .catch((err) => {
   //               timeline
   //                 .destroy()
   //                 .then(() => {
   //                   bookcase
   //                     .destroy()
   //                     .then(() => {
   //                       let error = sails.config.errors.internal;
   //                       if (err && err.invalidAttributes && err.invalidAttributes.email[0] && err.invalidAttributes.email[0].rule === 'unique') {
   //                         error = sails.config.errors.uniqueEmail;
   //                       }
   //                       deferred.resolve({
   //                         type: "BAD_REQUEST",
   //                         error: error,
   //                       });
   //                     });
   //                 });
   //             })
   //         });
   //     })
   //     .catch((err) => {
   //       deferred.reject({
   //         type: "SERVER_ERROR",
   //         error: sails.config.errors.internal
   //       });
   //     });
   //   return deferred.promise;
   // },


   // createSocialAccount: (newSocialUser, req, res) => {
   //   const Q = require('q');
   //   let deferred = Q.defer();
   //   User
   //     .findOne({[newSocialUser.idField]: newSocialUser.id, deleted: false})
   //     .then((user) => {
   //       if (!user) {
   //         let newUser = {};
   //         newUser.email = newSocialUser.email;
   //         //todo refatorar password default para random password
   //         newUser.password = "teste1";
   //         newUser[newSocialUser.idField] = newSocialUser.id;
   //         newUser.profile = {};
   //         newUser.profile.name = newSocialUser.name;
   //         newUser.profile.picture = newSocialUser.picture;
   //         AuthService
   //           .createAccount(newUser)
   //           .then((accountCreated) => {
   //             deferred.resolve(accountCreated);
   //           })
   //           .catch((err) => {
   //             deferred.reject(err);
   //           });
   //       } else {
   //         SocialService
   //           .validateToken(newSocialUser)
   //           .then(() => {
   //             req.user = user;
   //             AuthService
   //               .signin(req, res);
   //           })
   //           .catch((err) => {
   //             deferred.reject({
   //               type: "UNAUTHORIZED",
   //               error: sails.config.errors.unauthorized
   //             });
   //           })
   //       }
   //     });
   //   return deferred.promise;
   // },

   signup: (req, res) => { 
    let user = req.body.user;
        
    UserEmployeeService.createUser(user).then((userSaved) => {                        
      res.ok({
        user: userSaved,
        token: CipherService.createToken(userSaved) 
      }); 
    })
    .catch((err) => {
      console.log(err);  
      ResponseService.sendError(res, err);
    });    
  },

  login: (req, res) => {
   console.log(req.user);
   passport.authenticate('local', AuthService.authenticate.bind(this, req, res))(req, res);
  },

  authenticate: (req, res, error, user, info) => {  
   // if (req.user) {
   //   user = req.body;
   // }   
   // console.log(req.user);
   if (error) {
    console.log('server error');
    return res.serverError(error);
   }
   if (!user) {
    console.log('not user');
     return res.unauthorized(
       {
         info: info && info.code,
         message: info && info.message
       }
     );
   }

   req.logIn(user, function(err) {
     console.log(req.user);
     if(err) {
       console.log(err);
       return ResponseService.sendError(res, err);//res.send(err);
     }
     console.log('ok');
     let token = CipherService.createToken(user);      
     // req.session.authenticated = true;
     return res.ok({
       message: info.message,
       user,
       token: token
     });
   });

   //Facebook
   // let token = CipherService.createToken(user);
   // return res.ok({
   //   token: token,
   //   user: {
   //     email: user.email,
   //     name: user.profile.name,
   //     picture: user.profile.picture,
   //     googleId: user.googleId,
   //     facebookId: user.facebookId
   //   }
   // });
  }
};
