"use client"

import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { AlertTriangle, TrendingUp } from "lucide-react"

export function NotificationDropdown() {
  const notifications = useSelector((state: RootState) => state.notifications.items)

  return (
    <div className="absolute right-0 z-10 mt-2 w-80">
      <div className="bg-popover text-popover-foreground rounded-md border shadow-md">
        <div className="p-4">
          <h3 className="font-medium">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            {notifications.length === 0 ? "No new notifications" : `You have ${notifications.length} new notifications`}
          </p>
        </div>
        <div className="max-h-[300px] overflow-auto">
          {notifications.map((notification, index) => (
            <div key={index} className="border-t px-4 py-3 flex items-start gap-3">
              {notification.type === "price_alert" ? (
                <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
              )}
              <div>
                <p className="font-medium text-sm">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.message}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(notification.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          {notifications.length === 0 && (
            <div className="px-4 py-6 text-center text-muted-foreground">
              <p>No notifications yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

