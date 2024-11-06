import React from 'react'
import InfoCard from '../info-card'

export default function Feature() {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <InfoCard
            step={"1"}
            title="Actionable insights"
            description="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
          />
          <InfoCard
            step={"2"}
            title="Data-driven decisions"
            description="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
          />
          <InfoCard
            step={"3"}
            title="Always affordable"
            description="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
          />
        </div>
      </div>
    </section>
  )
}
