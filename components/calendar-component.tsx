'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'

export default function CalendarComponent({ eventId }: { eventId: string }) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleSubmit = () => {
    if (date && time) {
      router.push(`/contact/${eventId}?date=${format(date, 'yyyy-MM-dd')}&time=${time}`)
    }
  }

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border mb-4"
      />
      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      >
        <option value="">Select a time</option>
        {/* Add more time slots as needed */}
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
      </select>
      <Button onClick={handleSubmit} disabled={!date || !time}>
        Continue
      </Button>
    </div>
  )
}