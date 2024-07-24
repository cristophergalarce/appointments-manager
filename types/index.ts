// types/index.ts

// Tipos que reflejan la estructura de la base de datos Supabase
export interface DBEvent {
    id: number;
    host_name: string;
    event_name: string;
    event_duration: string;
    event_price: string | null;
    event_location: string;
    event_description: string | null;
}

export interface DBReservation {
    id?: number; // Opcional porque será asignado por la base de datos
    event_id: number;
    participant_name: string;
    participant_email: string;
    scheduled_date: string;
    scheduled_time: string;
}

// Tipos para usar en la aplicación
export interface Event {
    id: number;
    hostName: string;
    eventName: string;
    eventDuration: string;
    eventPrice: string | null;
    eventLocation: string;
    eventDescription: string | null;
}

export interface Reservation {
    id?: number;
    eventId: number;
    participantName: string;
    participantEmail: string;
    scheduledDate: string;
    scheduledTime: string;
    event?: Event;  // Opcional: para incluir los detalles del evento si es necesario
}

// Funciones de mapeo de DB a App
export function dbEventToEvent(dbEvent: DBEvent): Event {
    return {
        id: dbEvent.id,
        hostName: dbEvent.host_name,
        eventName: dbEvent.event_name,
        eventDuration: dbEvent.event_duration,
        eventPrice: dbEvent.event_price,
        eventLocation: dbEvent.event_location,
        eventDescription: dbEvent.event_description,
    };
}

export function dbReservationToReservation(dbReservation: DBReservation): Reservation {
    return {
        id: dbReservation.id,
        eventId: dbReservation.event_id,
        participantName: dbReservation.participant_name,
        participantEmail: dbReservation.participant_email,
        scheduledDate: dbReservation.scheduled_date,
        scheduledTime: dbReservation.scheduled_time,
    };
}

// Funciones de mapeo de App a DB
export function eventToDBEvent(event: Event): DBEvent {
    return {
        id: event.id,
        host_name: event.hostName,
        event_name: event.eventName,
        event_duration: event.eventDuration,
        event_price: event.eventPrice,
        event_location: event.eventLocation,
        event_description: event.eventDescription,
    };
}

export function reservationToDBReservation(reservation: Reservation): DBReservation {
    return {
        id: reservation.id,
        event_id: reservation.eventId,
        participant_name: reservation.participantName,
        participant_email: reservation.participantEmail,
        scheduled_date: reservation.scheduledDate,
        scheduled_time: reservation.scheduledTime,
    };
}

export interface SupabaseReservation extends DBReservation {
    id: number;
}