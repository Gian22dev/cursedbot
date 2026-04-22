import { findByEmail } from "../models/auth.models.js";
import bcrypt from "bcrypt"

export const login = async(req, res) => {
    try{
        const {email, password} = req.body

        if(!email || !password){
            return res.status(400).json({
                ok: false,
                message: "Datos incompletos"
            })
        }
        const user = await findByEmail(email)
        if(!user){
            return res.status(201).json({
                ok: false,
                message: "Usuario no encontrado"
            })
        }
        const validPassword = bcrypt.compare(password, user.password_hash)
        if(!validPassword){
            return res.status(201).json({
                ok: false,
                message: "Contraseña incorrecta"
            })
        }
        return res.status(200).json({
            message: "Todo bien",
            user: {
                id: user.id,
                name: user.first_name,
                email: user.email
            }
        })
    }
    catch(error){
        return res.status(400).json({
            ok: false,
            message: "error del servidor",
            error: error
        })
    }
}