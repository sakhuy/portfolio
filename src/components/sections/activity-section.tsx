"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, MapPin, Clock, Zap, Calendar, Trophy, Target } from "lucide-react"

// Tipe data untuk aktivitas
type Activity = {
  id: number
  name: string
  distance: string
  moving_time: number
  start_date: string
  average_speed?: number
  total_elevation_gain?: number
  type?: string
}

// Tipe untuk statistik
type RunStats = {
  totalRuns: number
  totalDistance: number
  totalTime: number
  averagePace: number
}

export default function ActivitySection() {
  const [allActivities, setAllActivities] = useState<Activity[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [stats, setStats] = useState<RunStats | null>(null)
  const [selectedFilter, setSelectedFilter] = useState<"all" | "recent" | "long">("all")

  const itemsPerPage = 4

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch("/api/strava")
        if (!res.ok) {
          throw new Error("Failed to fetch activities from API")
        }
        const data: Activity[] = await res.json()
        setAllActivities(data)

        // Calculate stats
        const totalDistance = data.reduce((sum, activity) => sum + Number.parseFloat(activity.distance), 0)
        const totalTime = data.reduce((sum, activity) => sum + activity.moving_time, 0)
        const averagePace = totalTime / totalDistance || 0

        setStats({
          totalRuns: data.length,
          totalDistance: Math.round(totalDistance * 10) / 10,
          totalTime: Math.round(totalTime),
          averagePace: Math.round(averagePace * 10) / 10,
        })
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
        setError(errorMessage)
        console.error("Error fetching activities:", errorMessage)
      } finally {
        setIsLoading(false)
      }
    }

    fetchActivities()
  }, [])

  // Filter activities based on selected filter
  const getFilteredActivities = () => {
    switch (selectedFilter) {
      case "recent":
        return allActivities.slice(0, 10)
      case "long":
        return allActivities.filter((activity) => Number.parseFloat(activity.distance) > 5)
      default:
        return allActivities
    }
  }

  const filteredActivities = getFilteredActivities()
  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentActivities = filteredActivities.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleFilterChange = (filter: "all" | "recent" | "long") => {
    setSelectedFilter(filter)
    setCurrentPage(1)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  }

  if (isLoading) {
    return (
      <section id="activity" className="w-full py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-red-primary">
              <div className="w-6 h-6 border-2 border-red-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-lg font-medium">Loading recent runs from Strava...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="activity" className="w-full py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-600 font-medium">Could not load running activities</p>
              <p className="text-red-500 text-sm mt-1">Please try again later</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="activity" className="w-full py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Recent Runs</h2>
          <div className="h-1 w-24 mx-auto bg-red-primary rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tracking my running journey with Strava. Every step counts towards the goal.
          </p>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in-up delay-200">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 rounded-lg">
                  <Trophy className="w-5 h-5 text-red-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalRuns}</p>
                  <p className="text-sm text-gray-600">Total Runs</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 rounded-lg">
                  <Target className="w-5 h-5 text-red-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalDistance}</p>
                  <p className="text-sm text-gray-600">Total KM</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 rounded-lg">
                  <Clock className="w-5 h-5 text-red-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{formatTime(stats.totalTime)}</p>
                  <p className="text-sm text-gray-600">Total Time</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 rounded-lg">
                  <Zap className="w-5 h-5 text-red-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.averagePace}</p>
                  <p className="text-sm text-gray-600">Avg Pace</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-8 animate-fade-in-up delay-300">
          <button
            onClick={() => handleFilterChange("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedFilter === "all"
                ? "bg-red-primary text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-primary"
            }`}
          >
            All Runs
          </button>
          <button
            onClick={() => handleFilterChange("recent")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedFilter === "recent"
                ? "bg-red-primary text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-primary"
            }`}
          >
            Recent
          </button>
          <button
            onClick={() => handleFilterChange("long")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedFilter === "long"
                ? "bg-red-primary text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-primary"
            }`}
          >
            Long Runs (5K+)
          </button>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px] animate-fade-in-up delay-400">
          {currentActivities.length > 0 ? (
            currentActivities.map((activity, index) => (
              <a
                key={activity.id}
                href={`https://www.strava.com/activities/${activity.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-primary transition-colors mb-1">
                      {activity.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {formatDate(activity.start_date)}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-red-primary">{activity.distance}</p>
                    <p className="text-sm text-gray-500">kilometers</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{formatTime(activity.moving_time)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">View on Strava</span>
                  </div>
                </div>

                {/* Progress bar for distance */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-red-primary to-red-600 h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.min((Number.parseFloat(activity.distance) / 10) * 100, 100)}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Distance progress</p>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <Trophy className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">No running activities found</p>
                <p className="text-gray-400 text-sm mt-1">Try adjusting your filter or check back later</p>
              </div>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12 animate-fade-in-up delay-500">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-red-50 hover:text-red-primary hover:border-red-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-200 transition-all duration-200"
              aria-label="Previous Page"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === page
                      ? "bg-red-primary text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-red-50 hover:text-red-primary hover:border-red-200"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-red-50 hover:text-red-primary hover:border-red-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-200 transition-all duration-200"
              aria-label="Next Page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
