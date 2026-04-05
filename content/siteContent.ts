export const company = {
  founder: 'Guillaume Willaime Moulin',
  founderDisplay: 'Guillaume WILLAIME MOULIN',
  agency: 'Immo Secure',
  offerName: 'Zéro Opportunité Perdue',
  email: 'immosecure@proton.me',
  linkedinUrl: 'https://www.linkedin.com/in/guillaumewm',
  phoneDisplay: '+33 7 66 13 37 02',
  phoneHref: '+33766133702'
};

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();

export const bookingCta = bookingUrl
  ? {
      href: bookingUrl,
      label: 'Réserver un créneau',
      shortLabel: 'Créneau',
      helper: 'Choisissez directement votre créneau de 30 minutes.',
      isExternal: true
    }
  : {
      href: `tel:${company.phoneHref}`,
      label: 'Appeler maintenant',
      shortLabel: 'Appeler',
      helper: 'Fixons le créneau directement par téléphone.',
      isExternal: false
    };

export const seoContent = {
  siteUrl: 'https://immosecure.fr',
  title: 'Immo Secure | Ne perdez plus de mandats faute de réponse rapide',
  shortTitle: 'Immo Secure',
  description:
    'Immo Secure aide les agences immobilières à répondre en moins de 60 secondes, relancer automatiquement les estimations et récupérer les mandats perdus faute de suivi.',
  socialDescription:
    'Réponse immédiate aux leads, relance automatique des estimations et diagnostic commercial pour récupérer plus de rendez-vous et plus de mandats.',
  keywords: [
    'agence immobilière indépendante',
    'leads immobiliers',
    'mandats immobiliers',
    'relance estimation immobilière',
    'automatisation immobilier',
    'suivi commercial agence immobilière',
    'réponse instantanée lead immobilier',
    'récupérer plus de mandats'
  ],
  ogImageAlt: 'Immo Secure, système de réponse instantanée et de relance pour agences immobilières',
  locale: 'fr_FR',
  language: 'fr-FR'
};

export const ctaLabels = {
  primary: 'Demander un diagnostic',
  short: 'Diagnostic',
  helper: 'En 30 minutes, vous voyez exactement où vous perdez des mandats.'
};

export const heroContent = {
  title: 'Chaque minute sans réponse offre des mandats à la concurrence.',
  subtitle:
    'Immo Secure répond aux leads en moins de 60 secondes, relance automatiquement les estimations et pousse vos prospects vers le rendez-vous avant qu’ils ne partent ailleurs.',
  primaryCta: {
    label: ctaLabels.primary,
    href: '#contact'
  },
  tension: 'Un prospect qui attend quelques minutes peut signer ailleurs avant même votre rappel.'
};

export const heroSignals = [
  {
    label: 'Pour qui',
    value: 'Agences immobilières indépendantes'
  },
  {
    label: 'Ce qui se perd',
    value: 'Leads chauds, estimations, mandats'
  },
  {
    label: 'Ce qui change',
    value: 'Un suivi commercial qui ne laisse plus filer les opportunités'
  }
];

export const proofStripItems = [
  'Diagnostic en 30 min',
  'Compatible avec vos outils actuels',
  'Mise en place guidée',
  'Pensé pour les agences indépendantes'
];

export const navLinks = [
  { label: 'Problème', href: '#probleme' },
  { label: 'Avant / Après', href: '#avant-apres' },
  { label: 'Solution', href: '#solution' },
  { label: 'Résultats', href: '#resultats' },
  { label: 'Preuve', href: '#preuve' },
  { label: 'Diagnostic', href: '#contact' }
];

export const demoContent = {
  title: 'La preuve par une simulation visuelle',
  description:
    'En quelques secondes, vous voyez comment une demande passe de lead entrant à rendez-vous proposé, sans zone morte entre les deux.',
  label: 'Simulation visuelle',
  videoTitle: 'Du lead entrant au rendez-vous',
  videoSubtitle:
    'Même démonstration, même logique commerciale: vitesse de réponse, relance, puis proposition de rendez-vous.',
  bullets: [
    'Réponse envoyée dès l’entrée du lead',
    'Qualification sans attente côté prospect',
    'Relance automatique si la demande reste tiède',
    'Rendez-vous poussé avant que le prospect décroche'
  ]
};

export const problemContent = {
  title: 'Le problème n’est pas le manque de leads. C’est le temps perdu avant la réponse.',
  paragraphs: [
    'Quand la réponse tarde ou que la relance n’arrive jamais, le prospect compare, se refroidit puis signe avec l’agence qui a répondu la première.'
  ],
  bullets: [
    '1 lead non suivi = 1 mandat potentiellement offert à la concurrence',
    'Une estimation non relancée disparaît du pipe sans jamais revenir',
    'Quand l’équipe est en visite, les demandes chaudes tombent entre deux tâches'
  ],
  conclusion: 'Le retard n’est pas neutre: il fait vendre l’agence d’en face à votre place.'
};

export const problemScenarios = [
  {
    title: 'Pause déjeuner',
    text: 'Un prospect appelle pendant que l’agence est indisponible. Il réserve ailleurs avant le rappel.'
  },
  {
    title: 'Samedi après-midi',
    text: 'Un vendeur laisse une demande d’estimation. Le message dort jusqu’au lundi.'
  },
  {
    title: 'Agent en visite',
    text: 'Votre équipe est sur le terrain. Le lead entre, attend, puis se refroidit.'
  }
];

export const scenarioContent = {
  title: 'Voyez un parcours prospect de A à Z',
  description:
    'Un lead entre. Le système répond, qualifie, propose un rendez-vous, puis alerte votre agence au bon moment.',
  leadSource: 'Lead entrant depuis le site ou un portail',
  steps: [
    'Lead entrant',
    'Réponse instantanée',
    'Qualification',
    'Rendez-vous proposé',
    'Alerte agence'
  ],
  notification: 'Lead chaud à rappeler en priorité',
  messages: [
    {
      from: 'prospect',
      text: 'Bonjour, je veux faire estimer mon appartement.'
    },
    {
      from: 'système',
      text: 'Bien reçu. Souhaitez-vous un rendez-vous cette semaine ?'
    },
    {
      from: 'prospect',
      text: 'Oui, plutôt jeudi en fin de journée.'
    },
    {
      from: 'système',
      text: 'Parfait. L’agence est notifiée, lead chaud détecté.'
    }
  ]
};

export const solutionContent = {
  title: 'Le système ne rajoute pas du bruit. Il sécurise les moments où vous perdez déjà le mandat.',
  intro: 'Deux automatisations simples pour rester le premier à répondre et le premier à relancer.',
  pillars: [
    {
      title: 'Chaque lead reçoit une réponse immédiate',
      badge: 'Moins de 60 secondes',
      does: 'Dès qu’une demande entre, le prospect reçoit une réponse, avance dans la qualification et voit la prochaine étape au lieu d’attendre.',
      sees: 'Le lead arrive cadré, avec les bonnes infos et le bon niveau de priorité.',
      impact: 'Vous êtes le premier à répondre, pas le deuxième à rappeler.'
    },
    {
      title: 'Chaque estimation continue d’être suivie',
      badge: 'Relance automatique',
      does: 'Les relances partent automatiquement au bon moment et s’arrêtent dès que le prospect répond ou prend rendez-vous.',
      sees: 'Le pipeline reste net, sans liste manuelle ni rappel oublié.',
      impact: 'Vous récupérez des mandats que votre agence perdait déjà en silence.'
    }
  ]
};

export const deliverablesContent = {
  title: 'Ce que vous recevez concrètement',
  description:
    'Pas une promesse abstraite. Des briques visibles qui sécurisent votre suivi commercial au quotidien.',
  items: [
    {
      title: 'Qualification automatique des leads',
      text: "Les demandes sont triées avant d'arriver à l'équipe."
    },
    {
      title: 'Proposition de rendez-vous',
      text: "Le système pousse le prospect vers l'étape suivante sans attente."
    },
    {
      title: 'Relance automatique après estimation',
      text: 'Le suivi continue sans reposer sur la mémoire des agents.'
    },
    {
      title: 'Alertes sur les leads chauds',
      text: 'Votre agence intervient quand cela compte vraiment.'
    },
    {
      title: 'Suivi sans oubli',
      text: 'Chaque opportunité suit un process clair jusqu’à la décision.'
    },
    {
      title: 'Intégration avec vos outils',
      text: 'Le système s’adapte à votre organisation actuelle.'
    }
  ]
};

export const comparisonContent = {
  title: 'Avant: attente, oubli, mandat perdu. Après: réponse, rendez-vous, mandat sécurisé.',
  description: 'Le bénéfice doit se comprendre en un coup d’œil.'
};

export const benefits = [
  {
    title: 'Vous êtes le premier à répondre',
    text: 'Le prospect reçoit un retour immédiat, même quand votre équipe est en visite ou déjà en rendez-vous.'
  },
  {
    title: 'Vous récupérez des mandats déjà perdus',
    text: 'Les estimations oubliées reviennent dans le pipe au lieu de disparaître sans suite.'
  },
  {
    title: 'Votre suivi reste actif 7j/7',
    text: 'Le process continue à midi, le soir et le week-end, là où beaucoup de mandats se décident.'
  },
  {
    title: 'Votre équipe se concentre sur les leads chauds',
    text: 'Elle intervient au bon moment, au lieu de perdre du temps à rattraper des oublis.'
  }
];

export const urgencyContent = {
  title: 'Pourquoi agir maintenant',
  description:
    'Le premier qui répond prend souvent l’avantage. Et une estimation non relancée ne revient pas toute seule.',
  items: [
    'Les leads refroidissent vite',
    "Le premier contact garde souvent l'avantage",
    'Quelques opportunités mal traitées peuvent changer votre mois'
  ]
};

export const processSteps = [
  {
    title: 'Audit',
    text: 'On identifie où vous perdez des mandats.'
  },
  {
    title: 'Mise en place',
    text: 'On configure le système sur vos outils actuels.'
  },
  {
    title: 'Activation',
    text: 'Le suivi tourne. Vous gardez le contrôle.'
  }
];

export const differentiation = {
  title: 'Ce n’est pas une IA gadget. C’est un système de vente.',
  text: [
    'Pas de jargon technique inutile.',
    'Seulement un process commercial concret.',
    'Chaque lead est traité. Chaque estimation est suivie.'
  ]
};

export const credibilityPoints = [
  'Pensé pour les agences immobilières indépendantes',
  'Compatible avec vos outils actuels',
  'Orienté résultats, pas gadget',
  'Mise en place guidée',
  'Interlocuteur direct'
];

export const faqItems = [
  {
    question: 'Est-ce que je dois changer de CRM ?',
    answer: 'Non. Le système se branche sur vos outils actuels.'
  },
  {
    question: 'Est-ce que les messages restent personnalisés ?',
    answer: 'Oui. Le ton et les messages sont adaptés à votre agence.'
  },
  {
    question: 'Est-ce que cela remplace mon équipe ?',
    answer: 'Non. Cela automatise le répétitif pour libérer du temps commercial.'
  },
  {
    question: 'Est-ce compliqué à mettre en place ?',
    answer: 'Non. La mise en place est guidée et structurée.'
  },
  {
    question: 'Est-ce adapté à une petite agence ?',
    answer: 'Oui. C’est souvent là que le gain est le plus rapide.'
  },
  {
    question: 'Comment savoir si c’est rentable pour moi ?',
    answer: 'Le diagnostic initial montre rapidement le potentiel à récupérer.'
  }
];

export const finalCta = {
  title: 'Chaque lead non relancé peut devenir un mandat perdu',
  text: 'En 30 minutes, vous voyez exactement où votre agence perd des mandats et comment corriger ça.',
  button: ctaLabels.primary
};

export const contactContent = {
  title: 'Demandez votre diagnostic',
  subtitle:
    'En 30 minutes, vous identifiez exactement où vous perdez des mandats, ce qu’il faut automatiser et ce qui doit être corrigé en priorité.',
  closing: '3 champs. 30 minutes. Un plan clair pour récupérer plus de rendez-vous.'
};
