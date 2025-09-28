import { NextRequest, NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

export async function POST(req: NextRequest) {
  const { name, email, title, company, size, comment } = await req.json();

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

  const msg = {
    to: 'oravo@imoogleai.xyz',
    from: 'oravo@imoogleai.xyz',
    subject: `Oravo Contact Form - ${name} (${email})`,
    replyTo: email,
    html: `<div>
      <b>Name:</b> ${name}<br/>
      <b>Email:</b> ${email}<br/>
      <b>Title:</b> ${title}<br/>
      <b>Company:</b> ${company}<br/>
      <b>Company size:</b> ${size}<br/>
      <b>Use case:</b>
      <p>${comment?.replace('\n', '<br/>')}</p>
      </div>
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
