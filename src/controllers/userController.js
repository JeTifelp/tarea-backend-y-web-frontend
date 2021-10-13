//const {pool}= require('../database/database');
const {pool}=require('../database/databaseE');


//para postman
/*{
    "valor1":"110",
    "valor2":"5"
}*/
const suma2Numeros=(req, res)=>{
    
    let {valor1,valor2}=req.body;

    if(!valor1    || !valor2 ){
        console.log('ingrese los 2 valores para poder sumar');

    }
    
    let suma = Number(valor1 )+ Number( valor2);
    //parseInt('25');
    res.json({sum :''+suma});
}





const getUser= async(req,res)=> {
 const response= await pool.query('SELECT * FROM users');
 res.status(200).json(response.rows);
}


const loginUser= (req,res)=>{
    res.send({user:'login'});
}

/**
 * {
    "name":"camila",
    "email":"camila@gmail.com",
    "password":"12345678",
    "password2":"12345678"
}
 */
const registerUser = async( req, res ) => {
    let {name, email, password, password2 } = req.body;
    let errors =[];
    console.log(name, email,password,password2);

    if(!name    || !email || !password || !password2){
        errors.push({messages:' por favor ingresar todos los campos'});

    }    
    // if(password.length() < 6 ){
    //     errors.push({message:' la contraseña debe tener una longitud mayor a 6 caracteres'});
        
    // }
    if(password != password2  ){
        errors.push({message:' las contraseñas no son coinciden '});
        
    }
    if(errors.length > 0 ){
      console.log(errors);       
    }else{
        console.log('libre de errores'); 
        const id= req.params.id;
        const response= await pool.query('SELECT * FROM users WHERE id = $1',[ id ]);
        res.json(response.rows);
    }



    //res.send('register');
    //res.render('register');//, {user:'alguien'});
}

const dashboardUser= (req,res)=>{
    res.send('Dashboard');//, {user:'alguien'});
}
module.exports={ suma2Numeros, getUser,loginUser,registerUser,dashboardUser};