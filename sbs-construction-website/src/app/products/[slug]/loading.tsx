export default function ProductLoading() {
  return (
    <div className="bg-sbs-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 h-5 w-32 animate-pulse rounded bg-sbs-gray-800" />
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="aspect-[4/3] animate-pulse rounded-2xl bg-sbs-gray-800" />
          <div className="space-y-6">
            <div className="h-4 w-24 animate-pulse rounded bg-sbs-gray-800" />
            <div className="h-10 w-3/4 animate-pulse rounded bg-sbs-gray-800" />
            <div className="h-4 w-32 animate-pulse rounded bg-sbs-gray-800" />
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-4 w-full animate-pulse rounded bg-sbs-gray-800" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
