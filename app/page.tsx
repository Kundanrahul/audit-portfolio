import Link from "next/link"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import Signature from "./assets/signature.png"
import BlockchainAnimation from "./components/BlockchainAnimation"
import { StarIcon } from "@heroicons/react/24/solid"
import { LockClosedIcon } from "@heroicons/react/24/solid"
import {
  findingsQuery,
  protocolShowcaseQuery,
  midHeadingQuery,
  metricsQuery,
} from "@/sanity/lib/queries"

export default async function Home() {
  const findings = await client.fetch(findingsQuery)
  const previewFindings = findings.slice(0, 5)

  const protocols = await client.fetch(protocolShowcaseQuery)
  const midHeading = await client.fetch(midHeadingQuery)
  const metrics = await client.fetch(metricsQuery)

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-slate-100 font-hacker">
      <main className="flex min-h-screen w-full max-w-6xl flex-col justify-start px-4 sm:px-8 py-14 sm:py-20 animate-fadeIn">
        {/* Signature */}
        <section className="w-full flex justify-center ">
          <div className=" w-[60%] sm:w-[48%] lg:w-[32%] animate-float">
          <Image
            src={Signature}
            alt="Signature of rox_k"
            priority
            className="mx-auto h-auto transition-transform duration-700 hover:scale-105 drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)] "
          />
          </div>
        </section>
        {/* metrics */}
{metrics && (
  <section className="mt-6 flex items-center justify-center gap-10">
    {/* Contests */}
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold text-capri">
        {metrics.contestsValue}
      </span>
      <span className="text-slate-400 text-sm">Contests</span>
       <StarIcon className="w-8 h-8 text-capri mb-2" />
    </div>

    {/* TVL */}
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold text-capri">
        {metrics.tvlValue}
      </span>
      <span className="text-slate-400 text-sm">TVL Secured</span>
       <LockClosedIcon className="w-8 h-8 text-capri mb-2" />
    </div>
  </section>
)}
        {/* Hero Text with inline blockchain icon */}
        <section className="mt-10 w-full max-w-3xl text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-capri">I'm rox</h1>
            <div className="w-14 h-14">
              <BlockchainAnimation />
            </div>
          </div>
          <h2 className="mt-2 text-sm sm:text-base lg:text-lg font-light text-slate-400">
            DeFi Security Researcher
          </h2>
          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            Transparent, reproducible, and impact‑driven smart contract audits. Explore findings,
            Reports, and contest results.
          </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
  <Link
    href="/findings"
    className="bg-capri text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition animate-pulse flex flex-col items-center justify-center min-h-17.5"
  >
    <span className="text-sm sm:text-base font-bold">View Audit Findings</span>
  </Link>

  <Link
    href="/contests"
    className="border border-capri text-capri font-semibold px-6 py-3 rounded-lg hover:bg-capri hover:text-slate-900 transition shadow-md animate-pulse flex flex-col items-center justify-center min-h-17.5"
  >
    <span className="text-sm sm:text-base font-bold">View Contests</span>
  </Link>

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=rahulkundan60@gmail.com&su=Opportunities%20with%20rox_k%20(DeFi%20Audit%20or%20Job)&body=Hello%20rox_k,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20an%20opportunity%20with%20you%20regarding%20a%20DeFi%20audit%20or%20a%20potential%20job%20role.%0D%0A%0D%0AThanks!"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-capri text-capri font-semibold px-6 py-3 rounded-lg hover:bg-capri hover:text-slate-900 transition shadow-md animate-pulse flex flex-col items-center justify-center min-h-17.5"
  >
    <span className="text-sm sm:text-base font-bold">Hire Me</span>
    <span className="text-[8px] sm:text-[11px] font-normal text-slate-200">for job/an audit</span>
  </a>
</div>

        </section>

        {/* Feature Highlights */}
        <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
         <div className="rounded-lg border border-slate-800 p-6 hover:scale-105 transition-transform">
          <h3 className="font-semibold mb-2">Detailed Reports</h3>
          <p className="text-slate-400 text-sm sm:text-base">
           Findings include clear summaries, root causes, and reproducible test cases.
          </p>
         </div>

          <div className="rounded-lg border border-slate-800 p-6 hover:scale-105 transition-transform">
            <h3 className="font-semibold mb-2">Contest‑proven</h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Accepted issues from Code4rena,Sherlock contests and more.
            </p>
          </div>
          <div className="rounded-lg border border-slate-800 p-6 hover:scale-105 transition-transform">
            <h3 className="font-semibold mb-2">Audit‑ready</h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Clear severity, impact, and remediation paths.
            </p>
          </div>
        </section>

{/* Protocol Showcase */}
<section className="mt-16">
  <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-capri mb-6">
    Protocols Secured
  </h2>

  <div className="relative overflow-hidden w-full animate-fadeIn">
    {/* Gradient fades */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-slate-900 to-transparent z-10"></div>
    <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-slate-900 to-transparent z-10"></div>

    {/* Scrolling content */}
    <div className="flex gap-6 sm:gap-8 py-3 animate-scroll">
      {protocols.map((p: any, idx: number) => (
        <div
          key={p._id}
          style={{ ["--i" as any]: idx }}
          className="flex flex-col items-center min-w-18 sm:min-w-24"
        >
          <Image
            src={p.logoUrl}
            alt={p.name}
            width={64}
            height={64}
            loading="lazy"
            className="rounded-full border border-slate-700"
          />
          <span className="mt-2 text-slate-300 text-xs sm:text-sm">{p.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>
        {/* Mid Heading */}
{midHeading && (
  <section className="mt-16 text-center">
    <h2
      className="text-sm sm:text-base lg:text-lg font-bold text-slate-400 tracking-wide drop-shadow-sm"
    >
      {midHeading.content}
    </h2>
    <div className="mt-2 h-0.5 w-12 mx-auto bg-capri rounded-full"></div>
  </section>
)}
        {/* Findings Preview */}
        <section className="mt-20">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-capri mb-6">
            Latest Findings
          </h2>
          <div className="w-full overflow-x-auto rounded-lg border border-slate-800 shadow-lg">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-800 text-slate-200">
                <tr>
                  <th className="px-4 py-2">Severity</th>
                  <th className="px-4 py-2">Issue</th>
                  <th className="px-4 py-2">Platform</th>
                  <th className="px-4 py-2">Protocol</th>
                  <th className="px-4 py-2">Contest</th>
                  <th className="px-4 py-2">Report</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {previewFindings.map((f: any) => (
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
                        <a href={f.contestLink} target="_blank" className="text-capri underline">
                          Contest
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {f.pocLink ? (
                        <a href={f.pocLink} target="_blank" className="text-capri underline">
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

          {findings.length > 5 && (
            <div className="mt-8 flex justify-center">
              <Link
                href="/findings"
                className="bg-capri text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition shadow-md animate-pulse"
              >
                View More
              </Link>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
