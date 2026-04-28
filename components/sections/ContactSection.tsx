'use client';

import { FormEvent, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { ArrowRightIcon, CheckIcon } from '@/components/ui/Icons';
import { company, contactContent, ctaLabels, formReassurance } from '@/content/siteContent';

type ContactFormValues = {
  firstName: string;
  email: string;
  phone: string;
};

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  firstName: '',
  email: '',
  phone: ''
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+()\s\d.-]{8,}$/;

const demoOutcomes = [
  'Les points précis où vos leads refroidissent',
  'Les relances à automatiser',
  'Le plan pour récupérer plus de mandats'
];

function validate(values: ContactFormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.firstName.trim().length < 2) {
    errors.firstName = 'Prénom requis (2 caractères minimum).';
  }
  if (!emailRegex.test(values.email.trim())) {
    errors.email = 'Adresse email invalide.';
  }
  if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = 'Numéro de téléphone invalide.';
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
        <div className="grid gap-7 md:grid-cols-[0.92fr_1.08fr] md:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-10">
          <div className="panel relative overflow-hidden border-white/10 bg-gradient-to-br from-deep to-secondary p-8 text-white shadow-card sm:p-10 lg:p-8 xl:p-10">
            <div className="relative">
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 section-kicker text-white/85">
                Diagnostic conversion
              </p>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.95rem] xl:text-5xl">
                {contactContent.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/86 sm:text-lg">
                {contactContent.subtitle}
              </p>

              <div className="panel-dark mt-6 p-5">
                <p className="section-kicker text-white/72">
                  Promesse avant le rendez-vous
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  En 30 minutes, vous voyez où vous perdez des mandats et comment les récupérer.
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {demoOutcomes.map((item) => (
                  <li key={item} className="panel-dark flex items-start gap-3 px-4 py-3 text-sm text-white/90">
                    <span className="mt-0.5 inline-flex rounded-full bg-accent p-1 text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="panel-dark px-4 py-4 text-sm text-white/86">
                  <p className="section-kicker text-white/72">Durée</p>
                  <p className="mt-2 font-semibold text-white">30 minutes</p>
                </div>
                <div className="panel-dark px-4 py-4 text-sm text-white/86">
                  <p className="section-kicker text-white/72">Interlocuteur</p>
                  <p className="mt-2 font-semibold text-white">{company.founderDisplay}</p>
                </div>
                <div className="panel-dark px-4 py-4 text-sm text-white/86 sm:col-span-2">
                  <p className="section-kicker text-white/72">Coordonnées</p>
                  <p className="mt-2 font-semibold text-white [overflow-wrap:anywhere]">
                    {company.email} · {company.phoneDisplay}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="panel relative overflow-hidden border border-line bg-white p-7 shadow-card sm:p-9 lg:p-8 xl:p-9">
            <div className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-accent/8 blur-3xl" />

            <div className="relative mb-6 border-b border-line/80 pb-5">
              <p className="section-kicker text-accent">Formulaire</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {ctaLabels.primary}
              </h3>
              <p className="mt-2 text-base text-steel">
                3 champs pour voir où vos mandats se perdent et revenir vers vous rapidement.
              </p>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-2">
              <Field
                id="firstName"
                label="Prénom"
                value={values.firstName}
                error={errors.firstName}
                placeholder="Guillaume"
                onChange={(value) => handleChange('firstName', value)}
              />
              <Field
                className="sm:col-span-2"
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
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary relative mt-6 min-h-[60px] w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'loading' ? 'Envoi en cours...' : ctaLabels.form}
              {status === 'loading' ? null : <ArrowRightIcon className="h-4 w-4" />}
            </button>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
              {formReassurance.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line/80 bg-surface-alt px-3 py-2 text-xs font-semibold text-steel"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-4 text-center text-sm font-medium text-steel">{contactContent.closing}</p>

            {status === 'success' ? (
              <p className="mt-5 rounded-[1.25rem] border border-accent/15 bg-accent-soft/45 px-4 py-3 text-sm text-accent">
                Votre demande a bien été envoyée. Nous revenons vers vous rapidement pour caler le diagnostic.
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
  className?: string;
  id: string;
  label: string;
  value: string;
  error?: string;
  placeholder?: string;
  type?: 'text' | 'email';
  onChange: (value: string) => void;
};

function Field({
  className,
  id,
  label,
  value,
  error,
  placeholder,
  type = 'text',
  onChange
}: FieldProps) {
  return (
    <label htmlFor={id} className={`block text-sm font-medium text-ink ${className ?? ''}`}>
      <span className="section-kicker text-steel">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="field-input"
      />
      {error ? <span className="mt-2 block text-xs text-steel">{error}</span> : null}
    </label>
  );
}
