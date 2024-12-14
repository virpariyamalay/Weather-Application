'use client'

import { useState } from 'react'
import WeatherForm from '../components/WeatherForm'
import WeatherInfo from '../components/WeatherInfo'
import { WeatherData } from '../types/weather'

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Weather App</h1>
        <WeatherForm setWeatherData={setWeatherData} />
        {weatherData && <WeatherInfo weatherData={weatherData} />}
      </div>
    </div>
  )
}

