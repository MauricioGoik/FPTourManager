export type TourEstado = 'activo' | 'planificado' | 'completado';

export interface Actividad {
  hora: string;
  desc: string;
  icon: string;
}

export interface DiaItinerario {
  dia: string;
  resumen: string;
  actividades: Actividad[];
}

export interface DocumentoTour {
  nombre: string;
  estado: 'ok' | 'warning';
}

export interface Profesor {
  nombre: string;
  rol: string;
  iniciales: string;
}

export interface Tour {
  id: number;
  nombre: string;
  destino: string;
  emoji: string;
  gradiente: string;
  fechas: string;
  estado: TourEstado;
  grupo: string;
  alumnos: number;
  presupuesto: string;
  profesores: Profesor[];
  documentos: DocumentoTour[];
  itinerario: DiaItinerario[];
}

export const TOURS: Tour[] = [
  {
    id: 1,
    nombre: 'Viaje a Londres 2025',
    destino: 'Londres, Reino Unido',
    emoji: '🇬🇧',
    gradiente: 'linear-gradient(135deg,#2563eb,#4338ca)',
    fechas: '15 – 22 Jun 2025',
    estado: 'activo',
    grupo: '2º DAM',
    alumnos: 24,
    presupuesto: '1.200 € / alumno',
    profesores: [
      { nombre: 'Carlos Ramírez', rol: 'Responsable', iniciales: 'CR' },
      { nombre: 'Ana López',      rol: 'Acompañante', iniciales: 'AL' },
    ],
    documentos: [
      { nombre: 'Itinerario definitivo v3.pdf',    estado: 'ok'      },
      { nombre: 'Autorizaciones firmadas (22/24)', estado: 'warning' },
      { nombre: 'Seguro de viaje colectivo.pdf',   estado: 'ok'      },
      { nombre: 'Lista de alumnos.xlsx',           estado: 'ok'      },
    ],
    itinerario: [
      {
        dia: 'Lunes 15 Jun', resumen: 'Salida y llegada a Londres',
        actividades: [
          { hora: '06:30', desc: 'Concentración en el centro educativo',   icon: '📍' },
          { hora: '08:15', desc: 'Vuelo MAD → LHR (Iberia IB3170)',        icon: '✈️' },
          { hora: '10:30', desc: 'Llegada a Heathrow — Terminal 5',        icon: '🛬' },
          { hora: '12:00', desc: 'Traslado en metro al hotel (Zone 1)',    icon: '🚇' },
          { hora: '14:00', desc: 'Check-in Hotel Premier Inn Southwark',   icon: '🏨' },
          { hora: '16:00', desc: 'Paseo libre por el South Bank',          icon: '🌉' },
          { hora: '20:00', desc: 'Cena en grupo — restaurante reservado',  icon: '🍽️' },
        ],
      },
      {
        dia: 'Martes 16 Jun', resumen: 'Visitas a empresas tecnológicas',
        actividades: [
          { hora: '09:00', desc: 'Visita empresa: Thoughtworks London',        icon: '🏢' },
          { hora: '11:30', desc: "Charla: 'Scrum en proyectos reales'",        icon: '💬' },
          { hora: '13:30', desc: 'Almuerzo libre (dietas 8 €/alumno)',         icon: '🥗' },
          { hora: '15:30', desc: 'Visita empresa: Capgemini UK HQ',            icon: '🏢' },
          { hora: '18:00', desc: 'Tiempo libre — Covent Garden',               icon: '🛍️' },
          { hora: '21:00', desc: 'Regreso al hotel. Toque de queda: 23:00 h', icon: '🏨' },
        ],
      },
      {
        dia: 'Miércoles 17 Jun', resumen: 'Cultura y tecnología',
        actividades: [
          { hora: '09:30', desc: 'Natural History Museum (visita guiada)', icon: '🦕' },
          { hora: '13:00', desc: 'Almuerzo libre en zona del museo',       icon: '🥗' },
          { hora: '15:00', desc: 'Tech City / Silicon Roundabout tour',    icon: '💻' },
          { hora: '18:30', desc: 'Regreso al hotel',                       icon: '🏨' },
          { hora: '21:00', desc: 'Reunión de grupo — resumen del día',     icon: '📋' },
        ],
      },
    ],
  },
  {
    id: 2,
    nombre: 'Intercambio Berlín',
    destino: 'Berlín, Alemania',
    emoji: '🇩🇪',
    gradiente: 'linear-gradient(135deg,#475569,#0f172a)',
    fechas: '1 – 8 Jul 2025',
    estado: 'planificado',
    grupo: '2º ASIR',
    alumnos: 20,
    presupuesto: '980 € / alumno',
    profesores: [
      { nombre: 'Miguel Torres', rol: 'Responsable', iniciales: 'MT' },
      { nombre: 'Elena Pérez',   rol: 'Acompañante', iniciales: 'EP' },
    ],
    documentos: [
      { nombre: 'Borrador itinerario v1.docx',  estado: 'warning' },
      { nombre: 'Presupuesto provisional.xlsx', estado: 'ok'      },
    ],
    itinerario: [],
  },
  {
    id: 3,
    nombre: 'Visita Tech Barcelona',
    destino: 'Barcelona, España',
    emoji: '🇪🇸',
    gradiente: 'linear-gradient(135deg,#f43f5e,#f97316)',
    fechas: '10 Jun 2025',
    estado: 'completado',
    grupo: '1º DAW',
    alumnos: 18,
    presupuesto: '95 € / alumno',
    profesores: [{ nombre: 'Sara Molina', rol: 'Responsable', iniciales: 'SM' }],
    documentos: [
      { nombre: 'Informe post-visita.pdf',    estado: 'ok' },
      { nombre: 'Fotos grupo (Google Drive)', estado: 'ok' },
    ],
    itinerario: [],
  },
];
