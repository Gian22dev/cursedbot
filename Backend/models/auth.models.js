import db from "../config/db.js"

export const findByEmail = async(correo) => {
    const [rows] = await db.query("SELECT id, first_name, last_name, email, password_hash FROM users WHERE email = ?", [correo])

    return rows[0]
}
