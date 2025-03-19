// functions/send-email.js

export async function onRequestPost({ request, env }) {
  try {
    const { nom, email, message } = await request.json();

    if (!nom || !email || !message) {
      return new Response(JSON.stringify({ error: "Champs manquants" }), {
        status: 400,
        headers: { "Access-Control-Allow-Origin": "*" }
      });
    }

    const SENDGRID_API_KEY = env.SENDGRID_API_KEY;

    const body = {
      personalizations: [
        {
          to: [{ email: "ulysse.trin@hotmail.fr" }],
          subject: "Nouveau message de votre site"
        }
      ],
      from: { email, name: nom },
      content: [
        {
          type: "text/plain",
          value: message
        }
      ]
    };

    const sendgridResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (sendgridResponse.ok) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Access-Control-Allow-Origin": "*" }
      });
    } else {
      const errorText = await sendgridResponse.text();
      return new Response(JSON.stringify({ error: errorText }), {
        status: 500,
        headers: { "Access-Control-Allow-Origin": "*" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
}
