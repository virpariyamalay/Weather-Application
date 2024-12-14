import { WeatherData } from '../types/weather'
import { SunIcon, MoonIcon, CloudRainIcon, WindIcon } from 'lucide-react'

interface WeatherInfoProps {
  weatherData: WeatherData
}

export default function WeatherInfo({ weatherData }: WeatherInfoProps) {
  const isDay = weatherData.is_day === 1

  return (
    <div className="mt-8 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Current Weather</h2>
        {isDay ? <SunIcon className="text-yellow-500" /> : <MoonIcon className="text-indigo-600" />}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InfoItem label="Temperature" value={`${weatherData.temperature_2m}°C`} />
        <InfoItem label="Feels Like" value={`${weatherData.apparent_temperature}°C`} />
        <InfoItem label="Rain" value={`${weatherData.rain} mm`} icon={<CloudRainIcon className="text-blue-500" />} />
        <InfoItem label="Wind Speed" value={`${weatherData.wind_speed_10m} km/h`} icon={<WindIcon className="text-gray-600" />} />
      </div>
    </div>
  )
}

function InfoItem({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="bg-gray-100 p-3 rounded-lg">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="text-lg font-semibold text-gray-800 flex items-center gap-2">
        {icon}
        {value}
      </div>
    </div>
  )
}

