const router = require('express').Router();
const compoundController = require('../controllers/index')

router.route('/compounds')
    .post( compoundController.addCompound)
    .get( compoundController.getAllCompounds);

router.route('/compounds/:id')
    .get(compoundController.getCompound)
    .delete(compoundController.deleteCompound)
    .put(compoundController.updateCompound);

module.exports = router