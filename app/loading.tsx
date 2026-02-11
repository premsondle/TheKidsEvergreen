export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mb-4"></div>
        <h2 className="text-2xl font-bold text-gray-800">Loading...</h2>
        <p className="text-gray-600 mt-2">The Kids Evergreen</p>
      </div>
    </div>
  );
}
