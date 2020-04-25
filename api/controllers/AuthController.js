/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const fetch = require("node-fetch");
const request = require('request');
const rp = require('request-promise');

module.exports = {
	login: function(req, res) { 
    // console.log(req.session);  
    console.log('teste: login');     
    AuthService.login(req, res);
  },

  lo: function(req, res) { 
    console.log('teste: lo');
    // res.ok();
    // var options = {
    //   method: 'POST',
    //   uri: 'http://user:1337/auth/login/',
    //   form: {
    //       // Like <input type="text" name="name">
    //       // name: 'Josh'
    //   },
    //   // headers: {
    //   //     /* 'content-type': 'application/x-www-form-urlencoded' */ // Is set automatically
    //   // }
    // };

    // rp(options)
    //   .then(function (body) {
    //     // POST succeeded...
    //     console.log('ok');
    //     // return res.ok({
    //     //   body: body
    //     // });
    //     return res.ok();
    //     // console.log(body);
    //   }).catch(function (err) {
    //     console.log('error');            
    //     // console.log(err);
    //     return ResponseService.sendError(err, res);
    //     // POST failed...
    //   });    

    // return new Promise(function(resolve, reject){
    
    const formData = {};
   
    request.post({url: 'http://user:1337/auth/login/', form: formData}, function (error, response, body) {
      if (error) {
        console.log('error');
        return ResponseService.sendError(error, res);
        // console.log(error);
        // sails.log.error(error);          
      } else if (ResponseService.isError(response)){
        console.log('erro1');
        return ResponseService.sendError(res);
        // res = response;          
        // reject();
        // console.log(response);
        // sails.log.info(response);
        // console.log(body);
        // sails.log.info(body);
      } else {
        console.log('ok');
        // resolve({body: body});
        // res = response;
        return res.ok();
      }                
    });  
    
    

    // try{
    //   console.log('teste: lo');  
    //   var userPromise = await fetch("http://user:1337/auth/login/");
    //   var userJSON = await userPromise.json();
    //   console.log(userJSON);
    // }catch(err){
    //   console.error(err);
    // }    

      // const promises = [userPromise];
      // const [userResponse] = await Promise.all(promises);
      // const userJson = await userResponse.json();  

    // fetch('http://user:1337/auth/login/').then((userLogged) => {
    //   console.log(userLogged); 
    //   res.ok({
    //     user: userLogged,
    //   }); 
    // }).catch((err) => {
    //   console.log(err);  
    //   ResponseService.sendError(res, err);
    // });   
    //sails.request('http://user:1337/auth/login/', {});         
  },

  lol: function(req, res) { 
    console.log('teste: lo');  
    // return fetch('http://user:1337/auth/login/');         
  },

	logout: function(req, res) {
    console.log('logout');  
    req.session.destroy();
		res.ok({
      success: true
    })
  },

  signup: function(req, res) {        
    AuthService.signup(req, res);
  },
};
