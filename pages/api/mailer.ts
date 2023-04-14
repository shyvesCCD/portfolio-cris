require("dotenv").config();

const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

export default async function handler(req: any, res: any) {
    const { name, email, message, category } = req.body;

    const msg = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        cc: TO_EMAIL,
        subject: `Nova resposta de email para projeto: ${category}`,
        html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        `,
    };

    await sgMail.send(msg);

    res.json({ sucess: true });
}
