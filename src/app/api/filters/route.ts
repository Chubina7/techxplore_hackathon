import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const category1 = req.nextUrl.searchParams.get("ctg1")
    const category2 = req.nextUrl.searchParams.get("ctg2")
    const category3 = req.nextUrl.searchParams.get("ctg3")

    let returnValue = {}

    // {
    //     ctg1: ["პროგრამირება", "ბლოკჩეინი", "მათემატიკა"],
    //         ctg2: ["მერვე კლასის", "დამწყებისთვის"],
    //             ctg3: ["ანდეფაინდ"],
    //   };

    const res = await fetch(`https://www.kopa.ge/gettest/?cat1=${category1}&cat2${category2}&cat3${category3}`)
    const result = await res.json()

    for (let idx = 0; idx < result.length; idx++) {
        returnValue = {
            ctg1: result[idx].name,
        }
    }

    return NextResponse.json(returnValue, { status: 200 })
}