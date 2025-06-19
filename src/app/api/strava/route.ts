// app/api/strava/route.ts

import { NextResponse } from "next/server";

// ... (Interface StravaActivity dan variabel lainnya tetap sama)
interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  type: string;
  start_date: string;
}

const client_id = process.env.STRAVA_CLIENT_ID;
const client_secret = process.env.STRAVA_CLIENT_SECRET;
const refresh_token = process.env.STRAVA_REFRESH_TOKEN;

const TOKEN_ENDPOINT = "https://www.strava.com/api/v3/oauth/token";
const ACTIVITIES_ENDPOINT = "https://www.strava.com/api/v3/athlete/activities";

async function getAccessToken() {
  // ... (Fungsi getAccessToken tidak perlu diubah)
  const body = JSON.stringify({
    client_id,
    client_secret,
    refresh_token,
    grant_type: "refresh_token",
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  if (!response.ok) {
    // Tambahkan log detail jika otentikasi gagal
    const errorData = await response.json();
    console.error("Strava Auth Error Details:", errorData);
    throw new Error("Failed to get access token from Strava");
  }

  const data = await response.json();
  return data.access_token;
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch(`${ACTIVITIES_ENDPOINT}?per_page=100&page=1`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 3600 },
    });

    // === BAGIAN YANG DIPERBARUI UNTUK DEBUGGING ===
    if (!response.ok) {
      // Jika respons tidak "ok", kita log isi error dari Strava
      const errorData = await response.json();
      console.error("Strava API Error Details:", errorData);
      throw new Error(
        `Failed to fetch activities from Strava. Status: ${response.status}`
      );
    }
    // ===========================================

    const activities: StravaActivity[] = await response.json();

    const recentRuns = activities
      .filter((activity) => activity.type === "Run")
      .map((activity) => ({
        id: activity.id,
        name: activity.name,
        distance: (activity.distance / 1000).toFixed(2),
        moving_time: Math.floor(activity.moving_time / 60),
        start_date: new Date(activity.start_date).toLocaleDateString("id-ID", {
          day: 'numeric', month: 'long', year: 'numeric'
        }),
      }));

    return NextResponse.json(recentRuns);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    console.error("Strava API Error:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}