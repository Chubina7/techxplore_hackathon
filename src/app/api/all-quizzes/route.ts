import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
    let returnValue = []
    let id = 0

    const res = await fetch("https://www.kopa.ge/catFilter?catFilter")
    const result = await res.json()

    for (let idx = 0; idx < result.length; idx++) {
        for (let i = 0; i < result[idx].totalQuiz; i++) {
            returnValue.push({
                icon: "",
                id,
                name: result[idx].cat2,
                difficulty: result[idx].cat3,
                categories: result[idx].cat1
            })
            id++
        }
    }

    return NextResponse.json(returnValue, { status: 200 })
}