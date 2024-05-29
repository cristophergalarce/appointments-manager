"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

const Confirmation = () => {
  return (
    <div className="max-w-[540px] mx-auto space-y-10">
      <Card className="text-center">
        <CardHeader className="p-10">
          <CalendarIcon className="h-12 w-12 mx-auto text-gray-500" />
          <CardTitle className="text-2xl font-bold mt-4">Agendamiento realizado con éxito</CardTitle>
          <p className="text-gray-500 mt-2">
            Te enviamos una invitación con todos los detalles a tu email (email ingresado)
          </p>
        </CardHeader>
        <CardContent className="space-y-4 text-left p-10 pt-0">
          <div>
            <p>Evento:</p>
            <p>Una cita de maravilla</p>
          </div>
          <div>
            <p>Cuándo:</p>
            <p>Lunes, 23 de enero de 2023</p>
            <br />
            <p>De 5:00 pm a 6:00 pm horas (hora de verano de Chile)</p>
          </div>
          <div>
            <p>Dónde:</p>
            <p>Online (el detalle lo verás en tu email)</p>
          </div>
          <div>
            <p>Organiza:</p>
            <p>Alice Wonder</p>
            <br />
            <p>awonderfromcristring@gmail.com</p>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">¿Necesitas hacer un cambio?</p>
            <div className="flex space-x-4 justify-center mt-2">
              <Button variant="outline">Reagendar</Button>
              <Button variant="outline">Anular</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-center mt-10">
        <p className="text-gray-500 mb-4">
          Tú también puedes recibir agendamientos creando eventos gratis en este proyecto
        </p>
        <Button variant="default">
          Crear evento
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;