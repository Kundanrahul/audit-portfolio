"use client"

import Link from "next/link"

export default function ContestsList({ initialContests }: { initialContests: any[] }) {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-100 font-hacker px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {initialContests.map((contest: any) => (
          <section
            key={contest._id}
            className="rounded-lg border border-slate-800 shadow-lg bg-slate-800 p-4"
          >
            <h2 className="text-xl font-semibold text-slate-200 mb-4">
              <Link href={`/contests/${contest._id}`} className="hover:underline text-capri">
                {contest.name}
              </Link>
            </h2>

            {/*preview of protocols */}
            {contest.protocols?.map((protocol: any) => (
              <div key={protocol._key} className="mb-2">
                <h3 className="text-sm font-semibold text-slate-300">{protocol.protocolName}</h3>
                <p className="text-slate-500 text-xs">
                  {protocol.findings?.length || 0} findings
                </p>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}



