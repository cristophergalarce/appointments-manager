import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="w-full py-5 px-10 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">Agendamientos</h1>
          <Badge variant="secondary">Proyecto Portfolio</Badge>
        </div>
        <Button variant="outline">
          <MessageCircle className="mr-2 w-4 h-4" />
          Feedback
        </Button>
      </header>
      <main className="flex-grow p-10">
        {children}
      </main>
    </>
  );
}