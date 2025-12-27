import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { contestByIdQuery } from "@/sanity/lib/queries"

export default async function ContestDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // awaited params 
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
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-capri mb-6">{contest.name}</h1>
        <p className="text-slate-400 mb-4">
          Platform: {contest.platform || "-"} | Date:{" "}
          {contest.date ? new Date(contest.date).toLocaleDateString() : "-"}
        </p>

        {contest.protocols?.map((protocol: any) => (
          <div key={protocol._key} className="mb-12">
            <h2 className="text-xl font-semibold text-slate-200 mb-4">
              {protocol.protocolName}
            </h2>
            <div className="overflow-x-auto rounded-lg border border-slate-800 shadow-lg">
              <table className="min-w-full text-left">
                <thead className="bg-slate-800 text-slate-200">
                  <tr>
                    <th className="px-6 py-4">Severity</th>
                    <th className="px-6 py-4">Issue</th>
                    <th className="px-6 py-4">Platform</th>
                    <th className="px-6 py-4">Protocol</th>
                    <th className="px-6 py-4">Contest</th>
                    <th className="px-6 py-4">Report</th>
                    <th className="px-6 py-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {protocol.findings?.map((f: any) => (
                    <tr
                      key={f._key}
                      className="border-t border-slate-700 hover:bg-slate-900/40 transition"
                    >
                      <td className="px-6 py-4">{f.severity}</td>
                      <td className="px-6 py-4 font-medium">{f.title}</td>
                      <td className="px-6 py-4">{f.platform}</td>
                      <td className="px-6 py-4">{f.protocol}</td>
                      <td className="px-6 py-4">{f.contest}</td>
                      <td className="px-6 py-4">
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
                      <td className="px-6 py-4">
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






