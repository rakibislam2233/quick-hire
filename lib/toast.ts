"use client";

import { ToastType } from "@/components/ui/toast";

// Global toast state
let toasts: Array<{
  id: string;
  message: string;
  type: ToastType;
}> = [];

let listeners: Array<() => void> = [];

// Subscribe to toast changes
export function subscribeToToasts(callback: () => void) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter(listener => listener !== callback);
  };
}

// Get current toasts
export function getToasts() {
  return toasts;
}

// Add a new toast
export function addToast(message: string, type: ToastType) {
  const id = Date.now().toString();
  const newToast = { id, message, type };
  toasts = [...toasts, newToast];
  notifyListeners();
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    removeToast(id);
  }, 3000);
}

// Remove a toast
export function removeToast(id: string) {
  toasts = toasts.filter(toast => toast.id !== id);
  notifyListeners();
}

// Notify all listeners
function notifyListeners() {
  listeners.forEach(listener => listener());
}

// Convenience functions
export const toast = {
  success: (message: string) => addToast(message, "success"),
  error: (message: string) => addToast(message, "error"),
  warning: (message: string) => addToast(message, "warning"),
};
