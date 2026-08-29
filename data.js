/* =====================================================================
   DATA.JS — Manual de Flexibilidad Activa y Salud Estructural
   Base de datos de la biblioteca: bloques, zonas, equipo y las fichas
   técnicas completas de los 37 ejercicios.

   Esquema de cada ejercicio (ver EXERCISES más abajo):
     id, block, name, altName, zones[], equipment[], media[],
     enfoque | objetivo, dosificacion, tecnica[], video, groupVideo

   El campo `media` acepta { type: "image"|"gif", src, alt } y admite
   varias entradas por ejercicio; un arreglo vacío `media: []` muestra
   el espacio reservado por defecto en la biblioteca.

   Integración con la API de Hevy: ver hevy-integration.js.
   ===================================================================== */

/* SECCIÓN — CATÁLOGOS (bloques, zonas y equipo) */

const BLOCKS = [
  { id: 1, title: "Cintura Escapular, Hombro y Manguito Rotador", zone: "hombro" },
  { id: 2, title: "Apertura Torácica y Cadena Anterior Alta", zone: "toracico" },
  { id: 3, title: "Estabilización Escapular Avanzada y Anatomía del Trapecio", zone: "hombro" },
  { id: 4, title: "Antebrazo, Muñeca y Fuerza de Agarre (Grip Armor)", zone: "antebrazo" },
  { id: 5, title: "Columna, Zona Media y Descompresión Lumbar", zone: "columna" },
  { id: 6, title: "Complejo de Cadera, Pelvis e Ingle", zone: "cadera" },
  { id: 7, title: "Fuerza y Protección de Rodilla en Rango Completo", zone: "rodilla" },
  { id: 8, title: "Tobillo, Tendón de Aquiles y Estabilidad de Base", zone: "tobillo" },
  { id: 9, title: "Base y Fascia Plantar", zone: "pie" },
  { id: 10, title: "Circuito de Activación Elástica en Suelo (Banda)", zone: "hombro" },
  { id: 11, title: "Movilidad Avanzada del Tren Superior con Rig y Bandas", zone: "hombro" },
];

const ZONES = [
  { id: "hombro", label: "Hombro / Escápula" },
  { id: "toracico", label: "Torácico / Pecho" },
  { id: "antebrazo", label: "Antebrazo / Muñeca" },
  { id: "columna", label: "Columna / Zona media" },
  { id: "cadera", label: "Cadera / Ingle" },
  { id: "rodilla", label: "Rodilla" },
  { id: "tobillo", label: "Tobillo / Aquiles" },
  { id: "pie", label: "Pie / Fascia plantar" },
];

const EQUIPMENT = [
  { id: "mancuerna", label: "Mancuerna" },
  { id: "barra", label: "Barra" },
  { id: "cable", label: "Cable / Polea" },
  { id: "banda", label: "Banda elástica" },
  { id: "banco", label: "Banco" },
  { id: "rig", label: "Rig / Rack" },
  { id: "ninguno", label: "Sin equipo" },
  { id: "pesa_rusa", label: "Pesa rusa" },
];

/* SECCIÓN — BIBLIOTECA DE EJERCICIOS (37 fichas técnicas, agrupadas por bloque) */

const EXERCISES = [
  // ---------------------------------------------------------------
  // BLOQUE 1 · Cintura Escapular, Hombro y Manguito Rotador (ejercicios 1–5)
  // ---------------------------------------------------------------
  {
    id: 1,
    block: 1,
    name: "Rotación Externa Sentado",
    altName: "Seated DB External Rotation",
    zones: ["hombro"],
    equipment: ["mancuerna", "banco", "banda"],
    media: [
      { type: "image", src: "assets/exercises/ex01-a.jpg", alt: "Rotación externa sentado — posición inicial" },
      { type: "image", src: "assets/exercises/ex01-b.jpg", alt: "Rotación externa sentado — posición final" },
    ],
    enfoque: "Infraespinoso, redondo menor y fijadores posteriores del hombro (básicos para evitar que el hombro se desplace hacia adelante en el press de banca o la recepción del arranque).",
    dosificacion: "3 a 4 series por lado. 8 a 10 repeticiones. Tempo 3-0-1-0.",
    tecnica: [
      "Siéntate en un banco, apoya firmemente el pie sobre la superficie para colocar de forma estable el codo sobre tu rodilla a la altura del hombro, manteniendo un ángulo recto de 90 grados.",
      "Realiza un descenso excéntrico controlado de la mancuerna hacia adelante, contando 3 segundos de bajada milimétrica y cuidando de no deprimir el hombro ni compensar inclinando el torso.",
      "Contrae de forma concéntrica para regresar el peso a la vertical de manera fluida, acumulando la fuerza en la cara posterior del hombro.",
    ],
    video: null,
  },
  {
    id: 2,
    block: 1,
    name: "Elevación Powell",
    altName: "Powell Raise",
    zones: ["hombro"],
    equipment: ["mancuerna", "banco"],
    media: [
      { type: "image", src: "assets/exercises/ex02-a.jpg", alt: "Elevación Powell — posición inicial" },
      { type: "image", src: "assets/exercises/ex02-b.jpg", alt: "Elevación Powell — posición final" },
    ],
    enfoque: "Deltoides posterior, romboides y trapecio medio (músculos que frenan la barra en la bajada del press de banca y estabilizan la espalda alta en la sentadilla).",
    dosificacion: "3 series por lado x 10 a 12 repeticiones. Tempo 3-0-1-1.",
    tecnica: [
      "Recárgate por completo de lado sobre un banco inclinado (aproximadamente a unos 30-45 grados) manteniendo el torso firme y alineado.",
      "Deja descender la mancuerna de forma totalmente vertical por delante de tu cuerpo con el brazo estirado, permitiendo una ligera protracción escapular para estirar el deltoides posterior bajo carga.",
      "Eleva el brazo de forma lateral manteniendo el codo completamente bloqueado al 100% hasta superar la línea horizontal, sosteniendo la contracción un segundo en el punto más alto.",
    ],
    video: "https://youtu.be/XKCfeJp4Qo0?si=rg_ejC2ZI9vpk-n3",
  },
  {
    id: 3,
    block: 1,
    name: "Tirón de Cara / Cuello con Cable",
    altName: "Cable Face Pull",
    zones: ["hombro"],
    equipment: ["cable"],
    media: [
      { type: "image", src: "assets/exercises/ex03.jpg", alt: "Tirón de cara con cable en polea alta" },
    ],
    enfoque: "Deltoides posterior, rotadores externos y retractores escapulares (esenciales para mantener la barra pegada al cuerpo durante el jalón de halterofilia o el peso muerto).",
    dosificacion: "3 series x 12 a 15 repeticiones. Tempo 2-1-1-2.",
    tecnica: [
      "Párate derecho frente a la polea alta y adopta una ligera inclinación hacia atrás con las rodillas semi-flexionadas para contrarrestar de forma estable el peso del cable.",
      "Jala la cuerda de manera fluida hacia tu rostro imaginando que la rompes hacia afuera con las manos, dirigiéndolas hacia la altura de tu frente o el cuello.",
      "Separa activamente las manos al final del recorrido para forzar la rotación externa del hombro, manteniendo siempre los codos elevados y alineados.",
    ],
    video: "https://youtu.be/ymBsUknTFdE?si=ySilyIcV14OyxYlb",
  },
  {
    id: 4,
    block: 1,
    name: "T Alternada Prono con Discos",
    altName: "Prone Alternate T-Raise",
    zones: ["hombro"],
    equipment: ["ninguno"],
    media: [],
    enfoque: "Trapecio medio, romboides y deltoides posterior (necesarios para fijar la barra firmemente sobre la espalda en la sentadilla baja o low bar squat).",
    dosificacion: "3 series x 12 a 15 repeticiones. Tempo 2-1-1-1.",
    tecnica: [
      "Colóquese boca abajo en el suelo, abriendo los brazos hacia los costados en un ángulo de 90 grados respecto al torso para formar una T perfecta.",
      "Sostén discos ligeros manteniendo la frente o la barbilla neutral rozando ligeramente la superficie para no tensionar las cervicales.",
      "Eleva los brazos de forma controlada despegando los discos del suelo mediante una retracción escapular estricta y sin flexionar los codos, apretando la espalda media.",
    ],
    video: "https://youtu.be/3GJoiYUYwr0?si=b9uyFrB-myRcsDge",
  },
  {
    id: 5,
    block: 1,
    name: "Y Inversa Prono",
    altName: "Prone Inverted Y-Raise",
    zones: ["hombro"],
    equipment: ["ninguno"],
    media: [
      { type: "image", src: "assets/exercises/ex05.jpg", alt: "Y inversa prono con discos" },
    ],
    enfoque: "Deltoides posterior, tríceps largo y dorsal en acortamiento máximo (vital para estabilizar el bloqueo overhead en el arranque o snatch, mantener los hombros firmes en la banca y evitar que la barra se ruede en la sentadilla barra baja).",
    dosificacion: "3 series x 12 a 15 repeticiones. Tempo 2-0-1-2.",
    tecnica: [
      "Acuéstate boca abajo en el suelo y estira tus brazos hacia atrás y ligeramente hacia afuera en dirección a tus caderas, dibujando una Y invertida.",
      "Sostén discos pequeños con las palmas orientadas completamente hacia el techo de forma simétrica.",
      "Levanta los brazos hacia arriba bloqueando los codos al 100%, apretando la parte posterior del hombro y el tríceps en su punto de máxima contracción durante dos segundos.",
    ],
    video: "https://youtu.be/w1AWGKubE5U?si=zl9YsoO6bC5_tTx",
  },
  // ---------------------------------------------------------------
  // BLOQUE 2 · Apertura Torácica y Cadena Anterior Alta (ejercicios 6–8)
  // ---------------------------------------------------------------
  {
    id: 6,
    block: 2,
    name: "Pullover con Mancuerna en Banco",
    altName: "Dumbbell Pullover",
    zones: ["toracico"],
    equipment: ["mancuerna", "banco"],
    media: [],
    enfoque: "Dorsal ancho, pectoral mayor, cabeza larga del tríceps y erectores torácicos (esencial para ganar la apertura torácica requerida en la recepción del clin).",
    dosificacion: "3 series x 10 a 12 repeticiones. Tempo 4-1-1-0.",
    tecnica: [
      "Apoya tu zona escapular de forma transversal sobre el banco plano, manteniendo la pelvis estable mediante un puente de glúteos firme y activo.",
      "Sostén la mancuerna con ambas manos sobre el pecho, fijando los brazos con una flexión mínima e imperceptible en los codos para proteger la articulación.",
      "Baja el peso detrás de tu cabeza de manera progresiva y profunda durante 4 segundos completos para de esta manera elongar tus dorsales y abrir la caja torácica.",
    ],
    video: "https://youtu.be/FK4rHfWKEac?si=OOY2QCqR1lj9x2Ab",
  },
  {
    id: 7,
    block: 2,
    name: "Pullover con Barra en Banco",
    altName: "Barbell Pullover",
    zones: ["toracico"],
    equipment: ["barra", "banco"],
    media: [],
    enfoque: "Dorsal ancho, pectoral mayor, porción larga del tríceps y extensión torácica (vital para empujar la barra contra tus espinillas en el peso muerto y mantener un bloqueo overhead vertical y firme en el envión o yerk).",
    dosificacion: "3 series x 10 a 12 repeticiones. Tempo 4-1-1-0.",
    tecnica: [
      "Adopta la posición transversal sobre el banco plano con las escápulas bien apoyadas y la pelvis estable.",
      "Toma una barra ligera o barra Z separando tus manos al ancho de tus hombros, ubicándola inicialmente sobre tu línea pectoral.",
      "Lleva la barra hacia atrás dibujando un arco amplio y profundo por detrás de tu cabeza, permitiendo que el pecho se expanda completamente en el punto inferior elástico.",
    ],
    video: "https://youtu.be/E4NQ5DfqwbU?si=qB5X5RVOHdCAoXSm",
  },
  {
    id: 8,
    block: 2,
    name: "Remo Prone / Elevación Escapular en Banco Inclinado",
    altName: "Incline Prone Raise",
    zones: ["toracico"],
    equipment: ["mancuerna", "banco"],
    media: [],
    enfoque: "Cadena posterior alta, erectores torácicos y ritmo de la escápula (vital para fijar el soporte de la barra en la sentadilla, consolidar el arco rígido en el press de banca y evitar que los hombros se vayan hacia adelante en el peso muerto).",
    dosificacion: "3 series x 12 repeticiones. Tempo 2-1-1-1.",
    tecnica: [
      "Acuéstate boca abajo sobre un banco inclinado a unos 30-45 grados, dejando colgar los brazos de forma vertical con las mancuernas.",
      "Sin despegar el pecho de la superficie ni arquear de forma compensatoria la zona lumbar, eleva tus brazos abriendo el plano escapular de manera pura.",
      "Frena el regreso excéntrico de forma controlada para acumular tensión óptima en la espalda alta. Inicia con el 10% de tu peso corporal.",
    ],
    video: "https://youtu.be/qKuJhM5N8yE?si=JpyQQ0kFnrOOp_sx",
  },
  // ---------------------------------------------------------------
  // BLOQUE 3 · Estabilización Escapular Avanzada y Anatomía del Trapecio (ejercicios 9–10)
  // ---------------------------------------------------------------
  {
    id: 9,
    block: 3,
    name: "Elevación de Trapecio Inferior a 45°",
    altName: "Trap 3 Raise",
    zones: ["hombro"],
    equipment: ["mancuerna", "banco"],
    media: [],
    enfoque: "Porción inferior del trapecio (Zona 3) y erectores torácicos (el músculo clave que evita que la espalda alta se 'venza' o se redondee al sacar un peso muerto pesado o al recibir un levantamiento).",
    dosificacion: "3 series x 10 repeticiones. Tempo 3-0-1-2.",
    tecnica: [
      "Apoya tu torso firmemente sobre el cojín de un banco de extensión a 45 grados, asegurando los pies en los rodillos para aislar la espalda alta.",
      "Eleva los brazos extendidos hacia adelante formando una trayectoria diagonal en Y (abriendo unos 30-45 grados respecto a la línea de tu cabeza).",
      "Busca la contracción concéntrica completa en la zona media de la espalda y sostén la posición fija dos segundos arriba, bloqueando los codos.",
    ],
    video: "https://youtu.be/8naZC9gSnt0?si=q5YXmbS1CqvuNjf6",
  },
  {
    id: 10,
    block: 3,
    name: "Variante Avanzada: Elevación Trap-3 con Excéntrica de 8 Segundos",
    altName: null,
    zones: ["hombro"],
    equipment: ["mancuerna", "banco"],
    objetivo: "Reestructuración y remodelación tendinosa profunda (vital para atletas con rigidez crónica torácica por cargar pesado, asegurando un bloqueo overhead sólido y una postura vertical indestructible bajo la barra).",
    dosificacion: "3 series x 5 a 6 repeticiones. Tempo 8-0-1-0.",
    tecnica: [
      "Adopta la misma posición inicial en el banco a 45 grados con los brazos extendidos al frente en posición de Y.",
      "Eleva la carga de forma concéntrica en un segundo hasta el punto de máxima contracción escapular.",
      "Inicia el descenso bajando los brazos de manera milimétrica y continua, contando mentalmente 8 segundos completos para de esta manera frenar el peso de forma uniforme sin tirones.",
    ],
    nota: "Nota anatómica del trapecio: el músculo se divide en tres porciones. Las fibras de la porción inferior o Trap-3 deprimen las escápulas y recorren de forma descendente toda la columna torácica, anclándose justo por encima de la zona lumbar. Entrenar esta zona en rangos de máxima elongación le da un soporte inquebrantable a los omóplatos, previniendo pinzamientos en los levantamientos.",
    media: [],
    notaImage: "assets/exercises/ex10-trapecio.jpg",
    video: null,
  },
  // ---------------------------------------------------------------
  // BLOQUE 4 · Antebrazo, Muñeca y Fuerza de Agarre (Grip Armor) (ejercicios 11–14)
  // ---------------------------------------------------------------
  {
    id: 11,
    block: 4,
    name: "Extensión de Muñeca Prona con Banda",
    altName: "Prone Wrist Extension",
    zones: ["antebrazo"],
    equipment: ["banda"],
    media: [],
    enfoque: "Extensores del antebrazo y extensor carpi radialis (esenciales para construir la fuerza de soporte en el eje de la muñeca al recibir la barra).",
    dosificacion: "3 series x 10 repeticiones estrictas. Tempo 2-1-1-1.",
    tecnica: [
      "Siéntate en un banco abriendo tus piernas y fija la banda elástica pasándola por debajo de una pesa rusa pesada en el suelo para anclarla.",
      "Apoya por completo tus antebrazos sobre los muslos, un banco, pegados a tu cuerpo a 90° (según tu nivel), permitiendo que tus muñecas sobresalgan por delante de las rodillas, banco, etc., con las palmas orientadas completamente hacia abajo.",
      "Ejecuta una extensión carpiana estricta llevando la mano hacia arriba contra la resistencia elástica, sin despegar el brazo de la estructura de apoyo.",
    ],
    video: null,
    groupVideo: "grip",
  },
  {
    id: 12,
    block: 4,
    name: "Desviación Radial en Agarre Neutro con Banda",
    altName: "Radial Deviation",
    zones: ["antebrazo"],
    equipment: ["banda"],
    media: [],
    enfoque: "Músculo braquiorradial y estabilizadores laterales del carpo (soporte estructural clave para la fase de bloqueo del yerk o empuje).",
    dosificacion: "3 series x 8 repeticiones controladas. Tempo 3-0-1-1.",
    tecnica: [
      "Conserva la posición de apoyo sobre tus muslos, pero rota tus muñecas a una posición neutra (como agarre de martillo, con el pulgar apuntando verticalmente al techo).",
      "Sostén la banda elástica y realiza una flexión lateral dirigiendo tu pulgar directamente hacia el antebrazo.",
      "Frena el regreso carpiano controlando el vector elástico de manera milimétrica.",
    ],
    video: null,
    groupVideo: "grip",
  },
  {
    id: 13,
    block: 4,
    name: "Pronación Dinámica y Control del Carpo con Banda",
    altName: "Dynamic Forearm Pronation",
    zones: ["antebrazo"],
    equipment: ["banda"],
    media: [],
    enfoque: "Pronador redondo y flexor radial del carpo (básicos para bloquear el agarre en pronación en el peso muerto).",
    dosificacion: "3 series x 12 repeticiones. Tempo 2-0-1-2.",
    tecnica: [
      "Sostén la banda elástica y fija tus codos a un ángulo de 90 grados bien bloqueados a los costados de tu torso.",
      "Realiza un movimiento de rotación interna (pronación) con tu muñeca, girando el antebrazo de forma controlada contra la resistencia elástica.",
      "Sostén la contracción estática dos segundos al final del rango antes de regresar de manera suave al punto neutro.",
    ],
    video: null,
    groupVideo: "grip",
  },
  {
    id: 14,
    block: 4,
    name: "Flexión de Muñeca Supina con Banda",
    altName: "Supinated Wrist Flexion",
    zones: ["antebrazo"],
    equipment: ["banda"],
    media: [],
    enfoque: "Flexores profundos de los dedos y cara anterior del antebrazo (los músculos primarios de trituración del agarre o crush grip, vitales para asegurar el gancho en el hook grip, reventar el peso muerto sin que se resbale la barra y proteger los codos).",
    dosificacion: "3 a 4 series x 10 repeticiones estrictas. Tempo 3-1-1-1.",
    tecnica: [
      "Apoya tus antebrazos en tus piernas, posicionando esta vez las palmas de tus manos orientadas completamente hacia el techo.",
      "Sostén la banda elástica permitiendo que la tensión abra sutilmente tus dedos en la porción inferior del estiramiento para trabajar los flexores profundos.",
      "Cierra los dedos con fuerza formando un puño sólido y de inmediato ejecuta un curl de muñeca largo hacia arriba, apretando el antebrazo.",
    ],
    video: null,
    groupVideo: "grip",
  },
  // ---------------------------------------------------------------
  // BLOQUE 5 · Columna, Zona Media y Descompresión Lumbar (ejercicios 15–17)
  // ---------------------------------------------------------------
  {
    id: 15,
    block: 5,
    name: "Extensión Lateral para Cuadrado Lumbar",
    altName: "QL Raise",
    zones: ["columna"],
    equipment: ["banco"],
    media: [],
    enfoque: "Cuadrado lumbar, oblicuos y estabilizadores laterales lumbares (el músculo estabilizador profundo que previene asimetrías de cadera al sacar la barra del suelo).",
    dosificacion: "3 series por lado x 8 a 10 repeticiones. Tempo 3-1-1-0.",
    tecnica: [
      "Colóquese de forma lateral sobre el cojín de un banco de extensión a 45°, colocando la cadera firmemente en el soporte.",
      "Deja caer el torso lateralmente de forma controlada en 3 segundos, permitiendo una flexión lateral profunda para estirar el cuadrado lumbar superior.",
      "Sube mediante una contracción concéntrica lateral pura hasta alinear tu cuerpo, evitando rotar o girar el torso hacia el frente.",
    ],
    video: "https://youtu.be/8I4S0jCSKQU?si=pHp5ba36SWkXdJSZ",
  },
  {
    id: 16,
    block: 5,
    name: "Curl Jefferson",
    altName: "Jefferson Curl",
    zones: ["columna"],
    equipment: ["barra", "ninguno"],
    media: [],
    enfoque: "Isquiotibiales, glúteos, erectores de columna y descompresión de la fascia toracolumbar (vital para eliminar la rigidez y presión en la espalda baja tras sesiones de cargas axiales masivas como sentadillas o pesos muertos pesados).",
    dosificacion: "3 series x 5 a 8 repeticiones muy concentradas. Tempo 5-0-5-0.",
    tecnica: [
      "Párate derecho sobre un cajón estable o un banco, bloqueando tus rodillas por completo al 100% durante todo el recorrido.",
      "Pega tu barbilla de forma estricta al pecho y empieza a flexionar la columna hacia abajo segmentariamente, articulando de manera lenta vértebra por vértebra.",
      "Desciende con los brazos totalmente relajados dejando que la barra vacía o mancuernas bajen por debajo del nivel de tus pies, y regresa reconstruyendo la postura igual de lento.",
    ],
    video: "https://youtu.be/G8i6N7ysotA?si=ptDzdh2aMrEhMFnv",
  },
  {
    id: 17,
    block: 5,
    name: "Extensión Prona Global",
    altName: "Prone Full-Chain Extension",
    zones: ["columna"],
    equipment: ["ninguno"],
    media: [],
    enfoque: "Erectores de columna completos, glúteos, isquiotibiales y hombro posterior (vital para mantener el torso firme en el despegue del peso muerto, fijar la espalda en el press de banca y evitar que la barra te doble la espalda alta).",
    dosificacion: "3 series x 10 a 12 repeticiones (o 30s en isometría). Tempo 2-2-1-0.",
    tecnica: [
      "Acuéstate boca abajo sobre tu colchoneta con los brazos estirados hacia el frente abriendo una trayectoria diagonal en forma de Y.",
      "Conserva la cabeza en una línea neutral apuntando al suelo y contrae con fuerza toda tu cadena posterior.",
      "Eleva simultáneamente el torso y tus brazos de manera fluida, sosteniendo la contracción dos segundos arriba con los hombros bajos alejados de tus orejas.",
    ],
    video: "https://youtube.com/shorts/TlRhNiYh0SY?si=oEYFnvCf6xy3QDKH",
  },
  // ---------------------------------------------------------------
  // BLOQUE 6 · Complejo de Cadera, Pelvis e Ingle (ejercicios 18–20)
  // ---------------------------------------------------------------
  {
    id: 18,
    block: 6,
    name: "Movilidad de Rotadores Profundos de Cadera",
    altName: "Seated Hip Opener",
    zones: ["cadera"],
    equipment: ["ninguno"],
    media: [],
    enfoque: "Rotadores de cadera, piramidal y cápsula iliofemoral (vital para lograr la apertura de pies en el stance de sentadilla sumo o squat profundo).",
    dosificacion: "2-3 series x 45-60 segundos de exploración fluida.",
    tecnica: [
      "Siéntate en el suelo abriendo amplio tus piernas en un rango amplio y apoya las manos detrás de ti para liberar presión si tus caderas están muy rígidas.",
      "Con un movimiento suave, rota una rodilla hacia adentro buscando tocar el suelo de forma interna mientras la otra pierna se abre externamente.",
      "Alterna la dirección del movimiento de lado a lado fluidamente, explorando y soltando las restricciones profundas de la cápsula femoral.",
    ],
    video: "https://youtu.be/m51AZSXMvEA?si=IR8yBXWXPKHr7Rfz",
  },
  {
    id: 19,
    block: 6,
    name: "Estiramiento de Mariposa con Carga",
    altName: "Loaded Butterfly Stretch",
    zones: ["cadera"],
    equipment: ["mancuerna"],
    media: [],
    enfoque: "Aductores (mayor/largo/corto), pectíneo y flexores de la ingle (vital para evitar que las rodillas colapsen hacia adentro al salir de la profundidad y prevenir que la pelvis se redondee en sentadillas profundas o arranques).",
    dosificacion: "3 series x 60 segundos de sostén estático-activo continuo.",
    tecnica: [
      "Siéntate con la espalda completamente erguida, junta las plantas de tus pies y acércalas hacia tu pelvis tanto como te sea posible.",
      "Coloca un par de mancuernas sobre tus rodillas para aplicar una fuerza externa constante pero controlada.",
      "Mantén el torso firme y permite que el peso venza progresivamente la rigidez aductora, presionando suavemente las rodillas hacia el suelo de manera controlada.",
    ],
    video: "https://youtube.com/shorts/YjsfoRGc4R0?si=cKvTGTNV7CUDSdfD",
  },
  {
    id: 20,
    block: 6,
    name: "Estiramiento de Sofá",
    altName: "Couch Stretch",
    zones: ["cadera"],
    equipment: ["ninguno"],
    media: [],
    enfoque: "Psoas ilíaco (flexor profundo) y recto femoral del cuádriceps (eliminar la tensión anterior que jala la pelvis y causa dolor lumbar al extender el peso muerto).",
    dosificacion: "3 series por pierna x 1 minuto continuo por lado.",
    tecnica: [
      "Coloca tu rodilla trasera completamente encajada contra la base de una pared con el pie apuntando verticalmente hacia arriba.",
      "Da un paso largo al frente con la otra pierna colocándola en posición de desplante a 90 grados de forma estable.",
      "Aprieta al máximo tu glúteo trasero durante 5 segundos para relajar el flexor anterior por inhibición, y eleva tu torso conservando una retroversión pélvica estricta.",
    ],
    video: "https://youtu.be/qJ_XoApTrnc?si=o0U2iQllL88sI1Bk",
  },
  // ---------------------------------------------------------------
  // BLOQUE 7 · Fuerza y Protección de Rodilla en Rango Completo (ejercicio 21)
  // ---------------------------------------------------------------
  {
    id: 21,
    block: 7,
    name: "Sentadilla Dividida ATG",
    altName: "ATG Split Squat",
    zones: ["rodilla"],
    equipment: ["mancuerna"],
    media: [],
    enfoque: "Cuádriceps (énfasis VMO o vasto medial), tendón rotuliano y dorsiflexión profunda (el blindaje ideal para las rodillas de un powerlifter y halterista).",
    dosificacion: "3-4 series por pierna x 5-8 repeticiones. Tempo 3-2-1-0.",
    tecnica: [
      "Da un paso largo hacia el frente sosteniendo mancuernas fijas a los costados de tu cuerpo de manera compacta.",
      "Desciende de forma vertical forzando que tu rodilla delantera avance intencionalmente sobre la punta de tu pie para de esta manera estimular el tendón rotuliano.",
      "Baja por completo hasta lograr que tu isquiotibial cubra por completo tu pantorrilla, manteniendo la pierna de atrás estirada sin tocar el suelo.",
    ],
    video: "https://youtu.be/Gx7i66uftV4?si=vG4AVqxdvNixpcHD",
  },
  // ---------------------------------------------------------------
  // BLOQUE 8 · Tobillo, Tendón de Aquiles y Estabilidad de Base (ejercicios 22–27)
  // ---------------------------------------------------------------
  {
    id: 22,
    block: 8,
    name: "Dorsiflexión e Inversión de Tobillo Sentado con Banda",
    altName: null,
    zones: ["tobillo"],
    equipment: ["banda"],
    media: [],
    enfoque: "Músculo tibial anterior y ligamentos estabilizadores del tobillo (básico para no perder la estabilidad del pie bajo 200 kg, asegurar un trípode plantar sólido en la sentadilla profunda y evitar que los tobillos colapsen hacia adentro).",
    dosificacion: "3 series por pie x 10 repeticiones estrictas. Tempo 3-0-1-1.",
    tecnica: [
      "Siéntate en un banco y apoya tu talón sobre un bloque de yoga sólido para dejar el pie suspendido libremente en el aire.",
      "Coloca una banda elástica rodeando la punta de tu pie generando un vector de tracción lateral o descendente continuo.",
      "Realiza una flexión dorsal o rotación interna hacia tu cuerpo contra la banda, frenando el regreso de forma exagerada en 3 segundos continuos.",
    ],
    video: null,
    groupVideo: "ankle",
  },
  {
    id: 23,
    block: 8,
    name: "Eversión de Tobillo Sentado con Banda de Bucle",
    altName: null,
    zones: ["tobillo"],
    equipment: ["banda"],
    media: [],
    enfoque: "Músculos peroneos y estabilización del arco plantar profundo (evita que el pie colapse hacia adentro en la sentadilla).",
    dosificacion: "3 series por lado x 8 repeticiones controladas. Tempo 2-1-1-1.",
    tecnica: [
      "Coloca una mini-banda elástica de bucle alrededor de ambos metatarsos mientras estás sentado con la espalda recta.",
      "Mantén un pie totalmente anclado en el suelo para que sirva como punto fijo de resistencia estable.",
      "Realiza un movimiento de eversión (llevar la punta del pie hacia afuera) con el tobillo opuesto, sosteniendo la contracción elástica lateral un segundo.",
    ],
    video: null,
    groupVideo: "ankle",
  },
  {
    id: 24,
    block: 8,
    name: "Control Excéntrico y Movilización para Tendinopatía de Aquiles",
    altName: null,
    zones: ["tobillo"],
    equipment: ["mancuerna"],
    media: [],
    enfoque: "Descompresión del tendón de Aquiles y fortalecimiento del sóleo (manejo preventivo contra la rigidez severa provocada por el tacón del calzado de halterofilia, vital para mantener una dorsiflexión profunda y saludable sin dolor al recibir la barra).",
    dosificacion: "3 series por pierna x 8 repeticiones muy lentas. Tempo 4-2-1-0.",
    tecnica: [
      "Párate apoyado en un solo pie de manera unilateral sobre una superficie inclinada, un slant board o una mancuerna colocada en el suelo.",
      "Desciende tu talón de forma lenta por debajo de la línea horizontal del pie durante 4 segundos para de esta manera elongar profundamente el tendón.",
      "Sostén la posición de estiramiento estático abajo dos segundos antes de recuperar la postura de manera asistida o concéntrica.",
    ],
    video: null,
    groupVideo: "ankle",
  },
  {
    id: 25,
    block: 8,
    name: "Descenso de Talón Unilateral con Déficit en Step",
    altName: "Deficit Single-Leg Achilles Drop",
    zones: ["tobillo"],
    equipment: ["ninguno"],
    media: [],
    enfoque: "Tendón de Aquiles, fascia plantar y rango de dorsiflexión extendido.",
    dosificacion: "3 series por pierna x 12 repeticiones. Tempo 3-2-1-0.",
    tecnica: [
      "Párate sobre el borde de un step estable dejando la mitad trasera del pie (el talón) completamente suspendida en el aire.",
      "Flexiona o suspende la pierna libre hacia adelante para que no interfiera en el rango de movimiento lineal.",
      "Baja el talón activamente por debajo del nivel de la plataforma en 3 segundos, sostén la elongación profunda dos segundos abajo y evita rebotar.",
    ],
    video: null,
    groupVideo: "ankle",
  },
  {
    id: 26,
    block: 8,
    name: "Estabilización Unilateral sobre Almohadilla con Transferencia Dinámica de Pesa Rusa",
    altName: null,
    zones: ["tobillo"],
    equipment: ["pesa_rusa"],
    media: [],
    enfoque: "Mecanorreceptores, propiocepción reactiva balística y estabilidad lumbo-pélvica (esencial para strongman al caminar con yugo o maletas, y vital para bloquear con total firmeza la base de sustentación unilateral en los desplantes del envión o yerk).",
    dosificacion: "3 series por pierna x 30-45 segundos o 12-16 atrapes. Ritmo constante.",
    tecnica: [
      "Quédate de pie a una sola pierna sobre una almohadilla de equilibrio o bloque de espuma inestable colocado en el suelo, fijando la cadera.",
      "Sostén una pesa rusa ligera o mediana con una mano e inicia un movimiento pasándola por enfrente de tu cuerpo hacia la otra mano.",
      "Suelta sutilmente la pesa en el aire y cáchala con la mano contraria de manera rítmica e intencional; el impacto inercial imprevisto obligará a tus ligamentos a ajustarse reactivamente.",
    ],
    video: null,
    groupVideo: "ankle",
  },
  {
    id: 27,
    block: 8,
    name: "Elevación de Talones con Déficit en Step",
    altName: "Deficit Calf Raise",
    zones: ["tobillo"],
    equipment: ["ninguno"],
    media: [],
    enfoque: "Gastrocnemio, sóleo y elasticidad reactiva del tendón (vital para maximizar la triple extensión explosiva en el jalón de arranque o cargada, y para absorber el impacto de forma segura al recibir el peso abajo).",
    dosificacion: "3 a 4 series x 10 a 12 repeticiones estrictas. Tempo 3-1-1-1.",
    tecnica: [
      "Párate en el borde de tu step de forma estable, permitiendo que los talones caigan por debajo de la línea horizontal en máximo estiramiento posterior.",
      "Eleva tu cuerpo con una fuerza concéntrica potente hasta quedar completamente en puntas de pie sobre la plataforma, apretando el músculo.",
      "Aprieta las pantorrillas un segundo arriba en la cúspide, de esta manera frenando tu bajada excéntrica durante 3 segundos controlados.",
    ],
    video: null,
    groupVideo: "ankle",
  },
  // ---------------------------------------------------------------
  // BLOQUE 9 · Base y Fascia Plantar (ejercicio 28)
  // ---------------------------------------------------------------
  {
    id: 28,
    block: 9,
    name: "Estiramiento de Fascia Plantar y Flexores de los Dedos",
    altName: "Toe Squat",
    zones: ["pie"],
    equipment: ["ninguno"],
    media: [],
    enfoque: "Fascia plantar, flexores del dedo gordo y tendón de Aquiles (el secreto para mejorar el enraizamiento y la transferencia elástica del pie contra el suelo).",
    dosificacion: "2 a 3 series x 45 a 60 segundos de sostén isométrico continuo.",
    tecnica: [
      "Colócate arrodillado sobre la colchoneta o mat de yoga de manera simétrica y controlada.",
      "Flexiona tus dedos activamente hacia adelante, asegurándote de que todos los metatarsos apoyen firmemente en el suelo.",
      "Baja tu cadera de forma suave sentándote sobre tus talones para de esta manera proyectar el peso sobre los dedos, optimizando la base de sustentación profunda.",
    ],
    video: null,
  },
  // ---------------------------------------------------------------
  // BLOQUE 10 · Circuito de Activación Elástica en Suelo (Banda) (ejercicios 29–34)
  // ---------------------------------------------------------------
  {
    id: 29,
    block: 10,
    name: "Sostén y Flexión Overhead Supina con Banda",
    altName: null,
    zones: ["hombro"],
    equipment: ["banda"],
    media: [],
    tecnica: [
      "Recuéstate boca arriba (supino) en el suelo con la cabeza apuntando directamente hacia el punto bajo de agarre de tu banda elástica.",
      "Estira tus brazos por completo hacia atrás sosteniendo la banda con ambas manos bajo una tensión elástica constante overhead.",
      "Empuja con fuerza la espalda baja plana contra el suelo para de esta manera evitar arquear la columna lumbar durante todo el sostén.",
    ],
    video: null,
    groupVideo: "circuito",
  },
  {
    id: 30,
    block: 10,
    name: "Extensión Torácica Prona Overhead con Banda",
    altName: null,
    zones: ["hombro", "toracico"],
    equipment: ["banda"],
    media: [
      { type: "image", src: "assets/exercises/ex30.jpg", alt: "Extensión torácica prona overhead con banda" },
    ],
    tecnica: [
      "Acuéstate boca abajo (prono) en el suelo mirando de frente hacia el punto de agarre de la banda elástica.",
      "Sostén la banda con los brazos totalmente estirados por encima de tu cabeza conservando la tensión lineal estricta.",
      "Realiza una pequeña tracción elevando de forma controlada el pecho y tus brazos del suelo, extendiendo únicamente la columna torácica.",
    ],
    video: null,
    groupVideo: "circuito",
  },
  {
    id: 31,
    block: 10,
    name: "Apertura en T Prona con Banda",
    altName: "Prone Band T-Pull",
    zones: ["hombro"],
    equipment: ["banda"],
    media: [],
    tecnica: [
      "Adopta la posición boca abajo en el suelo, estirando tus brazos al frente mientras sostienes la banda elástica.",
      "Abre los brazos en un plano horizontal hacia los costados hasta de esta manera dibujar una letra T perfecta con tu cuerpo.",
      "Junta tus omóplatos con fuerza (retracción escapular) al final antes de regresar lento frente a la resistencia elástica de la banda.",
    ],
    video: "https://youtube.com/shorts/hv7I2W5YpFk?si=qLXrBiuWMZ5la4C7",
  },
  {
    id: 32,
    block: 10,
    name: "Pullover Supino a Brazos Extendidos",
    altName: null,
    zones: ["hombro", "toracico"],
    equipment: ["banda"],
    media: [],
    tecnica: [
      "Colócate boca arriba en el suelo, iniciando con tus brazos apuntando de manera vertical hacia el techo mientras sostienes la banda.",
      "Con tus codos totalmente bloqueados al 100%, jala la banda elástica hacia abajo dirigiéndola hacia los costados de tus caderas.",
      "Concéntrate en traccionar de forma natural \u201Cestricta\u201D desde las axilas, manteniendo tus hombros completamente planos contra la colchoneta.",
    ],
    video: "https://youtu.be/hTIOuVB1B4g?si=-dns0CXbYntMYIMg",
  },
  {
    id: 33,
    block: 10,
    name: "Remo Prono en W con Banda",
    altName: "Prone W-Row",
    zones: ["hombro"],
    equipment: ["banda"],
    media: [],
    tecnica: [
      "En posición boca abajo en el suelo, estira tus brazos hacia adelante apuntando al punto de agarre de la banda elástica.",
      "Jala la banda flexionando tus codos hacia afuera y abajo, simulando una letra W con tus brazos y el torso.",
      "Mantén tus manos y antebrazos elevados del suelo en todo momento, forzando la rotación externa del manguito rotador.",
    ],
    video: "https://youtube.com/shorts/DWGcJ_YBcN8?si=zhp0WjrYY8C9Hluh",
  },
  {
    id: 34,
    block: 10,
    name: "Tirón Supino al Pecho / Curl Escapular",
    altName: "Supine Row to Chest",
    zones: ["hombro"],
    equipment: ["banda"],
    media: [
      { type: "image", src: "assets/exercises/ex34.jpg", alt: "Tirón supino al pecho / curl escapular" },
    ],
    tecnica: [
      "Acuéstate boca arriba con tus brazos extendidos al frente sosteniendo la banda elástica con un agarre firme.",
      "Jala la banda flexionando los codos y apoyándolos firmemente en el suelo bien pegados a las costillas de forma simétrica.",
      "Lleva tus manos hacia la parte alta de tu pecho mientras de esta manera estabilizas tus escápulas planas contra la colchoneta.",
    ],
    video: null,
    groupVideo: "circuito",
  },
  // ---------------------------------------------------------------
  // BLOQUE 11 · Movilidad Avanzada del Tren Superior con Rig y Bandas (ejercicios 35–37)
  // ---------------------------------------------------------------
  {
    id: 35,
    block: 11,
    name: "Estiramiento de Flexión de Hombro y Apertura Torácica contra Rig",
    altName: null,
    zones: ["hombro", "toracico"],
    equipment: ["rig"],
    media: [
      { type: "image", src: "assets/exercises/ex35.jpg", alt: "Estiramiento de flexión de hombro contra rig" },
    ],
    enfoque: "Flexión máxima de hombro, dorsal ancho y extensión torácica profunda (el secreto para mejorar la verticalidad del bloqueo o lockout overhead, evitar que la barra se vaya hacia adelante en el arranque y garantizar una base indestructible para sostener un Log Press o un Axle Press pesado en Strongman).",
    dosificacion: "3 series x 45 a 60 segundos de sostén estático-activo continuo.",
    tecnica: [
      "Colócate de pie frente al poste vertical de tu rack o rig, posicionando las palmas de las manos elevadas en la columna o poste principal.",
      "Estira tus brazos hacia arriba por completo (puedes usar un rodillo intermedio o foam roller y ruédalo sobre la columna para ganar rango de forma controlada y progresiva).",
      "Proyecta tu pecho y axilas hacia adelante y hacia abajo, de esta manera manteniendo tu abdomen y glúteos compactos para no arquear la zona lumbar.",
    ],
    video: null,
  },
  {
    id: 36,
    block: 11,
    name: "Dislocaciones de Hombro con Banda",
    altName: "Band Shoulder Dislocates",
    zones: ["hombro"],
    equipment: ["banda"],
    media: [],
    enfoque: "Movilidad glenohumeral, pectoral mayor y deltoides anterior (básico para mantener los hombros saludables ante el estrés del press de banca o levantamientos olímpicos).",
    dosificacion: "3 series x 10 a 12 repeticiones continuas. Tempo 3-0-3-0.",
    tecnica: [
      "Ponte en posición de media rodilla bloqueando tu pelvis y sostén la banda elástica con un agarre amplio al frente.",
      "Inicia el movimiento llevando los brazos extendidos hacia arriba y por encima de tu cabeza de forma circular, dejando que la banda ceda.",
      "Completa la trayectoria bajando controlado atrás de tu espalda hasta tocar tus glúteos, y regresa de frente igual de lento.",
    ],
    video: "https://youtu.be/th1CUY49IzY?si=Zj8nNzcjt593skAk",
  },
  {
    id: 37,
    block: 11,
    name: "Estiramiento de Rotación Interna Detrás de la Espalda con Banda",
    altName: null,
    zones: ["hombro"],
    equipment: ["banda", "rig"],
    media: [
      { type: "image", src: "assets/exercises/ex37-a.jpg", alt: "Rotación interna con banda contra rig — vista 1" },
      { type: "image", src: "assets/exercises/ex37-b.jpg", alt: "Rotación interna con banda contra rig — vista 2" },
    ],
    enfoque: "Rotación interna, cápsula posterior del hombro y deltoides anterior (esencial para evitar pellizcos articulares al recibir la barra sobre los hombros).",
    dosificacion: "3 series x 45 segundos de sostén o 10 repeticiones controladas.",
    tecnica: [
      "Posiciónate arrodillado de espaldas al poste de donde ancles la banda elástica y coloca tus manos detrás de la espalda baja sosteniendo la banda elástica enganchada a tus codos.",
      "Usa la tracción elástica de la banda para guiar e intensificar de forma totalmente segura tu rango de rotación interna.",
      "Aproxima tus codos hacia el frente del cuerpo manteniendo la columna totalmente erguida y sin de esta manera colapsar la postura.",
    ],
    video: null,
  },
];

/* SECCIÓN — ENLACES DE VIDEO COMPARTIDOS POR BLOQUE
   Reels/shorts de referencia que cubren varios ejercicios de un mismo
   bloque en el manual original (Grip Armor, Tobillo, Circuito). */

const GROUP_VIDEOS = {
  grip: "https://www.instagram.com/reel/DZT9kP9yD8j/?igsh=MXNxN2IwcHpka2xvbA==",
  ankle: "https://www.instagram.com/reel/DXmv_A7CHxG/?igsh=YjFpbnBlaWN1eGNh",
  circuito: "https://www.instagram.com/reel/DZK5cBfoZA8/?igsh=bTJ3ZXZneWlxa3l6",
};


/* SECCIÓN — NOTAS DE DOSIFICACIÓN GRUPAL
   Texto introductorio para bloques cuya dosificación se explica a nivel
   de circuito completo en lugar de por ejercicio individual. */

const BLOCK_INTRO = {
  10: {
    text: "Este bloque dinámico utiliza bandas elásticas para activar la postura y estabilidad del tren superior a través de tiempos bajo tensión continuos. El secreto absoluto aquí es ejecutar cada movimiento entre 1.5 y 2 veces más lento de lo normal para potenciar el control excéntrico tendinoso.",
    items: [
      "Para prevención de lesiones / enfriamiento: ejecuta de 2 a 4 series completas del circuito, trabajando cada ejercicio entre 20 y 30 segundos continuos. Descansa 60 segundos entre series.",
      "Para calentamiento articular previo: realiza 1 o 2 series fluidas trabajando cada ejercicio entre 15 y 20 segundos continuos con el mínimo de descanso posible.",
    ],
  },
};

/* SECCIÓN — PLANIFICACIÓN Y REGLAS DE ORO
   Contenido de referencia de las páginas 3–5 del manual: las tres
   opciones de dosificación semanal y las reglas fundamentales. */

const PLANNING = {
  intro: "Para integrar este manual sin interferir con el volumen de los levantamientos principales (Sentadilla, Peso Muerto, Banca, Arranque, Envión), utiliza estas tres opciones de dosificación en tu planeación:",
  options: [
    {
      title: "Opción 1 · Microdosis Diaria Integrada",
      subtitle: "Preparación de la sesión pesada",
      text: "Mete únicamente de 2 a 3 ejercicios específicos como preparación articular antes de ir a la tarima, o como trabajo correctivo al finalizar el entrenamiento de fuerza principal.",
      bullets: [
        "Días de Empuje / Soporte Overhead (Arranque, Jerk, Banca): rotación externa sentado, elevación Powell o Trap-3. Estabiliza el manguito rotador y asegura un soporte overhead inquebrantable.",
        "Días de Tracción / Cadena Posterior (Sentadilla, Peso Muerto, Jalones): Couch Stretch, Sentadilla ATG Split o Curl Jefferson. Descomprime el psoas, libera caderas, gana dorsiflexión y flexibiliza la cadena posterior.",
      ],
    },
    {
      title: "Opción 2 · Bloques Divididos",
      subtitle: "Post-entrenamiento especializado",
      text: "Divide el manual en dos bloques independientes para trabajarlos al final de las sesiones de fuerza, evitando acumular fatiga central antes de los levantamientos principales:",
      bullets: [
        "Tren Superior (lunes y jueves): Bloques 1, 2, 3, 4, 10 y 11 — énfasis en hombros, antebrazos para el agarre de gancho/hookgrip, y apertura torácica.",
        "Tren Inferior y Zona Media (martes y viernes): Bloques 5, 6, 7, 8 y 9 — énfasis en tobillos, tendón de Aquiles, suelo pélvico y descompresión lumbar.",
      ],
    },
    {
      title: "Opción 3 · Sesión Completa de Reset Estructural",
      subtitle: "Días de descanso activo / PFG",
      text: "Se ejecuta de 1 a 2 veces por semana en los días de preparación física general o descanso activo. Debes realizar los ejercicios de manera secuencial, respetando estrictamente los descansos (60 a 90 segundos). Funciona como una descompresión vertebral masiva y estimulación neuromuscular que acelera la recuperación de los entrenamientos pesados.",
      bullets: [],
    },
  ],
};

const RULES = [
  {
    title: "El tempo es sagrado",
    subtitle: "Fase excéntrica acentuada",
    text: "La ganancia de estabilidad estructural y la salud del tendón ocurren frenando la bajada de forma lenta y controlada, sosteniendo la posición más incómoda abajo (isometría). Si aceleras la fase de bajada para rebotar, anulas de inmediato la adaptación profunda del tejido conectivo y arriesgas la articulación bajo carga.",
  },
  {
    title: "Rango antes que peso",
    subtitle: "Progresión estricta",
    text: "Las indicaciones de carga iniciales (como el 5% o 10% del peso corporal o de la barra vacía) son puntos de partida obligatorios. Primero se domina por completo la profundidad articular con técnica perfecta; solo cuando el rango final es controlado por tu sistema nervioso se incrementa el peso.",
  },
  {
    title: "Monitorea el tipo de tensión",
    subtitle: null,
    text: "Buscamos un estímulo de estiramiento e incomodidad muscular intensa bajo carga elástica o de mancuernas. Eso es normal y deseable para generar hipertrofia en elongación. Lo que jamás debes tolerar es un dolor articular agudo, pinchazos o bloqueos secos; si eso pasa, la serie se detiene de inmediato.",
  },
];
