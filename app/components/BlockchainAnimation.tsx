"use client"

import React from "react"
import Image from "next/image"

export default function BlockchainAnimation() {
  return (
    <div className="flex justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-64 sm:w-80 lg:w-96"
      >
        <source src="/blockchain.webm" type="video/webm" />
      </video>
    </div>
  )
}

function ProtocolList({ protocols, keyPrefix }: { protocols: any[]; keyPrefix: string }) {
  return (
    <div className="scroll-half">
      {protocols.map((p: any, idx: number) => (
        <div key={`${keyPrefix}-${p._id}-${idx}`} className="protocol-card">
          <Image
            src={p.logoUrl}
            alt={p.name}
            width={64}
            height={64}
            className="protocol-logo"
            loading="eager"
            priority={keyPrefix === "a" && idx < 6}
          />
          <span className="protocol-name">{p.name}</span>
        </div>
      ))}
    </div>
  )
}

export function ProtocolScroller({ protocols }: { protocols: any[] }) {
  return (
    <div className="scroll-wrapper">
      <div className="scroll-track">
        <ProtocolList protocols={protocols} keyPrefix="a" />
        <ProtocolList protocols={protocols} keyPrefix="b" />
      </div>
    </div>
  )
}



