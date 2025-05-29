import nodemailer from 'nodemailer';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {

    // Junto los datos del body en base a una peticion al backend
    const body = await req.json();

    // Extraigo los datos del body que necesito
    const { name, email, tel, ubicacion, cv, github, linkedin } = body;
        
    // valido los datos para no tener errores
    if (!name || !email || !tel || !ubicacion || !cv) {
        return NextResponse.json({ error: 'Faltan campos' }, { status: 400 });
    }

    // intenta ejecutar un bloque de código
    try {
        // Creo el transporter para hacer envio de mail mediante nodemailer en node.js
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
        // Espero la respuesta del transporter para proceder a enviar el mail con los campos necesarios
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.MAIL_USER,
            subject: `Postulacion programador de: ${name}`,
            html: `<p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Telefono:</strong> ${tel}</p>
                    <p><strong>Ubicacion:</strong> ${ubicacion}</p>
                    <p><strong>CV:</strong> ${cv}</p>
                    <p><strong>GitHub:</strong> ${github}</p>
                    <p><strong>Linkedin:</strong> ${linkedin}</p>`,
        });
        // Si sale todo bien, envio exitoso
        return NextResponse.json({ success: true }, { status: 200 });

        // catch: atrapa y maneja cualquier error que ocurra en el try. Evitando que el codigo se rompa bruscamente
    } catch {
        return NextResponse.json({ error: 'Error al enviar email' }, { status: 500 });
    }
}
