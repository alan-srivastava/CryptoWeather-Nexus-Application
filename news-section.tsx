"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "@/redux/store"
import { fetchNews } from "@/redux/features/newsSlice"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsCard } from "@/components/news/news-card"

export function NewsSection() {
  const dispatch = useDispatch<AppDispatch>()
  const { items, loading, error } = useSelector((state: RootState) => state.news)

  useEffect(() => {
    dispatch(fetchNews())

    // Refresh news data every 30 minutes
    const interval = setInterval(
      () => {
        dispatch(fetchNews())
      },
      30 * 60 * 1000,
    )

    return () => clearInterval(interval)
  }, [dispatch])

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Crypto News</CardTitle>
        <CardDescription>Latest cryptocurrency headlines</CardDescription>
      </CardHeader>
      <CardContent>
        {loading && items.length === 0 && (
          <div className="flex justify-center items-center h-40">
            <p>Loading news...</p>
          </div>
        )}

        {error && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-md">
            <p>Error: {error}</p>
          </div>
        )}

        <div className="space-y-4">
          {items.map((item, index) => (
            <NewsCard key={index} news={item} />
          ))}
        </div>

        {items.length === 0 && !loading && (
          <div className="text-center p-4">
            <p className="text-muted-foreground">No news available.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

