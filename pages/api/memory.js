import { pool } from "@/config/db"

export default async function handle(req, res){
    const promisePool = pool.promise();

    switch (req.method){
        case 'GET':
            if(req.query.id){
                const {id} = req.query;
                const result = await promisePool.query(`SELECT * FROM memory WHERE id = ${id}`);
                res.status(200).json(result);
                return
            }
            const [rows, fields] = await promisePool.query("SELECT * FROM memory ORDER BY created_at DESC")
            res.status(200).json(rows)
            break;
        case "POST":
            const dataset = req.body;

            await promisePool.query("INSERT INTO memory SET ?", dataset)
            res.status(201)
            break;
        case "DELETE":
            const {id} = req.query;

            await promisePool.query("DELETE FROM memory WHERE id = ?", [id])
            res.status(200)
            break;
    }
}