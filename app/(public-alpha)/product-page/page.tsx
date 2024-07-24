import { supabase } from '@/lib/supabaseClient'
import Link from 'next/link'

export default async function Home() {
  const { data: events } = await supabase.from('events').select('*')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events?.map((event) => (
          <Link href={`/calendar-available/${event.id}`} key={event.id}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{event.event_name}</h2>
              <p className="text-gray-600">Hosted by: {event.host_name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}