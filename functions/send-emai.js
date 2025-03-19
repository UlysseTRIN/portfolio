// functions/send-email.js

export async function onRequestPost({ request, env }) {
  try {
    const { nom, email, message } = await request.json();

    // Vérification de la validité des champs
    if (!nom || !email || !message) {
      return new Response(JSON.stringify({ error: "Champs manquants" }), { status: 400 });
    }

    // Récupérer la clé SendGrid depuis les variables d'environnement
    const SENDGRID_API_KEY = env.SENDGRID_API_KEY;

    // Configurer le corps du message à envoyer via SendGrid
    const body = {
      personalizations: [
        {
          to: [{ email: "votre_email@exemple.com" }], // Remplacez par votre adresse mail de réception
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

    // Appel à l'API SendGrid
    const sendgridResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (sendgridResponse.ok) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      const errorText = await sendgridResponse.text();
      return new Response(JSON.stringify({ error: errorText }), { status: 500 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
