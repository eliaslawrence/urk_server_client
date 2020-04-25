/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: (req, res) => {
    return UserService.create(req.body).then((result) => {
          res.created(result);
        }).catch((err) => {
          ResponseService.sendError(res, err);
        });
  },

	login: (req, res) => {
		console.log(req.session);
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
