export default function ProductsLoading() {
  return (
    <div className="bg-sbs-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 h-10 w-64 animate-pulse rounded bg-sbs-gray-800" />
        <div className="mb-4 h-4 w-48 animate-pulse rounded bg-sbs-gray-800" />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-sbs-gray-800 bg-sbs-gray-900">
              <div className="aspect-[4/3] animate-pulse bg-sbs-gray-800" />
              <div className="space-y-3 p-6">
                <div className="h-3 w-24 animate-pulse rounded bg-sbs-gray-800" />
                <div className="h-5 w-3/4 animate-pulse rounded bg-sbs-gray-800" />
                <div className="h-4 w-full animate-pulse rounded bg-sbs-gray-800" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-sbs-gray-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
