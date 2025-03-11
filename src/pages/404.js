
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-background">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="mb-4 text-2xl font-medium">Page Not Found</h2>
      <p className="mb-8 text-center text-muted-foreground">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="px-4 py-2 text-white transition-colors rounded bg-primary hover:bg-primary/90">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
