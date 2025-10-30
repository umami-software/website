import { NextRequest, NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

export async function POST(request: NextRequest) {
  const { name, email, title, company, size, comment } = await request.json();

  if (/\w{16,}/.test(name) || /\w{16,}/.test(comment)) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

  const ip =
    request.headers.get('x-real-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    'unknown';
  const country = request.headers.get('x-vercel-ip-country');
  const region = request.headers.get('x-vercel-ip-country-region');
  const city = request.headers.get('x-vercel-ip-city');

  const msg = {
    to: 'hello@umami.is',
    from: 'mike@umami.is',
    subject: `Umami Contact Form - ${name} (${email})`,
    replyTo: email,
    html: `<div>
      <b>Name:</b> ${name}<br/>
      <b>Email:</b> ${email}<br/>
      <b>Title:</b> ${title}<br/>
      <b>Company:</b> ${company}<br/>
      <b>Company size:</b> ${size}<br/>
      <b>Use case:</b>
      <p>${comment?.replace('\n', '<br/>')}</p>
      <p>
      IP: ${ip}<br/>
      Country: ${country}<br/>
      Region: ${region}<br/>
      City: ${city}<br/>
      </p>
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
