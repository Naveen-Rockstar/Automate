import { Check, Mic, Zap } from 'lucide-react';
import './ServicesSection.css';

/**
 * Service 1: AI Agents Visual (Interconnected nodes / agents)
 */
const AiAgentsVisual = () => (
  <div className="service-visual--agents" aria-hidden="true">
    <svg
      viewBox="0 0 540 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Interconnected AI agent nodes and autonomous decision loop diagram"
    >
      <defs>
        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A6DF6" />
          <stop offset="100%" stopColor="#7657E8" />
        </linearGradient>
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#111111" floodOpacity="0.06" />
        </filter>
        <linearGradient id="lineGradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFDCD4" />
          <stop offset="50%" stopColor="#7657E8" />
          <stop offset="100%" stopColor="#DFDCD4" />
        </linearGradient>
      </defs>

      {/* Grid Pattern Background */}
      <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#E2DFD7" />
      </pattern>
      <rect x="10" y="10" width="520" height="360" rx="16" fill="url(#dotGrid)" opacity="0.4" />

      {/* Connecting Vector Lines */}
      {/* Center to Top-Left (Knowledge) */}
      <path d="M 270 190 L 120 90" stroke="#DFDCD4" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 270 190 L 120 90" stroke="#7657E8" strokeWidth="2" strokeDasharray="6 30" strokeDashoffset="12" />

      {/* Center to Top-Right (Execution) */}
      <path d="M 270 190 L 420 90" stroke="#DFDCD4" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 270 190 L 420 90" stroke="#7657E8" strokeWidth="2" strokeDasharray="8 26" strokeDashoffset="6" />

      {/* Center to Bottom-Left (Decision Model) */}
      <path d="M 270 190 L 120 290" stroke="#DFDCD4" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 270 190 L 120 290" stroke="#7657E8" strokeWidth="2" strokeDasharray="6 28" strokeDashoffset="18" />

      {/* Center to Bottom-Right (Human Escalation) */}
      <path d="M 270 190 L 420 290" stroke="#DFDCD4" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 270 190 L 420 290" stroke="#7657E8" strokeWidth="2" strokeDasharray="7 32" strokeDashoffset="2" />

      {/* Orbit Rings around Central Orchestrator */}
      <circle cx="270" cy="190" r="76" stroke="#7657E8" strokeWidth="1" strokeDasharray="3 5" opacity="0.4" />
      <circle cx="270" cy="190" r="105" stroke="#7657E8" strokeWidth="1" strokeDasharray="2 6" opacity="0.2" />

      {/* SATELLITE NODE 1: Knowledge Retrieval (Top-Left) */}
      <g filter="url(#softShadow)">
        <rect x="50" y="60" width="140" height="60" rx="12" fill="#FFFFFF" stroke="#DFDCD4" strokeWidth="1.5" />
        <circle cx="76" cy="90" r="14" fill="rgba(118, 87, 232, 0.1)" />
        <path d="M 72 85 H 80 M 72 89 H 80 M 72 93 H 77" stroke="#7657E8" strokeWidth="1.8" strokeLinecap="round" />
        <text x="98" y="85" fill="#111111" fontSize="11" fontWeight="700" fontFamily="sans-serif">Data Retriever</text>
        <text x="98" y="100" fill="#66645F" fontSize="9.5" fontWeight="500" fontFamily="sans-serif">Vector Search</text>
        {/* Status dot */}
        <circle cx="176" cy="74" r="3.5" fill="#25A86A" />
      </g>

      {/* SATELLITE NODE 2: Task Execution (Top-Right) */}
      <g filter="url(#softShadow)">
        <rect x="350" y="60" width="140" height="60" rx="12" fill="#FFFFFF" stroke="#DFDCD4" strokeWidth="1.5" />
        <circle cx="376" cy="90" r="14" fill="rgba(118, 87, 232, 0.1)" />
        <path d="M 372 87 L 376 93 L 382 85" stroke="#7657E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="398" y="85" fill="#111111" fontSize="11" fontWeight="700" fontFamily="sans-serif">Action Executor</text>
        <text x="398" y="100" fill="#66645F" fontSize="9.5" fontWeight="500" fontFamily="sans-serif">Auto-Run APIs</text>
        <circle cx="476" cy="74" r="3.5" fill="#7657E8" />
      </g>

      {/* SATELLITE NODE 3: Decision Support (Bottom-Left) */}
      <g filter="url(#softShadow)">
        <rect x="50" y="260" width="140" height="60" rx="12" fill="#FFFFFF" stroke="#DFDCD4" strokeWidth="1.5" />
        <circle cx="76" cy="290" r="14" fill="rgba(118, 87, 232, 0.1)" />
        <path d="M 72 293 L 76 286 L 80 293 Z" stroke="#7657E8" strokeWidth="1.8" strokeLinejoin="round" />
        <text x="98" y="285" fill="#111111" fontSize="11" fontWeight="700" fontFamily="sans-serif">Decision Model</text>
        <text x="98" y="300" fill="#66645F" fontSize="9.5" fontWeight="500" fontFamily="sans-serif">Confidence 98%</text>
        <circle cx="176" cy="274" r="3.5" fill="#25A86A" />
      </g>

      {/* SATELLITE NODE 4: Human Escalation (Bottom-Right) */}
      <g filter="url(#softShadow)">
        <rect x="350" y="260" width="140" height="60" rx="12" fill="#FFFFFF" stroke="#DFDCD4" strokeWidth="1.5" />
        <circle cx="376" cy="290" r="14" fill="rgba(241, 107, 117, 0.12)" />
        <path d="M 372 294 A 4 4 0 0 1 380 294 M 376 286 A 2 2 0 1 1 376 282 A 2 2 0 0 1 376 286" stroke="#F16B75" strokeWidth="1.8" strokeLinecap="round" />
        <text x="398" y="285" fill="#111111" fontSize="11" fontWeight="700" fontFamily="sans-serif">Human Escalation</text>
        <text x="398" y="300" fill="#66645F" fontSize="9.5" fontWeight="500" fontFamily="sans-serif">Warm Hand-off</text>
        <circle cx="476" cy="274" r="3.5" fill="#E89A42" />
      </g>

      {/* CENTRAL HUB: Agent Coordinator */}
      <g filter="url(#softShadow)">
        {/* Glow backdrop */}
        <circle cx="270" cy="190" r="48" fill="rgba(118, 87, 232, 0.08)" />
        <circle cx="270" cy="190" r="40" fill="#FFFFFF" stroke="#7657E8" strokeWidth="2.5" />
        <circle cx="270" cy="190" r="32" fill="url(#purpleGrad)" />

        {/* Central brain/agent icon */}
        <g transform="translate(258, 178)">
          <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4zm-2 5V6a2 2 0 1 1 4 0v1h-4zm-2 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#FFFFFF" />
        </g>

        {/* Floating badge underneath coordinator */}
        <rect x="205" y="238" width="130" height="26" rx="13" fill="#111111" />
        <circle cx="218" cy="251" r="3.5" fill="#25A86A" />
        <text x="228" y="255" fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="sans-serif">Agent Loop: Active</text>
      </g>
    </svg>
  </div>
);

/**
 * Service 2: Workflow Automation Visual (App icons flowing through a pipeline)
 */
const WorkflowAutomationVisual = () => (
  <div className="service-visual--workflow" aria-hidden="true">
    <svg
      viewBox="0 0 540 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="App integration pipeline diagram showing data flow and orchestration"
    >
      <defs>
        <filter id="wfShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#111111" floodOpacity="0.06" />
        </filter>
        <linearGradient id="greenPipe" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#DFDCD4" />
          <stop offset="50%" stopColor="#25A86A" />
          <stop offset="100%" stopColor="#DFDCD4" />
        </linearGradient>
      </defs>

      {/* Grid Pattern */}
      <pattern id="wfGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#E2DFD7" />
      </pattern>
      <rect x="10" y="10" width="520" height="360" rx="16" fill="url(#wfGrid)" opacity="0.4" />

      {/* PIPELINE CONDUITS (Left sources -> Center router -> Right outputs) */}
      {/* Top Source to Router */}
      <path d="M 125 110 C 180 110, 195 190, 245 190" stroke="#DFDCD4" strokeWidth="2.5" />
      <path d="M 125 110 C 180 110, 195 190, 245 190" stroke="#25A86A" strokeWidth="2.5" strokeDasharray="8 16" strokeDashoffset="4" />

      {/* Middle Source to Router */}
      <path d="M 125 190 L 245 190" stroke="#DFDCD4" strokeWidth="2.5" />
      <path d="M 125 190 L 245 190" stroke="#25A86A" strokeWidth="2.5" strokeDasharray="6 12" strokeDashoffset="2" />

      {/* Bottom Source to Router */}
      <path d="M 125 270 C 180 270, 195 190, 245 190" stroke="#DFDCD4" strokeWidth="2.5" />
      <path d="M 125 270 C 180 270, 195 190, 245 190" stroke="#25A86A" strokeWidth="2.5" strokeDasharray="8 18" strokeDashoffset="8" />

      {/* Router to Top Destination */}
      <path d="M 295 190 C 345 190, 360 110, 415 110" stroke="#DFDCD4" strokeWidth="2.5" />
      <path d="M 295 190 C 345 190, 360 110, 415 110" stroke="#25A86A" strokeWidth="2.5" strokeDasharray="8 16" strokeDashoffset="12" />

      {/* Router to Middle Destination */}
      <path d="M 295 190 L 415 190" stroke="#DFDCD4" strokeWidth="2.5" />
      <path d="M 295 190 L 415 190" stroke="#25A86A" strokeWidth="2.5" strokeDasharray="6 12" strokeDashoffset="7" />

      {/* Router to Bottom Destination */}
      <path d="M 295 190 C 345 190, 360 270, 415 270" stroke="#DFDCD4" strokeWidth="2.5" />
      <path d="M 295 190 C 345 190, 360 270, 415 270" stroke="#25A86A" strokeWidth="2.5" strokeDasharray="8 18" strokeDashoffset="1" />

      {/* INPUT APP ICONS (Left Column) */}
      {/* App 1: Inbound Webhook / Form */}
      <g filter="url(#wfShadow)">
        <rect x="45" y="80" width="80" height="60" rx="12" fill="#FFFFFF" stroke="#DFDCD4" strokeWidth="1.5" />
        <circle cx="70" cy="110" r="14" fill="#EAF2FE" />
        <path d="M 66 110 L 70 106 L 74 110 M 70 107 L 70 115" stroke="#4389F5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="92" y="107" fill="#111111" fontSize="10" fontWeight="700" fontFamily="sans-serif">Forms</text>
        <text x="92" y="120" fill="#66645F" fontSize="8.5" fontWeight="500" fontFamily="sans-serif">Trigger</text>
      </g>

      {/* App 2: CRM Lead */}
      <g filter="url(#wfShadow)">
        <rect x="45" y="160" width="80" height="60" rx="12" fill="#FFFFFF" stroke="#DFDCD4" strokeWidth="1.5" />
        <circle cx="70" cy="190" r="14" fill="#FDF4E9" />
        <path d="M 66 186 C 66 186 68 184 70 184 C 72 184 74 186 74 186 V 194 H 66 Z" stroke="#E89A42" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="70" cy="189" r="1.5" fill="#E89A42" />
        <text x="92" y="187" fill="#111111" fontSize="10" fontWeight="700" fontFamily="sans-serif">CRM</text>
        <text x="92" y="200" fill="#66645F" fontSize="8.5" fontWeight="500" fontFamily="sans-serif">Events</text>
      </g>

      {/* App 3: Custom API / DB */}
      <g filter="url(#wfShadow)">
        <rect x="45" y="240" width="80" height="60" rx="12" fill="#FFFFFF" stroke="#DFDCD4" strokeWidth="1.5" />
        <circle cx="70" cy="270" r="14" fill="#ECE7FD" />
        <ellipse cx="70" cy="266" rx="6" ry="2.5" stroke="#7657E8" strokeWidth="1.5" />
        <path d="M 64 266 V 274 C 64 275.5 66.7 276.5 70 276.5 C 73.3 276.5 76 275.5 76 274 V 266" stroke="#7657E8" strokeWidth="1.5" />
        <text x="92" y="267" fill="#111111" fontSize="10" fontWeight="700" fontFamily="sans-serif">Database</text>
        <text x="92" y="280" fill="#66645F" fontSize="8.5" fontWeight="500" fontFamily="sans-serif">Sync</text>
      </g>

      {/* CENTRAL PIPELINE ORCHESTRATOR */}
      <g filter="url(#wfShadow)">
        <rect x="225" y="145" width="90" height="90" rx="18" fill="#FFFFFF" stroke="#25A86A" strokeWidth="2" />
        <circle cx="270" cy="180" r="22" fill="rgba(37, 168, 106, 0.12)" />
        {/* Pipeline routing arrows */}
        <path d="M 262 176 L 270 170 L 278 176 M 270 171 V 189" stroke="#25A86A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="270" y="214" textAnchor="middle" fill="#111111" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">ORCHESTRATOR</text>
        <text x="270" y="226" textAnchor="middle" fill="#25A86A" fontSize="8" fontWeight="700" fontFamily="sans-serif">Lead Score &gt; 80</text>
      </g>

      {/* OUTPUT DESTINATIONS (Right Column) */}
      {/* App 4: Instant Messaging / Slack */}
      <g filter="url(#wfShadow)">
        <rect x="415" y="80" width="85" height="60" rx="12" fill="#FFFFFF" stroke="#DFDCD4" strokeWidth="1.5" />
        <circle cx="438" cy="110" r="14" fill="#E7F6EE" />
        <path d="M 434 107 H 442 V 113 H 437 L 434 116 V 107 Z" stroke="#25A86A" strokeWidth="1.6" strokeLinejoin="round" />
        <text x="458" y="107" fill="#111111" fontSize="10" fontWeight="700" fontFamily="sans-serif">Team Alerts</text>
        <text x="458" y="120" fill="#25A86A" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Instant</text>
      </g>

      {/* App 5: Cloud ERP */}
      <g filter="url(#wfShadow)">
        <rect x="415" y="160" width="85" height="60" rx="12" fill="#FFFFFF" stroke="#DFDCD4" strokeWidth="1.5" />
        <circle cx="438" cy="190" r="14" fill="#EAF2FE" />
        <path d="M 432 193 L 438 185 L 444 193 H 432 Z" stroke="#4389F5" strokeWidth="1.6" strokeLinejoin="round" />
        <text x="458" y="187" fill="#111111" fontSize="10" fontWeight="700" fontFamily="sans-serif">Enterprise</text>
        <text x="458" y="200" fill="#66645F" fontSize="8.5" fontWeight="500" fontFamily="sans-serif">Routing</text>
      </g>

      {/* App 6: Data Warehouse */}
      <g filter="url(#wfShadow)">
        <rect x="415" y="240" width="85" height="60" rx="12" fill="#FFFFFF" stroke="#DFDCD4" strokeWidth="1.5" />
        <circle cx="438" cy="270" r="14" fill="#FDF4E9" />
        <circle cx="438" cy="270" r="5" stroke="#E89A42" strokeWidth="1.6" />
        <text x="458" y="267" fill="#111111" fontSize="10" fontWeight="700" fontFamily="sans-serif">Analytics</text>
        <text x="458" y="280" fill="#66645F" fontSize="8.5" fontWeight="500" fontFamily="sans-serif">Logged</text>
      </g>

      {/* Flow Status Tag */}
      <rect x="180" y="320" width="180" height="28" rx="14" fill="#111111" />
      <circle cx="198" cy="334" r="4" fill="#25A86A" />
      <text x="210" y="338" fill="#FFFFFF" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">0.2s Execution Latency</text>
    </svg>
  </div>
);

/**
 * Service 3: Voice AI Visual (Waveform + Conversation UI Mockup)
 */
const VoiceAiVisual = () => {
  // Waveform heights simulating natural speech frequency
  const waveformHeights = [
    12, 18, 28, 40, 22, 14, 30, 44, 36, 20,
    14, 26, 42, 38, 22, 16, 32, 46, 28, 14,
    20, 36, 42, 26, 16, 28, 40, 34, 18, 12,
    16, 30, 44, 32, 18, 14, 24, 38, 22, 10
  ];

  return (
    <div className="voice-mockup-wrapper" aria-hidden="true">
      {/* Mockup Header Bar */}
      <div className="voice-mockup-header">
        <div className="voice-call-indicator">
          <span className="voice-pulse-dot"></span>
          <span>Inbound Call #4182</span>
          <span style={{ color: '#8E8B82', fontWeight: 500 }}>• 00:42</span>
        </div>
        <div className="voice-latency-badge">
          <Zap size={12} color="#4389F5" />
          <span>210ms Latency</span>
        </div>
      </div>

      {/* Conversation Exchange */}
      <div className="voice-chat-stream">
        {/* Agent Turn 1 */}
        <div className="voice-bubble voice-bubble--agent">
          <span className="voice-bubble-sender" style={{ color: '#4389F5' }}>Hutomate Voice Agent</span>
          "Good afternoon! I see you called regarding automating your team's client qualification. How can I assist you today?"
        </div>

        {/* Customer Response */}
        <div className="voice-bubble voice-bubble--caller">
          <span className="voice-bubble-sender" style={{ color: '#66645F' }}>Prospective Client</span>
          "We receive 200 calls a day and need to qualify leads before routing to our sales directors."
        </div>

        {/* Agent Turn 2 */}
        <div className="voice-bubble voice-bubble--agent">
          <span className="voice-bubble-sender" style={{ color: '#4389F5' }}>Hutomate Voice Agent</span>
          "Understood. We can qualify budget, timeline, and scope on the call, then warm-transfer qualified leads straight to your directors' calendars."
        </div>
      </div>

      {/* Audio Waveform Live Visualizer */}
      <div className="voice-waveform-area">
        <div className="voice-waveform-meta">
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Mic size={12} color="#4389F5" />
            Natural Speech Synthesis
          </span>
          <span>48kHz HD Audio</span>
        </div>
        <svg
          className="voice-waveform-svg"
          viewBox="0 0 400 48"
          preserveAspectRatio="none"
          role="img"
          aria-label="Audio waveform frequency bars"
        >
          {waveformHeights.map((height, i) => {
            const x = i * 10 + 4;
            const y = (48 - height) / 2;
            const animDelay = `${(i % 5) * 0.15}s`;
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width="4"
                height={height}
                rx="2"
                fill="#4389F5"
                opacity={0.35 + (height / 50) * 0.65}
                className="waveform-bar"
                style={{ animationDelay: animDelay }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

/**
 * Service 4: Custom AI Solutions Visual (Abstract puzzle / building-blocks visual)
 */
const CustomAiVisual = () => (
  <div className="service-visual--custom" aria-hidden="true">
    <svg
      viewBox="0 0 520 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Modular building blocks and interlocking architecture diagram"
    >
      <defs>
        <filter id="blockShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#111111" floodOpacity="0.06" />
        </filter>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5B267" />
          <stop offset="100%" stopColor="#E89A42" />
        </linearGradient>
      </defs>

      {/* Background Dots */}
      <pattern id="customGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#E2DFD7" />
      </pattern>
      <rect x="10" y="10" width="500" height="360" rx="16" fill="url(#customGrid)" opacity="0.4" />

      {/* CONNECTOR GUIDES / INTERLOCKING RAILS */}
      <path d="M 100 130 H 420 M 100 240 H 420" stroke="#DFDCD4" strokeWidth="1.5" strokeDasharray="3 5" />
      <path d="M 180 80 V 300 M 340 80 V 300" stroke="#DFDCD4" strokeWidth="1.5" strokeDasharray="3 5" />

      {/* PUZZLE / BUILDING BLOCK 1: Proprietary Business Data (Top-Left) */}
      <g filter="url(#blockShadow)">
        <path
          d="M 80 85 
             H 190 
             C 190 95, 205 95, 205 85 
             H 230 
             V 155 
             C 218 155, 218 170, 230 170 
             V 185 
             H 80 
             Z"
          fill="#FFFFFF"
          stroke="#DFDCD4"
          strokeWidth="1.5"
        />
        <circle cx="112" cy="120" r="14" fill="#FDF4E9" />
        <path d="M 108 116 H 116 M 108 120 H 116 M 108 124 H 113" stroke="#E89A42" strokeWidth="1.8" strokeLinecap="round" />
        <text x="136" y="117" fill="#111111" fontSize="11" fontWeight="700" fontFamily="sans-serif">Data Foundation</text>
        <text x="136" y="131" fill="#66645F" fontSize="9.5" fontWeight="500" fontFamily="sans-serif">Proprietary Records</text>
      </g>

      {/* PUZZLE / BUILDING BLOCK 2: Vector Search & Retrieval (Top-Right) */}
      <g filter="url(#blockShadow)">
        <path
          d="M 270 85 
             H 430 
             V 185 
             H 375 
             C 375 172, 360 172, 360 185 
             H 270 
             V 85 
             Z"
          fill="#FFFFFF"
          stroke="#DFDCD4"
          strokeWidth="1.5"
        />
        <circle cx="300" cy="120" r="14" fill="#FDF4E9" />
        <circle cx="300" cy="119" r="5" stroke="#E89A42" strokeWidth="1.6" />
        <path d="M 304 123 L 308 127" stroke="#E89A42" strokeWidth="1.8" strokeLinecap="round" />
        <text x="324" y="117" fill="#111111" fontSize="11" fontWeight="700" fontFamily="sans-serif">Intelligent Search</text>
        <text x="324" y="131" fill="#66645F" fontSize="9.5" fontWeight="500" fontFamily="sans-serif">Semantic Embeddings</text>
      </g>

      {/* PUZZLE / BUILDING BLOCK 3: Bespoke AI Engine (Center-Bottom) */}
      <g filter="url(#blockShadow)">
        <rect x="150" y="195" width="220" height="95" rx="16" fill="#FFFFFF" stroke="#E89A42" strokeWidth="2" />
        <circle cx="190" cy="242" r="20" fill="url(#orangeGrad)" />
        <path d="M 184 242 L 188 236 L 192 242 M 190 238 V 248" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="196" cy="244" r="1.5" fill="#FFFFFF" />

        <text x="224" y="235" fill="#111111" fontSize="12" fontWeight="800" fontFamily="sans-serif">Domain-Tuned Model</text>
        <text x="224" y="250" fill="#66645F" fontSize="10" fontWeight="500" fontFamily="sans-serif">Trained on your taxonomy</text>
        <rect x="224" y="258" width="96" height="18" rx="9" fill="rgba(232, 154, 66, 0.12)" />
        <text x="232" y="270" fill="#E89A42" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">Enterprise Isolation</text>
      </g>

      {/* Modular Interlock Connectors */}
      <circle cx="250" cy="140" r="6" fill="#E89A42" />
      <circle cx="250" cy="140" r="10" stroke="#E89A42" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />

      {/* Floating Status Pill */}
      <rect x="175" y="315" width="170" height="28" rx="14" fill="#111111" />
      <circle cx="193" cy="329" r="4" fill="#E89A42" />
      <text x="205" y="333" fill="#FFFFFF" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Custom Architecture</text>
    </svg>
  </div>
);

/**
 * ServicesSection Component
 */
export default function ServicesSection() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="services-container">
        {/* Section Header */}
        <header className="services-header">
          <div className="services-eyebrow">
            <span className="services-eyebrow-dot"></span>
            <span>03 / SERVICES</span>
          </div>
          <h2 id="services-title" className="services-title">
            Intelligence that works{'\n'}with your business.
          </h2>
          <p className="services-intro">
            We architect and deploy production-grade intelligent systems tailored precisely to your operational workflows, tech stack, and strategic objectives.
          </p>
        </header>

        {/* Varied Service Presentations */}
        <div className="services-list">
          {/* SERVICE 1: AI Agents */}
          <article className="service-item service-item--agents" aria-labelledby="service-agents-title">
            <div className="service-content">
              <div className="service-badge">
                <span className="service-badge-indicator"></span>
                <span>Autonomous Systems</span>
              </div>
              <h3 id="service-agents-title" className="service-name">AI Agents</h3>
              <p className="service-desc">
                Intelligent systems that execute defined tasks, retrieve information, support decisions, and help businesses operate more efficiently.
              </p>

              <div className="service-usecases-title">Key Capabilities</div>
              <ul className="service-usecases">
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Task automation</span>
                </li>
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Information retrieval</span>
                </li>
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Decision support</span>
                </li>
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Human escalation when needed</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="service-cta"
                onClick={handleScrollToContact}
                aria-label="Discuss AI Agents with Hutomate"
              >
                <span>Discuss AI Agents</span>
                <span className="service-cta-arrow">→</span>
              </a>
            </div>

            <AiAgentsVisual />
          </article>

          {/* SERVICE 2: Workflow Automation */}
          <article className="service-item service-item--workflow" aria-labelledby="service-workflow-title">
            <WorkflowAutomationVisual />

            <div className="service-content">
              <div className="service-badge">
                <span className="service-badge-indicator"></span>
                <span>Pipelines &amp; Integrations</span>
              </div>
              <h3 id="service-workflow-title" className="service-name">Workflow Automation</h3>
              <p className="service-desc">
                Connect your applications, eliminate repetitive work, and create reliable automated workflows that keep your business running smoothly.
              </p>

              <div className="service-usecases-title">Key Capabilities</div>
              <ul className="service-usecases">
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>App integration</span>
                </li>
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Lead routing</span>
                </li>
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Data synchronization</span>
                </li>
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Process orchestration</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="service-cta"
                onClick={handleScrollToContact}
                aria-label="Discuss Workflow Automation with Hutomate"
              >
                <span>Discuss Workflow Automation</span>
                <span className="service-cta-arrow">→</span>
              </a>
            </div>
          </article>

          {/* SERVICE 3: Voice AI */}
          <article className="service-item service-item--voice" aria-labelledby="service-voice-title">
            <div className="service-content">
              <div className="service-badge">
                <span className="service-badge-indicator"></span>
                <span>Real-Time Speech</span>
              </div>
              <h3 id="service-voice-title" className="service-name">Voice AI</h3>
              <p className="service-desc">
                Natural voice agents that handle inbound calls, qualify leads, answer customer enquiries, and seamlessly hand off to your team when needed.
              </p>

              <div className="service-usecases-title">Key Capabilities</div>
              <ul className="service-usecases">
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Inbound call handling</span>
                </li>
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Lead qualification</span>
                </li>
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Appointment scheduling</span>
                </li>
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Customer support</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="service-cta"
                onClick={handleScrollToContact}
                aria-label="Discuss Voice AI with Hutomate"
              >
                <span>Discuss Voice AI</span>
                <span className="service-cta-arrow">→</span>
              </a>
            </div>

            <VoiceAiVisual />
          </article>

          {/* SERVICE 4: Custom AI Solutions */}
          <article className="service-item service-item--custom" aria-labelledby="service-custom-title">
            <div className="service-content">
              <div className="service-badge">
                <span className="service-badge-indicator"></span>
                <span>Bespoke Engineering</span>
              </div>
              <h3 id="service-custom-title" className="service-name">Custom AI Solutions</h3>
              <p className="service-desc">
                Purpose-built intelligent systems designed around your specific business processes, data, and requirements.
              </p>

              <div className="service-usecases-title">Key Capabilities</div>
              <ul className="service-usecases">
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Document processing</span>
                </li>
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Intelligent search</span>
                </li>
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Business-specific AI</span>
                </li>
                <li className="service-usecase-item">
                  <span className="service-usecase-marker">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span>Custom integrations</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="service-cta"
                onClick={handleScrollToContact}
                aria-label="Discuss Custom Solutions with Hutomate"
              >
                <span>Discuss Custom Solutions</span>
                <span className="service-cta-arrow">→</span>
              </a>
            </div>

            <CustomAiVisual />
          </article>
        </div>
      </div>
    </section>
  );
}
