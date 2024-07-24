"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import EventInfo from "@/components/event-info";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { SupabaseReservation, Event, DBReservation } from "@/types";
import { supabase } from "@/lib/supabaseClient";

const Contact: React.FC = () => {
  const [event, setEvent] = useState<Event | null>(null);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [scheduledDate, setScheduledDate] = useState<string | null>(null);
  const [scheduledTime, setScheduledTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const storedEventData = localStorage.getItem('eventData');
    const storedScheduledEventData = localStorage.getItem('scheduledEvent');
    if (storedEventData && storedScheduledEventData) {
      setEvent(JSON.parse(storedEventData));
      const { scheduledDate, scheduledTime } = JSON.parse(storedScheduledEventData);
      setScheduledDate(scheduledDate);
      setScheduledTime(scheduledTime);
    } else {
      router.push('/calendar-available');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (event && email && name && scheduledDate && scheduledTime && !isSubmitting) {
      setIsSubmitting(true);
      const newReservation: DBReservation = {
        event_id: event.id,
        participant_name: name,
        participant_email: email,
        scheduled_date: scheduledDate,
        scheduled_time: scheduledTime,
      };

      try {
        const { data, error } = await supabase
          .from('reservations')
          .insert(newReservation)
          .select()
          .single();

        if (error) throw error;

        if (data) {
          const supabaseReservation = data as SupabaseReservation;
          const confirmedReservation = {
            ...supabaseReservation,
            event: event,
          };
          localStorage.setItem('confirmedReservation', JSON.stringify(confirmedReservation));
          router.push(`/confirmation/${supabaseReservation.id}`);
        } else {
          throw new Error('No se recibió un ID de reserva válido');
        }
      } catch (error) {
        console.error('Error al crear la reserva:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!event || !scheduledDate || !scheduledTime) return <div>Cargando...</div>;

  return (
    <div className="max-w-[801px] mx-auto flex space-x-4">
      <EventInfo
        hostName={event.hostName}
        eventName={event.eventName}
        eventLocation={event.eventLocation}
        eventDuration={event.eventDuration}
        scheduledDate={scheduledDate}
        scheduledTime={scheduledTime}
      />
      <form onSubmit={handleSubmit} className="space-y-4 py-4 px-10">
        <h2 className="text-lg font-semibold">Ingresa tu contacto para agendar</h2>
        <Input
          type="email"
          placeholder="Email"
          className="w-full"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Nombre y Apellido"
          className="w-full"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          required
        />
        <Button type="submit" variant="default" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Agendando...' : 'Agendar'}
        </Button>
        <p className="text-sm text-gray-500">
          Solo usaremos tu contacto para notificarte a ti y a quien organiza el evento sobre tu agendamiento.
        </p>
      </form>
    </div>
  );
};



export default Contact;