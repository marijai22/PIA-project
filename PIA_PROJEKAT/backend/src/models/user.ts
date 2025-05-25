import mongoose from "mongoose";

const Schema = mongoose.Schema;

let User = new Schema({
    kor_ime:{
        type:String
    },
    lozinka:{
        type:String
    },
    ime:{
        type:String
    },
    prezime:{
        type:String
    },
    pol:{
        type:String
    },
    adresa:{
        type:String
    },
    telefon:{
        type:String
    },
    mejl:{
        type:String
    },
    profilna_slika:{
        type:String
    },
    broj_kartice:{
        type:String
    },
    tip:{
        type:String
    }
})

export default mongoose.model('UserModel', User, 'korisnici');