import { NextRequest } from 'next/server'
import clientPromise from '../../../lib/mongodb'

// GET - Buscar proyecto por código
export async function GET(
  _req: NextRequest,
  context: { params: { code: string } }
) {
  const { code } = context.params;

  if (!code) {
    return new Response(JSON.stringify({ error: 'Código no provisto' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db('trackeoDB');
    console.log('Buscando proyecto con code:', code);

    const project = await db.collection('projects').findOne({ code });
    console.log('Resultado:', project);

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
    console.error('Error en GET /api/project/[code]:', error);
    return new Response(JSON.stringify({ error: 'Error en el servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// PATCH - Actualizar proyecto por código
export async function PATCH(
  _req: NextRequest,
  context: { params: { code: string } }
) {
  const { code } = context.params;

  if (!code) {
    return new Response(JSON.stringify({ error: 'Código no provisto' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db('trackeoDB');

    const body = await _req.json();
    const updateData = { ...body };

    const result = await db.collection('projects').updateOne(
      { code },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: 'Proyecto no encontrado' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Proyecto actualizado' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error en PATCH /api/project/[code]:', error);
    return new Response(JSON.stringify({ error: 'Error en el servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
