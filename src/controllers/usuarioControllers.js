import usuario from '../models/Usuario.js';

class UsuarioController {

    static buscarUsuarios = (req, res) => {
        usuario.find().exec((err, usuario) => {
          res.status(200).json(usuario)
        })
      }

    static buscarUsuarioPorId = (req, res) => {
        const id = req.params.id;

        usuario.findById(id, (err, usuario) => {
            if (err) {
                res.status(400).send({message: err.message})
            } else {
                res.status(200).send(usuario)
            }
        })
    }

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

    static adicionarNumsRifas = (req, res) => {
      const id = req.params.id;
      const body = req.body.numsRifa;
      usuario.findById(id, (err, usuario) => {            
        for (let i = 0; i < body.length; i++) {
          const element = body[i];
          usuario.numsRifa.push(element);
          }
            usuario.save((err) => {
                if(err) {
                    res.status(500).send({message: err.message})
                  } else {
                    res.status(200).send({message: 'Numeros cadastrados com sucesso!'})        
                  }
          });
      });
    }

    static resetNumsRifa = (req, res) => {
      const id = req.params.id;
    //Achar pelo id e Substituir (ID do usuário, Critério de atualização) no mongo utilizase $set 
    usuario.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err) {
        res.status(500).send({message: err.message})
      } else {
        res.status(200).send({message: 'Numeros cadastrados com sucesso!'})        
      }
    })
  }
}


export default UsuarioController;
