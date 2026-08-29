/* =====================================================================
   HEVY-INTEGRATION.JS — Integración con la API de Hevy
   Configuración, vocabulario y funciones de referencia para sincronizar
   la biblioteca de ejercicios con una cuenta de Hevy.

   Documentación oficial: https://api.hevyapp.com/docs/
   Requiere cuenta Hevy Pro. La API key se genera en:
   https://hevy.com/settings?developer

   Autenticación: header propio "api-key" (formato uuid) en cada
   petición — esta API no usa "Authorization: Bearer".
   ===================================================================== */

/* SECCIÓN — CONFIGURACIÓN */
const HEVY_API_CONFIG = {
  baseUrl: "https://api.hevyapp.com/v1",
  apiKey: "",
};

/* SECCIÓN — VOCABULARIO DE HEVY */
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

/* SECCIÓN — MAPEO ZONAS / EQUIPO (data.js) → VOCABULARIO HEVY */
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

/* SECCIÓN — FUNCIONES DE REFERENCIA (inactivas)
   Endpoint principal: GET /v1/exercise_templates
   Respuesta: { page, page_count, exercise_templates: [ExerciseTemplate] }
   ExerciseTemplate: { id, title, type, primary_muscle_group,
                        secondary_muscle_groups[], is_custom } */

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

/* SECCIÓN — OTROS ENDPOINTS DISPONIBLES
   GET  /v1/workouts                 — historial de entrenamientos
   GET  /v1/workouts/count
   GET  /v1/routines                 — rutinas guardadas
   GET  /v1/exercise_history/{id}    — progreso histórico de un ejercicio
   GET  /v1/body_measurements        — medidas corporales */
