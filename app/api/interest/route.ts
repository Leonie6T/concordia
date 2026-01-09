import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const interest = await prisma.interest.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        preferredDate: body.preferredDate
          ? new Date(body.preferredDate)
          : null,
      },
    })

    return NextResponse.json(
      { success: true, id: interest.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating interest entry:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to add to waitlist' },
      { status: 500 }
    )
  }
}

