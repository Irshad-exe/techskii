'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Something went wrong</h2>
            <p className="text-slate-600 mb-8">Please try refreshing the page.</p>
            <button
              onClick={reset}
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-navy-900 via-blue-600 to-teal-500 text-white"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
