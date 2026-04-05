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
  helper: 'En 30 minutes, vous voyez exactement où vous perdez des mandats et comment les récupérer.'
};

export const heroContent = {
  title: 'Pendant que vous lisez ça, un prospect signe ailleurs.',
  subtitle:
    'Immo Secure répond en moins de 60 secondes, relance automatiquement les estimations et pousse vos prospects au rendez-vous avant la concurrence.',
  primaryCta: {
    label: ctaLabels.primary,
    href: '#contact'
  },
  tension: 'Chaque lead non répondu est déjà en train de comparer votre agence avec celle qui a répondu avant vous.'
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
  title: 'La preuve doit se voir en 2 minutes',
  description:
    'En un coup d’œil, vous voyez comment un lead passe de demande entrante à rendez-vous proposé, sans trou dans le suivi.',
  label: 'Démo courte',
  videoTitle: 'Du lead entrant au rendez-vous',
  videoSubtitle:
    'La vraie version à brancher ici est une Loom de 2 à 3 minutes. En attendant, cette simulation montre le parcours qui doit convaincre en quelques secondes.',
  bullets: [
    'Le prospect reçoit une réponse avant de douter',
    'La relance part sans dépendre de votre mémoire',
    'Le rendez-vous est proposé avant que le lead refroidisse',
    'Votre équipe intervient seulement sur les leads chauds'
  ]
};

export const problemContent = {
  title: 'Vous répondez trop tard. Le mandat est déjà parti.',
  paragraphs: ['Le prospect n’attend pas. Il compare, choisit, puis disparaît.'],
  bullets: [
    '1 lead non suivi = 1 mandat offert à la concurrence',
    '1 estimation non relancée = 1 vendeur qui refroidit',
    '1 équipe occupée = des demandes chaudes perdues'
  ],
  conclusion: 'Le retard ne coûte pas du confort. Il coûte des mandats.'
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
  title: 'Le système sert à une seule chose: vous faire gagner les mandats que vous perdiez déjà.',
  intro: 'Deux leviers. Deux résultats business. Zéro blabla technique.',
  pillars: [
    {
      title: 'Vous êtes le premier à répondre. Vous gagnez le mandat.',
      badge: 'Moins de 60 secondes',
      does: 'Le prospect reçoit une réponse immédiate et avance vers le rendez-vous avant même que votre concurrent ne rappelle.',
      sees: 'Le lead arrive cadré, avec les bonnes infos et le bon niveau de priorité.',
      impact: 'Vous prenez l’avantage quand le lead est encore chaud.'
    },
    {
      title: 'Vous relancez même quand votre équipe pense à autre chose.',
      badge: 'Relance automatique',
      does: 'Les relances partent au bon moment et s’arrêtent dès qu’un prospect répond, au lieu de disparaître dans une liste de tâches.',
      sees: 'Le pipeline reste net, sans liste manuelle ni rappel oublié.',
      impact: 'Vous récupérez les mandats qui se perdaient entre deux relances oubliées.'
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

export const resultMetrics = [
  {
    value: '+3 à 5',
    label: 'mandats / mois',
    context: 'potentiel récupéré'
  },
  {
    value: '+30%',
    label: 'de rendez-vous',
    context: 'quand la réponse part vite'
  },
  {
    value: '0',
    label: 'lead oublié',
    context: 'si le process tourne'
  }
];

export const benefits = [
  {
    title: 'Vous passez devant les agences plus lentes',
    text: 'Le prospect voit votre réactivité avant même d’avoir parlé à un concurrent.'
  },
  {
    title: 'Vous récupérez les mandats déjà en train de partir',
    text: 'Les estimations oubliées reviennent dans le pipe au lieu de mourir sans suite.'
  },
  {
    title: 'Votre suivi continue quand votre équipe n’est pas disponible',
    text: 'Midi, soirées, visites, week-ends: le prospect continue d’avancer au lieu d’attendre.'
  },
  {
    title: 'Votre équipe intervient là où ça signe',
    text: 'Elle se concentre sur les leads chauds au lieu de courir après des oublis.'
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
    'En 30 minutes, vous voyez exactement où vous perdez des mandats et ce qu’il faut corriger pour les récupérer.',
  closing: '3 champs. 30 minutes. Un plan clair pour récupérer plus de rendez-vous.'
};
