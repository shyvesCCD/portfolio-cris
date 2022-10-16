export default function () {
  const mailjet = require("node-mailjet").connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
  );
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "pilot@mailjet.com",
          Name: "Mailjet Pilot",
        },
        To: [
          {
            Email: "passenger1@mailjet.com",
            Name: "passenger 1",
          },
        ],
        Subject: "Your email flight plan!",
        TextPart:
          "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
        HTMLPart:
          '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
      },
    ],
  });
  request
    .then((result: any) => {
      console.log(result.body);
    })
    .catch((err: any) => {
      console.log(err.statusCode);
    });
}
