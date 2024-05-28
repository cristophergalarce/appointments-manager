import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const Catalogue = () => {
  const services = [
    { name: "Demo 45 min: Cómo recibir reservas en tu negocio", duration: "45m", price: "Gratis" },
    { name: "Demo 45 min: Cómo recibir reservas en tu negocio", duration: "45m", price: "Gratis" },
    { name: "Demo 45 min: Cómo recibir reservas en tu negocio", duration: "45m", price: "Gratis" },
    { name: "Demo 45 min: Cómo recibir reservas en tu negocio", duration: "45m", price: "Gratis" },
    // Más servicios...
  ];

  return (
    <>
      <div className="max-w-5xl mx-auto flex">
        <div className="flex flex-col items-left w-80">
          <Avatar className="rounded-full">
            <AvatarImage src="/avatar-cri.png" />
            <AvatarFallback>CR</AvatarFallback>
          </Avatar>
          <h2 className='text-lg font-semibold text-gray-500'>Cristopher Galarce</h2>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          {services.map(service => (
            <Card key={service.name} className="p-4">
              <h3>{service.name}</h3>
              <Badge variant="secondary">{service.duration}</Badge>
              <p>{service.price}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalogue;
