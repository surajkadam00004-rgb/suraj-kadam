'use client'

import { useState, useEffect } from 'react'
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge } from 'lucide-react'

export interface WeatherData {
  city: string
  country: string
  temperature: number
  feelsLike: number
  humidity: number
  windSpeed: number
  visibility: number
  pressure: number
  description: string
  icon: string
  sunrise: string
  sunset: string
  uvIndex: number
  latitude: number
  longitude: number
}

export interface ForecastData {
  date: string
  temp_max: number
  temp_min: number
  description: string
  icon: string
  precipitation: number
  humidity: number
  windSpeed: number
}

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const fetchWeatherByCoordinates = async (lat: number, lon: number): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    if (!response.ok) throw new Error('Failed to fetch weather')
    
    const data = await response.json()
    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed),
      visibility: (data.visibility / 1000).toFixed(1),
      pressure: data.main.pressure,
      description: data.weather[0].main,
      icon: data.weather[0].icon,
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      uvIndex: 0,
      latitude: data.coord.lat,
      longitude: data.coord.lon,
    }
  } catch (error) {
    throw new Error('Failed to fetch weather data')
  }
}

export const fetchWeatherByCity = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
    if (!response.ok) throw new Error('City not found')
    
    const data = await response.json()
    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed),
      visibility: (data.visibility / 1000).toFixed(1),
      pressure: data.main.pressure,
      description: data.weather[0].main,
      icon: data.weather[0].icon,
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      uvIndex: 0,
      latitude: data.coord.lat,
      longitude: data.coord.lon,
    }
  } catch (error) {
    throw new Error('Failed to fetch weather data')
  }
}

export const fetchForecast = async (lat: number, lon: number): Promise<ForecastData[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    if (!response.ok) throw new Error('Failed to fetch forecast')
    
    const data = await response.json()
    const dailyForecasts: { [key: string]: ForecastData } = {}

    data.list.forEach((item: any) => {
      const date = new Date(item.dt * 1000).toLocaleDateString()
      if (!dailyForecasts[date]) {
        dailyForecasts[date] = {
          date,
          temp_max: Math.round(item.main.temp_max),
          temp_min: Math.round(item.main.temp_min),
          description: item.weather[0].main,
          icon: item.weather[0].icon,
          precipitation: item.rain?.['3h'] || 0,
          humidity: item.main.humidity,
          windSpeed: Math.round(item.wind.speed),
        }
      }
    })

    return Object.values(dailyForecasts).slice(0, 5)
  } catch (error) {
    throw new Error('Failed to fetch forecast data')
  }
}

export const getWeatherIcon = (iconCode: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    '01d': <Sun className="w-16 h-16 text-yellow-400" />,
    '01n': <Cloud className="w-16 h-16 text-gray-400" />,
    '02d': <Cloud className="w-16 h-16 text-gray-300" />,
    '02n': <Cloud className="w-16 h-16 text-gray-500" />,
    '03d': <Cloud className="w-16 h-16 text-gray-400" />,
    '03n': <Cloud className="w-16 h-16 text-gray-600" />,
    '04d': <Cloud className="w-16 h-16 text-gray-500" />,
    '04n': <Cloud className="w-16 h-16 text-gray-700" />,
    '09d': <CloudRain className="w-16 h-16 text-blue-400" />,
    '09n': <CloudRain className="w-16 h-16 text-blue-600" />,
    '10d': <CloudRain className="w-16 h-16 text-blue-400" />,
    '10n': <CloudRain className="w-16 h-16 text-blue-600" />,
    '11d': <CloudRain className="w-16 h-16 text-purple-500" />,
    '11n': <CloudRain className="w-16 h-16 text-purple-700" />,
    '13d': <Cloud className="w-16 h-16 text-blue-200" />,
    '13n': <Cloud className="w-16 h-16 text-blue-300" />,
    '50d': <Eye className="w-16 h-16 text-gray-300" />,
    '50n': <Eye className="w-16 h-16 text-gray-600" />,
  }
  return iconMap[iconCode] || <Cloud className="w-16 h-16 text-gray-400" />
}
