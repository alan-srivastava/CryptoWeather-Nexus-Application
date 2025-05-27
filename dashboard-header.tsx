"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { NotificationDropdown } from "@/components/notification-dropdown"
import { useState } from "react"

export function DashboardHeader() {
  const pathname = usePathname()
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            ModernDash
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/weather/new-york"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname.startsWith("/weather") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Weather
            </Link>
            <Link
              href="/crypto/bitcoin"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname.startsWith("/crypto") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Crypto
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </Button>
            {showNotifications && <NotificationDropdown />}
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

