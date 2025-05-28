'use client'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      className="relative pt-50 pb-10 min-h-screen bg-cover bg-center flex flex-col items-center justify-start px-4"
      style={{ backgroundImage: "url('./images/second-section/bg-services.webp')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Contenido principal */}
      <div className="z-10 w-full max-w-2xl flex flex-col items-center text-white">
        <header className="bg-white/90 text-gray-800 w-full rounded-xl shadow-md p-6 mb-8 text-center">
          <h1 className="text-3xl font-bold">Exogestión – Seguimiento</h1>
          <p className="text-sm text-gray-600 mt-2">Rastreá el estado de tu proyecto en tiempo real</p>
        </header>

        <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-center mb-6">
          ¡Hacé un trackeo en vivo de tu proyecto!
        </h2>

        <form onSubmit={buscar} className="flex flex-col sm:flex-row gap-2 w-full">
          <div className="relative w-full">
            <input
              type="text"
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder="Buscar por número de gestión..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00D084] text-white text-[25px]"
            />
            <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#00D084] hover:bg-[#00b270] transition-colors text-white px-6 py-2 rounded-lg font-semibold"
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </form>

        {error && (
          <p className="text-red-500 mt-4 text-sm font-medium text-center animate-pulse">{error}</p>
        )}

        {project && (
          <div className="bg-white/90 text-gray-800 mt-8 w-full rounded-xl p-6 shadow-lg text-center animate-fade-in">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-[#00D084] font-semibold mb-2">
              Estado: <span className="font-normal">{project.status}</span>
            </p>
            <p className="text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap justify-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#24292e] hover:bg-[#1b1f23] text-white px-4 py-2 rounded-lg transition"
                >
                  Ver en GitHub
                </a>
              )}
              {project.driveUrl && (
                <a
                  href={project.driveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#00D084] hover:bg-[#00b270] text-white px-4 py-2 rounded-lg transition"
                >
                  Ver en Google Drive
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
