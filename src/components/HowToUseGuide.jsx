import React from 'react'

export default function HowToUseGuide({ items = [] }) {
  const steps = [
    {
      num: '01',
      title: 'Analyze the High Stakes Opening Mission',
      desc: 'Every chapter begins with an enterprise incident or architectural bottleneck. Read the Mission Briefing first to understand why the API exists, who is calling it, and what happens when the contract fails.',
      pillar: 'Strategic Context'
    },
    {
      num: '02',
      title: 'Audit the Network Wire Step by Step',
      desc: 'Do not treat APIs as black boxes. Inspect every raw HTTP packet: the request method, endpoint path, headers, JSON body payload, status code family, and response latency.',
      pillar: 'Wire Level Inspection'
    },
    {
      num: '03',
      title: 'Predict Output Before You Reveal',
      desc: 'Active prediction wires your brain for lasting retention. Stop before revealing every wire capture. Formulate your predicted status code, response body, and server state in the provided exercises.',
      pillar: 'Active Recall and Prediction'
    },
    {
      num: '04',
      title: 'Build and Run Local Executable Sandboxes',
      desc: 'Theory without running code is fragile. Follow the setup steps to run the lightweight Node.js server and execute test collections locally on port 3000 and port 5050.',
      pillar: 'Hands On Verification'
    },
    {
      num: '05',
      title: 'Defend Against Production Anomalies',
      desc: 'Study the recovery checks, safe parsing guards, and collision math. Learn to build self healing test suites and continuous quality gates that survive real world failures.',
      pillar: 'Resilience Engineering'
    }
  ]

  return (
    <div className="how-to-use-guide-container">
      <div className="how-to-intro-box">
        <span className="how-to-kicker">LEARNING FRAMEWORK</span>
        <h2>How to Study This Book for Complete Technical Mastery</h2>
        <p>
          This is not a passive reading guide. You are training to become an elite API automation engineer who understands wire protocols from first principles and designs production grade quality gates. Follow these five study habits across every chapter:
        </p>
      </div>
      <div className="how-to-grid">
        {steps.map((st) => (
          <div key={st.num} className="how-to-card">
            <div className="how-to-card-header">
              <span className="how-to-num">{st.num}</span>
              <span className="how-to-pillar">{st.pillar}</span>
            </div>
            <h3 className="how-to-title">{st.title}</h3>
            <p className="how-to-desc">{st.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
