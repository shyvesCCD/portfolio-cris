require("dotenv").config();

const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

export default async function handler(req: any, res: any) {
    const { name, lastName, email, message, category, language } = req.body;

    if (language == "en") {
        const msgEN = {
            to: email,
            from: FROM_EMAIL,
            subject: `Cris Aldreyn | Video Editing | ${category} Project`,
            html: `
            <p>Hi ${name},</p>
            <br>
            <p>Thank you for reaching out!</p>
            <br>
            <p>I have received your message and will review the details you provided.</p>
            <br>
            <p>In the meantime, check out some of my <a href="https://portfolio-cris.vercel.app/projects/">work</a>, take a peek inside my <a href="https://portfolio-cris.vercel.app/services/">editing room</a>, and learn more about me in this <a href="https://portfolio-cris.vercel.app/about/">video</a>.</p>
            <br>
            <p>I’ll contact you soon to <strong>schedule a complimentary 30min</strong> chat about your ${category} project.</p>
            <br>
            <p>Sincerely,</p>
            <br>
            <p>Cris Aldreyn</p>
            <br>
            <p>Do not reply to this email.</p>
            `,
        };
        await sgMail.send(msgEN);
    } else if (language == "pt-BR") {
        const msgPT = {
            to: email,
            from: FROM_EMAIL,
            subject: `Cris Aldreyn | Edição de Vídeo | Projeto de ${category}`,
            html: `
            <p>Olá ${name},</p>
            <br>
            <p>Obrigada pelo contato!</p>
            <br>
            <p>Recebi sua mensagem e analisarei os detalhes fornecidos.</p>
            <br>
            <p>Enquanto isso, confira alguns dos meus <a href="https://portfolio-cris.vercel.app/pt-BR/projects/">trabalhos</a>, de uma olhada na <a href="https://portfolio-cris.vercel.app/pt-BR/services/">sala de edição</a>, e saiba mais sobre mim neste <a href="https://portfolio-cris.vercel.app/pt-BR/about/">vídeo</a>.</p>
            <br>
            <p>Entrarei em contato em breve para agendar uma conversa gratuita de 30 minutos sobre o seu projeto de ${category}</p>
            <br>
            <p>Atenciosamente,</p>
            <br>
            <p>Cris Aldreyn</p>
            <br>
            <p>Não é necessário responder este email.</p>
            `,
        };
        await sgMail.send(msgPT);
    } else if (language == "ko-KR") {
        const msgKR = {
            to: email,
            from: FROM_EMAIL,
            subject: `Cris Aldreyn | 영상 편집 | 프로젝트 ${category}`,
            html: `
            <p>안녕하세요 ${lastName} ${name},</p>
            <br>
            <p>문의해 주셔서 감사합니다.</p>
            <br>
            <p>귀하의 메시지를 받았으며 제공된 세부 정보를 검토하겠습니다.</p>
            <br>
            <p>그 동안 내 몇 가지를 확인하십시오 <a href="https://portfolio-cris.vercel.app/ko-KR/projects/">작업하고</a>, 그리고 이것에서 나에 대해 더 알아보십시오
 <a href="https://portfolio-cris.vercel.app/ko-KR/services/">편집실</a>, 내부를 들여다보고 이 <a href="https://portfolio-cris.vercel.app/ko-KR/about/">동영상</a></p>
            <br>
            <p>귀하의 ${category} 프로젝트에 대한 무료 30분 채팅 일정을 잡기 위해 곧 연락드리겠습니다.</p>
            <br>
            <p>감사합니다,</p>
            <br>
            <p>Cris Aldreyn</p>
            <br>
            <p>이 이메일에 답장하지 마세요.</p>
            `,
        };
        await sgMail.send(msgKR);
    } else {
        const msgES = {
            to: email,
            from: FROM_EMAIL,
            subject: `Cris Aldreyn | Edición de video | Proyecto ${category}`,
            html: `
            <p>Hola ${name},</p>
            <br>
            <p>¡Gracias por el contacto!</p>
            <br>
            <p>Recibí tu mensaje y revisaré los detalles proporcionados.</p>
            <br>
            <p>Mientras tanto, echa un vistazo a algunos de mis <a href="https://portfolio-cris.vercel.app/es/projects/">trabajos</a>, echa un vistazo a mi <a href="https://portfolio-cris.vercel.app/es/services/">sala de edición</a>, aprende más sobre mí en este <a href="https://portfolio-cris.vercel.app/es/about/">video</a>.</p>
            <br>
            <p>Me pondré en contacto en breve para programar una conversación gratuita de 30 minutos sobre su proyecto  ${category}</p>
            <br>
            <p>Tuyo sinceramente,</p>
            <br>
            <p>Cris Aldreyn</p>
            <br>
            <p>No es necesario responder a este correo electrónico..</p>
            `,
        };
        await sgMail.send(msgES);
    }

    const msg2 = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        cc: "pedro_chaves98@hotmail.com",
        subject: `O que foi respondido no formulário.`,
        html: `
        Hey        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        `,
    };

    await sgMail.send(msg2);

    res.json({ sucess: true });
}
