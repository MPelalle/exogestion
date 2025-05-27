import nodemailer from 'nodemailer';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, tel, ubicacion, cv, github, linkedin } = body;
        
    if (!name || !email || !tel || !ubicacion || !cv) {
        return NextResponse.json({ error: 'Faltan campos' }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
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
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (_error) {
        return NextResponse.json({ error: 'Error al enviar email' }, { status: 500 });
    }
}
