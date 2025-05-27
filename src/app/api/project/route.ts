import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '../../lib/mongodb'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, description, githubUrl, driveUrl, status, code } = body

    if (!title || !description || !code) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('trackeoDB')
    const collection = db.collection('projects')

    // Verificamos si ya existe un proyecto con ese código
    const existingProject = await collection.findOne({ code })
    if (existingProject) {
      return NextResponse.json({ error: 'El código ya existe. Usa uno diferente.' }, { status: 409 })
    }

    await collection.insertOne({
      title,
      description,
      githubUrl,
      driveUrl,
      status,
      code,
      createdAt: new Date(),
    })

    return NextResponse.json({ message: 'Proyecto guardado con éxito' }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al guardar proyecto' }, { status: 500 })
  }
}
