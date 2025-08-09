export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data || {};

    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // TODO: send email or save to DB. For now, log.
    console.log("Contact submission:", { name, email, message });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
}


