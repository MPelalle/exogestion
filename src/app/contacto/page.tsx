'use client'
import { useState } from 'react'
import { PhrasesChange } from '../components/microcomponents/PhrasesChange'
import Image from 'next/image'

const messagesByCategory = {
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
}

type MessagePreProps = {
  selectedMessages: string[]
  handleAddMessage: (msg: string) => void
}

const MessagePre = ({ selectedMessages, handleAddMessage }: MessagePreProps) => {
  const [selectedCategory, setSelectedCategory] = useState('Comercial')

  return (
    <div className="w-full max-w-md mx-auto text-sm font-montserrat">
      <label className="block mb-2 font-semibold text-[#0A1128]">Seleccionar categoría:</label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded text-black"
      >
        {Object.keys(messagesByCategory).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="mb-4">
        <p className="font-semibold mb-2 text-[#0A1128]">Mensajes disponibles:</p>
        {messagesByCategory[selectedCategory as keyof typeof messagesByCategory].map((msg) => (
          <button
            key={msg}
            onClick={() => handleAddMessage(msg)}
            disabled={selectedMessages.includes(msg)}
            className={`block w-full text-left mb-2 p-2 rounded font-medium shadow-md transition
              ${
                selectedMessages.includes(msg)
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-[#00D084] text-black hover:bg-[#e0ffe5]'
              }`}
          >
            {msg}
          </button>
        ))}
      </div>
    </div>
  )
}

const Page = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [selectedMessages, setSelectedMessages] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAddMessage = (msg: string) => {
    if (selectedMessages.includes(msg)) return
    if (selectedMessages.length >= 5) return

    const newMessages = [...selectedMessages, msg]
    setSelectedMessages(newMessages)
    setForm((prev) => ({ ...prev, message: newMessages.join('\n') + '.' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setSelectedMessages([])
      } else {
        throw new Error('Failed to send')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="relative flex flex-col justify-center items-center bg-[#F5F5F5] shadow-xl bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/fondo-contact.webp")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="flex flex-col justify-center items-center mt-[100px] pt-[50px] z-10 px-4">
        <h1 className="font-bold text-lg text-white text-center">
          ¡Estás a un paso de escoger la mejor opción!
        </h1>
        <h2 className="font-light text-sm text-white text-center pb-[50px]">
          Branding, diseño y desarrollo web, ¡nosotros nos encargamos de todo!
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col gap-4 p-6 bg-white rounded shadow-lg"
        >
          <input
            name="name"
            placeholder="Tu nombre"
            onChange={handleChange}
            value={form.name}
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00D084]"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Tu email"
            onChange={handleChange}
            value={form.email}
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00D084]"
            required
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows={5}
            onChange={handleChange}
            value={form.message}
            className="p-2 rounded border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-[#00D084]"
            required
          />

          <MessagePre selectedMessages={selectedMessages} handleAddMessage={handleAddMessage} />

          <button
            type="submit"
            className="bg-[#00D084] text-black py-2 rounded font-bold shadow hover:brightness-110 transition"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje 📩'}
          </button>

          {status === 'success' && (
            <p className="text-green-600 text-center">Mensaje enviado correctamente 🎉</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center">Ocurrió un error. Intenta de nuevo.</p>
          )}
        </form>

        <PhrasesChange />

        <Image
          src="/images/second-section/sd-abs.webp"
          height={1200}
          width={1200}
          alt="Logo footer"
          className="w-[300px] h-[200px] lg:w-[800px] lg:h-[600px] mt-6 mb-6 shadow-lg border-2 border-[#000a]"
        />
      </div>
    </div>
  )
}

export default Page
