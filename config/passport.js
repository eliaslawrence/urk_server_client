/**
 * Created by eliaslawrence on 05/12/18.
 */

/**
 * Passport configuration file where you should configure strategies
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var EXPIRES_IN_MINUTES ;
var SECRET = process.env.tokenSecret || "7PmpTVZZgJ5zY7zzpVyUrIxCFJbs7F23rnFpKZHvxJHWUwUoTNpaWrm9K7rTa799";
var ALGORITHM = "HS256";
var ISSUER = "urk.com.br";
var AUDIENCE = "urk.com.br";

/**
 * Configuration object for local strategy
 */
var LOCAL_STRATEGY_CONFIG = {
  usernameField: 'email',
  passwordField: 'password',
  // passReqToCallback: true
  passReqToCallback: false
};

/**
 * Configuration object for JWT strategy
 */
var JWT_STRATEGY_CONFIG = {
  secretOrKey: SECRET,
  // issuer : ISSUER,
  // audience: AUDIENCE,
  passReqToCallback: false,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()//ExtractJwt.fromAuthHeaderAsBearerToken()//ExtractJwt.fromAuthHeader()
};

/**
 * Triggers when user authenticates via local strategy
 */
function _onLocalStrategyAuth(email, password, next) {
  UserEmployee.findOne({email: email})
    .exec(function (error, user) {
      if (error) return next(error, false, {});

      if (!user || user.deleted) return next(null, false, {
        code: 'E_USER_NOT_FOUND',
        message: "Usuário ou senha incorretos."
      });

      // TODO: replace with new cipher service type
      if (!CipherService.comparePassword(password, user))
        return next(null, false, {
          code: 'E_WRONG_PASSWORD',
          message: 'Usuário ou senha incorretos.'
        });

      return next(null, user, { message: 'Login Succesful'});
    });
}

/**
 * Triggers when user authenticates via JWT strategy
 */
function _onJwtStrategyAuth(payload, next) { 
  var user = payload.user;
  return next(null, user, {});
}

passport.use(new LocalStrategy(LOCAL_STRATEGY_CONFIG, _onLocalStrategyAuth));

passport.use(new JwtStrategy(JWT_STRATEGY_CONFIG, _onJwtStrategyAuth));

passport.serializeUser(function(user, done) {
  // console.log('SERIALIZE: \n' + user);
  done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
  UserEmployee.findById(id, function(err, user) {
    // console.log('DESERIALIZE: \n' + user);
    done(err, user);
  });
});

module.exports.jwtSettings = {
  expiresInMinutes: EXPIRES_IN_MINUTES,
  secret: SECRET,
  algorithm : ALGORITHM,
  issuer : ISSUER,
  audience : AUDIENCE
};
