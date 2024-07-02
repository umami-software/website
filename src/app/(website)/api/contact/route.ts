import { NextRequest, NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

export async function POST(req: NextRequest) {
  const { name, email, title, company, size, comment } = await req.json();

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

  const msg = {
    to: 'mike@umami.is',
    from: 'mike@umami.is',
    subject: 'Umami - Contact form',
    text: `
      Name: ${name}
      Email: ${email}
      Title: ${title}
      Company: ${company}
      Company size: ${size}
      Use case:
      ${comment}
    `,
  };

  return sendgrid
    .send(msg)
    .then(() => {
      return NextResponse.json({ ok: true });
    })
    .catch(error => {
      return NextResponse.json({ ok: false, error });
    });
}
