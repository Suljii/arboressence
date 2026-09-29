import { contenuMetiers } from "./metiers-contenu.js";

export const contact = {
  tel: "06 17 68 94 20",
  telRaw: "0617689420",
  email: "pietarbor.essence@gmail.com",
  adresse: "Villeneuve-le-Roi, 94290 Val-de-Marne",
  horaires: "Lun–Ven 8h–18h · Sam 8h–12h",
  // Laisser vide pour masquer l'icône dans le footer
  instagram: "",
  facebook: "",
};

// À compléter : informations obligatoires pour les mentions légales
export const legal = {
  raisonSociale: "Arbor-Essence",
  formeJuridique: "SARL",
  responsable: "LUIJKEN Piet Hein",
  siret: "89434845700025",
  adresseSiege: "1 RUE DU BOIS 94290 VILLENEUVE-LE-ROI",
  hebergeur:
    "Vercel Inc. 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis  | http://www.vercel.com/",
};

/*
 * VILLES – champs disponibles
 *   slug, nom, dept, description, intro   (obligatoires)
 *   a / de        préposition si « à X » / « de X » ne convient pas (ex. « au Perreux-sur-Marne »)
 *   metiers       liste de slugs de métiers à générer pour cette ville (absent = tous les métiers)
 *   quartiers     ["Charentonneau", "Vert-de-Maisons", …] – affichés sur les pages de la ville
 *   chantiers     [{ metier: "elagage-arbres", titre: "…", description: "…", image: "/images/…" (facultatif) }]
 *   avis          [{ auteur: "Marie D.", texte: "…", metier: "taille-haies" (facultatif) }]
 * Les sections « Nos réalisations », « Avis » et « Quartiers » n'apparaissent que si les données existent.
 * N'y mettre que des informations réelles (vrais chantiers, vrais avis clients).
 */
export const villes = [
  {
    slug: "maisons-alfort",
    nom: "Maisons-Alfort",
    dept: "94700",
    description:
      "Entre Marne et Seine, Maisons-Alfort compte de nombreux pavillons avec jardin, résidences et copropriétés : nous intervenons sur tout le territoire communal pour leurs projets paysagers.",
    intro:
      "Paysagiste à Maisons-Alfort – aménagement, élagage et entretien de jardins.",
  },
  {
    slug: "creteil",
    nom: "Créteil",
    dept: "94000",
    description:
      "Préfecture du Val-de-Marne, Créteil concentre de nombreuses résidences, copropriétés et espaces verts que nous entretenons avec soin.",
    intro:
      "Paysagiste à Créteil – aménagement et entretien de vos espaces verts.",
  },
  {
    slug: "vincennes",
    nom: "Vincennes",
    dept: "94300",
    description:
      "Aux portes de Paris et du bois de Vincennes, nous intervenons pour les particuliers et résidences de Vincennes pour tous leurs projets paysagers.",
    intro:
      "Paysagiste à Vincennes – élagage, entretien et création de jardins.",
  },
  {
    slug: "saint-maur-des-fosses",
    nom: "Saint-Maur-des-Fossés",
    dept: "94100",
    description:
      "Ville verte du Val-de-Marne, Saint-Maur-des-Fossés possède de nombreux jardins privatifs et copropriétés que nous aménageons et entretenons tout au long de l'année.",
    intro: "Paysagiste à Saint-Maur-des-Fossés – jardins, haies et élagage.",
  },
  {
    slug: "charenton-le-pont",
    nom: "Charenton-le-Pont",
    dept: "94220",
    description:
      "Idéalement situé à la frontière de Paris, Charenton-le-Pont fait partie de notre zone d'intervention privilégiée pour l'entretien et l'aménagement paysager.",
    intro:
      "Paysagiste à Charenton-le-Pont – entretien jardins et espaces verts.",
  },
  {
    slug: "ivry-sur-seine",
    nom: "Ivry-sur-Seine",
    dept: "94200",
    description:
      "Commune dynamique du Val-de-Marne, Ivry-sur-Seine bénéficie de nos services pour l'entretien des espaces verts, l'élagage et la création de jardins.",
    intro:
      "Paysagiste à Ivry-sur-Seine – tonte, taille, élagage et aménagement.",
  },
  {
    slug: "vitry-sur-seine",
    nom: "Vitry-sur-Seine",
    dept: "94400",
    description:
      "Grande commune du 94, Vitry-sur-Seine est couverte par notre équipe pour tous les travaux d'entretien et de création d'espaces verts.",
    intro:
      "Paysagiste à Vitry-sur-Seine – espaces verts et jardins particuliers.",
  },
  {
    slug: "alfortville",
    nom: "Alfortville",
    dept: "94140",
    description:
      "Ville limitrophe de Maisons-Alfort, Alfortville est l'une de nos communes de prédilection pour l'entretien de jardins et l'élagage d'arbres.",
    intro:
      "Paysagiste à Alfortville – entretien, élagage et arrosage automatique.",
  },
  {
    slug: "joinville-le-pont",
    nom: "Joinville-le-Pont",
    dept: "94340",
    description:
      "Blottie entre Marne et bois, Joinville-le-Pont est une commune verdoyante où nous intervenons régulièrement pour les particuliers et résidences.",
    intro: "Paysagiste à Joinville-le-Pont – création et entretien de jardins.",
  },
  {
    slug: "champigny-sur-marne",
    nom: "Champigny-sur-Marne",
    dept: "94500",
    description:
      "Une des villes les plus grandes du Val-de-Marne, Champigny-sur-Marne fait partie de notre zone d'intervention pour tous types de travaux paysagers.",
    intro:
      "Paysagiste à Champigny-sur-Marne – jardins, haies et espaces verts.",
  },
  {
    slug: "nogent-sur-marne",
    nom: "Nogent-sur-Marne",
    dept: "94130",
    description:
      "Ville résidentielle au bord de la Marne, Nogent-sur-Marne est une commune où nous accompagnons de nombreux propriétaires dans l'entretien de leurs jardins.",
    intro: "Paysagiste à Nogent-sur-Marne – entretien et aménagement paysager.",
  },
  {
    slug: "fontenay-sous-bois",
    nom: "Fontenay-sous-Bois",
    dept: "94120",
    description:
      "Nichée à proximité du bois de Vincennes, Fontenay-sous-Bois est une commune que nous couvrons pour l'élagage, l'entretien et la création de jardins.",
    intro: "Paysagiste à Fontenay-sous-Bois – élagage, taille et entretien.",
  },
  {
    slug: "le-perreux-sur-marne",
    nom: "Le Perreux-sur-Marne",
    a: "au Perreux-sur-Marne",
    de: "du Perreux-sur-Marne",
    dept: "94170",
    description:
      "Commune résidentielle paisible, Le Perreux-sur-Marne fait partie de nos zones d'intervention pour l'entretien et l'aménagement des jardins privés.",
    intro: "Paysagiste au Perreux-sur-Marne – jardins et espaces verts.",
  },
  {
    slug: "bry-sur-marne",
    nom: "Bry-sur-Marne",
    dept: "94360",
    description:
      "Belle commune bordée par la Marne, Bry-sur-Marne est couverte par Arbor'essence pour tous vos travaux de paysagisme et d'élagage.",
    intro: "Paysagiste à Bry-sur-Marne – création, entretien et élagage.",
  },
  {
    slug: "saint-mande",
    nom: "Saint-Mandé",
    dept: "94160",
    description:
      "À deux pas du bois de Vincennes, Saint-Mandé est une commune verdoyante où nous intervenons pour les jardins privés, résidences et copropriétés.",
    intro: "Paysagiste à Saint-Mandé – jardins privatifs et entretien haies.",
  },
  {
    slug: "paris",
    nom: "Paris",
    dept: "75",
    description:
      "Arbor'essence intervient également à Paris, notamment dans les arrondissements du sud et de l'est (12e, 13e, 20e) pour les jardins privatifs, cours et toitures végétalisées.",
    intro: "Paysagiste à Paris – jardins, cours et espaces verts en ville.",
  },
];

for (const v of villes) {
  v.a ??= `à ${v.nom}`;
  v.de ??= `de ${v.nom}`;
}

export const metiers = [
  // ÉLAGAGE
  {
    slug: "elagage-arbres",
    titre: "Élagage d'arbres",
    avecArticle: "l'élagage d'arbres",
    categorie: "Élagage",
    icon: "🌳",
    metaTitle: "Élagage d'arbres en Île-de-France | Arbor'essence Paysagiste",
    metaDesc:
      "Élagage professionnel d'arbres en Val-de-Marne et Île-de-France. Taille de formation, réduction de couronne, élagage sanitaire par nos élagueurs.",
    intro:
      "L'élagage est une intervention délicate qui nécessite une expertise solide. Nous intervenons sur tous types d'arbres, dans le respect de leur santé, de leur sécurité et de leur esthétique.",
    description: `L'élagage d'arbres consiste à supprimer certaines branches pour améliorer la santé, la sécurité et l'aspect de l'arbre. Contrairement à une idée reçue, un bon élagage respecte l'arbre et peut contribuer à prolonger sa durée de vie.\n\nNous pratiquons différentes techniques selon les besoins : la taille de formation pour les jeunes arbres, la réduction de couronne pour les arbres trop développés, et l'élagage sanitaire pour supprimer les branches mortes ou malades.\n\nChaque intervention est réalisée dans le respect des règles de l'art et de la biologie de l'arbre, avec du matériel professionnel régulièrement entretenu.`,
    points: [
      "Taille de formation (jeunes arbres)",
      "Réduction et relevage de couronne",
      "Élagage sanitaire (branches mortes, malades)",
      "Taille douce respectueuse de l'arbre",
      "Évacuation et recyclage des déchets verts",
      "Intervention en hauteur par grimpe à la corde",
    ],
  },
  {
    slug: "abattage-arbres",
    titre: "Abattage d'arbres",
    avecArticle: "l'abattage d'arbres",
    categorie: "Élagage",
    icon: "🪓",
    metaTitle: "Abattage d'arbres dangereux en Val-de-Marne | Arbor'essence",
    metaDesc:
      "Abattage d'arbres sécurisé en Île-de-France par des élagueurs professionnels. Intervention rapide pour arbres dangereux, malades ou gênants.",
    intro:
      "L'abattage d'un arbre est une opération qui requiert expertise, planification et matériel adapté. Nous intervenons en toute sécurité, même dans les espaces contraints.",
    description: `Quand un arbre est mort, malade, dangereux ou simplement gênant, l'abattage s'impose. Cette opération ne s'improvise pas : elle nécessite une analyse préalable, un plan de chute précis et des mesures de sécurité strictes.\n\nÉlagueurs grimpeurs, nous sommes formés aux techniques d'abattage directionnel et au démontage par tronçons lorsque l'espace est limité (jardins encaissés, arbres proches des bâtiments, des clôtures ou des lignes électriques).\n\nNous nous occupons également de l'évacuation complète des bois et branchages, et pouvons procéder au rognage de la souche à la demande.`,
    points: [
      "Abattage directionnel en espace dégagé",
      "Démontage par tronçons en espace contraint",
      "Intervention au voisinage des bâtiments",
      "Bûcheronnage et débardage",
      "Évacuation complète des déchets",
      "Rognage de souche en option",
    ],
  },
  {
    slug: "rognage-souches",
    titre: "Rognage de souches",
    avecArticle: "le rognage de souches",
    categorie: "Élagage",
    icon: "⚙️",
    metaTitle: "Rognage de souches en Val-de-Marne | Arbor'essence Paysagiste",
    metaDesc:
      "Rognage et destruction de souches d'arbres en Île-de-France. Intervention rapide avec rogneuse professionnelle. Devis gratuit.",
    intro:
      "Après un abattage, la souche restante peut être inesthétique, dangereuse ou gênante pour les plantations futures. Le rognage est une solution simple et efficace.",
    description: `Le rognage de souche est une technique efficace pour faire disparaître une souche après l'abattage d'un arbre. À l'aide d'une rogneuse à dents rotatives, la souche est broyée jusqu'à 20-30 cm de profondeur, rendant l'espace à nouveau utilisable.\n\nCette opération permet ensuite de planter un nouvel arbre, de gazonner ou d'aménager librement l'espace sans être gêné par les racines. Les copeaux produits peuvent être réutilisés en paillage dans les massifs.\n\nNous disposons de rogneuses de différentes tailles pour intervenir dans tous les espaces, y compris les jardins peu accessibles.`,
    points: [
      "Broyage complet jusqu'à 30 cm de profondeur",
      "Rogneuses compactes pour espaces étroits",
      "Récupération des copeaux en paillage",
      "Remblaiement et nivellement de la zone",
      "Combinable avec un abattage ou seul",
      "Intervention rapide",
    ],
  },
  {
    slug: "taille-haies",
    titre: "Taille de haies",
    avecArticle: "la taille de haies",
    categorie: "Élagage",
    icon: "✂️",
    metaTitle:
      "Taille de haies professionnelle en Île-de-France | Arbor'essence",
    metaDesc:
      "Taille de haies vives, thuyas, lauriers, buis en Val-de-Marne. Paysagiste professionnel, taille soignée. Devis gratuit.",
    intro:
      "Une haie bien taillée structure le jardin, préserve l'intimité et valorise votre propriété. Nous intervenons avec précision sur tous types de haies.",
    description: `La taille de haies est bien plus qu'une simple coupe : c'est un soin régulier qui conditionne la densité, la vigueur et l'aspect de votre haie. Selon les essences (thuyas, lauriers, buis, charmes, photinias…), les périodes et techniques de taille varient.\n\nNous maîtrisons la taille au cordeau pour des lignes nettes, la taille en volume pour les formes libres, et la taille de régénération pour les haies vieillissantes.\n\nNous intervenons aussi bien pour les haies basses que pour les grandes haies de plus de 3 mètres, avec le matériel adapté à chaque situation.`,
    points: [
      "Taille de haies basses et hautes (>3m)",
      "Toutes essences : thuyas, lauriers, charmes, buis…",
      "Taille au cordeau, rectiligne et précise",
      "Taille de régénération des haies vieillissantes",
      "Ramassage et évacuation des déchets",
      "Entretien saisonnier en contrat annuel",
    ],
  },
  {
    slug: "taille-arbres-fruitiers",
    titre: "Taille des arbres fruitiers",
    avecArticle: "la taille des arbres fruitiers",
    categorie: "Élagage",
    icon: "🍎",
    metaTitle: "Taille d'arbres fruitiers en Val-de-Marne | Arbor'essence",
    metaDesc:
      "Taille de formation et d'entretien pour pommiers, poiriers, cerisiers en Île-de-France. Paysagiste expert. Devis gratuit.",
    intro:
      "La taille des arbres fruitiers est un art qui demande connaissance des variétés et respect des cycles végétatifs. Nous adaptons chaque taille à l'arbre et à sa saison.",
    description: `Les arbres fruitiers nécessitent une taille annuelle adaptée à leur variété et à leur stade de développement. Une taille bien menée préserve la santé de l'arbre, aère la frondaison et maintient un port équilibré.\n\nNous intervenons pour la taille de formation des jeunes arbres, la taille d'entretien annuelle, et la taille de rajeunissement pour les vieux vergers.\n\nNous travaillons sur toutes les essences fruitières : pommiers, poiriers, cerisiers, pruniers, abricotiers, figuiers…`,
    points: [
      "Taille de formation (jeunes arbres fruitiers)",
      "Taille d'entretien annuelle",
      "Taille de rajeunissement des vieux arbres",
      "Toutes essences : pommiers, poiriers, cerisiers…",
      "Respect des périodes de taille par espèce",
      "Conseil sur l'entretien de votre verger",
    ],
  },
  // PAYSAGISME / AMÉNAGEMENT
  {
    slug: "creation-jardin",
    titre: "Création de jardin",
    avecArticle: "la création de jardin",
    categorie: "Aménagement",
    icon: "🌿",
    metaTitle: "Création de jardin en Val-de-Marne & Paris | Arbor'essence",
    metaDesc:
      "Création de jardins sur-mesure en Île-de-France par un paysagiste professionnel. Conception, plantations, engazonnement. Devis gratuit.",
    intro:
      "Créer un jardin, c'est donner naissance à un espace vivant qui vous ressemble. Nous concevons et réalisons des jardins sur-mesure adaptés à votre terrain, votre style et votre budget.",
    description: `La création d'un jardin est un projet qui se construit en plusieurs étapes : étude du terrain, conception du projet, choix des végétaux, réalisation et finitions. Chez Arbor'essence, nous vous accompagnons à chaque étape.\n\nNous commençons par analyser votre terrain (exposition, nature du sol, relief) avant de vous proposer un aménagement adapté. Nous sélectionnons les végétaux en fonction de vos goûts, des conditions locales et d'une logique d'entretien raisonnable.\n\nNous réalisons l'ensemble des travaux : terrassement, création de massifs, plantation, engazonnement, installation de systèmes d'arrosage, pose de bordures et allées.`,
    points: [
      "Étude de terrain et conception du projet",
      "Sélection des végétaux adaptés",
      "Terrassement et préparation du sol",
      "Création de massifs et plantations",
      "Engazonnement (semis ou gazon en rouleaux)",
      "Pose de bordures et allées",
    ],
  },
  {
    slug: "engazonnement",
    titre: "Engazonnement",
    avecArticle: "l'engazonnement",
    categorie: "Aménagement",
    icon: "🟩",
    metaTitle:
      "Engazonnement pelouse en Val-de-Marne | Arbor'essence Paysagiste",
    metaDesc:
      "Semis de pelouse, gazon en rouleaux et rénovation de pelouse en Île-de-France. Devis gratuit.",
    intro:
      "Une belle pelouse commence par un engazonnement soigné. Que ce soit par semis ou en rouleaux, nous préparons le sol avec soin pour favoriser une pelouse dense et homogène.",
    description: `L'engazonnement est la création ou la rénovation d'une pelouse, qu'elle soit à usage ornemental ou sportif. Il existe deux grandes méthodes : le semis et la pose de gazon en rouleaux.\n\nLe semis est la technique la plus économique, idéale pour les grandes surfaces. Le gazon en rouleaux offre un résultat immédiat et esthétique, parfait pour les petites surfaces ou les zones difficiles.\n\nAvant tout engazonnement, nous préparons soigneusement le sol : décompactage, apport de terres végétales, nivellement précis et amendements organiques pour favoriser la reprise du gazon dans les meilleures conditions.`,
    points: [
      "Préparation du sol (décompactage, nivellement)",
      "Semis de gazon toutes variétés",
      "Pose de gazon en rouleaux (résultat immédiat)",
      "Rénovation de pelouse existante (regarnissage)",
      "Amendements et engrais de démarrage",
      "Conseils d'entretien après la pose",
    ],
  },
  {
    slug: "tonte-pelouse",
    titre: "Tonte de pelouse",
    avecArticle: "la tonte de pelouse",
    categorie: "Entretien",
    icon: "🌾",
    metaTitle:
      "Tonte de pelouse professionnelle en Val-de-Marne | Arbor'essence",
    metaDesc:
      "Service de tonte de pelouse régulière pour particuliers, résidences et copropriétés en Île-de-France. Devis gratuit.",
    intro:
      "Une pelouse tondue régulièrement est une pelouse en bonne santé. Nous assurons la tonte à la fréquence adaptée à votre gazon et à la saison.",
    description: `La tonte est le soin le plus régulier d'une pelouse. La fréquence et la hauteur de coupe varient selon la saison et la variété de gazon : au printemps et en été, une tonte hebdomadaire ou bi-mensuelle est souvent nécessaire ; en automne, on réduit progressivement.\n\nNous utilisons des tondeuses professionnelles adaptées à la superficie et au relief de votre jardin. Les déchets de tonte sont ramassés et évacués ou mulchés selon votre préférence.\n\nNous proposons des contrats d'entretien annuels incluant tonte, ramassage des feuilles et traitements saisonniers pour un jardin soigné au fil des saisons.`,
    points: [
      "Tonte régulière (hebdomadaire à mensuelle)",
      "Matériel professionnel adapté à toutes surfaces",
      "Ramassage et évacuation des déchets",
      "Mulching en option (nutrition naturelle du gazon)",
      "Bordure des allées et massifs",
      "Contrat annuel avec fréquences adaptées",
    ],
  },
  {
    slug: "desherbage-massifs",
    titre: "Désherbage et entretien des massifs",
    avecArticle: "le désherbage et l'entretien des massifs",
    categorie: "Entretien",
    icon: "🌺",
    metaTitle:
      "Désherbage et entretien massifs en Val-de-Marne | Arbor'essence",
    metaDesc:
      "Désherbage manuel, paillage et entretien des massifs floraux en Île-de-France. Paysagiste professionnel. Devis gratuit.",
    intro:
      "Des massifs bien entretenus donnent tout leur éclat à votre jardin. Nous assurons désherbage, taille et paillage pour des massifs soignés au fil des saisons.",
    description: `L'entretien des massifs est une tâche régulière qui demande soin et connaissance des végétaux. Un massif négligé est rapidement envahi par les adventices qui concurrencent les plantes ornementales.\n\nNous pratiquons le désherbage manuel ou thermique, sans produits chimiques lorsque c'est possible, dans le respect de votre sol et de vos plantes. Le paillage (écorces, BRF, graviers) est ensuite appliqué pour limiter le retour des mauvaises herbes et conserver l'humidité du sol.\n\nNous réalisons également la taille des vivaces, la division des touffes, les plantations saisonnières et les soins spécifiques aux rosiers, hortensias et autres arbustes à fleurs.`,
    points: [
      "Désherbage manuel ou thermique (sans chimie)",
      "Paillage organique ou minéral",
      "Taille des vivaces et arbustes à fleurs",
      "Plantations saisonnières (printemps/automne)",
      "Division et rempotage des plantes",
      "Évacuation des déchets verts",
    ],
  },
];

for (const m of metiers) Object.assign(m, contenuMetiers[m.slug]);

// Pages métier × ville : restreintes par le champ `metiers` de chaque ville
export function metiersDeVille(ville) {
  return ville.metiers
    ? metiers.filter((m) => ville.metiers.includes(m.slug))
    : metiers;
}

export function villesDuMetier(metier) {
  return villes.filter((v) => !v.metiers || v.metiers.includes(metier.slug));
}
