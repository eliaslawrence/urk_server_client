/**
 * Created by elias on 20/12/18.
 */

/**
 * isAuthenticated
 * @description :: Policy to inject user in req via JSON Web Token
 */
var passport = require('passport');
const request = require('request');

module.exports = function (req, res, next) {
  console.log('Authenticated');
  const formData = {};
   
  request.post({url: 'http://user:1337/auth/isAuthenticated/', form: formData}, function (error, response, body) {
    if (error) {
      console.log('error');
      return ResponseService.sendError(error, res);        
    } else if (ResponseService.isError(response)){
      console.log('erro1');
      return ResponseService.sendError(res);
    } else {
      console.log(body);
      req.user = body;    
      next();
    }                
  });  

  // passport.authenticate('jwt', function (error, user, info) {
  //   /*//todo remover trigger login
  //   user = null;
  //   info = {
  //     code: 'UNAUTHORIZED'
  //   };*/
    
  //   if (error) {
  //     return res.serverError(error);
  //   }
  //   if (!user) {
  //     res.unauthorized(
  //       {
  //         info: info && info.code,
  //         message: info && info.message
  //       }
  //     );
  //     return;
  //   }    
  //   req.user = user;    
  //   next();
  // })(req, res);
};
