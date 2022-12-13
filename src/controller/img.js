import {openDb} from '../configDB.js'
/*
class imgController{
    async get(req,res){
        let id = req.body.id;
        openDb().then(db=>{
            db.get('SELECT * FROM Pessoa WHERE id=?', [id])
            .then(pessoa=> res.json(pessoa));
        });
    }
    async create(req,res){
        let pessoa = req.body;
        openDb().then(db=>{
            db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
        });
        res.status(201).json({
            "nome":pessoa.nome,
            "idade":pessoa.idade
        });
    }
    async delete(req,res){
        let id = req.body.id;
        openDb().then(db=>{
            db.get('DELETE FROM Pessoa WHERE id=?', [id])
            .then(res=>res)
        });
        res.json({
            "statusCode": 200
        })
    }
}
export {imgController};
*/
export async function createTable(){
    openDb().then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS img(id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, nome TEXT, img TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, deleted_at DATETIME)')
    })
}

/*created_at DATETIME DEFAULT CURRENT_TIMESTAMP deleted_at DATETIME*/