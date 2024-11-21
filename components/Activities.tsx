"use client"
import React from 'react';

interface Activity {
    id: number;
    user: string;
    action: string;
    timestamp: string;
    details: string;
}

const Activities: React.FC = () => {
    // Mock data - replace with actual data from your API/database
    const activities: Activity[] = [
        {
            id: 1,
            user: "John Doe",
            action: "Completed Quiz",
            timestamp: "2024-01-20 14:30",
            details: "Score: 95/100"
        },
        // Add more mock data here...
    ];

    return (
        <div className="w-full p-4">
            <h2 className="text-xl font-semibold mb-4">Latest Activities</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">User</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Action</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Time</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Details</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {activities.slice(0, 10).map((activity) => (
                            <tr key={activity.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-900">{activity.user}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{activity.action}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{activity.timestamp}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{activity.details}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Activities;