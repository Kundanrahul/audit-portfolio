"use client"

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
        Your browser does not support the video tag.
      </video>
    </div>
  )
}



