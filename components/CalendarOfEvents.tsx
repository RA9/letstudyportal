import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react";

// First, let's modify the events array to include descriptions
const events = [
    { date: '2024-11-15', title: 'Application Deadline: Stanford', type: 'deadline', description: 'Final deadline for submitting all application materials to Stanford University.' },
    { date: '2024-11-20', title: 'Virtual Campus Tour', type: 'event', description: 'Online guided tour of the campus facilities and departments.' },
    { date: '2024-11-25', title: 'Scholarship Interview', type: 'interview', description: 'Virtual interview with the scholarship committee.' }
]

export function EventCalendar() {
    const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)

    return (
        <>
            <div className="space-y-4 rounded-lg p-4">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted cursor-pointer"
                        onClick={() => setSelectedEvent(event)}
                    >
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-semibold">
                                {new Date(event.date).getDate()}
                            </span>
                        </div>
                        <div>
                            <h3 className="font-medium">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {new Date(event.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </p>
                        </div>
                        <div className={`ml-auto px-2 py-1 rounded text-xs ${event.type === 'deadline' ? 'bg-destructive/20 text-destructive' :
                                event.type === 'interview' ? 'bg-primary/20 text-primary' :
                                    event.type === 'event' ? 'bg-secondary text-secondary-foreground' :
                                        'bg-secondary/20 text-secondary'
                            }`}>
                            {event.type}
                        </div>
                    </div>
                ))}
            </div>

            <Dialog open={selectedEvent !== null} onOpenChange={() => setSelectedEvent(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{selectedEvent?.title}</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                        <p className="text-muted-foreground">
                            Date: {selectedEvent && new Date(selectedEvent.date).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                        <p className="mt-2 capitalize">Type: {selectedEvent?.type}</p>
                        <p className="mt-4 text-sm text-muted-foreground">{selectedEvent?.description}</p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}