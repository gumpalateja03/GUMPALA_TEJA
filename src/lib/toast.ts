"use client"

import { useToast } from "@/components/ui/use-toast"
import type { ToastProps } from "@/components/ui/toast"

type ToastVariant = "default" | "destructive"

interface Toast extends Omit<ToastProps, "variant"> {
  variant?: ToastVariant;
  className?: string;
}

export function useToaster() {
  const { toast } = useToast()

  const showToast = (title: string, description?: string) => {
    return toast({
      title,
      description,
    } as Toast)
  }

  const success = (title: string, description?: string) => {
    return toast({
      title,
      description,
      variant: "default",
      className: "bg-green-500 text-white"
    } as Toast)
  }

  const error = (title: string, description?: string) => {
    return toast({
      title,
      description,
      variant: "destructive",
    } as Toast)
  }

  return {
    toast: showToast,
    success,
    error,
  }
}

export { toast } from "@/components/ui/use-toast"
