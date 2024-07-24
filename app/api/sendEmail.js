// pages/api/sendEmail.js
import fs from 'fs';
import path from 'path';
import mailjet from 'node-mailjet';

export default async function handler(req, res) {
  const htmlPath = path.join(process.cwd(), 'emailTemplates', 'confirmationEmail.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  if (req.method === 'POST') {
    try {
      const mailjetClient = mailjet.connect('your_api_key', 'your_api_secret');

      const request = await mailjetClient
        .post("send", { 'version': 'v3.1' })
        .request({
          "Messages":[{
            "From": {
              "Email": "your_email@example.com",
              "Name": "Your Name"
            },
            "To": [{
              "Email": req.body.email,
              "Name": req.body.name
            }],
            "Subject": "Confirmación de Reserva",
            "TextPart": "Detalles de la reserva",
            "HTMLPart": htmlContent.replace('{name}', req.body.name)  // Suponiendo que quieres personalizar el HTML
          }]
        });
      
      res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
