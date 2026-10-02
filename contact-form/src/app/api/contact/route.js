import transporter from "@/lib/mailer.js"

export async function POST(request) {
    try {
        const data = await request.json()

        if (!data) {
            return Response.json(
                { success: false, message: "No data recieved" }, { status: 400 })
        };
        console.log(data)

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact",
            text:
                `
                Name: ${data.name},
                Email: ${data.email},
                Buisness Age: ${data.answerOne},
                Monthy Revenue: ${data.answerTwo}
                `
        });

        return Response.json(
            { success: true, message: "Data recieved successfully" }, { status: 200 }
        )

    } catch (error) {
        console.log("mailerr", error)
        return Response.json(
            {
                success: false, message: "Request Failed"
            }, { status: 400 }
        )
    }
}