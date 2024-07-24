import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabase } from '@/lib/supabaseClient'
import fs from 'fs'
import path from 'path'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { reservationId } = await req.json()

    // Obtener los datos de la reserva de Supabase
    const { data: reservation, error } = await supabase
      .from('reservations')
      .select('*, events(*)')
      .eq('id', reservationId)
      .single()

    if (error) throw error

    const event = reservation.events
    const eventDate = new Date(reservation.date)

    // Leer la plantilla del email
    const emailTemplate = fs.readFileSync(
      path.join(process.cwd(), 'emailTemplates', 'confirmationEmail.html'),
      'utf8'
    )

    // Reemplazar los placeholders con los datos reales
    const emailContent = emailTemplate
      .replace('{{eventName}}', event.event_name)
      .replace('{{eventDate}}', eventDate.toLocaleDateString())
      .replace('{{eventTime}}', eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
      .replace('{{eventLocation}}', 'Online (el detalle lo verás en tu email)') // Ajusta esto según tus necesidades
      .replace('{{hostName}}', event.host_name)
      .replace('{{participantName}}', reservation.participant_name)
      .replace('{{participantEmail}}', reservation.participant_email)

    // Enviar el email usando Resend
    const data = await resend.emails.send({
      from: 'Appointments App <onboarding@resend.dev>',
      to: reservation.participant_email,
      subject: 'Confirmación de tu reserva',
      html: emailContent
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}