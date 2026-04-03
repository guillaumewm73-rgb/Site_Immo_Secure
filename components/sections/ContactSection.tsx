'use client';

import { FormEvent, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon, CheckIcon } from '@/components/ui/Icons';
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
  'Un diagnostic clair de votre suivi',
  'Les priorités à corriger',
  'Le potentiel à récupérer'
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
    <section id="contact" className="section-space section-dark">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-deep to-secondary p-8 text-white shadow-card sm:p-10">
            <div className="absolute -right-14 -top-12 h-40 w-40 rounded-full bg-accent/14 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/8 blur-3xl" />

            <div className="relative">
              <p className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
                Prise de contact
              </p>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{contactContent.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                {contactContent.subtitle}
              </p>

              <ul className="mt-8 space-y-3">
                {demoOutcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-[1.25rem] border border-white/12 bg-white/8 px-4 py-3 text-sm text-white/90">
                    <span className="mt-0.5 inline-flex rounded-full bg-accent p-1 text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-white/12 bg-white/8 px-4 py-4 text-sm text-white/80">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">Diagnostic</p>
                  <p className="mt-2 font-semibold text-white">30 minutes</p>
                </div>
                <div className="rounded-[1.25rem] border border-white/12 bg-white/8 px-4 py-4 text-sm text-white/80">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">Contact direct</p>
                  <p className="mt-2 font-semibold text-white">{company.founderDisplay}</p>
                </div>
                <div className="rounded-[1.25rem] border border-white/12 bg-white/8 px-4 py-4 text-sm text-white/80 sm:col-span-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">Coordonnées</p>
                  <p className="mt-2 font-semibold text-white">{company.email} · {company.phoneDisplay}</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="panel border border-line bg-white p-7 shadow-card sm:p-9">
            <div className="mb-6 border-b border-line/80 pb-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Formulaire</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Demander un diagnostic</h3>
              <p className="mt-2 text-base text-steel">Décrivez rapidement votre situation.</p>
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
                placeholder="MOULIN"
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
                placeholder="+33 6 00 00 00 00"
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
              {status === 'loading' ? null : <ArrowRightIcon className="h-4 w-4" />}
            </button>

            <p className="mt-4 text-center text-sm font-medium text-steel">{contactContent.closing}</p>

            {status === 'success' ? (
              <p className="mt-5 rounded-[1.25rem] border border-accent/15 bg-accent-soft/45 px-4 py-3 text-sm text-accent">
                Votre demande a bien été envoyée. Nous revenons vers vous rapidement.
              </p>
            ) : null}

            {status === 'error' ? (
              <p className="mt-5 rounded-[1.25rem] border border-line bg-surface px-4 py-3 text-sm text-steel">
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
    <label htmlFor={id} className="block text-sm font-medium text-ink">
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
      {error ? <span className="mt-2 block text-xs text-steel">{error}</span> : null}
    </label>
  );
}
