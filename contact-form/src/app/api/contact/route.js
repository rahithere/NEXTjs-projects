

export async function POST(request) {
    try {
        const data = await request.json()

        if (!data) {
            return Response.json(
                { success: false, message: "No data recieved" }, { status: 400 })
        };

        console.log(data)

        return Response.json(
            { success: true, message: "Data recieved successfully" }, { status: 200 }
        )
    } catch (error) {
        return Response.json(
            {
                success: false, message: "Request Failed"
            }, { status: 400 }
        )
    }
}