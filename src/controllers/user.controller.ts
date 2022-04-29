import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { User } from '../interface/User'

export async function getUsers(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const users = await conn.query('SELECT * FROM user');
      
        return res.json(users[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createUser(req: Request, res: Response) {
    const newUser: User = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO user VALUES ?',[newUser]);
    res.json({
        message: 'New user Created'
    });
}

export async function getUser(req: Request, res: Response) {
    const id = req.params.userId;
    const conn = await connect();
    const users = await conn.query('SELECT * FROM user WHERE id = ?', [id]);
    res.json(users[0]);
}

export async function deleteUser(req: Request, res: Response) {
    const id = req.params.userId;
    const conn = await connect();
    await conn.query('DELETE FROM users WHERE id = ?', [id]);
    res.json({
        message: 'User deleted'
    });
}

export async function updateUser(req: Request, res: Response) {
    const id = req.params.userId;
    const updateUser: User = req.body;
    const conn = await connect();
    await conn.query('UPDATE user set ? WHERE id = ?', [updateUser, id]);
    res.json({
        message: 'user Updated'
    });
}