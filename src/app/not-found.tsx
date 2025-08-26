import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
