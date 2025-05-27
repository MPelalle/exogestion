'use client'

import { useState } from 'react'

interface Project {
  title: string
  status: string
  description: string
  githubUrl?: string
  driveUrl?: string
}

export default function BuscarProyecto() {
  const [code, setCode] = useState('')
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const buscar = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setProject(null)

    if (!code.trim()) {
      setError('Por favor ingresa un código válido')
      setLoading(false)
      return
    }

    try {
      const res = await fetch(`/api/project/${code.trim()}`)

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Error desconocido')
      }

      const data = await res.json()
      setProject(data)
    } catch (err: unknown) {
      if (err instanceof Error) {
    setError(err.message)
  } else {
    setError('Ocurrió un error desconocido')
  }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
  className="relative pt-[100px] flex flex-col items-center justify-center vh-screen bg-cover bg-center h-screen"
  style={{ backgroundImage: "url('./images/second-section/bg-services.webp')" }}
>
  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

  {/* Contenido principal con z-10 */}
  <div className="z-10 flex flex-col items-center justify-center w-full px-4">
    <h1 className="font-montserrat font-bold text-3xl text-[#F5F5F5] mb-4 text-center">
      ¡Hace un trackeo en vivo de tu proyecto!
    </h1>

    <form onSubmit={buscar} className="mb-6 flex flex-col sm:flex-row gap-2 text-[#F5F5F5] w-full max-w-md">
      <input
        type="text"
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder="Ingrese código del proyecto"
        className="flex-grow border rounded px-3 py-2 placeholder:text-gray-400"
      />
      <button type="submit" disabled={loading} className="bg-[#00D084] text-white px-4 rounded">
        {loading ? 'Buscando...' : 'Buscar'}
      </button>
    </form>

    {error && <p className="text-red-600 mb-4">{error}</p>}

    {project && (
      <div className="bg-white p-6 rounded shadow flex flex-col items-center justify-center max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="mb-1 text-[#00D084] drop-shadow"><strong>Estado:</strong> {project.status}</p>
        <p className="mb-4">{project.description}</p>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#00D084] text-white px-4 py-2 rounded mr-4 shadow-lg"
          >
            Ver en GitHub
          </a>
        )}
        {project.driveUrl && (
          <a
            href={project.driveUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#00D084] text-white px-4 py-2 rounded mr-4 mt-4 shadow-lg"
          >
            Ver en Google Drive
          </a>
        )}
      </div>
    )}
  </div>
</div>

  )
}
