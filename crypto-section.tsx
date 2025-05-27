"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "@/redux/store"
import { fetchCryptos } from "@/redux/features/cryptoSlice"
import { toggleCryptoFavorite } from "@/redux/features/favoritesSlice"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CryptoCard } from "@/components/crypto/crypto-card"
import { Button } from "@/components/ui/button"

export function CryptoSection() {
  const dispatch = useDispatch<AppDispatch>()
  const { coins, loading, error } = useSelector((state: RootState) => state.crypto)
  const favoriteCryptos = useSelector((state: RootState) => state.favorites.cryptos)

  useEffect(() => {
    dispatch(fetchCryptos(favoriteCryptos))
  }, [dispatch, favoriteCryptos])

  const handleToggleFavorite = (cryptoId: string) => {
    dispatch(toggleCryptoFavorite(cryptoId))
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Cryptocurrency</CardTitle>
        <CardDescription>Live prices and 24h changes</CardDescription>
      </CardHeader>
      <CardContent>
        {loading && coins.length === 0 && (
          <div className="flex justify-center items-center h-40">
            <p>Loading cryptocurrency data...</p>
          </div>
        )}

        {error && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-md">
            <p>Error: {error}</p>
          </div>
        )}

        <div className="space-y-4">
          {coins.map((coin) => (
            <CryptoCard
              key={coin.id}
              crypto={coin}
              isFavorite={favoriteCryptos.includes(coin.id)}
              onToggleFavorite={() => handleToggleFavorite(coin.id)}
            />
          ))}
        </div>

        {coins.length === 0 && !loading && (
          <div className="text-center p-4">
            <p className="text-muted-foreground">No cryptocurrencies added yet.</p>
            <Button variant="outline" className="mt-2" onClick={() => handleToggleFavorite("bitcoin")}>
              Add Bitcoin
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

