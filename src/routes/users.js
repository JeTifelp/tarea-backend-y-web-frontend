const {Router}=require('express');
const router=Router();

//const compression= require('compression');
const bodyParser = require("body-parser");
const cors = require("cors");

router
    .use(cors())
    .use(bodyParser.json());
    //.use(compression());

const { suma2Numeros, getUser, loginUser, registerUser, dashboardUser }= require('../controllers/userController');

router.post('/',suma2Numeros);

router.get('/', getUser );
router.get('/login/', loginUser );
router.post('/register/', registerUser );
router.get('/dashboard/', dashboardUser );


// router.get('/:id', getPersonaById);
// router.post('/', createPersona);
// router.delete('/:id', deletePersona );
// router.put('/:id',updatePersona);


module.exports= router;
