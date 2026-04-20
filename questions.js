// questions.js — 20 questions par thème

const allQuestions = {

    materiaux: [
        {
            question: "Quelle propriété désigne la capacité d'un matériau à conduire la chaleur ?",
            answers: ["Résistance mécanique", "Conductivité thermique", "Densité", "Ductilité"],
            correct: 1,
            explanation: "La conductivité thermique mesure la facilité avec laquelle un matériau transmet la chaleur. Les métaux ont généralement une haute conductivité thermique."
        },
        {
            question: "Quel type de structure est à la fois légère et résistante, utilisée dans les ponts ?",
            answers: ["Structure massive", "Structure en coque", "Structure en treillis", "Structure pleine"],
            correct: 2,
            explanation: "La structure en treillis est composée de barres assemblées en triangles. Elle est très résistante pour une masse faible, d'où son usage dans les ponts et charpentes."
        },
        {
            question: "La densité d'un matériau correspond à :",
            answers: ["Sa dureté", "Son rapport masse/volume", "Sa résistance à la traction", "Sa couleur"],
            correct: 1,
            explanation: "La densité est le rapport entre la masse d'un objet et son volume. Un matériau dense comme l'acier a une masse élevée pour un petit volume."
        },
        {
            question: "Quel matériau est à la fois léger, renouvelable mais moins résistant que l'acier ?",
            answers: ["Aluminium", "Béton", "Bois", "Verre"],
            correct: 2,
            explanation: "Le bois est un matériau naturel, renouvelable et léger. Cependant, sa résistance mécanique est inférieure à celle des métaux comme l'acier."
        },
        {
            question: "Un matériau composite est :",
            answers: ["Un métal pur", "Un plastique recyclé", "Une combinaison de matériaux pour optimiser les propriétés", "Un matériau naturel"],
            correct: 2,
            explanation: "Un matériau composite associe plusieurs matériaux pour cumuler leurs avantages. Exemple : fibre de carbone + résine époxy → léger ET très résistant."
        },
        {
            question: "Quelle propriété mesure la capacité d'un matériau à conduire l'électricité ?",
            answers: ["Conductivité thermique", "Densité", "Conductivité électrique", "Dureté"],
            correct: 2,
            explanation: "La conductivité électrique mesure la facilité d'un matériau à laisser passer le courant. Les métaux sont de bons conducteurs, le plastique est isolant."
        },
        {
            question: "La résistance mécanique d'un matériau est :",
            answers: ["Sa capacité à conduire le son", "Sa capacité à supporter des forces sans se déformer", "Sa masse volumique", "Son point de fusion"],
            correct: 1,
            explanation: "La résistance mécanique exprime la capacité d'un matériau à résister aux contraintes (traction, compression, flexion) sans se rompre ni se déformer durablement."
        },
        {
            question: "La structure en coque est caractérisée par :",
            answers: ["Sa grande masse", "Sa légèreté et sa rigidité", "Ses nombreux vides", "Ses assemblages de barres"],
            correct: 1,
            explanation: "Une structure en coque, comme la coquille d'un œuf ou la carrosserie d'une voiture, est fine, légère et très rigide car les contraintes sont réparties sur toute la surface."
        },
        {
            question: "Les plastiques sont généralement :",
            answers: ["Lourds et conducteurs", "Légers et isolants électriques", "Denses et magnétiques", "Durs et conducteurs thermiques"],
            correct: 1,
            explanation: "Les plastiques sont des matériaux légers, bons isolants électriques et thermiques. Leur faible résistance mécanique les rend inadaptés aux structures portantes."
        },
        {
            question: "Quel critère permet de choisir l'aluminium pour un avion plutôt que l'acier ?",
            answers: ["Sa résistance plus élevée", "Sa faible densité (légèreté)", "Sa conductivité thermique plus faible", "Son coût moins élevé"],
            correct: 1,
            explanation: "L'aluminium est beaucoup plus léger que l'acier (densité ≈ 2,7 contre 7,8 g/cm³). Réduire la masse de l'avion diminue la consommation de carburant."
        },
        {
            question: "Qu'est-ce que la ductilité d'un matériau ?",
            answers: ["Sa capacité à se déformer sans se casser", "Sa capacité à conduire la chaleur", "Sa dureté de surface", "Son point de fusion"],
            correct: 0,
            explanation: "La ductilité est la propriété d'un matériau à se déformer plastiquement (s'étirer, se plier) sans se rompre. L'or et le cuivre sont très ductiles."
        },
        {
            question: "Dans une structure en treillis, les barres sont principalement soumises à :",
            answers: ["Flexion uniquement", "Traction et compression", "Torsion", "Aucune contrainte"],
            correct: 1,
            explanation: "Dans un treillis, les barres travaillent uniquement en traction (elles s'allongent) ou en compression (elles se raccourcissent). La flexion est quasi absente."
        },
        {
            question: "Le béton est principalement résistant à :",
            answers: ["La traction", "La flexion", "La compression", "La torsion"],
            correct: 2,
            explanation: "Le béton supporte bien la compression mais résiste mal à la traction. C'est pourquoi on l'associe à des armatures en acier pour obtenir du béton armé."
        },
        {
            question: "Quel matériau est obtenu en mélangeant du sable, du gravier, du ciment et de l'eau ?",
            answers: ["Céramique", "Plâtre", "Béton", "Composite"],
            correct: 2,
            explanation: "Le béton est un mélange de granulats (sable, gravier), d'un liant hydraulique (ciment) et d'eau. Il durcit par réaction chimique appelée hydratation."
        },
        {
            question: "La carrosserie d'une voiture moderne utilise souvent quel type de structure ?",
            answers: ["Structure massive", "Structure en treillis", "Structure en coque", "Structure en grille"],
            correct: 2,
            explanation: "La carrosserie d'une voiture est une structure en coque : la tôle fine forme une surface rigide qui reprend et répartit les efforts. Légère et résistante aux chocs."
        },
        {
            question: "Quel matériau a la meilleure conductivité électrique parmi ces propositions ?",
            answers: ["Bois", "Plastique", "Verre", "Cuivre"],
            correct: 3,
            explanation: "Le cuivre est l'un des meilleurs conducteurs électriques (avec l'argent). C'est pourquoi il est utilisé pour les fils électriques dans les habitations."
        },
        {
            question: "Un avantage du matériau composite fibre de carbone est :",
            answers: ["Son coût très bas", "Son excellente conductivité thermique", "Son rapport résistance/masse élevé", "Sa facilité de recyclage"],
            correct: 2,
            explanation: "La fibre de carbone offre un rapport résistance mécanique/masse exceptionnel. Elle est utilisée dans l'aéronautique, le sport et l'automobile haut de gamme."
        },
        {
            question: "Qu'est-ce que le point de fusion d'un matériau ?",
            answers: ["La température à laquelle il brûle", "La température à laquelle il passe de solide à liquide", "Sa résistance à la chaleur", "Sa conductivité thermique"],
            correct: 1,
            explanation: "Le point de fusion est la température précise à laquelle un matériau solide se transforme en liquide. Pour l'acier il est d'environ 1500°C, pour l'aluminium 660°C."
        },
        {
            question: "Dans le choix d'un matériau pour un pont, quel critère est le plus important ?",
            answers: ["La couleur", "Le coût uniquement", "La résistance mécanique et la durabilité", "La transparence"],
            correct: 2,
            explanation: "Pour un pont, la résistance mécanique (capacité à supporter les charges) et la durabilité (résistance aux intempéries et au temps) sont les critères essentiels."
        },
        {
            question: "Parmi ces matériaux, lequel est renouvelable ?",
            answers: ["Acier", "Aluminium", "Plastique", "Bois"],
            correct: 3,
            explanation: "Le bois est issu des forêts, qui se régénèrent naturellement. C'est une ressource renouvelable à condition que la gestion forestière soit durable."
        }
    ],

    energie: [
        {
            question: "Quelle source d'énergie est renouvelable ?",
            answers: ["Pétrole", "Gaz naturel", "Énergie solaire", "Charbon"],
            correct: 2,
            explanation: "L'énergie solaire est renouvelable car le soleil est une source quasi inépuisable à l'échelle humaine. Le pétrole, le gaz et le charbon sont des énergies fossiles non renouvelables."
        },
        {
            question: "Le rendement d'un appareil est défini comme :",
            answers: ["L'énergie totale consommée", "Le rapport entre l'énergie utile et l'énergie consommée", "La puissance maximale", "Les pertes thermiques"],
            correct: 1,
            explanation: "Le rendement η = Énergie utile / Énergie totale consommée. Un rendement de 90% signifie que 90% de l'énergie est convertie utilement et 10% est perdue (souvent sous forme de chaleur)."
        },
        {
            question: "L'énergie nucléaire est produite par :",
            answers: ["La combustion du charbon", "La fission de l'uranium", "La fusion de l'hydrogène", "Le mouvement du vent"],
            correct: 1,
            explanation: "Dans les centrales nucléaires actuelles, l'énergie est produite par fission : le noyau d'uranium-235 se divise en deux, libérant une grande quantité d'énergie thermique."
        },
        {
            question: "Quelle est l'unité de mesure de l'énergie dans le Système International ?",
            answers: ["Watt (W)", "Joule (J)", "Volt (V)", "Ampère (A)"],
            correct: 1,
            explanation: "Le Joule (J) est l'unité SI d'énergie. Le Watt est une unité de puissance (énergie par unité de temps) : 1 W = 1 J/s."
        },
        {
            question: "Dans une centrale hydraulique, quelle conversion d'énergie se produit ?",
            answers: ["Énergie chimique → électrique", "Énergie cinétique de l'eau → électrique", "Énergie solaire → thermique", "Énergie nucléaire → mécanique"],
            correct: 1,
            explanation: "Dans une centrale hydraulique, l'énergie cinétique et potentielle de l'eau en mouvement fait tourner une turbine, puis un alternateur convertit l'énergie mécanique en énergie électrique."
        },
        {
            question: "L'énergie éolienne exploite :",
            answers: ["La chaleur du soleil", "La force des marées", "Le mouvement du vent", "La chaleur de la Terre"],
            correct: 2,
            explanation: "Les éoliennes convertissent l'énergie cinétique du vent en énergie mécanique (rotation du rotor), puis en énergie électrique via un alternateur."
        },
        {
            question: "Quelle forme d'énergie est stockée dans une pile ou une batterie ?",
            answers: ["Énergie mécanique", "Énergie thermique", "Énergie chimique", "Énergie nucléaire"],
            correct: 2,
            explanation: "Une pile ou une batterie stocke l'énergie sous forme chimique. Les réactions chimiques internes libèrent des électrons qui créent le courant électrique."
        },
        {
            question: "Un moteur électrique convertit :",
            answers: ["L'énergie thermique en mécanique", "L'énergie chimique en électrique", "L'énergie électrique en mécanique", "L'énergie nucléaire en thermique"],
            correct: 2,
            explanation: "Un moteur électrique transforme l'énergie électrique (courant) en énergie mécanique (mouvement de rotation ou translation). Son rendement est généralement très élevé (>90%)."
        },
        {
            question: "L'énergie géothermique provient de :",
            answers: ["La chaleur du soleil", "La chaleur interne de la Terre", "La combustion du gaz", "L'énergie des marées"],
            correct: 1,
            explanation: "L'énergie géothermique utilise la chaleur stockée dans les couches profondes de la Terre. Elle peut chauffer des bâtiments ou produire de l'électricité."
        },
        {
            question: "Quelle est la loi de conservation de l'énergie ?",
            answers: ["L'énergie peut être créée mais pas détruite", "L'énergie se conserve : elle ne se crée ni ne se détruit, elle se transforme", "L'énergie diminue au fil du temps", "L'énergie peut être détruite si elle est inutile"],
            correct: 1,
            explanation: "La loi de conservation de l'énergie stipule que l'énergie totale d'un système isolé reste constante. Elle se transforme d'une forme à une autre mais ne disparaît jamais."
        },
        {
            question: "Le kilowattheure (kWh) est une unité de :",
            answers: ["Puissance", "Tension", "Énergie", "Intensité"],
            correct: 2,
            explanation: "Le kilowattheure (kWh) est une unité d'énergie utilisée en pratique. 1 kWh = 3 600 000 J. C'est l'unité utilisée sur les factures d'électricité."
        },
        {
            question: "Quelle énergie est qualifiée de 'fossile' ?",
            answers: ["Énergie solaire", "Énergie éolienne", "Énergie du charbon", "Énergie hydraulique"],
            correct: 2,
            explanation: "Les énergies fossiles (charbon, pétrole, gaz) proviennent de la décomposition d'organismes vivants sur des millions d'années. Elles sont non renouvelables et émettent du CO2."
        },
        {
            question: "Qu'est-ce que la puissance d'un appareil électrique ?",
            answers: ["L'énergie totale stockée", "L'énergie consommée par unité de temps", "La tension aux bornes", "L'intensité du courant"],
            correct: 1,
            explanation: "La puissance P = Énergie / temps. Elle s'exprime en Watts (W). Un appareil de 1000 W consomme 1 kWh en 1 heure de fonctionnement."
        },
        {
            question: "Dans une ampoule électrique, où vont les 'pertes' d'énergie ?",
            answers: ["Elles disparaissent", "Elles sont transformées en son", "Elles sont dissipées sous forme de chaleur", "Elles reviennent dans le réseau"],
            correct: 2,
            explanation: "Une ampoule à incandescence transforme environ 5% de l'électricité en lumière et 95% en chaleur (pertes). Les LED ont un bien meilleur rendement (~90% en lumière)."
        },
        {
            question: "L'énergie solaire photovoltaïque convertit :",
            answers: ["La chaleur en électricité", "La lumière en électricité", "L'électricité en lumière", "Le vent en chaleur"],
            correct: 1,
            explanation: "Les panneaux solaires photovoltaïques (PV) convertissent directement l'énergie lumineuse des photons en énergie électrique grâce à l'effet photovoltaïque dans les semi-conducteurs."
        },
        {
            question: "Pourquoi isoler thermiquement une maison réduit-il la consommation d'énergie ?",
            answers: ["Cela réduit les courants d'air", "Cela diminue les pertes de chaleur vers l'extérieur", "Cela augmente la puissance du chauffage", "Cela stocke plus d'énergie"],
            correct: 1,
            explanation: "Une bonne isolation (murs, toit, fenêtres) réduit les échanges thermiques avec l'extérieur. La chaleur reste plus longtemps à l'intérieur, donc on consomme moins d'énergie pour chauffer."
        },
        {
            question: "Quelle formule relie la puissance (P), la tension (U) et l'intensité (I) en électricité ?",
            answers: ["P = U + I", "P = U / I", "P = U × I", "P = U² + I"],
            correct: 2,
            explanation: "La loi fondamentale en électricité : P = U × I (Puissance = Tension × Intensité). Un appareil sous 230 V absorbant 4 A a une puissance de 920 W."
        },
        {
            question: "La biomasse comme source d'énergie utilise :",
            answers: ["L'énergie des vagues", "La matière organique végétale ou animale", "La chaleur souterraine", "Les marées"],
            correct: 1,
            explanation: "La biomasse désigne la matière organique (bois, déchets agricoles, biogaz) utilisée pour produire de l'énergie. C'est une énergie renouvelable si la ressource est gérée durablement."
        },
        {
            question: "Une centrale thermique à flamme fonctionne en brûlant du combustible pour :",
            answers: ["Produire directement de l'électricité par effet chimique", "Chauffer de l'eau, produire de la vapeur qui entraîne une turbine", "Créer des photons", "Fissionner des atomes"],
            correct: 1,
            explanation: "Dans une centrale thermique classique, la combustion chauffe de l'eau en vapeur. Cette vapeur fait tourner une turbine couplée à un alternateur qui produit l'électricité."
        },
        {
            question: "Quelle énergie renouvelable utilise la différence de hauteur d'eau (barrage) ?",
            answers: ["Éolienne", "Solaire", "Hydraulique", "Géothermique"],
            correct: 2,
            explanation: "L'énergie hydraulique exploite la différence de hauteur (chute d'eau) entre un barrage et un niveau inférieur. L'eau chute, entraîne des turbines qui produisent de l'électricité."
        }
    ],

    automatismes: [
        {
            question: "Dans un système automatisé, quel composant détecte les informations de l'environnement ?",
            answers: ["Actionneur", "Contrôleur", "Capteur", "Moteur"],
            correct: 2,
            explanation: "Le capteur est l'organe d'acquisition d'informations. Il mesure des grandeurs physiques (température, luminosité, position, pression) et les convertit en signal utilisable par le contrôleur."
        },
        {
            question: "Qu'est-ce qu'un algorithme ?",
            answers: ["Un langage de programmation", "Une suite d'instructions ordonnées pour résoudre un problème", "Un composant électronique", "Un type de capteur"],
            correct: 1,
            explanation: "Un algorithme est une suite finie et ordonnée d'instructions permettant de résoudre un problème ou d'effectuer une tâche. C'est la logique du programme, indépendante du langage."
        },
        {
            question: "Quel composant exécute les actions dans un système automatisé ?",
            answers: ["Capteur", "Microcontrôleur", "Actionneur", "Variable"],
            correct: 2,
            explanation: "L'actionneur est l'organe d'exécution. Il transforme l'ordre du contrôleur en action physique : un moteur crée du mouvement, une LED émet de la lumière, un vérin exerce une force."
        },
        {
            question: "En programmation, une variable sert à :",
            answers: ["Répéter des instructions", "Stocker des données en mémoire", "Comparer deux programmes", "Afficher du texte"],
            correct: 1,
            explanation: "Une variable est un espace mémoire nommé qui stocke une valeur (nombre, texte, vrai/faux). Sa valeur peut changer pendant l'exécution du programme."
        },
        {
            question: "Qu'est-ce qu'une boucle en programmation ?",
            answers: ["Une condition if/else", "Une variable qui se répète", "Un ensemble d'instructions qui se répètent", "Un type d'affichage"],
            correct: 2,
            explanation: "Une boucle (for, while) permet de répéter un bloc d'instructions un certain nombre de fois ou tant qu'une condition est vraie, sans réécrire le code à chaque fois."
        },
        {
            question: "En Python, quelle instruction permet d'afficher du texte ?",
            answers: ["echo()", "display()", "print()", "show()"],
            correct: 2,
            explanation: "En Python, la fonction print() affiche du texte ou la valeur d'une variable dans la console. Exemple : print('Bonjour !') affiche Bonjour !"
        },
        {
            question: "Un microcontrôleur est :",
            answers: ["Un grand ordinateur industriel", "Un petit circuit intégré qui peut exécuter un programme", "Un capteur de température", "Un moteur électrique"],
            correct: 1,
            explanation: "Un microcontrôleur (comme Arduino ou STM32) est un circuit intégré comprenant un processeur, de la mémoire et des entrées/sorties. Il peut lire des capteurs et contrôler des actionneurs."
        },
        {
            question: "Quelle structure de contrôle exécute des instructions selon une condition vraie ou fausse ?",
            answers: ["La boucle for", "La structure if/else (conditionnelle)", "La fonction", "La variable"],
            correct: 1,
            explanation: "La structure conditionnelle if/else évalue une condition : si elle est vraie (True), le bloc if est exécuté ; sinon, le bloc else l'est. Ex : if temperature > 30: activer_ventilateur()"
        },
        {
            question: "Quel langage visuel est adapté aux débutants en programmation ?",
            answers: ["Python", "C++", "Scratch", "Java"],
            correct: 2,
            explanation: "Scratch est un langage de programmation visuel par blocs, conçu pour l'apprentissage. Les blocs s'emboîtent comme des pièces de puzzle, sans risque d'erreur de syntaxe."
        },
        {
            question: "Dans un programme, une fonction (ou sous-programme) permet de :",
            answers: ["Stocker des données", "Regrouper des instructions réutilisables", "Créer des boucles infinies", "Déclarer des variables"],
            correct: 1,
            explanation: "Une fonction est un bloc d'instructions nommé et réutilisable. Elle peut prendre des paramètres et retourner un résultat. Cela évite de répéter le même code plusieurs fois."
        },
        {
            question: "Qu'est-ce qu'un automate programmable industriel (API) ?",
            answers: ["Un robot humanoïde", "Un contrôleur industriel robuste pour automatiser des processus", "Un logiciel de dessin", "Un type de capteur"],
            correct: 1,
            explanation: "Un automate programmable industriel (API ou PLC) est un contrôleur numérique robuste utilisé dans l'industrie pour automatiser des machines, des convoyeurs, des lignes de production."
        },
        {
            question: "En programmation, que fait l'instruction while (tant que) ?",
            answers: ["Elle déclare une variable", "Elle répète des instructions tant qu'une condition est vraie", "Elle affiche un message", "Elle définit une fonction"],
            correct: 1,
            explanation: "La boucle while répète l'exécution d'un bloc d'instructions tant que la condition spécifiée reste vraie. Attention aux boucles infinies si la condition ne devient jamais fausse !"
        },
        {
            question: "Dans un système de climatisation automatique, le thermostat joue le rôle de :",
            answers: ["Actionneur", "Capteur et comparateur", "Moteur", "Algorithme"],
            correct: 1,
            explanation: "Le thermostat mesure la température (capteur) et compare avec la consigne. Si la différence dépasse un seuil, il déclenche le chauffage ou la climatisation (signal vers l'actionneur)."
        },
        {
            question: "Quelle est la différence entre un langage interprété et un langage compilé ?",
            answers: ["Il n'y a aucune différence", "Un interprété est exécuté ligne par ligne, un compilé est traduit entièrement avant exécution", "Un compilé est plus lent", "Un interprété ne peut pas utiliser de boucles"],
            correct: 1,
            explanation: "Python est interprété : le code est lu et exécuté ligne par ligne. C/C++ est compilé : tout le code est traduit en langage machine avant l'exécution, ce qui est généralement plus rapide."
        },
        {
            question: "Un vérin pneumatique est quel type de composant dans un système automatisé ?",
            answers: ["Un capteur", "Un contrôleur", "Un actionneur", "Un programme"],
            correct: 2,
            explanation: "Un vérin pneumatique est un actionneur : il convertit l'énergie pneumatique (air comprimé) en énergie mécanique (mouvement linéaire). Il est commandé par le contrôleur."
        },
        {
            question: "En programmation, qu'est-ce qu'un entier (integer) ?",
            answers: ["Un nombre à virgule", "Un caractère", "Un nombre entier sans décimales", "Une chaîne de texte"],
            correct: 2,
            explanation: "Un entier (int en Python) est un type de données représentant un nombre sans partie décimale : ..., -2, -1, 0, 1, 2, ... À distinguer du flottant (float) qui a des décimales."
        },
        {
            question: "Quelle est la base du système binaire utilisé par les ordinateurs ?",
            answers: ["Base 10 (0 à 9)", "Base 16 (0 à F)", "Base 2 (0 et 1)", "Base 8 (0 à 7)"],
            correct: 2,
            explanation: "Les ordinateurs fonctionnent en base 2 (binaire) car les transistors ont deux états : passant (1) ou bloqué (0). Tous les programmes et données sont ultimement représentés en bits (0 ou 1)."
        },
        {
            question: "Dans un programme Arduino, quelle fonction est exécutée en boucle continue ?",
            answers: ["setup()", "loop()", "main()", "start()"],
            correct: 1,
            explanation: "En Arduino, setup() s'exécute une seule fois au démarrage (initialisation). La fonction loop() s'exécute indéfiniment en boucle : c'est là où se trouve la logique principale du programme."
        },
        {
            question: "Qu'est-ce qu'un commentaire dans un programme ?",
            answers: ["Une instruction exécutée par l'ordinateur", "Une note explicative pour le programmeur, ignorée par l'ordinateur", "Un type de boucle", "Une variable spéciale"],
            correct: 1,
            explanation: "Un commentaire (# en Python, // en C++) est une note textuelle dans le code. Il explique le fonctionnement du programme mais est totalement ignoré lors de l'exécution. Il améliore la lisibilité."
        },
        {
            question: "Quel capteur permet de mesurer la distance d'un obstacle ?",
            answers: ["Capteur de luminosité", "Capteur ultrasonique (HC-SR04)", "Capteur de température", "Capteur d'humidité"],
            correct: 1,
            explanation: "Le capteur ultrasonique émet des ondes ultrasonores et mesure le temps qu'elles mettent à revenir après rebond sur un obstacle. Il calcule ainsi la distance (d = v × t / 2)."
        }
    ],

    developpement: [
        {
            question: "Quels sont les trois piliers du développement durable ?",
            answers: ["Industriel, commercial, financier", "Environnemental, social, économique", "Local, national, international", "Production, consommation, distribution"],
            correct: 1,
            explanation: "Le développement durable repose sur trois piliers interdépendants : l'environnemental (protéger la nature), le social (bien-être des populations) et l'économique (viabilité financière)."
        },
        {
            question: "L'empreinte carbone mesure :",
            answers: ["La taille des entreprises polluantes", "La quantité de CO2 et gaz à effet de serre émise par une activité", "La surface forestière détruite", "La consommation d'eau"],
            correct: 1,
            explanation: "L'empreinte carbone est la quantité totale de gaz à effet de serre (principalement CO2) émise directement ou indirectement par une personne, un produit ou une organisation."
        },
        {
            question: "L'éco-conception consiste à :",
            answers: ["Fabriquer des produits verts", "Intégrer l'environnement dans toutes les phases de conception d'un produit", "Utiliser uniquement des matériaux recyclés", "Vendre des produits biologiques"],
            correct: 1,
            explanation: "L'éco-conception intègre les contraintes environnementales dès la conception du produit, en cherchant à réduire l'impact sur tout son cycle de vie (extraction, fabrication, usage, fin de vie)."
        },
        {
            question: "Que signifie le principe des '3R' dans la gestion des déchets ?",
            answers: ["Réparer, Restaurer, Rénover", "Réduire, Réutiliser, Recycler", "Refuser, Remplacer, Retourner", "Rechercher, Regrouper, Réorganiser"],
            correct: 1,
            explanation: "Les 3R s'appliquent dans cet ordre de priorité : 1. Réduire les déchets à la source, 2. Réutiliser les produits (seconde vie), 3. Recycler les matières premières."
        },
        {
            question: "Le cycle de vie d'un produit comprend :",
            answers: ["Uniquement sa fabrication", "Sa durée de garantie", "Toutes les étapes de sa création à sa fin de vie", "Son transport seulement"],
            correct: 2,
            explanation: "L'analyse du cycle de vie (ACV) évalue l'impact environnemental d'un produit depuis l'extraction des matières premières jusqu'à sa fin de vie (réutilisation, recyclage ou élimination)."
        },
        {
            question: "La biodégradabilité d'un matériau est sa capacité à :",
            answers: ["Résister à la corrosion", "Conduire l'électricité", "Se décomposer naturellement par des micro-organismes", "Résister aux chocs"],
            correct: 2,
            explanation: "Un matériau biodégradable est décomposé par des micro-organismes (bactéries, champignons) en molécules simples. Le plastique standard n'est pas biodégradable (des centaines d'années)."
        },
        {
            question: "Quel secteur est responsable de la plus grande part des émissions de CO2 mondiales ?",
            answers: ["L'agriculture", "L'aviation", "La production d'énergie (charbon, pétrole, gaz)", "Le numérique"],
            correct: 2,
            explanation: "La production d'énergie à partir de combustibles fossiles est la principale source d'émissions de CO2 au niveau mondial, représentant plus de 70% des émissions totales de gaz à effet de serre."
        },
        {
            question: "Qu'est-ce que l'économie circulaire ?",
            answers: ["Un système économique qui génère beaucoup de déchets", "Un modèle où les ressources sont maintenues en usage le plus longtemps possible", "Un type de commerce international", "Une méthode de comptabilité"],
            correct: 1,
            explanation: "L'économie circulaire s'oppose au modèle linéaire (extraire-fabriquer-jeter). Elle cherche à garder les ressources en usage le plus longtemps possible grâce à la réutilisation, réparation et recyclage."
        },
        {
            question: "Quel label indique qu'un produit répond à des critères écologiques stricts en Europe ?",
            answers: ["ISO 9001", "Label Rouge", "Écolabel Européen (fleur verte)", "NF"],
            correct: 2,
            explanation: "L'Écolabel Européen (ou Fleur verte) est un label officiel de l'UE qui identifie les produits et services ayant un moindre impact sur l'environnement tout au long de leur cycle de vie."
        },
        {
            question: "Le développement durable vise à répondre aux besoins du présent :",
            answers: ["En ignorant les générations futures", "Sans compromettre la capacité des générations futures à répondre aux leurs", "En maximisant la production industrielle", "En arrêtant tout développement économique"],
            correct: 1,
            explanation: "Cette définition, issue du rapport Brundtland (1987), est la définition fondatrice du développement durable : satisfaire les besoins actuels sans sacrifier les possibilités des générations suivantes."
        },
        {
            question: "Quel matériau d'emballage est le plus facilement recyclable ?",
            answers: ["Plastique à usage unique", "Polystyrène expansé", "Verre", "Films plastiques multicouches"],
            correct: 2,
            explanation: "Le verre est recyclable à 100% et indéfiniment sans perte de qualité. Le plastique se dégrade à chaque recyclage et certains types ne sont pas recyclables du tout."
        },
        {
            question: "Qu'est-ce que la fast fashion (mode rapide) pose comme problème écologique ?",
            answers: ["Elle produit des vêtements trop solides", "Elle génère d'énormes quantités de déchets textiles et pollue les eaux", "Elle coûte trop cher", "Elle emploie trop de personnes"],
            correct: 1,
            explanation: "La fast fashion produit des vêtements en grande quantité à bas prix, souvent jetés rapidement. Elle est responsable d'environ 10% des émissions mondiales de CO2 et pollue massivement les eaux."
        },
        {
            question: "Un panneau solaire photovoltaïque a un impact environnemental nul ?",
            answers: ["Oui, il n'émet jamais de CO2", "Non, sa fabrication consomme de l'énergie et des ressources", "Oui, car il utilise l'énergie du soleil", "Non, car il émet du CO2 pendant son utilisation"],
            correct: 1,
            explanation: "La fabrication des panneaux solaires nécessite de l'énergie et des matériaux rares. Cependant, en quelques années de fonctionnement, ils 'remboursent' l'énergie utilisée pour leur fabrication."
        },
        {
            question: "Qu'est-ce que la responsabilité élargie du producteur (REP) ?",
            answers: ["L'obligation pour le consommateur de recycler", "L'obligation pour les fabricants de gérer la fin de vie de leurs produits", "Une taxe sur la pollution", "Un label écologique"],
            correct: 1,
            explanation: "La REP oblige les producteurs à prendre en charge financièrement et/ou pratiquement la collecte et le recyclage de leurs produits en fin de vie. Ex : les éco-organismes pour les appareils électroniques."
        },
        {
            question: "Les énergies fossiles sont qualifiées de 'non renouvelables' car :",
            answers: ["Elles polluent trop pour être réutilisées", "Leur formation prend des millions d'années, bien au-delà de l'échelle humaine", "Elles ne peuvent pas être transportées", "Leur combustion est interdite"],
            correct: 1,
            explanation: "Le charbon, le pétrole et le gaz se forment sur des millions d'années par transformation de matière organique. Ils se consomment bien plus vite qu'ils ne se reconstituent : stocks limités."
        },
        {
            question: "Quelle action a le plus grand impact pour réduire son empreinte carbone personnelle ?",
            answers: ["Éteindre les lumières", "Réduire la consommation de viande rouge et les voyages en avion", "Recycler ses déchets ménagers", "Utiliser des sacs réutilisables"],
            correct: 1,
            explanation: "Les études montrent que les actions à plus fort impact sont : réduire les voyages en avion, adopter un régime végétarien/végétalien, et ne pas avoir de voiture. Le recyclage a un impact plus faible."
        },
        {
            question: "Qu'est-ce qu'une ACV (Analyse du Cycle de Vie) ?",
            answers: ["Une méthode de vente de produits écologiques", "Un outil d'évaluation des impacts environnementaux d'un produit sur toute sa vie", "Un label de qualité", "Un type de recyclage"],
            correct: 1,
            explanation: "L'ACV quantifie les impacts environnementaux (CO2, eau, ressources) d'un produit depuis l'extraction des matières premières jusqu'à sa fin de vie. C'est un outil d'aide à l'éco-conception."
        },
        {
            question: "Le compostage est un exemple de :",
            answers: ["Réduction des déchets", "Réutilisation", "Recyclage organique", "Incinération"],
            correct: 2,
            explanation: "Le compostage transforme les déchets organiques (épluchures, déchets verts) en compost, un amendement naturel pour les sols. C'est un recyclage de la matière organique."
        },
        {
            question: "Qu'est-ce que l'obsolescence programmée ?",
            answers: ["Une technique pour rendre les produits plus durables", "La conception délibérée d'un produit pour qu'il devienne inutilisable après un certain temps", "Un label de qualité", "Une méthode de recyclage"],
            correct: 1,
            explanation: "L'obsolescence programmée est une pratique industrielle consistant à réduire délibérément la durée de vie d'un produit pour pousser le consommateur à le remplacer. Elle est contraire au développement durable."
        },
        {
            question: "L'effet de serre naturel est :",
            answers: ["Un phénomène uniquement négatif", "Un phénomène naturel essentiel qui maintient la Terre à une température habitable", "Causé uniquement par les activités humaines", "Absent sur Terre sans l'industrie"],
            correct: 1,
            explanation: "L'effet de serre naturel retient une partie de la chaleur solaire et maintient la Terre à environ +15°C (sans lui, -18°C). Le problème actuel est son amplification par les émissions humaines de CO2."
        }
    ],

    informatique: [
        {
            question: "Qu'est-ce qu'une adresse IP ?",
            answers: ["Un mot de passe chiffré", "Un identifiant numérique unique attribué à chaque appareil sur un réseau", "Un type de câble réseau", "Un protocole de chiffrement"],
            correct: 1,
            explanation: "Une adresse IP (Internet Protocol) est un numéro unique qui identifie un appareil sur un réseau. Elle permet d'acheminer les données jusqu'au bon destinataire. Ex: 192.168.1.1 (IPv4)."
        },
        {
            question: "Qu'est-ce qu'un protocole informatique ?",
            answers: ["Un virus informatique", "Un ensemble de règles définissant la communication entre systèmes", "Un mot de passe complexe", "Un type de processeur"],
            correct: 1,
            explanation: "Un protocole est un ensemble de règles et conventions qui définissent comment les données sont échangées entre systèmes. Ex: HTTP pour le web, SMTP pour l'email, TCP/IP pour Internet."
        },
        {
            question: "Le phishing (hameçonnage) est :",
            answers: ["Un type de réseau social", "Une technique de piratage par e-mail pour voler des informations personnelles", "Un protocole sécurisé", "Un antivirus"],
            correct: 1,
            explanation: "Le phishing est une attaque où un criminel envoie un faux e-mail imitant une organisation légitime (banque, Netflix) pour voler vos identifiants ou données bancaires."
        },
        {
            question: "Qu'est-ce que le chiffrement des données ?",
            answers: ["La suppression des données inutiles", "La transformation des données en un code illisible sans clé", "La compression de fichiers", "La sauvegarde sur le cloud"],
            correct: 1,
            explanation: "Le chiffrement transforme les données originales (texte clair) en données illisibles (texte chiffré) à l'aide d'une clé. Seul quelqu'un ayant la clé peut déchiffrer et lire les données."
        },
        {
            question: "HTTPS dans une URL indique que :",
            answers: ["Le site est lent", "La communication est chiffrée et sécurisée", "Le site est gratuit", "Le téléchargement est possible"],
            correct: 1,
            explanation: "HTTPS (HyperText Transfer Protocol Secure) indique que la communication entre votre navigateur et le serveur est chiffrée avec TLS/SSL. Vos données (mots de passe, CB) sont protégées en transit."
        },
        {
            question: "Qu'est-ce qu'un serveur informatique ?",
            answers: ["Un ordinateur très rapide pour jouer", "Un ordinateur qui fournit des services et des ressources à d'autres ordinateurs (clients)", "Un antivirus puissant", "Un type de clavier"],
            correct: 1,
            explanation: "Un serveur est un ordinateur (souvent puissant) qui héberge des services (site web, email, fichiers) et répond aux requêtes des clients. Ex: le serveur de google.com répond quand vous cherchez."
        },
        {
            question: "La RGPD (Règlement Général sur la Protection des Données) concerne :",
            answers: ["La vitesse d'Internet en Europe", "La protection des données personnelles des citoyens européens", "La sécurité des réseaux Wi-Fi", "L'utilisation des cookies"],
            correct: 1,
            explanation: "La RGPD (2018) est un règlement européen qui protège les données personnelles des citoyens de l'UE. Il oblige les entreprises à être transparentes sur leur usage des données et respecter les droits des utilisateurs."
        },
        {
            question: "Qu'est-ce qu'un DNS (Domain Name System) ?",
            answers: ["Un type de virus", "Un système qui traduit les noms de domaine en adresses IP", "Un protocole de chiffrement", "Un type de réseau"],
            correct: 1,
            explanation: "Le DNS est le 'répertoire téléphonique' d'Internet. Il traduit les noms lisibles (google.com) en adresses IP numériques (142.250.75.46) que les ordinateurs peuvent utiliser pour se connecter."
        },
        {
            question: "Quelle est la différence entre la RAM et le disque dur (SSD/HDD) ?",
            answers: ["Il n'y a pas de différence", "La RAM est une mémoire temporaire rapide, le disque dur un stockage permanent plus lent", "La RAM est plus grande que le disque dur", "Le disque dur est plus rapide que la RAM"],
            correct: 1,
            explanation: "La RAM (mémoire vive) est temporaire et très rapide, utilisée pour les programmes en cours d'exécution. Elle se vide à l'extinction. Le disque dur/SSD stocke de façon permanente mais est plus lent."
        },
        {
            question: "Un réseau Wi-Fi ouvert (sans mot de passe) est risqué car :",
            answers: ["Il consomme plus d'électricité", "Les données échangées peuvent être interceptées par n'importe qui", "Il est plus lent", "Il chauffe plus le routeur"],
            correct: 1,
            explanation: "Sur un Wi-Fi ouvert, les données circulent sans chiffrement. N'importe qui à portée peut les intercepter (attaque 'man-in-the-middle'). Évitez de vous connecter à vos comptes sensibles sur un Wi-Fi public."
        },
        {
            question: "Qu'est-ce que le cloud computing ?",
            answers: ["Un réseau de câbles sous-marins", "L'utilisation de serveurs distants via Internet pour stocker et traiter des données", "Un logiciel de météo", "Un type de processeur"],
            correct: 1,
            explanation: "Le cloud (nuage) désigne l'utilisation de serveurs distants accessibles via Internet pour stocker (Google Drive, iCloud), traiter ou faire tourner des applications, au lieu de ressources locales."
        },
        {
            question: "Un mot de passe fort doit :",
            answers: ["Être le prénom de votre animal de compagnie", "Contenir au moins 8 caractères avec majuscules, minuscules, chiffres et symboles", "Être simple pour ne pas l'oublier", "Être le même sur tous vos comptes"],
            correct: 1,
            explanation: "Un mot de passe fort est long (12+ caractères), combine majuscules, minuscules, chiffres et symboles, et est unique pour chaque compte. Un gestionnaire de mots de passe aide à les gérer."
        },
        {
            question: "Qu'est-ce qu'un virus informatique ?",
            answers: ["Un bug accidentel dans un programme", "Un programme malveillant qui se réplique et endommage des systèmes", "Un ralentissement du réseau", "Un type de pare-feu"],
            correct: 1,
            explanation: "Un virus informatique est un programme malveillant qui se réplique en s'attachant à d'autres fichiers et peut endommager des données, espionner ou prendre le contrôle d'un système."
        },
        {
            question: "Qu'est-ce qu'une base de données relationnelle ?",
            answers: ["Un réseau social d'entreprise", "Un système organisé de données en tables liées entre elles", "Un type de cloud", "Un algorithme de tri"],
            correct: 1,
            explanation: "Une base de données relationnelle organise les données en tables (comme des tableaux Excel) reliées entre elles. Le langage SQL permet d'interroger et manipuler ces données. Ex: MySQL, PostgreSQL."
        },
        {
            question: "Qu'est-ce que l'algorithme PageRank de Google ?",
            answers: ["Un algorithme de chiffrement", "Un algorithme qui classe les pages web selon leur popularité et pertinence", "Un protocole réseau", "Un type de virus"],
            correct: 1,
            explanation: "PageRank mesure l'importance d'une page web selon le nombre et la qualité des liens qui pointent vers elle. Plus une page est citée par des pages populaires, plus elle remonte dans les résultats."
        },
        {
            question: "Quelle est la signification de HTML ?",
            answers: ["High Tech Machine Language", "HyperText Markup Language", "Human Transfer Meta Language", "Hybrid Terminal Mode Link"],
            correct: 1,
            explanation: "HTML (HyperText Markup Language) est le langage de balisage utilisé pour structurer le contenu des pages web. Les balises (<h1>, <p>, <img>) indiquent la signification de chaque élément."
        },
        {
            question: "Le Big Data désigne :",
            answers: ["Un gros disque dur", "De très grandes quantités de données variées traitées en temps réel", "Une grande base de données classique", "Un réseau de grande capacité"],
            correct: 1,
            explanation: "Le Big Data caractérise des données massives (Volume), variées (Variété) et produites rapidement (Vélocité). Il nécessite des outils spéciaux pour être analysé et peut révéler des tendances utiles."
        },
        {
            question: "Qu'est-ce qu'un pare-feu (firewall) ?",
            answers: ["Un antivirus", "Un système qui contrôle le trafic réseau selon des règles de sécurité", "Un protocole de chiffrement", "Un type de serveur"],
            correct: 1,
            explanation: "Un pare-feu filtre le trafic réseau entrant et sortant selon des règles prédéfinies. Il bloque les connexions non autorisées et protège le réseau des intrusions."
        },
        {
            question: "Qu'est-ce que l'open source ?",
            answers: ["Un logiciel très coûteux", "Un logiciel dont le code source est librement accessible et modifiable", "Un réseau ouvert sans sécurité", "Un type de licence payante"],
            correct: 1,
            explanation: "Un logiciel open source est distribué avec son code source, librement accessible, modifiable et redistribuable. Ex: Linux, Firefox, Python. Cela favorise la collaboration et la transparence."
        },
        {
            question: "Quel protocole est utilisé pour envoyer des e-mails ?",
            answers: ["HTTP", "FTP", "SMTP", "DNS"],
            correct: 2,
            explanation: "SMTP (Simple Mail Transfer Protocol) est le protocole standard pour l'envoi d'e-mails. Pour la réception, on utilise IMAP (synchronisation) ou POP3 (téléchargement)."
        }
    ],

    design: [
        {
            question: "Qu'est-ce qu'un cahier des charges ?",
            answers: ["Un carnet de croquis", "Un document listant les exigences et contraintes d'un projet", "Un plan de fabrication", "Un catalogue de matériaux"],
            correct: 1,
            explanation: "Le cahier des charges définit les fonctions, performances, contraintes et critères d'évaluation d'un projet. Il guide toute la conception et permet de vérifier si le produit final répond aux attentes."
        },
        {
            question: "Le brainstorming est une technique qui consiste à :",
            answers: ["Analyser les défauts d'un produit", "Générer librement un maximum d'idées créatives en groupe", "Tester un prototype", "Calculer les coûts de production"],
            correct: 1,
            explanation: "Le brainstorming est une technique de créativité collective où toutes les idées sont les bienvenues, sans critique immédiate. La quantité prime sur la qualité dans un premier temps."
        },
        {
            question: "Un prototype est :",
            answers: ["Le produit final à vendre", "Un modèle de test permettant de valider des concepts avant la production", "Un dessin 2D du produit", "Une liste de matériaux"],
            correct: 1,
            explanation: "Un prototype est une version préliminaire du produit, souvent partielle ou simplifiée. Il sert à tester et valider des aspects (fonctionnalité, ergonomie, esthétique) avant de lancer la fabrication en série."
        },
        {
            question: "L'ergonomie d'un produit concerne :",
            answers: ["Son aspect esthétique", "Son adaptation à l'utilisateur pour un usage confortable et efficace", "Sa résistance mécanique", "Son coût de fabrication"],
            correct: 1,
            explanation: "L'ergonomie étudie l'adaptation des produits à l'être humain. Un outil ergonomique est facile à utiliser, réduit la fatigue et les risques de blessure. Ex: une souris d'ordinateur bien moulée à la main."
        },
        {
            question: "L'innovation incrémentale est :",
            answers: ["Une révolution technologique complète", "Une amélioration progressive d'un produit existant", "La copie d'un produit concurrent", "L'abandon d'une technologie ancienne"],
            correct: 1,
            explanation: "L'innovation incrémentale améliore step by step un produit existant. Ex: nouvelles versions de smartphones avec meilleure caméra. À l'opposé, l'innovation radicale crée quelque chose d'entièrement nouveau."
        },
        {
            question: "Un brevet d'invention protège :",
            answers: ["Le nom d'une marque", "Une invention technique pendant une durée limitée (20 ans)", "Le design visuel d'un produit", "Un logo d'entreprise"],
            correct: 1,
            explanation: "Un brevet protège une invention technique pour 20 ans. Il donne l'exclusivité d'exploitation à l'inventeur en échange de la divulgation publique de l'invention. Les marques et logos sont protégés différemment."
        },
        {
            question: "Quel logiciel est typiquement utilisé pour la conception en 3D (CAO) ?",
            answers: ["Microsoft Word", "Photoshop", "SolidWorks / Fusion 360", "Excel"],
            correct: 2,
            explanation: "Les logiciels de CAO (Conception Assistée par Ordinateur) comme SolidWorks, Fusion 360 ou FreeCAD permettent de créer des modèles 3D numériques de pièces et assemblages mécaniques."
        },
        {
            question: "Qu'est-ce que le design thinking ?",
            answers: ["Un style graphique tendance", "Une méthode de conception centrée sur l'utilisateur et l'empathie", "Un logiciel de design", "Une technique de fabrication rapide"],
            correct: 1,
            explanation: "Le design thinking est une approche de résolution de problèmes centrée sur l'utilisateur. Ses étapes : Empathie → Définition → Idéation → Prototype → Test. Il met l'humain au cœur du processus."
        },
        {
            question: "La modélisation 3D permet de :",
            answers: ["Uniquement dessiner des formes artistiques", "Visualiser et tester virtuellement un objet avant sa fabrication", "Peser un objet à distance", "Choisir les matériaux automatiquement"],
            correct: 1,
            explanation: "La modélisation 3D permet de concevoir un objet en volume sur ordinateur, de le visualiser sous tous les angles, de simuler son comportement (résistance, flexion) et de préparer sa fabrication (imprimante 3D, CNC)."
        },
        {
            question: "Qu'est-ce que le Design For Manufacturing (DFM) ?",
            answers: ["Concevoir pour maximiser le nombre de pièces", "Concevoir en tenant compte des contraintes et facilités de fabrication", "Fabriquer sans plan préalable", "Copier des designs existants"],
            correct: 1,
            explanation: "Le DFM consiste à concevoir des produits en intégrant les contraintes de fabrication dès le départ : simplifier les pièces, réduire le nombre d'assemblages, utiliser des matériaux disponibles."
        },
        {
            question: "L'impression 3D (fabrication additive) fonctionne en :",
            answers: ["Découpant la matière", "Moulant la matière dans un moule", "Déposant des couches successives de matière pour créer l'objet", "Fraisent le matériau en bloc"],
            correct: 2,
            explanation: "L'impression 3D est une fabrication additive : l'objet est construit couche par couche, le plus souvent par dépôt de plastique fondu (FDM). Elle permet de réaliser rapidement des prototypes complexes."
        },
        {
            question: "Qu'est-ce que l'esthétique industrielle ?",
            answers: ["La décoration des usines", "La discipline qui combine design fonctionnel et esthétique des produits industriels", "La résistance mécanique des matériaux", "Le marketing des produits"],
            correct: 1,
            explanation: "L'esthétique industrielle (ou design industriel) recherche l'harmonie entre la forme, la fonction et les valeurs d'un produit. Elle contribue à son attractivité, sa valeur perçue et l'expérience utilisateur."
        },
        {
            question: "Une maquette fonctionnelle diffère d'une maquette esthétique car :",
            answers: ["Elle est plus jolie", "Elle permet de tester le fonctionnement du produit, pas seulement son apparence", "Elle est faite en métal uniquement", "Elle est plus petite"],
            correct: 1,
            explanation: "Une maquette fonctionnelle teste les mécanismes, interactions et comportements du produit. Une maquette esthétique (ou look-like) représente l'apparence finale sans fonctionner vraiment."
        },
        {
            question: "Le droit d'auteur protège automatiquement :",
            answers: ["Toutes les idées", "Les créations originales (textes, images, musiques, logiciels) dès leur création", "Uniquement les brevets déposés", "Les noms de marque"],
            correct: 1,
            explanation: "Le droit d'auteur protège automatiquement et gratuitement toute création originale dès sa réalisation, sans formalité. Il couvre les œuvres littéraires, artistiques, musicales et les logiciels."
        },
        {
            question: "Qu'est-ce qu'un schéma cinématique en technologie ?",
            answers: ["Un dessin artistique du produit", "Une représentation symbolique des liaisons mécaniques d'un mécanisme", "Un plan de fabrication 3D", "Un cahier des charges"],
            correct: 1,
            explanation: "Un schéma cinématique représente de façon symbolique et simplifiée les liaisons mécaniques (pivot, glissière, encastrement...) d'un mécanisme, pour comprendre comment il se déplace."
        },
        {
            question: "La démarche de projet en technologie suit généralement l'ordre :",
            answers: ["Fabriquer → Analyser → Concevoir", "Analyser le besoin → Concevoir → Fabriquer → Évaluer", "Évaluer → Concevoir → Analyser", "Fabriquer → Évaluer → Concevoir"],
            correct: 1,
            explanation: "La démarche technologique standard suit : 1. Identifier/analyser le besoin, 2. Rechercher et concevoir des solutions, 3. Prototyper/fabriquer, 4. Tester et évaluer. C'est un processus itératif."
        },
        {
            question: "L'innovation radicale est caractérisée par :",
            answers: ["Une légère amélioration du produit existant", "La création de quelque chose d'entièrement nouveau qui bouleverse le marché", "La réduction du prix d'un produit", "Le changement de couleur d'un produit"],
            correct: 1,
            explanation: "L'innovation radicale crée une rupture technologique ou de marché. Exemples : l'invention du smartphone (vs téléphone + ordinateur), Uber (vs taxis), les voitures électriques. Elle crée de nouveaux usages."
        },
        {
            question: "Qu'est-ce qu'un diagramme de Gantt ?",
            answers: ["Un type de prototype", "Un outil de planification qui représente les tâches d'un projet dans le temps", "Un schéma technique", "Un logiciel de CAO"],
            correct: 1,
            explanation: "Un diagramme de Gantt est un outil de gestion de projet. Il représente horizontalement les tâches à accomplir et leur durée dans le temps, permettant de visualiser la planification et les dépendances."
        },
        {
            question: "L'accessibilité universelle en design signifie :",
            answers: ["Que le produit est bon marché", "Que le produit peut être utilisé par tous, y compris les personnes handicapées", "Que le design est simple", "Que le produit est disponible partout"],
            correct: 1,
            explanation: "Le design universel vise à créer des produits, environnements et services utilisables par le plus grand nombre de personnes, quels que soient leur âge, capacité ou situation, sans adaptation spéciale."
        },
        {
            question: "Quel outil graphique représente les fonctions d'un système sous forme de 'boîte noire' avec entrées et sorties ?",
            answers: ["Schéma cinématique", "Diagramme de Gantt", "Bête à cornes / Diagramme pieuvre", "Plan de fabrication"],
            correct: 2,
            explanation: "Le diagramme 'bête à cornes' exprime le besoin (pourquoi le produit existe, à qui il sert). Le 'diagramme pieuvre' analyse les relations entre le produit et son environnement (fonctions de service)."
        }
    ]
};
