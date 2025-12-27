import groq from "groq"

// 🔹 All findings
export const findingsQuery = groq`*[_type == "finding"] | order(date desc){
  _id,
  title,
  severity,
  platform,
  protocol,
  contestLink,
  pocLink,
  date
}`

// Contests with findings (flattened via references)
export const contestsWithFindingsQuery = groq`*[_type == "contest"] | order(date desc){
  _id,
  name,
  platform,
  contestLink,
  date,
  protocols[]{
    _key,
    protocolName,
    findings[]{
      _key,
      severity,
      title,
      platform,
      protocol,
      contest,
      pocLink,
      date
    }
  }
}`

// Filter findings by severity
export const findingsBySeverityQuery = groq`*[_type == "finding" && severity == $severity] | order(date desc){
  _id,
  title,
  severity,
  platform,
  protocol,
  pocLink,
  date
}`

// Filter findings by contest ID
export const findingsByContestQuery = groq`*[_type == "finding" && references($contestId)] | order(date desc){
  _id,
  title,
  severity,
  platform,
  protocol,
  pocLink,
  date
}`

// Single contest by ID with nested protocols + findings
export const contestByIdQuery = groq`*[_type == "contest" && _id == $id][0]{
  _id,
  name,
  platform,
  contestLink,
  date,
  protocols[]{
    _key,
    protocolName,
    findings[]{
      _key,
      severity,
      title,
      platform,
      protocol,
      contest,
      pocLink,
      date
    }
  }
}`

// Protocol showcase
export const protocolShowcaseQuery = groq`*[_type == "protocolShowcase"] | order(name asc){
  _id,
  name,
  "logoUrl": logo.asset->url
}`

// Mid heading
export const midHeadingQuery = groq`*[_type == "midHeading"][0]{
  _id,
  content
}`
export const metricsQuery = `*[_type == "metrics"][0]{
  contestsValue,
  tvlValue
}`





