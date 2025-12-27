import { client } from "@/sanity/lib/client"
import { findingsQuery } from "@/sanity/lib/queries"
import FindingsList from "./FindingsList"

export default async function FindingsPage() {
  const findings = await client.fetch(findingsQuery)

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen flex flex-col">
      <FindingsList findings={findings} />
    </div>
  )
}



