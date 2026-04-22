import express from "express";
import bcrypt from "bcrypt";

import studenRoutes from './routes/students.route.js';
import acudienteRoutes from './routes/acudientes.route.js';
import pagoRoutes from './routes/pagos.route.js';
import usuarioRoutes from './routes/usuarios.route.js';
import asistenciaRoutes from './routes/asistencias.route.js';
import notificacionRoutes from './routes/notificaciones.route.js';
import authRoutes from "./routes/auth.route.js"
import dashboardRoutes from "./routes/dashboard.route.js"

const app = express();
app.use(express.json())
const PORT = 3000
//Rutas
app.use('/api', studenRoutes);
app.use('/api', acudienteRoutes);
app.use('/api', pagoRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', asistenciaRoutes);
app.use('/api', notificacionRoutes);
app.use('/api', authRoutes);
app.use('/api', dashboardRoutes);

//ruta base
app.get("/", (req, res)=>{
    res.send("Api funcionando")
})

// const passwordList = [
//     "contraseña1",
//     "adminbotpassword",
//     "nose",
//     "admindb",
//     "fifthpassword"
// ]

// for (let i = 0; i < passwordList.length; i++){
//     let hashedPassword = await bcrypt.hash(passwordList[i], 10)
//     console.log(`Contraseña: ${passwordList[i]}, Hash: ${hashedPassword}`)
// }

app.listen(PORT, ()=>{
    console.log("Servidor corriendo LocalHost...")
})