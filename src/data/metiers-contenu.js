// Contenu éditorial par métier, fusionné dans `metiers` (seo.js)
//   cherche  : complète « Vous cherchez … à <ville> ? » (reprend les mots tapés dans Google)
//   saison   : meilleure période d'intervention
//   faq      : questions fréquentes affichées sur les pages métier et métier × ville

export const contenuMetiers = {
  "elagage-arbres": {
    cherche: "un élagueur",
    saison: "La meilleure période pour élaguer va de novembre à mars, pendant le repos végétatif et hors périodes de gel. Une taille légère « en vert » reste possible en été. Nous évitons les interventions lourdes au printemps, en pleine montée de sève et en période de nidification.",
    faq: [
      {
        q: "Quand faut-il élaguer un arbre ?",
        r: "Idéalement de novembre à mars, pendant le repos végétatif, hors gel. Une taille légère peut se faire en été. Le printemps est à éviter pour les tailles importantes : l'arbre puise alors dans ses réserves et les oiseaux nichent.",
      },
      {
        q: "Mon voisin peut-il m'obliger à couper les branches qui dépassent chez lui ?",
        r: "Oui. L'article 673 du Code civil permet au voisin d'exiger que les branches qui avancent sur sa propriété soient coupées. Il n'a pas le droit de les couper lui-même, mais il peut couper les racines, ronces et brindilles qui empiètent sur son terrain.",
      },
      {
        q: "Faut-il une autorisation pour élaguer un arbre ?",
        r: "Dans un jardin privé, un élagage courant ne nécessite généralement aucune autorisation. Des règles particulières peuvent s'appliquer si l'arbre est protégé par le plan local d'urbanisme (PLU), situé en espace boisé classé ou aux abords d'un monument historique. Nous vérifions ce point avant d'intervenir.",
      },
      {
        q: "Que deviennent les branches coupées ?",
        r: "Elles sont broyées puis évacuées vers une filière de valorisation des déchets verts. Le brûlage des déchets verts à l'air libre est interdit. Si vous le souhaitez, le broyat peut rester sur place pour pailler vos massifs.",
      },
    ],
  },

  "abattage-arbres": {
    cherche: "un bûcheron-élagueur pour abattre un arbre",
    saison: "L'abattage peut se faire toute l'année. L'automne et l'hiver sont préférables pour préserver la faune, mais un arbre dangereux doit être traité sans attendre, quelle que soit la saison.",
    faq: [
      {
        q: "Faut-il une autorisation pour abattre un arbre dans son jardin ?",
        r: "En général non. Une déclaration préalable en mairie peut toutefois être exigée si l'arbre est protégé par le PLU, situé en espace boisé classé ou dans un périmètre protégé (abords d'un monument historique, site classé). Nous vous aidons à vérifier la situation auprès de votre mairie.",
      },
      {
        q: "Peut-on abattre un arbre proche d'une maison ?",
        r: "Oui, par démontage : l'arbre est découpé par tronçons depuis le haut et chaque morceau est descendu à l'aide de cordes, sans chute libre. Cette technique permet d'intervenir près des bâtiments, clôtures et lignes électriques.",
      },
      {
        q: "Que faire de la souche après l'abattage ?",
        r: "Elle peut être laissée en place, ou rognée : une rogneuse la broie sur 20 à 30 cm de profondeur, ce qui permet ensuite d'engazonner ou de replanter.",
      },
      {
        q: "Qui est responsable si mon arbre tombe chez le voisin ?",
        r: "Le propriétaire de l'arbre est responsable des dommages qu'il cause. Un arbre mort, creux ou penché doit donc être expertisé et, si besoin, abattu avant qu'il ne présente un danger.",
      },
    ],
  },

  "rognage-souches": {
    cherche: "une entreprise pour rogner une souche",
    saison: "Le rognage se pratique toute l'année, dès que le sol n'est ni gelé ni détrempé.",
    faq: [
      {
        q: "Rognage ou dessouchage : quelle différence ?",
        r: "Le rognage broie la souche sur place jusqu'à 20–30 cm de profondeur, sans gros engin ni trou béant. Le dessouchage arrache la souche et une partie des racines : c'est plus lourd et cela laisse un trou à reboucher. Le rognage suffit dans la plupart des jardins.",
      },
      {
        q: "Peut-on replanter à l'emplacement d'une souche rognée ?",
        r: "Oui. Une fois la zone remblayée avec de la terre végétale, vous pouvez engazonner ou planter. Pour un nouvel arbre, mieux vaut le décaler un peu de l'ancien emplacement, le temps que les racines restantes se décomposent.",
      },
      {
        q: "Et si mon jardin est difficile d'accès ?",
        r: "Nous disposons de rogneuses compactes adaptées aux accès étroits. Indiquez-nous la largeur du passage lors de votre demande de devis.",
      },
    ],
  },

  "taille-haies": {
    cherche: "un professionnel pour tailler votre haie",
    saison: "Une taille d'entretien légère est possible en été ; les tailles importantes se font plutôt à l'automne ou en fin d'hiver. Entre le 15 mars et le 31 juillet, période de nidification, l'Office français de la biodiversité recommande d'éviter les interventions lourdes.",
    faq: [
      {
        q: "À quelle distance de la limite de propriété planter une haie ?",
        r: "Sauf règlement local contraire, l'article 671 du Code civil impose 2 mètres minimum pour une haie de plus de 2 mètres de haut, et 50 cm pour une haie de 2 mètres ou moins.",
      },
      {
        q: "Pourquoi mon thuya reste-t-il marron après la taille ?",
        r: "Le thuya ne repart pas sur le vieux bois : une taille qui entame la partie sans feuillage laisse des trous définitifs. Il faut le tailler régulièrement, sans descendre sous la partie verte.",
      },
      {
        q: "La taille de haie donne-t-elle droit à une réduction d'impôt ?",
        r: "Chez les particuliers, la taille de haie fait partie des petits travaux de jardinage ouvrant droit à l'avantage fiscal de 50 % des services à la personne, dans la limite de 5 000 € de dépenses par an et par foyer.",
      },
    ],
  },

  "taille-arbres-fruitiers": {
    cherche: "un professionnel pour tailler vos arbres fruitiers",
    saison: "Les fruitiers à pépins (pommiers, poiriers) se taillent en hiver, de décembre à mars hors gel. Les fruitiers à noyau (cerisiers, pruniers, abricotiers) se taillent plutôt en été, juste après la récolte, pour limiter les maladies comme la gommose.",
    faq: [
      {
        q: "Quand tailler un pommier ou un poirier ?",
        r: "En hiver, pendant le repos végétatif, de décembre à mars, en évitant les jours de gel. Une taille en vert complémentaire peut être faite en été pour aérer l'arbre.",
      },
      {
        q: "Pourquoi tailler les cerisiers en été ?",
        r: "Les fruitiers à noyau cicatrisent mal en hiver et sont sensibles à la gommose et aux maladies du bois. Une taille juste après la récolte, par temps sec, limite ces risques.",
      },
      {
        q: "Mon arbre ne produit qu'une année sur deux, est-ce normal ?",
        r: "C'est l'alternance, fréquente chez le pommier et le poirier. Une taille régulière et l'éclaircissage des fruits les années très chargées aident à limiter ce phénomène.",
      },
    ],
  },

  "creation-jardin": {
    cherche: "un paysagiste pour créer votre jardin",
    saison: "Les plantations se font idéalement à l'automne ou en fin d'hiver, quand le sol est humide et les végétaux au repos. La conception peut démarrer à tout moment pour que le chantier soit prêt à la bonne saison.",
    faq: [
      {
        q: "Combien de temps dure la création d'un jardin ?",
        r: "Cela dépend de la surface et des travaux : quelques jours pour un petit jardin de ville, plusieurs semaines pour un projet avec terrassement, allées et massifs. Le planning est précisé dans le devis.",
      },
      {
        q: "Pouvez-vous transformer un jardin existant ?",
        r: "Oui. Nous conservons les éléments intéressants (arbres, haies, massifs en bon état) et réaménageons le reste selon vos envies et votre budget.",
      },
      {
        q: "Comment avoir un beau jardin sans trop d'entretien ?",
        r: "En choisissant des végétaux adaptés au sol et à l'exposition, en paillant les massifs et en remplaçant une partie de la pelouse par des couvre-sols ou une prairie fleurie. Nous en tenons compte dès la conception.",
      },
    ],
  },

  "engazonnement": {
    cherche: "un professionnel pour créer votre pelouse",
    saison: "Les semis réussissent le mieux en septembre-octobre ou en avril-mai, quand le sol est chaud et humide. Le gazon en rouleaux se pose presque toute l'année, hors gel et fortes chaleurs.",
    faq: [
      {
        q: "Semis ou gazon en rouleaux ?",
        r: "Le semis est plus économique et adapté aux grandes surfaces, mais il faut quelques semaines avant de profiter de la pelouse. Le gazon en rouleaux donne un résultat immédiat, idéal pour les petites surfaces ou quand on est pressé.",
      },
      {
        q: "Quand peut-on marcher sur une nouvelle pelouse ?",
        r: "En général après la première tonte : environ 3 à 4 semaines après un semis et 2 à 3 semaines après la pose de rouleaux, le temps que les racines s'installent.",
      },
      {
        q: "Faut-il arroser un gazon fraîchement posé ?",
        r: "Oui, c'est indispensable : arrosages réguliers les premières semaines pour que le sol reste humide, puis espacés progressivement. Nous vous remettons un calendrier d'arrosage adapté à la saison.",
      },
    ],
  },

  "tonte-pelouse": {
    cherche: "un jardinier pour tondre votre pelouse",
    saison: "La saison de tonte s'étend en général de mars-avril à octobre-novembre, avec un pic au printemps où une tonte hebdomadaire peut être nécessaire.",
    faq: [
      {
        q: "À quelle hauteur tondre sa pelouse ?",
        r: "Entre 5 et 7 cm environ pour une pelouse d'agrément, sans jamais couper plus d'un tiers de la hauteur de l'herbe à chaque passage. En été, on remonte la coupe pour limiter le dessèchement.",
      },
      {
        q: "Qu'est-ce que le mulching ?",
        r: "L'herbe coupée est finement broyée et laissée sur la pelouse, où elle se décompose et nourrit le sol. Cela évite l'évacuation des déchets de tonte et limite les apports d'engrais.",
      },
      {
        q: "La tonte donne-t-elle droit à une réduction d'impôt ?",
        r: "Chez les particuliers, la tonte fait partie des petits travaux de jardinage ouvrant droit à l'avantage fiscal de 50 % des services à la personne, dans la limite de 5 000 € de dépenses par an et par foyer.",
      },
      {
        q: "Y a-t-il des horaires à respecter pour tondre ?",
        r: "Oui : les horaires d'utilisation des engins bruyants sont fixés par arrêté préfectoral ou municipal. Nous respectons la réglementation de votre commune.",
      },
    ],
  },

  "desherbage-massifs": {
    cherche: "un jardinier pour entretenir vos massifs",
    saison: "Le désherbage est le plus efficace au printemps, avant la montée en graines des adventices, puis en fin d'été. Le paillage se pose idéalement au printemps, sur un sol propre et humide.",
    faq: [
      {
        q: "Utilisez-vous des désherbants chimiques ?",
        r: "Non. La loi Labbé interdit les produits phytosanitaires de synthèse aux particuliers depuis 2019, puis dans la plupart des espaces privés (jardins, copropriétés) depuis 2022. Nous désherbons manuellement ou thermiquement et utilisons le paillage.",
      },
      {
        q: "Quel paillage choisir ?",
        r: "Les paillages organiques (écorces, BRF, broyat) nourrissent le sol en se décomposant et conviennent aux massifs fleuris. Les paillages minéraux (graviers, ardoise) durent plus longtemps et conviennent aux jardins secs ou contemporains.",
      },
      {
        q: "L'entretien des massifs donne-t-il droit à une réduction d'impôt ?",
        r: "Chez les particuliers, l'entretien des massifs fait partie des petits travaux de jardinage ouvrant droit à l'avantage fiscal de 50 % des services à la personne, dans la limite de 5 000 € de dépenses par an et par foyer.",
      },
    ],
  },
};
