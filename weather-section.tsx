"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "@/redux/store"
import { fetchWeatherData } from "@/redux/features/weatherSlice"
import { toggleCityFavorite } from "@/redux/features/favoritesSlice"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WeatherCard } from "@/components/weather/weather-card"

export function WeatherSection() {
  const dispatch = useDispatch<AppDispatch>()
  const { cities, loading, error } = useSelector((state: RootState) => state.weather)
  const favoriteCities = useSelector((state: RootState) => state.favorites.cities)

  useEffect(() => {
    dispatch(fetchWeatherData(favoriteCities))

    // Refresh weather data every 5 minutes
    const interval = setInterval(
      () => {
        dispatch(fetchWeatherData(favoriteCities))
      },
      5 * 60 * 1000,
    )

    return () => clearInterval(interval)
  }, [dispatch, favoriteCities])

  const handleToggleFavorite = (cityName: string) => {
    dispatch(toggleCityFavorite(cityName))
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Weather</CardTitle>
        <CardDescription>Current weather conditions for your favorite cities</CardDescription>
      </CardHeader>
      <CardContent>
        {loading && cities.length === 0 && (
          <div className="flex justify-center items-center h-40">
            <p>Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-md">
            <p>Error: {error}</p>
          </div>
        )}

        <div className="space-y-4">
          {cities.map((city) => (
            <WeatherCard
              key={city.cityName}
              city={city}
              isFavorite={favoriteCities.includes(city.cityName)}
              onToggleFavorite={() => handleToggleFavorite(city.cityName)}
            />
          ))}
        </div>

        {cities.length === 0 && !loading && (
          <div className="text-center p-4">
            <p className="text-muted-foreground">No cities added yet.</p>
            <Button variant="outline" className="mt-2" onClick={() => handleToggleFavorite("New York")}>
              Add New York
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

