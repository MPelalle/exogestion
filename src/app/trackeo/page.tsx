'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function TrackPage() {

  interface Project {
  title: string
  status: string
  description: string
  githubUrl: string
  driveUrl: string
}

  const params = useParams()
  const code = params.code

  const [project, setProject] = useState<Project | null>(null)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!code) return

    fetch(`/api/project/${code}`)
      .then(res => {
        if (!res.ok) throw new Error(`Proyecto no encontrado (${res.status})`)
        return res.json()
      })
      .then(data => {
        setProject(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [code])

  if (loading) return <p>Cargando...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>
  if (!project) return <p>No hay proyecto.</p>

  
  return (
    <div>
      <h1>Proyecto: {project.title}</h1>
      <p>Estado: {project.status}</p>
      <p>Descripción: {project.description}</p>
      <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a><br />
      <a href={project.driveUrl} target="_blank" rel="noreferrer">Google Drive</a>
    </div>
  )
}

