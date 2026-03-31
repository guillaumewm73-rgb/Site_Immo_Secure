'use client';

import { FormEvent, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { company, contactContent, ctaLabels } from '@/content/siteContent';

type ContactFormValues = {
  firstName: string;
  lastName: string;
  agency: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  firstName: '',
  lastName: '',
  agency: '',
  email: '',
  phone: '',
  message: ''
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+()\s\d.-]{8,}$/;

const demoOutcomes = [
  'Un diagnostic clair de votre suivi actuel',
  'Les opportunités commerciales perdues à récupérer',
  'Un plan simple de mise en place sur vos outils'
];

function validate(values: ContactFormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.firstName.trim().length < 2) {
    errors.firstName = 'Prénom requis (2 caractères minimum).';
  }
  if (values.lastName.trim().length < 2) {
    errors.lastName = 'Nom requis (2 caractères minimum).';
  }
  if (values.agency.trim().length < 2) {
    errors.agency = 'Nom d’agence requis.';
  }
  if (!emailRegex.test(values.email.trim())) {
    errors.email = 'Adresse email invalide.';
  }
  if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = 'Numéro de téléphone invalide.';
  }
  if (values.message.trim().length < 12) {
    errors.message = 'Message trop court (12 caractères minimum).';
  }

  return errors;
}

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('idle');

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('request_failed');
      }

      setStatus('success');
      setValues(initialValues);
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-space">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          <div className="relative overflow-hidden rounded-3xl border border-deep/20 bg-gradient-to-br from-deep to-steel p-7 text-white shadow-card sm:p-8">
            <div className="absolute -right-14 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85">
                Prise de contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{contactContent.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-white/85">
                {contactContent.subtitle}
              </p>

              <ul className="mt-6 space-y-2">
                {demoOutcomes.map((item) => (
                  <li key={item} className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/90">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 space-y-2 text-sm text-white/85">
                <p>
                  <span className="font-semibold text-white">Fondateur :</span> {company.founder}
                </p>
                <p>
                  <span className="font-semibold text-white">Email :</span> {company.email}
                </p>
                <p>
                  <span className="font-semibold text-white">Téléphone :</span> {company.phoneDisplay}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="panel p-7 sm:p-8">
            <div className="mb-5 border-b border-line pb-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Formulaire</p>
              <p className="mt-1 text-base text-slate-600">Réponse rapide. Aucun engagement.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id="firstName"
                label="Prénom"
                value={values.firstName}
                error={errors.firstName}
                placeholder="Guillaume"
                onChange={(value) => handleChange('firstName', value)}
              />
              <Field
                id="lastName"
                label="Nom"
                value={values.lastName}
                error={errors.lastName}
                placeholder="Moulin"
                onChange={(value) => handleChange('lastName', value)}
              />
            </div>

            <div className="mt-4 grid gap-4">
              <Field
                id="agency"
                label="Nom de l’agence"
                value={values.agency}
                error={errors.agency}
                placeholder="Immo Centre Ville"
                onChange={(value) => handleChange('agency', value)}
              />
              <Field
                id="email"
                type="email"
                label="Email"
                value={values.email}
                error={errors.email}
                placeholder="contact@agence.fr"
                onChange={(value) => handleChange('email', value)}
              />
              <Field
                id="phone"
                label="Téléphone"
                value={values.phone}
                error={errors.phone}
                placeholder="06 00 00 00 00"
                onChange={(value) => handleChange('phone', value)}
              />
              <Field
                id="message"
                label="Message"
                value={values.message}
                error={errors.message}
                placeholder="Décrivez rapidement votre situation (volume de leads, suivi actuel, difficultés)."
                multiline
                onChange={(value) => handleChange('message', value)}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'loading' ? 'Envoi en cours...' : ctaLabels.secondary}
            </button>

            <p className="mt-3 text-center text-sm text-slate-500">Réponse rapide. Aucun engagement.</p>
            <p className="mt-2 text-center text-sm font-medium text-steel">{contactContent.closing}</p>

            {status === 'success' ? (
              <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                Votre demande a bien été envoyée. Nous revenons vers vous rapidement.
              </p>
            ) : null}

            {status === 'error' ? (
              <p className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                Une erreur est survenue. Vous pouvez aussi nous écrire à {company.email}.
              </p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  placeholder?: string;
  type?: 'text' | 'email';
  multiline?: boolean;
  onChange: (value: string) => void;
};

function Field({
  id,
  label,
  value,
  error,
  placeholder,
  type = 'text',
  multiline = false,
  onChange
}: FieldProps) {
  return (
    <label htmlFor={id} className="block text-sm font-medium text-slate-700">
      {label}
      {multiline ? (
        <textarea
          id={id}
          name={id}
          value={value}
          rows={5}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className="field-input resize-y"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className="field-input"
        />
      )}
      {error ? <span className="mt-1 block text-xs text-rose-600">{error}</span> : null}
    </label>
  );
}
