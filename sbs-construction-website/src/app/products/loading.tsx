export default function ProductsLoading() {
  return (
    <div className="bg-sbs-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="h-10 w-64 animate-pulse rounded bg-sbs-gray-800" />
          <div className="mt-4 h-4 max-w-2xl animate-pulse rounded bg-sbs-gray-800/80" />
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="lg:w-64 lg:shrink-0">
            <div className="rounded-xl border border-sbs-gray-800 bg-sbs-gray-900 p-6">
              <div className="h-5 w-24 animate-pulse rounded bg-sbs-gray-800" />
              <div className="mt-4 space-y-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-10 animate-pulse rounded-lg bg-sbs-gray-800" />
                ))}
              </div>
            </div>
          </aside>
          <div className="min-w-0 flex-1">
            <div className="mb-6 h-4 w-32 animate-pulse rounded bg-sbs-gray-800/80" />
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
      </div>
    </div>
  );
}
