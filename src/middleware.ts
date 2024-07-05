import { NextRequest, NextResponse } from "next/server";

export default async function middleware(_request: NextRequest) {
    // const path = request.nextUrl.pathname;

    // if (path === "/quizz") { ... და არ შეიცავს კონკრეტულ params-ს
    //  გადარეთარნდეს უკან
    // }

    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
