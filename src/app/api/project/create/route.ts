// app/api/projects/create/route.ts
import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '../../../lib/mongodb'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { code, title, description, status } = body

    if (!code || !title || !description || !status) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('exogestion')
    const collection = db.collection('projects')

    await collection.insertOne({ code, title, description, status })

    return NextResponse.json({ message: 'Proyecto creado' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
