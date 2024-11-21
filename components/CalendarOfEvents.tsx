const events = [
    { date: '2024-11-15', title: 'Application Deadline: Stanford', type: 'deadline' },
    { date: '2024-11-20', title: 'Virtual Campus Tour', type: 'event' },
    { date: '2024-11-25', title: 'Scholarship Interview', type: 'interview' }
]

export function EventCalendar() {
    return (
        <div className="space-y-4">
            {events.map((event, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">
                            {new Date(event.date).getDate()}
                        </span>
                    </div>
                    <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-gray-500">
                            {new Date(event.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </p>
                    </div>
                    <div className={`ml-auto px-2 py-1 rounded text-xs ${event.type === 'deadline' ? 'bg-red-100 text-red-700' :
                            event.type === 'interview' ? 'bg-blue-100 text-blue-700' :
                                'bg-green-100 text-green-700'
                        }`}>
                        {event.type}
                    </div>
                </div>
            ))}
        </div>
    )
}