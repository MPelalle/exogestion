import { NextRequest } from 'next/server'
import clientPromise from '../../../lib/mongodb'

export async function GET(req: NextRequest) {
  // req.nextUrl.pathname = '/api/project/<code>'
  // extraer el código del path
  const pathname = req.nextUrl.pathname
  const segments = pathname.split('/') // ['', 'api', 'project', 'codigo']

  const code = segments[segments.length - 1]

  if (!code) {
    return new Response(JSON.stringify({ error: 'Código no provisto' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const client = await clientPromise
    const db = client.db('trackeoDB')

    const project = await db.collection('projects').findOne({ code })

    if (!project) {
      return new Response(JSON.stringify({ error: 'Proyecto no encontrado' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(project), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error en GET /api/project/[code]:', error)
    return new Response(JSON.stringify({ error: 'Error en el servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
export async function PATCH(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  const segments = pathname.split('/')
  const code = segments[segments.length - 1]

  if (!code) {
    return new Response(JSON.stringify({ error: 'Código no provisto' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const client = await clientPromise
    const db = client.db('trackeoDB')

    const body = await req.json()
    const updateData = { ...body }

    const result = await db.collection('projects').updateOne(
      { code },
      { $set: updateData }
    )

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: 'Proyecto no encontrado' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ message: 'Proyecto actualizado' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error en PATCH /api/project/[code]:', error)
    return new Response(JSON.stringify({ error: 'Error en el servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

