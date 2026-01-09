import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    console.log('Received application data:', body)

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.roomType || !body.course || !body.yearOfStudy || !body.nsfasFunded) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const application = await prisma.application.create({
      data: {
        name: body.name,
        idNumber: body.idNumber || null, // Optional field
        email: body.email,
        phone: body.phone,
        roomType: body.roomType,
        course: body.course,
        yearOfStudy: body.yearOfStudy,
        nsfasStatus: body.nsfasFunded === 'yes',
        status: 'pending',
      },
    })

    return NextResponse.json(
      { success: true, id: application.id },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error creating application:', error)
    console.error('Error details:', {
      message: error?.message,
      code: error?.code,
      meta: error?.meta,
    })
    return NextResponse.json(
      { 
        success: false, 
        error: error?.message || 'Failed to submit application',
        details: process.env.NODE_ENV === 'development' ? error?.message : undefined
      },
      { status: 500 }
    )
  }
}

