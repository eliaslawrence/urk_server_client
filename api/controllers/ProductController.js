/**
 * ProductController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  
	list: (req, res) => {
    console.log('Product Controller:');    
    console.log(req.user);
    res.ok({
      req: req.user
    })
    // UserService
    //   .list(req.user)
    //   .then((userList) => {
    //     res.ok(
    //       userList
    //     )
    //   })
    //   .catch((err) => {
    //     res.serverError(err);
    //   })
  },
};
