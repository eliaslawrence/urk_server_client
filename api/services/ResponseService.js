/**
 * Created by eliaslawrence on 06/12/18.
 */

 module.exports = {   
  sendError: (res, error) => {    
    switch(error.status) {      
      case 400:
        res.badRequest(error);
        break;       
      case 403:
        res.forbidden(error);
        break;       
      case 404:
        res.notFound(error);
        break;       
      case 401:
        res.unauthorized(error);
        break;       
      case 422:
        res.unprocessableEntity(error);
        break; 
      case 500:
        res.unauthorized(error);
        break;              
      default:
        res.unauthorized(error);
    }
   },   

   sendError: (res) => {    
    switch(res.statusCode) {      
      case 400:
        res.badRequest(res.error);
        break;       
      case 403:
        res.forbidden(res.error);
        break;       
      case 404:
        res.notFound(res.error);
        break;       
      case 401:
        res.unauthorized(res.error);
        break;       
      case 422:
        res.unprocessableEntity(res.error);
        break; 
      case 500:
        res.unauthorized(res.error);
        break;              
      default:
        res.unauthorized(res.error);
    }
   },   

   isError: (res) => {    
    if(res.statusCode != 200) {      
      return true;
    }
    return false;
   }
 };
