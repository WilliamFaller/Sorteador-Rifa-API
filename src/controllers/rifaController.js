import rifa from '../models/Rifa.js'

class RifaController {

  static cadastrarRifa = (req, res) => {
    let newRifa = new rifa(req.body);

    newRifa.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar uma nova Rifa`})
      } else {
        res.status(201).send(newRifa.toJSON())
          console.log("✳ Uma nova Rifa foi criada!");
      }
    })
  }

  static consultarRifas = (req, res) => {
    rifa.find().exec((err, rifa) => {
      res.status(200).json(rifa)
    })
  }

  static consultarRifa = (req, res) => {
    const nome = req.query.params
    rifa.find({'nome': nome}, {}, (err, rifa) => {
      if(err) {
        res.status(400).send({message: `Não foi possivel achar a Rifa ${nome}!`})
      } else {
        res.status(200).send(rifa)
      }
    })
  }

  static adicionarNumsRifas = (req, res) => {
    const id = req.params.id;
    const body = req.body.numsRifa;
    rifa.findById(id, (err, rifa) => {            
      for (let i = 0; i < body.length; i++) {
        const element = body[i];
        rifa.numeros[element] = 'João';
        console.log(rifa);
        }
          rifa.save((err) => {
              if(err) {
                  res.status(500).send({message: err.message})
                } else {
                  res.status(200).send(rifa)     
                }
        });
    });
  }    
  
  static resetNumsRifa = (req, res) => {
    const id = req.params.id;
  //Achar pelo id e Substituir (ID do usuário, Critério de atualização) no mongo utilizase $set 
    rifa.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err) {
        res.status(500).send({message: err.message})
      } else {
        res.status(200).send({message: 'Numeros cadastrados com sucesso!'})        
      }
    });
  }


}

export default RifaController;