import { client } from "@/sanity/lib/client"
import { contestsWithFindingsQuery } from "@/sanity/lib/queries"
import ContestsList from "./ContestsList"

export default async function ContestsPage() {
    const contests = await client.fetch(
       contestsWithFindingsQuery,
       {},
       { next: { revalidate: 60 } }
      )

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-slate-100 font-hacker">
      <main className="flex min-h-screen w-full max-w-6xl flex-col px-6 py-16 animate-fadeIn">
        {/*heading box */}
        <div className="w-full flex justify-center mb-10">
          <div className="bg-slate-800/20 border border-slate-700 rounded-md px-6 py-3 flex justify-center items-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-capri animate-glow text-center">
              Contests
            </h1>
          </div>
        </div>

        <ContestsList initialContests={contests} />
      </main>
    </div>
  )
}


