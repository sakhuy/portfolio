import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Activity = {
  id: number;
  name: string;
  distance: string;
  moving_time: number;
  start_date: string;
};

async function getAllStravaActivities(): Promise<Activity[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/strava`, {
      cache: 'no-store' 
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching all activities:", error);
    return [];
  }
}

export default async function AllRunsPage() {
  const activities = await getAllStravaActivities();

  return (
    <div className="w-full min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link href="/#activity" className="inline-flex items-center gap-2 text-emerald-600 hover:underline mb-8">
            <ArrowLeft size={18} />
            Kembali ke Halaman Utama
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">All My Runs</h1>
          <p className="text-xl text-gray-600 mt-2">A complete log of my recent running activities.</p>
        </div>

        <div className="space-y-4">
          {activities.length > 0 ? (
            activities.map((activity) => (
              // Ini adalah komponen kartu yang sama seperti di halaman utama
              <a key={activity.id} href={`https://www.strava.com/activities/${activity.id}`} target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-emerald-700">{activity.name}</p>
                    <p className="text-sm text-gray-500">{activity.start_date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{activity.distance} km</p>
                    <p className="text-sm text-gray-500">{activity.moving_time} min</p>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p className="text-center text-gray-500">Could not load runs.</p>
          )}
        </div>
      </div>
    </div>
  );
}