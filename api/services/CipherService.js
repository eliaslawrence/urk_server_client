/**
 * Created by eliaslawrence on 05/12/18.
 */

var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

module.exports = {
  secret: sails.config.jwtSettings.secret,
  issuer: sails.config.jwtSettings.issuer,
  audience: sails.config.jwtSettings.audience,

  /**
   * Hash the password field of the passed user.
   */
  hashPassword: function (user) {
    return new Promise((resolve,reject) => {
      if (user.password) {      
        bcrypt.genSalt(10, function(err, salt){
          if (err) {
            reject(err);            
          }
          bcrypt.hash(user.password, salt, null, function(err, hash){            
            // if(err) return cb(err);   
            if (err) {
              reject(err);            
            }      
            user.password = hash;                            
          });
        });      
      }  
      
      resolve({user: user});
    }); 
  },

  /**
   * Compare user password hash with unhashed password
   * @returns boolean indicating a match
   */
  comparePassword: function(password, user){
    return bcrypt.compareSync(password, user.password);
  },  

  /**
   * Create a token based on the passed user
   * @param user
   */
  createToken: function(user)
  {
    return jwt.sign(
      {
        user: user.toJSON()
      },
      sails.config.jwtSettings.secret
      // ,
      // {
      //   algorithm: sails.config.jwtSettings.algorithm,
      //   expiresIn: sails.config.jwtSettings.expiresInMinutes,
      //   issuer: sails.config.jwtSettings.issuer,
      //   audience: sails.config.jwtSettings.audience
      // }
    );
  }
};
