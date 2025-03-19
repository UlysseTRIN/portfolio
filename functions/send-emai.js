// functions/send-email.js

// Handler pour la requête OPTIONS (préflight CORS)
export async function onRequestOptions({ request }) {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*", // Vous pouvez restreindre l'origine si nécessaire
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}

// Handler pour la requête POST
export async function onRequestPost({ request, env }) {
  try {
    const { nom, email, message } = await request.json();

    // Vérification de la validité des champs
    if (!nom || !email || !message) {
      return new Response(JSON.stringify({ error: "Champs manquants" }), {
        status: 400,
        headers: { "Access-Control-Allow-Origin": "*" }
      });
    }

    // Récupérer la clé SendGrid depuis les variables d'environnement
    const SENDGRID_API_KEY = env.SENDGRID_API_KEY;

    // Configurer le corps du message à envoyer via SendGrid
    const body = {
      personalizations: [
        {
          to: [{ email: "ulysse.trin@hotmail.fr" }], // Remplacez par votre adresse mail de réception
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
