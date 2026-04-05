import { NextResponse } from 'next/server';

type ContactPayload = {
  firstName?: string;
  email?: string;
  phone?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+()\s\d.-]{8,}$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, message: 'Payload invalide.' }, { status: 400 });
  }

  const normalized = {
    firstName: body.firstName?.trim() ?? '',
    email: body.email?.trim() ?? '',
    phone: body.phone?.trim() ?? ''
  };

  const isValid =
    normalized.firstName.length >= 2 &&
    emailRegex.test(normalized.email) &&
    phoneRegex.test(normalized.phone);

  if (!isValid) {
    return NextResponse.json(
      { ok: false, message: 'Merci de vérifier les champs du formulaire.' },
      { status: 400 }
    );
  }

  // Endpoint de démonstration : brancher ici l'envoi email ou webhook.
  return NextResponse.json({ ok: true, message: 'Demande reçue.' }, { status: 200 });
}
