import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          href="/"
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold shadow-soft-lg hover:shadow-playful transition-all text-lg"
        >
          🏠 Go Back Home
        </Link>
        <div className="mt-8">
          <p className="text-gray-500">The Kids Evergreen - A Play School</p>
        </div>
      </div>
    </div>
  );
}
