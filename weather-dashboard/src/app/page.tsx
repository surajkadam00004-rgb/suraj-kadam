'use client'

import { useState, useEffect } from 'react'
import { fetchWeatherByCity, fetchWeatherByCoordinates, fetchForecast, getWeatherIcon, WeatherData, ForecastData } from '@/lib/weather'
import { Search, MapPin, Wind, Droplets, Eye, Gauge, Sun, Moon } from 'lucide-react'
import toast from 'react-hot-toast'

export default function WeatherDashboard() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [forecast, setForecast] = useState<ForecastData[]>([])
  const [loading, setLoading] = useState(false)
  const [searchCity, setSearchCity] = useState('')
  const [favorites, setFavorites] = useState<string[]>(['London', 'New York', 'Tokyo'])

  useEffect(() => {
    getUserLocation()
  }, [])

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          await loadWeather(latitude, longitude)
        },
        () => {
          loadWeatherByCity('London')
        }
      )
    }
  }

  const loadWeather = async (lat: number, lon: number) => {
    setLoading(true)
    try {
      const weatherData = await fetchWeatherByCoordinates(lat, lon)
      setWeather(weatherData)
      
      const forecastData = await fetchForecast(lat, lon)
      setForecast(forecastData)
      
      toast.success(`Weather loaded for ${weatherData.city}`)
    } catch (error) {
      toast.error('Failed to load weather')
    } finally {
      setLoading(false)
    }
  }

  const loadWeatherByCity = async (city: string) => {
    setLoading(true)
    try {
      const weatherData = await fetchWeatherByCity(city)
      setWeather(weatherData)
      
      const forecastData = await fetchForecast(weatherData.latitude, weatherData.longitude)
      setForecast(forecastData)
      
      setSearchCity('')
      toast.success(`Weather loaded for ${weatherData.city}`)
    } catch (error) {
      toast.error('City not found')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchCity.trim()) {
      loadWeatherByCity(searchCity)
    }
  }

  const addToFavorites = () => {
    if (weather && !favorites.includes(weather.city)) {
      setFavorites([...favorites, weather.city])
      toast.success(`Added ${weather.city} to favorites`)
    }
  }

  const removeFavorite = (city: string) => {
    setFavorites(favorites.filter(fav => fav !== city))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Weather Dashboard</h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-2 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-white/60 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for a city..."
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 backdrop-blur text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-white/30 hover:bg-white/40 backdrop-blur rounded-lg font-semibold text-white transition-all"
            >
              Search
            </button>
          </form>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin">
              <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full"></div>
            </div>
            <p className="text-white mt-4">Loading weather data...</p>
          </div>
        ) : weather ? (
          <>
            {/* Current Weather */}
            <div className="bg-white/20 backdrop-blur rounded-3xl p-8 md:p-12 mb-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5" />
                    <h2 className="text-3xl font-bold">{weather.city}, {weather.country}</h2>
                  </div>
                  <p className="text-white/80 mb-8">Last updated: just now</p>
                  <div className="flex items-center gap-4">
                    {getWeatherIcon(weather.icon)}
                    <div>
                      <div className="text-6xl font-bold">{weather.temperature}°C</div>
                      <p className="text-xl text-white/80">{weather.description}</p>
                      <p className="text-white/70">Feels like {weather.feelsLike}°C</p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Wind className="w-5 h-5" />
                      <span className="text-white/70">Wind Speed</span>
                    </div>
                    <p className="text-2xl font-bold">{weather.windSpeed} m/s</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="w-5 h-5" />
                      <span className="text-white/70">Humidity</span>
                    </div>
                    <p className="text-2xl font-bold">{weather.humidity}%</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-5 h-5" />
                      <span className="text-white/70">Visibility</span>
                    </div>
                    <p className="text-2xl font-bold">{weather.visibility} km</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Gauge className="w-5 h-5" />
                      <span className="text-white/70">Pressure</span>
                    </div>
                    <p className="text-2xl font-bold">{weather.pressure} hPa</p>
                  </div>
                </div>
              </div>

              {/* Sun Times */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                <div className="flex items-center gap-3">
                  <Sun className="w-6 h-6" />
                  <div>
                    <p className="text-white/70">Sunrise</p>
                    <p className="text-xl font-semibold">{weather.sunrise}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Moon className="w-6 h-6" />
                  <div>
                    <p className="text-white/70">Sunset</p>
                    <p className="text-xl font-semibold">{weather.sunset}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={addToFavorites}
                className="mt-6 w-full bg-white/30 hover:bg-white/40 px-4 py-2 rounded-lg font-semibold transition-all"
              >
                ⭐ Add to Favorites
              </button>
            </div>

            {/* 5-Day Forecast */}
            {forecast.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">5-Day Forecast</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {forecast.map((day, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur rounded-xl p-4 text-white text-center hover:bg-white/30 transition-all">
                      <p className="font-semibold mb-3">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                      <div className="flex justify-center mb-3">
                        {getWeatherIcon(day.icon)}
                      </div>
                      <p className="text-sm text-white/80 mb-2">{day.description}</p>
                      <div className="flex justify-center gap-2">
                        <span className="font-bold">{day.temp_max}°</span>
                        <span className="text-white/60">{day.temp_min}°</span>
                      </div>
                      <p className="text-xs text-white/70 mt-2">💧 {day.humidity}%</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : null}

        {/* Favorites */}
        {favorites.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Favorite Cities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {favorites.map((city) => (
                <button
                  key={city}
                  onClick={() => loadWeatherByCity(city)}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur rounded-lg p-4 text-white font-semibold transition-all group"
                >
                  <p className="mb-2">{city}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFavorite(city)
                    }}
                    className="text-xs text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Remove
                  </button>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
