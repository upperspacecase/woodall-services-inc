import { NextResponse } from "next/server";
import siteConfig from "@/config/siteConfig";

export async function POST(request) {
    try {
        const { name, phone, service } = await request.json();

        // Validate required fields
        if (!name || !phone || !service) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // ---------------------------------------------------------
        // OPTION 1: Send email via Resend (uncomment when ready)
        // ---------------------------------------------------------
        // const { Resend } = await import("resend");
        // const resend = new Resend(process.env.RESEND_API_KEY);
        //
        // await resend.emails.send({
        //   from: "Website <noreply@yourdomain.com>",
        //   to: siteConfig.email,
        //   subject: `New Lead: ${service} — ${name}`,
        //   text: `Name: ${name}\nPhone: ${phone}\nService: ${service}`,
        // });

        // ---------------------------------------------------------
        // OPTION 2: Send to a webhook (uncomment when ready)
        // ---------------------------------------------------------
        // await fetch(process.env.WEBHOOK_URL, {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({ name, phone, service }),
        // });

        // For now, log to server console
        console.log("New lead:", { name, phone, service });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
