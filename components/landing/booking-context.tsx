"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { BookingModal } from "./booking-modal";

interface BookingContextType {
  openBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBookingModal = () => setIsModalOpen(true);
  const closeBookingModal = () => setIsModalOpen(false);

  return (
    <BookingContext.Provider value={{ openBookingModal }}>
      {children}
      <BookingModal isOpen={isModalOpen} onClose={closeBookingModal} />
    </BookingContext.Provider>
  );
}
