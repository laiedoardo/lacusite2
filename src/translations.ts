export type Language = 'it' | 'sc' | 'en';

export const translations = {
  it: {
    nav: {
      home: 'Home',
      project: 'Il Progetto',
      community: 'Comunità',
      journal: 'Lavori in Corso',
      contacts: 'Contatti',
    },
    hero: {
      title: 'LACUS',
      subtitle: 'Lo spazio dove l’arte trova rifugio e condivisione',
    },
    project: {
      title: 'Il Progetto',
      points: [
        'Luogo dove artisti provenienti da tutto il mondo possono sviluppare la propria idea artistica.',
        'Spazio dove gli artisti incontrano la comunità e il territorio.',
        'Una finestra per la comunità locale verso il mondo.'
      ],
      studioTitle: 'Studio di Registrazione',
      studioDesc: 'Uno spazio acusticamente isolato e tecnologicamente avanzato per produzioni professionali di alto livello. Ideale per registrazioni musicali, sound design e sperimentazione sonora.',
      residencyTitle: 'Residenza Artistica',
      residencyDesc: 'Due ampi spazi multifunzionali dedicati alle arti visive, alla scrittura creativa e alla ricerca accademica. Un rifugio dove il tempo rallenta e la concentrazione si espande.',
      visionTitle: 'Visione e Missione',
      visionDesc: 'Sosteniamo il talento creativo offrendo infrastrutture d\'avanguardia in un contesto sardo autentico. Crediamo che la periferia sia il nuovo centro della ricerca artistica globale.'
    },
    roots: {
      title: 'Radici e Futuro',
      description: 'Lacus non è solo una struttura fisica, ma un punto di incontro con la comunità di Gergei. Uno scambio di energie: l\'artista porta la sua visione, il territorio offre i suoi saperi millenari e le sue tradizioni.'
    },
    status: {
      title: 'Stato dei lavori',
      description: 'Un cantiere di idee in continua evoluzione.',
      images: [
        { title: 'Intonaci naturali', alt: 'Lavori in corso' },
        { title: 'Incontro di poesia', alt: 'Evento locale' },
        { title: 'Sviluppo atelier', alt: 'Cantiere creativo' }
      ]
    },
    partners: {
      title: 'Partner Locali',
      description: 'Le radici del progetto nel territorio del Sarcidano.',
      list: ['Associazione Archeologica Gergei', 'Proloco Gergei', 'Sarcidano Sostenibile', 'Cooperativa Saperi Antichi']
    },
    journal: {
      title: 'Lavori in Corso',
      wip: 'In Corso',
      posts: [
        { date: '12 Maggio 2026', title: 'Sinfonie Sarde', desc: 'Aggiornamenti sulle attività creative di Lacus residency.' },
        { date: '05 Aprile 2026', title: 'Pietra e Colore', desc: 'Aggiornamenti sulle attività creative di Lacus residency.' },
        { date: '20 Marzo 2026', title: 'Residenza Invernale', desc: 'Aggiornamenti sulle attività creative di Lacus residency.' },
        { date: '10 Febbraio 2026', title: 'Nuovi Atelier', desc: 'Aggiornamenti sulle attività creative di Lacus residency.' },
      ]
    },
    footer: {
      location: 'Sardegna — Italia',
      designed: 'Progettato per Creativi.',
      rights: 'Tutti i diritti riservati.',
    }
  },
  sc: {
    nav: {
      home: 'Domu',
      project: 'Su Progettu',
      community: 'Comunitade',
      journal: 'Triballos in Cursu',
      contacts: 'Cuntattos',
    },
    hero: {
      title: 'LACUS',
      subtitle: 'S\'ispatziu ue s\'arte agatat amparu e cussididura',
    },
    project: {
      title: 'Su Progettu',
      points: [
        'Logu ue artistas de totu su mundu podent isvilupare sa pròpia idea artìstica.',
        'Ispàtziu ue is artistas addòbiant sa comunitade e su territòriu.',
        'Una ventana pro sa comunitade locale cara a su mundu.'
      ],
      studioTitle: 'Istudiu de Registratzione',
      studioDesc: 'Unu ispatziu acusticamente isuladu pro produtziònes professionales de artu livellu.',
      residencyTitle: 'Residèntzia Artìstica',
      residencyDesc: 'Duos ispatzios multifunztionales dedicados a is artes visivas, s’iscrittura e sa chirca acadèmica.',
      visionTitle: 'Bisiòne e Missione',
      visionDesc: 'Sustanemus su talentu creativu dende infrastruturas de vanguardia in unu contestu sardu autènticu.'
    },
    roots: {
      title: 'Raighinas e Futuru',
      description: 'Lacus no est feti una strutura fìsica, ma unu puntu de addòbiu cun sa comunitade de Gergei. Unu scàmbiu de energies: s\'artista portat sa bisiòne sua, su territòriu offert is saberes millenàrios e is traditziònes suas.'
    },
    status: {
      title: 'Istadu de is traballos',
      description: 'Unu cantieri de ideas in evolutziòne contìnua.',
      images: [
        { title: 'Intonacos naturales', alt: 'Traballos in cursu' },
        { title: 'Addòbiu de poesia', alt: 'Eventu locale' },
        { title: 'Isvilupu atelier', alt: 'Cantieri creativu' }
      ]
    },
    partners: {
      title: 'Sòtzios Locales',
      description: 'Is raighinas de su progettu in su territòriu de su Sarcidanu.',
      list: ['Assòtziu Archeològicu Gergei', 'Proloco Gergei', 'Sarcidanu Sustenìbile', 'Cooperativa Saberes Antigos']
    },
    journal: {
      title: 'Triballos in Cursu',
      wip: 'In Cursu',
      posts: [
        { date: '12 de Maju 2026', title: 'Sinfonias Sardas', desc: 'Agiornamentos subra is atividades creativas de sa residèntzia Lacus.' },
        { date: '05 de Abrile 2026', title: 'Preda e Colore', desc: 'Agiornamentos subra is atividades creativas de sa residèntzia Lacus.' },
        { date: '20 de Martzu 2026', title: 'Residèntzia de Ierru', desc: 'Agiornamentos subra is atividades creativas de sa residèntzia Lacus.' },
        { date: '10 de Freàrgiu 2026', title: 'Ateliers Noos', desc: 'Agiornamentos subra is atividades creativas de sa residèntzia Lacus.' },
      ]
    },
    footer: {
      location: 'Sardigna — Itàlia',
      designed: 'Pensadu pro is Creativos.',
      rights: 'Totu is deretos riservados.',
    }
  },
  en: {
    nav: {
      home: 'Home',
      project: 'The Project',
      community: 'Community',
      journal: 'Work in Progress',
      contacts: 'Contacts',
    },
    hero: {
      title: 'LACUS',
      subtitle: 'The space where art finds refuge and sharing',
    },
    project: {
      title: 'The Project',
      points: [
        'A place where artists from all over the world can develop their artistic ideas.',
        'A space where artists encounter the community and the territory.',
        'A window for the local community towards the world.'
      ],
      studioTitle: 'Recording Studio',
      studioDesc: 'An acoustically isolated and technologically advanced space for high-level professional productions.',
      residencyTitle: 'Artistic Residency',
      residencyDesc: 'Two large multifunctional spaces dedicated to visual arts, creative writing, and academic research.',
      visionTitle: 'Vision and Mission',
      visionDesc: 'Supporting creative talent by offering cutting-edge infrastructure in an authentic Sardinian context.'
    },
    roots: {
      title: 'Roots and Future',
      description: 'Lacus is not just a physical structure, but a meeting point with the Gergei community. An exchange of energies: the artist brings their vision, the territory offers its millenary knowledge and traditions.'
    },
    status: {
      title: 'Work in Progress',
      description: 'A construction site of ideas in constant evolution.',
      images: [
        { title: 'Natural plasters', alt: 'Work in progress' },
        { title: 'Poetry meeting', alt: 'Local event' },
        { title: 'Atelier development', alt: 'Creative site' }
      ]
    },
    partners: {
      title: 'Local Partners',
      description: 'The projects roots in the Sarcidano territory.',
      list: ['Gergei Archaeological Association', 'Proloco Gergei', 'Sustainable Sarcidano', 'Ancient Knowledge Cooperative']
    },
    journal: {
      title: 'Work in Progress',
      wip: 'In Progress',
      posts: [
        { date: 'May 12, 2026', title: 'Sardinian Symphonies', desc: 'Updates on the creative activities of Lacus residency.' },
        { date: 'April 05, 2026', title: 'Stone and Color', desc: 'Updates on the creative activities of Lacus residency.' },
        { date: 'March 20, 2026', title: 'Winter Residency', desc: 'Updates on the creative activities of Lacus residency.' },
        { date: 'February 10, 2026', title: 'New Ateliers', desc: 'Updates on the creative activities of Lacus residency.' },
      ]
    },
    footer: {
      location: 'Sardinia — Italy',
      designed: 'Designed for Creatives.',
      rights: 'All rights reserved.',
    }
  }
};
