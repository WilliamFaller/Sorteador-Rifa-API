import mongoose from "mongoose";

const numsRifaSchema = new mongoose.Schema(
    {nome:{type: String},
    numeros: {type: Object},
    ganhador: {type: String}
    }
)

const numsRifa = mongoose.model('numsRifa', numsRifaSchema);

export default numsRifa;