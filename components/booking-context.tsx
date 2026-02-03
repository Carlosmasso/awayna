"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

interface BookingContextType {
  isOpen: boolean
  openBooking: (data?: { destination?: string; dateId?: string }) => void
  closeBooking: () => void
  bookingData?: { destination?: string; dateId?: string }
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [bookingData, setBookingData] = useState<{ destination?: string; dateId?: string }>()

  const openBooking = (data?: { destination?: string; dateId?: string }) => {
    setBookingData(data)
    setIsOpen(true)
  }

  const closeBooking = () => {
    setIsOpen(false)
    setBookingData(undefined)
  }

  return (
    <BookingContext.Provider value={{ isOpen, openBooking, closeBooking, bookingData }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error("useBooking debe ser usado dentro de BookingProvider")
  }
  return context
}
