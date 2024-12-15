import axios from "axios";
import { NextResponse } from "next/server";

async function sendTelegramMessage(token, chatID, message) {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const res = await axios.post(url, {
            text: message,
            chat_id: chatID
        });

        return res.data.ok;
    } catch (error) {
        console.error("Error sending message to Telegram", error.response?.data || error.message);
        return false;
    }
}

export async function POST(request) {
    try {
        const payload = await request.json();
        const { name, email, message: userMessage} = payload;
        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatID = process.env.TELEGRAM_CHAT_ID;
        let message = `Message sent from ${name} (${email}):\n\n${userMessage}`;

        if (!token || !chatID) {
            return NextResponse.json({
                success: false,
                message: "Telegram token or chat ID is missing."
            }, { status: 500 });
        }

        const success = await sendTelegramMessage(token, chatID, message);

        if (success) {
            return NextResponse.json({
                success: true,
                message: "Message sent successfully!"
            }, { status: 200 });
        }

        return NextResponse.json({
            success: false,
            message: "Failed to send message."
        }, { status: 500 });
    } catch (error) {
        console.error("API error", error.message);
        return NextResponse.json({
            success: false,
            message: "Internal server error occurred."
        }, { status: 500 });
    }
}