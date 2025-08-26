import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL || ''}${path}`
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export function isArrayOfFile(files: unknown): files is File[] {
  const isArray = Array.isArray(files)
  if (!isArray) return false
  return files.every(file => file instanceof File)
}

export function formatBytes(
  bytes: number,
  decimals = 0,
  sizeType: "accurate" | "normal" = "normal"
) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"]
  if (bytes === 0) return "0 Byte"
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === "accurate" ? accurateSizes[i] ?? "Bytest" : sizes[i] ?? "Bytes"
  }`
}

export function formatPrice(
  price: number | string,
  currency: "USD" | "EUR" | "GBP" | "BDT" = "USD",
  notation: "compact" | "engineering" | "scientific" | "standard" = "standard"
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
  }).format(Number(price))
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove non-word chars
    .replace(/\s+/g, "-") // replace spaces with -
    .replace(/--+/g, "-") // replace multiple - with single -
    .trim()
}

export function unslugify(str: string) {
  return str.replace(/-/g, " ").replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
  })
}

export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
  })
}

export function toSentenceCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function isMacOs() {
  if (typeof window === "undefined") return false
  return window.navigator.userAgent.includes("Mac")
}

export function isWindows() {
  if (typeof window === "undefined") return false
  return window.navigator.userAgent.includes("Windows")
}

export function isLinux() {
  if (typeof window === "undefined") return false
  return window.navigator.userAgent.includes("Linux")
}

export function isMobile() {
  if (typeof window === "undefined") return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  )
}

export function isDesktop() {
  return !isMobile()
}

export function isDevelopment() {
  return process.env.NODE_ENV === "development"
}

export function isProduction() {
  return process.env.NODE_ENV === "production"
}

export function isTest() {
  return process.env.NODE_ENV === "test"
}

export function isClient() {
  return typeof window !== "undefined"
}

export function isServer() {
  return !isClient()
}

export function getBaseUrl() {
  if (isServer()) {
    return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  }
  return window.location.origin
}

export function getCurrentUrl() {
  if (isServer()) {
    return getBaseUrl()
  }
  return window.location.href
}

export function getCurrentPath() {
  if (isServer()) {
    return "/"
  }
  return window.location.pathname
}

export function getQueryParam(key: string) {
  if (!isClient()) return null
  const params = new URLSearchParams(window.location.search)
  return params.get(key)
}

export function setQueryParam(key: string, value: string) {
  if (!isClient()) return
  const url = new URL(window.location.href)
  url.searchParams.set(key, value)
  window.history.pushState({}, "", url.toString())
}

export function removeQueryParam(key: string) {
  if (!isClient()) return
  const url = new URL(window.location.href)
  url.searchParams.delete(key)
  window.history.pushState({}, "", url.toString())
}

export function debounce<T extends (...args: any[]) => any>(
  callback: T,
  wait: number
) {
  let timeoutId: number | null = null
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      window.clearTimeout(timeoutId)
    }
    timeoutId = window.setTimeout(() => {
      callback(...args)
    }, wait)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  callback: T,
  limit: number
) {
  let inThrottle: boolean
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      callback.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj }
  for (const key of keys) {
    delete result[key]
  }
  return result
}

export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function generateId() {
  return Math.random().toString(36).substring(2, 9)
}

export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "")
  } catch (error) {
    console.error("Parsing error on", { value })
    return undefined
  }
}

export function isEmpty(value: any): boolean {
  if (value === null || value === undefined) return true
  if (typeof value === 'string' || Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}
