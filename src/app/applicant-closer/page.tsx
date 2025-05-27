'use client'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: '',
        ubicacion: '',
        linkedin: '',
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value,
    }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
        const res = await fetch ('/api/applicants', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            tel: formData.tel,
            ubicacion: formData.ubicacion,
            linkedin: formData.linkedin
            }),
        });
        const data = await res.json();
        console.log(data);
        if (res.ok) {
            setMessage('CV enviado correctamente. Pronto estaremos en contacto. Muchas gracias.');
            setFormData ({
            name: '',
            email: '',
            tel: '',
            ubicacion: '',
            linkedin: ''
            });
        } else {
            setMessage('Error al enviar el CV. Por favor, intenta nuevamente.');
            console.log('Error:', data.error);
        }
        } catch (error) {
        setMessage('Error al enviar el CV. Por favor, intenta nuevamente.');
        console.log('Error:', error);
        } finally {
        setLoading(false);
        }
    }
    return (
    <div>
        <div className='w-full h-auto bg-cover bg-center bg-no-repeat pt-[120px] pb-[50px] lg:pb-[100px]' 
        style={{ backgroundImage: 'url("./images/cards/closer.webp")' }}>
        <h1 className="font-montserrat font-bold text-4xl text-center text-[#00000] mb-4">
            Postulación para Closer de ventas
        </h1>
        <p className="font-montserrat font-light text-lg text-center text-[#00000] max-w-xl mx-auto mb-6">
            Si deseas postularte a una vacante de Closer de ventas, completa el formulario y nos pondremos en contacto contigo. Dependiendo la zona nos encontraremos via zoom o en nuestras oficinas!
        </p>
        <hr className="w-[70%] border-[#F5F5F5] mx-auto my-8" /> 
        <p className="font-montserrat font-light text-lg text-center text-[#00000] max-w-xl mx-auto mb-4 px-4">
            ¿Ya leíste las condiciones de trabajo? En caso de que no, podés encontrarlas en el siguiente enlace:
        </p>
        <div className="flex justify-center">
            <a 
            href="./pdf/condiciones-laborales.pdf"
            download={"condiciones-laborales.pdf"}
            className="font-montserrat font-light text-md text-[#00000] border border-[#00D084] px-6 py-2 rounded-full bg-[#00D084] hover:text-[#00000] hover:bg-transparent transition cursor-pointer hover:shadow-lg">
            Condiciones de trabajo <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
        </div>

        <form 
    onSubmit={handleSubmit} 
    className="max-w-lg mx-auto bg-[#1e1e1e]/40 p-8 rounded-2xl shadow-lg mt-10 pb-10 "
    >
        <h2 className="text-2xl font-bold font-montserrat text-[#F5F5F5] mb-6 text-center">
        Formulario de postulación
    </h2>

    <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full mb-4 p-3 rounded-md bg-[#2b2b2b]/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5F5F5] text-[#00D084]"
    />

    <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full mb-4 p-3 rounded-md bg-[#2b2b2b]/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5F5F5]"
    />

    <input
        type="tel"
        name="tel"
        placeholder="Teléfono"
        value={formData.tel}
        onChange={handleChange}
        required
        className="w-full mb-4 p-3 rounded-md bg-[#2b2b2b]/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5F5F5]"
    />

    <input
        type="text"
        name="ubicacion"
        placeholder="Ubicación"
        value={formData.ubicacion}
        onChange={handleChange}
        required
        className="w-full mb-4 p-3 rounded-md bg-[#2b2b2b]/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5F5F5]"
    />

    <input
        type='text'
        name="linkedin"
        placeholder="Link de linkedin (opcional)"
        value={formData.linkedin}
        onChange={handleChange}
        className="w-full mb-4 p-3 rounded-md bg-[#2b2b2b]/70 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#F5F5F5]"
    />

    <button
    type="submit"
    disabled={loading}
    className={`
        w-full p-3 rounded-md font-bold transition
        ${loading
        ? 'bg-gray-400 cursor-not-allowed text-gray-700'
        : 'bg-[#00D084] text-white hover:bg-[#00b36a] shadow-md hover:shadow-lg'
        }
    `}
    >
    {loading ? 'Enviando...' : 'Enviar'}
    </button>

    {message && (
    <p
        className={`text-center text-sm mt-4 font-semibold
        ${message.includes('correctamente')
            ? 'text-[#00D084]'
            : 'text-[#ff4d4f]'
        }
        `}
    >
    {message}
    </p>
    )}
</form>

    </div>
    </div>
    );
    };

export default Page