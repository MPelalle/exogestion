'use client'
import { useState } from 'react'
import CargarProyecto from '../cargar/CargarProyecto'

export default function CargarPrivado() {
  const [clave, setClave] = useState('')
  const [autorizado, setAutorizado] = useState(false)

  const verificarClave = (e: React.FormEvent) => {
    e.preventDefault()
    if (clave === 'exogestion') {
      setAutorizado(true)
    } else {
      alert('Clave incorrecta')
    }
  }

  if (!autorizado) {
    return (
      <form onSubmit={verificarClave} className="pt-40 text-center space-y-4">
        <input
          type="password"
          placeholder="Clave de acceso"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          className="px-4 py-2 border"
        />
        <button type="submit" className="bg-black text-white px-4 py-2">Entrar</button>
      </form>
    )
  }

  return <CargarProyecto />
}
