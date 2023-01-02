import usuario from '../models/Usuario.js';

class UsuarioController {
    static cadastrarUsuario = (req, res) => {
        let newUsuario = new usuario(req.body);

        newUsuario.save((err) =>{
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar o usuário, por favor tente novamente!`})
            } else {
                res.status(201).send(newUsuario.toJSON())
                console.log("✳ Um novo usuário foi cadastrado!");
            }
        });
    }
}

export default UsuarioController;
