'use client'

import { useState } from 'react'

export default function EditarProyecto() {
  const [code, setCode] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMensaje('')
    setError('')

    try {
      const res = await fetch(`/api/project/${code}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Error al actualizar')

      setMensaje('✅ Proyecto actualizado con éxito')
      setCode('')
      setNewStatus('')
    } catch (err: string | boolean | any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-40 px-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Editar Estado del Proyecto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Código del proyecto"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          className="w-full border px-3 py-2"
        />
        <input
          type="text"
          placeholder="Nuevo estado"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
          required
          className="w-full border px-3 py-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-600 text-white px-4 py-2 rounded"
        >
          {loading ? 'Actualizando...' : 'Actualizar'}
        </button>
      </form>

      {mensaje && <p className="text-green-600 mt-4">{mensaje}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  )
}
