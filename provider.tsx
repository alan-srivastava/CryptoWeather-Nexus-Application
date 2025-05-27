"use client"

import type React from "react"

import { Provider } from "react-redux"
import { store } from "./store"
import { useEffect } from "react"
import { setupWebSockets } from "@/lib/websocket"

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Setup WebSocket connections when the app loads
    const cleanup = setupWebSockets(store)

    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return <Provider store={store}>{children}</Provider>
}

