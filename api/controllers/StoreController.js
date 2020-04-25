/**
 * StoreController
 *
 * @description :: Server-side logic for managing stores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  createMock: (req, res) => {
    return StoreService.createStoreMock(req, res);
  },
  create: (req, res) => {
    return StoreService.createStore(req, res);
  },
  findMock: (req, res) => {
    return StoreService.findStoreMock(req, res);
  },
  find: (req, res) => {
    return StoreService.findStore(req, res);
  },
};
