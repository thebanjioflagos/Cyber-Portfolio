import { NextResponse } from 'next/server';

export async function GET() {
    // Strategic OPSEC Relay: 
    // This keeps the raw phone number out of the client-side bundle.
    // The number is only stored here on the server.
    const WA_NUMBER = "2348077609209"; // 
    const message = encodeURIComponent("Hello Olabanji, I'm reaching out from your portfolio regarding a strategic opportunity.");
    const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${message}`;

    return NextResponse.redirect(whatsappUrl);
}
