import { NextResponse } from 'next/server';

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  agency?: string;
  email?: string;
  phone?: string;
  message?: string;
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
    lastName: body.lastName?.trim() ?? '',
    agency: body.agency?.trim() ?? '',
    email: body.email?.trim() ?? '',
    phone: body.phone?.trim() ?? '',
    message: body.message?.trim() ?? ''
  };

  const isValid =
    normalized.firstName.length >= 2 &&
    normalized.lastName.length >= 2 &&
    normalized.agency.length >= 2 &&
    emailRegex.test(normalized.email) &&
    phoneRegex.test(normalized.phone) &&
    normalized.message.length >= 12;

  if (!isValid) {
    return NextResponse.json(
      { ok: false, message: 'Merci de vérifier les champs du formulaire.' },
      { status: 400 }
    );
  }

  // Endpoint de démonstration : brancher ici l'envoi email ou webhook.
  return NextResponse.json({ ok: true, message: 'Demande reçue.' }, { status: 200 });
}
