import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        const suggestion = await prisma.suggestion.create({
            data: {
                name: body.name,
                email: body.email || null,
                suggestion: body.suggestion,
                category: body.category,
            },
        })

        return NextResponse.json(
            { success: true, id: suggestion.id },
            { status: 201 }
        )
    } catch (error) {
        console.error('Error creating suggestion:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to submit suggestion' },
            { status: 500 }
        )
    }
}
