const {Router} = require('express');
const router = Router();

const {getEmpleado, createEmpleado, udpdateEmpleado, deleteEmpleado} = require('../controllers/routes.controller')

router.get('/empleado', getEmpleado);
router.post('/empleado', createEmpleado);
router.put('/empleado/:id', udpdateEmpleado);
router.delete('/empleado/:id', deleteEmpleado);


module.exports = router;