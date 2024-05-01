// app/schedule/contact.tsx
"use client"
import React, { useState } from 'react';
import { supabase } from '@/supabaseClient';

export default function ContactForm({ selectedDate }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase
            .from('reservations')
            .insert([{ name, email, date: selectedDate }]);

        if (error) {
            console.error('Error saving contact info:', error);
        } else {
            setSubmitted(true);
            // Aquí puedes añadir lógica para enviar el email con Mailjet
            fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Email sent successfully', data);
                })
                .catch(error => {
                    console.error('Error sending email', error);
                });
        }
    };

    if (submitted) {
        return <p>Gracias por tu reserva, te hemos enviado un correo de confirmación.</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Ingresa tus datos de contacto</h1>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Tu nombre completo"
                required
            />
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
            />
            <button type="submit">Confirmar Reserva</button>
        </form>
    );
}
