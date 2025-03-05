import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
    try {
        const payload = await request.json();
        const message = `New message from ${payload.name} (${payload.email}):\n\n${payload.message}`;
        const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

        await axios.post(url, {
            text: message,
            chat_id: process.env.TELEGRAM_CHAT_ID
        })

        return NextResponse.json({
            success: true,
            message: "Message sent successfully!"
        }, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Telegram API Error: ${error.message}`);

            return NextResponse.json(
                {
                    success: false,
                    message: "Server error occurred, please try again later."
                },
                {
                    status: 500
                }
            )
        }
    }
}