import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const incident = await prisma.incident.create({
      data: {
        date: new Date(body.date),
        time: body.time,
        location: body.location,
        description: body.description,
        type: body.type,
        reporterName: body.reporterName,
        reporterContact: body.reporterContact,
      },
    })

    return NextResponse.json(
      { success: true, id: incident.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating incident report:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit incident report' },
      { status: 500 }
    )
  }
}

