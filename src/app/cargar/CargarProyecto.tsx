'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function CargarProyecto() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    githubUrl: '',
    driveUrl: '',
    status: '',
    code: '',
  })
  const [loading, setLoading] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMensaje('')

    try {
      const res = await fetch('/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Error al guardar')

      setMensaje('✅ Proyecto guardado con éxito')
      setFormData({
        title: '',
        description: '',
        githubUrl: '',
        driveUrl: '',
        status: '',
        code: '',
      })
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-30 px-4 max-w-xl mx-auto">
      <Link href='/cargar/editar' className="hover:text-[#00D084] transition">Ir a editar</Link>
      <h1 className="text-2xl font-bold mb-4">Cargar Proyecto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Título" value={formData.title} onChange={handleChange} required className="w-full border px-3 py-2" />
        <textarea name="description" placeholder="Descripción" value={formData.description} onChange={handleChange} required className="w-full border px-3 py-2" />
        <input name="githubUrl" placeholder="GitHub URL" value={formData.githubUrl} onChange={handleChange} className="w-full border px-3 py-2" />
        <input name="driveUrl" placeholder="Google Drive URL" value={formData.driveUrl} onChange={handleChange} className="w-full border px-3 py-2" />
        <input name="status" placeholder="Estado del proyecto" value={formData.status} onChange={handleChange} className="w-full border px-3 py-2" />
        <input name="code" placeholder="Código único (ej: XH92DK)" value={formData.code} onChange={handleChange} required className="w-full border px-3 py-2" />

        <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
          {loading ? 'Guardando...' : 'Guardar Proyecto'}
        </button>
      </form>

      {mensaje && <p className="text-green-600 mt-4">{mensaje}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  )
}
