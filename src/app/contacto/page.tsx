
'use client'
import { useState } from 'react'
import { PhrasesChange } from '../components/microcomponents/PhrasesChange'
import Image from 'next/image'




const page = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
    }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
        const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
        }),
        })
        const data = await res.json()
    console.log('Respuesta del servidor:', data)

        if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        } else {
        throw new Error('Failed to send')
        }
    } catch (error) {
        setStatus('error')
        

    }
    }

type MessagePreProps = {
    selectedMessages: string[];
    handleAddMessage: (msg: string) => void;
};

const MessagePre = ({ selectedMessages , handleAddMessage }: MessagePreProps) => {
    const Messages = {
    Comercial: [
        'Solicito cotización de un sitio web',
        'Solicito información sobre los precios y planes disponibles',
        'Estoy interesado en conocer los métodos de pago y financiación',
        '¿Qué incluye el paquete de desarrollo web?'
    ],
    Desarrollo: [
        'Solicito información sobre el proceso de creación del sitio web',
        '¿Cuánto tiempo lleva desarrollar una página web con ustedes?',
        '¿Ustedes se encargan del dominio y hosting?'
    ],
    Diseño: [
        'Quisiera saber si puedo personalizar el diseño del sitio web',
        '¿Puedo elegir los colores, tipografías y estilo visual?',
        '¿Ofrecen diseño responsive para móviles?'
    ],
    Funcionalidades: [
        '¿Pueden agregar una tienda online o carrito de compras?',
        '¿Es posible incluir un blog o sección de noticias?',
        '¿El sitio tendrá panel de administración?'
    ],
    Seguridad: [
        '¿Incluyen certificado SSL y medidas de seguridad?',
        '¿Ofrecen mantenimiento una vez entregado el sitio?'
    ],
    Otros: [
        '¿Cómo es la comunicación durante el proyecto?',
        '¿Hay seguimiento una vez finalizado el desarrollo?'
    ]
    };

    const [selectedCategory, setSelectedCategory] = useState('Comercial');

    return (
    <div className="w-full max-w-md mx-auto text-sm font-montserrat">
        <label className="block mb-2 font-semibold text-[#0A1128]">Seleccionar categoría:</label>
        <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded text-black"
        >
        {Object.keys(Messages).map((category) => (
            <option key={category} value={category}>
            {category}
            </option>
        ))}
        </select>

        <div className="mb-4">
        <p className="font-montserrat mb-2 text-[#0A1128]">Mensajes disponibles:</p>
        {Messages[selectedCategory as keyof typeof Messages].map((msg : string) => (
            <button
            key={msg}
            onClick={() => handleAddMessage(msg)}
            className="block w-full text-left mb-1 p-2 bg-[#00D084] text-[#000000] shadow-xl rounded hover:bg-[#f5f5f5] hover:text-[#00D084] cursor-pointer transition"
            >
            {msg}
            </button>
        ))}
        </div>

    </div>
    );
};

    const [selectedMessages, setSelectedMessages] = useState<string[]>([]);
    const handleAddMessage = (msg: string) => {
  if (selectedMessages.includes(msg)) return; // No repetir
    if (selectedMessages.length >= 5) return alert('Máximo 5 mensajes');

    const newMessages = [...selectedMessages, msg];
    setSelectedMessages(newMessages);

    setForm(prev => ({ ...prev, message: newMessages.join('\n ') + '.' }));
};


    return (
    <div className='flex flex-col justify-center items-center bg-[#F5F5F5] shadow-xl  bg-cover bg-center'
    style={{ backgroundImage: 'url("/images/fondo-contact.webp")' }}>
        <div className='flex flex-col justify-center items-center mt-[100px] pt-[50px]'>
        <h1 className='font-montserrat font-bold text-[16px] text-[#0A1128] text-center'>Estas a un paso de escoger la mejor opcion!</h1>
        <h2 className='font-montserrat font-light text-[14px] text-[#0A1128] text-center px-6 pb-[50px]'>Brading, diseño y desarrollo web, nosotros nos encargamos de todo</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4 p-4 bg-[#f5f5f5] lg:shadow-lg rounded">
        <input name="name" placeholder="Tu nombre" onChange={handleChange} value={form.name} className="p-2 rounded border-b-2 color-[#0A1128] font-montserrat  placeholder:text-[#000000]" required />
        <input name="email" type="email" placeholder="Tu email" onChange={handleChange} value={form.email} className="p-2 rounded border-b-2 color-[#0A1128] font-montserrat  placeholder:text-[#000000]" required />
        <textarea
            name="message"
            placeholder="Tu mensaje"
            rows={5}
            onChange={handleChange}
            value={form.message}
            className="p-2 rounded border-b-2 resize-none color-[#0A1128] font-montserrat placeholder:text-[#000000]"
            required
            />
        <div>
        <MessagePre 
            selectedMessages={selectedMessages}
            handleAddMessage={handleAddMessage}
        />
        </div>
        <button type="submit" className="bg-[#00D084] text-[#000000] py-2 rounded font-bold  shadow-xl cursor-pointer">
        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje 📩'}
        </button>
        {status === 'success' && <p className="text-green-500">Mensaje enviado correctamente 🎉</p>}
        {status === 'error' && <p className="text-red-500">Ocurrió un error. Intenta de nuevo.</p>}
    </form>
    <PhrasesChange />
    <Image src="/images/second-section/sd-abs.webp" 
    height='200'
    width='300'
    alt="Logo footer" className="w-[300px] h-[200px] shadow-lg shadow-[#000a] border-2 border-[#000a] lg:w-[800px] lg:h-[600px]" />
    </div>
    </div>
    
    )
}

export default page
