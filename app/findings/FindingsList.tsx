"use client"

import { useState } from "react"

export default function FindingsList({ findings }: { findings: any[] }) {
  const [visibleCount, setVisibleCount] = useState(5)
  const [severityFilter, setSeverityFilter] = useState<string>("All")

  const filteredFindings =
    severityFilter === "All"
      ? findings
      : findings.filter((f: any) => f.severity === severityFilter)

  const visibleFindings = filteredFindings.slice(0, visibleCount)
  const hasMore = filteredFindings.length > visibleCount

  return (
    <main className="w-full bg-slate-900 text-slate-100 font-hacker px-4 py-10">
<div className="max-w-6xl mx-auto">
{/* heading box */}
<div className="w-full flex justify-center mb-10">
  <div className="bg-slate-800/20 border border-slate-700 rounded-md px-6 py-3 flex justify-center items-center">
    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-capri animate-glow text-center">
      Findings
    </h1>
  </div>
</div>


{/* Severity Filter */}
<div className="mb-6 flex items-center gap-1 sm:gap-2">
  <label
    htmlFor="severity"
    className="font-semibold text-slate-300 text-[10px] sm:text-xs lg:text-sm"
  >
    Severity:
  </label>
  <select
    id="severity"
    value={severityFilter}
    onChange={(e) => {
      setSeverityFilter(e.target.value)
      setVisibleCount(5)
    }}
    className="bg-slate-800 text-slate-200 text-[10px] sm:text-xs lg:text-sm px-1 py-0.5 sm:px-1.5 sm:py-1 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-capri hover:border-capri transition w-auto sm:w-28 lg:w-32"
  >
    <option className="text-[10px] sm:text-xs lg:text-sm" value="All">All</option>
    <option className="text-[10px] sm:text-xs lg:text-sm" value="High">High</option>
    <option className="text-[10px] sm:text-xs lg:text-sm" value="Medium">Medium</option>
    <option className="text-[10px] sm:text-xs lg:text-sm" value="Low">Low</option>
  </select>
</div>

        {/* Table wrapper with horizontal scroll */}
        <div className="w-full overflow-x-auto rounded-lg border border-slate-800 shadow-lg">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-800 text-slate-200">
              <tr>
                <th className="px-4 py-2 whitespace-nowrap">Severity</th>
                <th className="px-4 py-2 whitespace-nowrap">Issue</th>
                <th className="px-4 py-2 whitespace-nowrap">Platform</th>
                <th className="px-4 py-2 whitespace-nowrap">Protocol</th>
                <th className="px-4 py-2 whitespace-nowrap">Contest</th>
                <th className="px-4 py-2 whitespace-nowrap">Report</th>
                <th className="px-4 py-2 whitespace-nowrap">Date</th>
              </tr>
            </thead>
            <tbody>
              {visibleFindings.map((f: any) => (
                <tr
                  key={f._id}
                  className="border-t border-slate-700 hover:bg-slate-900/40 transition"
                >
                  <td className="px-4 py-2 whitespace-nowrap">{f.severity}</td>
                  <td className="px-4 py-2 font-medium whitespace-nowrap">{f.title}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{f.platform}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{f.protocol}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {f.contestLink ? (
                      <a
                        href={f.contestLink}
                        target="_blank"
                        className="text-capri underline"
                      >
                        Contest
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {f.pocLink ? (
                      <a
                        href={f.pocLink}
                        target="_blank"
                        className="text-capri underline"
                      >
                        Report
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {f.date ? new Date(f.date).toLocaleDateString() : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          {hasMore && (
            <button
              onClick={() => setVisibleCount(visibleCount + 5)}
              className="bg-capri text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition shadow-md animate-pulse"
            >
              View More
            </button>
          )}
          {visibleCount > 5 && (
            <button
              onClick={() => setVisibleCount(5)}
              className="border border-capri text-capri font-semibold px-6 py-3 rounded-lg hover:bg-capri hover:text-slate-900 transition shadow-md animate-pulse"
            >
              Collapse Back
            </button>
          )}
        </div>
      </div>
    </main>
  )
}



