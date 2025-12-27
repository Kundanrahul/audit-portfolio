import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { contestByIdQuery } from "@/sanity/lib/queries"

export default async function ContestDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  let contest: any
  try {
    contest = await client.fetch(contestByIdQuery, { id })
  } catch {
    notFound()
  }

  if (!contest) {
    notFound()
  }

  return (
    <main className="bg-slate-900 text-slate-100 font-hacker min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Contest Title */}
        <div className="w-full flex justify-center mb-6"> 
          <div className="bg-slate-800/20 border border-slate-700 rounded-md px-6 py-3 flex justify-center items-center">
           <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-capri animate-glow text-center">
             {contest.name} 
             </h1> 
             </div>
          </div>

        {/* Meta Info */}
        <p className="text-xs sm:text-sm lg:text-base text-slate-400 mb-3 sm:mb-4">
          Platform: {contest.platform || "-"} | Date:{" "}
          {contest.date ? new Date(contest.date).toLocaleDateString() : "-"}
        </p>

        {contest.protocols?.map((protocol: any) => (
          <div key={protocol._key} className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 mb-3 sm:mb-4">
              {protocol.protocolName}
            </h2>

            {/* Responsive Table */}
            <div className="overflow-x-auto rounded-lg border border-slate-800 shadow-lg">
              <table className="min-w-full text-left text-xs sm:text-sm lg:text-base">
                <thead className="bg-slate-800 text-slate-200">
                  <tr>
                    <th className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">Severity</th>
                    <th className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">Issue</th>
                    <th className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">Platform</th>
                    <th className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">Protocol</th>
                    <th className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">Contest</th>
                    <th className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">Report</th>
                    <th className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {protocol.findings?.map((f: any) => (
                    <tr
                      key={f._key}
                      className="border-t border-slate-700 hover:bg-slate-900/40 transition"
                    >
                      <td className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">{f.severity}</td>
                      <td className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 font-medium">{f.title}</td>
                      <td className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">{f.platform}</td>
                      <td className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">{f.protocol}</td>
                      <td className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">{f.contest}</td>
                      <td className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">
                        {f.pocLink ? (
                          <a
                            href={f.pocLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-capri underline"
                          >
                            Report
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">
                        {f.date ? new Date(f.date).toLocaleDateString() : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}






