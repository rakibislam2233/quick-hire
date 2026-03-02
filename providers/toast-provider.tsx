"use client";
import { ToastContainer } from "@/components/ui/toast";
import { getToasts, subscribeToToasts } from "@/lib/toast";
import { ReactNode, useEffect, useState } from "react";

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState(getToasts());

  useEffect(() => {
    const unsubscribe = subscribeToToasts(() => {
      setToasts(getToasts());
    });

    return unsubscribe;
  }, []);

  return (
    <>
      {children}
      <ToastContainer toasts={toasts} onRemove={(id) => {
      }} />
    </>
  );
}
