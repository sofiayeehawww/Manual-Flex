/* =============================================================================
 *  INTEGRACIÓN FUTURA — HEVY API   (archivo inactivo — no se importa todavía)
 * =============================================================================
 *
 *  Este archivo NO está incluido en index.html a propósito. Es solo la
 *  estructura lista para cuando decidas conectar la biblioteca de ejercicios
 *  con tu cuenta de Hevy. Cuando quieras activarlo:
 *    1. Pega tu API key abajo en HEVY_API_CONFIG.apiKey (o mejor, cárgala
 *       desde una variable de entorno / backend propio — nunca la subas
 *       a un repositorio público).
 *    2. Agrega <script src="hevy-integration.js"></script> en index.html,
 *       justo antes de app.js.
 *
 *  Documentación oficial: https://api.hevyapp.com/docs/
 *  Requiere una cuenta Hevy Pro. Genera tu API key en:
 *  https://hevy.com/settings?developer
 *
 *  NOTA DE AUTENTICACIÓN (revisado en su spec pública): la API de Hevy
 *  NO usa "Authorization: Bearer …". Usa un header propio llamado
 *  exactamente "api-key" (formato uuid) en cada petición.
 * ============================================================================= */

const HEVY_API_CONFIG = {
  baseUrl: "https://api.hevyapp.com/v1",
  // 🔑 Pega aquí tu API key de Hevy cuando quieras activar esto:
  apiKey: "",
};

/* -----------------------------------------------------------------------
   Vocabulario de Hevy (tal como aparece en su documentación pública).
   Te sirve para mapear tus ZONES/EQUIPMENT actuales (data.js) al
   vocabulario que espera su API si más adelante sincronizas ejercicios.
----------------------------------------------------------------------- */

const HEVY_MUSCLE_GROUPS = [
  "abdominals", "shoulders", "biceps", "triceps", "forearms",
  "quadriceps", "hamstrings", "calves", "glutes", "abductors",
  "adductors", "lats", "upper_back", "traps", "lower_back",
  "chest", "cardio", "neck", "full_body", "other",
];

const HEVY_EQUIPMENT_CATEGORIES = [
  "none", "barbell", "dumbbell", "kettlebell", "machine",
  "plate", "resistance_band", "suspension", "other",
];

// Sugerencia de mapeo — ajústalo si al integrar ves que otro grupo encaja mejor.
const ZONE_TO_HEVY_MUSCLE = {
  hombro: ["shoulders", "traps"],
  toracico: ["chest", "upper_back"],
  antebrazo: ["forearms"],
  columna: ["lower_back", "abdominals"],
  cadera: ["glutes", "abductors", "adductors"],
  rodilla: ["quadriceps", "hamstrings"],
  tobillo: ["calves"],
  pie: ["other"],
};

const EQUIPMENT_TO_HEVY_CATEGORY = {
  mancuerna: "dumbbell",
  barra: "barbell",
  cable: "machine",
  banda: "resistance_band",
  banco: "none",
  rig: "suspension",
  ninguno: "none",
  pesa_rusa: "kettlebell",
};

/* -----------------------------------------------------------------------
   Llamadas de ejemplo (NO ACTIVAS — comentadas a propósito).
   Endpoint clave para tu caso: GET /v1/exercise_templates
   Respuesta: { page, page_count, exercise_templates: [ExerciseTemplate] }
   ExerciseTemplate: { id, title, type, primary_muscle_group,
                        secondary_muscle_groups[], is_custom }
----------------------------------------------------------------------- */

// async function fetchHevyExerciseTemplates(page = 1, pageSize = 100) {
//   const res = await fetch(
//     `${HEVY_API_CONFIG.baseUrl}/exercise_templates?page=${page}&pageSize=${pageSize}`,
//     { headers: { "api-key": HEVY_API_CONFIG.apiKey } }
//   );
//   if (!res.ok) throw new Error(`Hevy API error: ${res.status}`);
//   const data = await res.json();
//   return data.exercise_templates;
// }

// async function fetchHevyUserInfo() {
//   const res = await fetch(`${HEVY_API_CONFIG.baseUrl}/user/info`, {
//     headers: { "api-key": HEVY_API_CONFIG.apiKey },
//   });
//   if (!res.ok) throw new Error(`Hevy API error: ${res.status}`);
//   return res.json();
// }

// Otros endpoints disponibles en la API pública de Hevy, por si más adelante
// quieres ir más allá de la biblioteca de ejercicios:
//   GET  /v1/workouts                 — historial de entrenamientos
//   GET  /v1/workouts/count
//   GET  /v1/routines                 — rutinas guardadas
//   GET  /v1/exercise_history/{id}    — progreso histórico de un ejercicio
//   GET  /v1/body_measurements        — medidas corporales
