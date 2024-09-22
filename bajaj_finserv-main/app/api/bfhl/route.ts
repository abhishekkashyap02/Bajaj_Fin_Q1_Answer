import { NextRequest, NextResponse } from "next/server";
import { processData } from "@/lib/utils";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { data } = body;

        if (!Array.isArray(data)) {
            return NextResponse.json(
                { error: "Invalid input: data must be an array" },
                { status: 400 }
            );
        }

        const { numbers, alphabets, highestLowercase } = processData(data);

        const response = {
            is_success: true,
            user_id: "abhishek_kashyap",
            email: "ak0746@srmist.edu.in",
            roll_number: "RA2111003011670",
            numbers,
            alphabets,
            highest_lowercase_alphabet: highestLowercase,
        };

        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({ operation_code: 1 });
}
