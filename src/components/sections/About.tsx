export function About() {
  return (
<section id="about" style={{"background":"#E8F1FC","padding":"clamp(72px, 9vw, 120px) 0"}}>
  <div style={{"maxWidth":"1200px","margin":"0 auto","padding":"0 clamp(16px, 4vw, 48px)","boxSizing":"border-box"}}>
    <div style={{"display":"flex","alignItems":"baseline","gap":"18px","flexWrap":"wrap"}}>
      <span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"14px","color":"#1D56C9"}}>01</span>
      <h2 style={{"margin":0,"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":700,"fontSize":"clamp(38px, 4.6vw, 60px)","letterSpacing":"-0.03em","lineHeight":1}}>About Me</h2>
    </div>

    <div style={{"marginTop":"56px","display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(min(440px, 100%), 1fr))","gap":"40px 72px","alignItems":"start"}}>
      <p style={{"margin":0,"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":500,"fontSize":"clamp(28px, 3vw, 40px)","lineHeight":1.15,"letterSpacing":"-0.02em","color":"#0A1A33","textWrap":"pretty"}}>Engineering backend systems engineered for <span style={{"color":"#1D56C9"}}>predictability, throughput,</span> and clean maintainability.</p>
      <div style={{"display":"flex","flexDirection":"column","gap":"18px","fontSize":"18px","lineHeight":1.7,"color":"#2E405A"}}>
        <p style={{"margin":0,"textWrap":"pretty"}}>I am a backend-focused software engineer who enjoys digging into the mechanics of how software behaves under real production load. Rather than focusing on surface-level abstractions, I care about predictable latency, thread safety, clean relational schemas, and robust data integrity.</p>
        <p style={{"margin":0,"textWrap":"pretty"}}>My primary ecosystem centers around Java and Spring Boot, combined with Redis for fast in-memory operations and MySQL/PostgreSQL for durable, ACID-compliant persistence.</p>
        <p style={{"margin":0,"textWrap":"pretty"}}>I believe the best backend systems are simple to reason about, heavily tested, and built with clear operational boundaries.</p>
        <p style={{"margin":"8px 0 0","display":"flex","flexWrap":"wrap","alignItems":"center","gap":"8px 14px","padding":"16px 20px","background":"#FFFFFF","border":"1px solid #C9DAF1","borderRadius":"16px","fontSize":"16px","lineHeight":1.5,"color":"#0A1A33"}}>
          <span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"11.5px","letterSpacing":"0.14em","color":"#1D56C9"}}>CURRENTLY</span>
          <span>Engineering backend services at <strong style={{"fontWeight":600}}>Rikkeisoft</strong>.</span>
        </p>
      </div>
    </div>

    <div style={{"marginTop":"80px"}}>
      <p style={{"margin":0,"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12px","letterSpacing":"0.14em","color":"#3A4D68"}}>FOCUS AREAS</p>
      <ul style={{"margin":"20px 0 0","padding":0,"listStyle":"none","display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(min(170px, 100%), 1fr))","gap":"28px 24px"}}>
        <li style={{"borderTop":"2px solid #0A1A33","paddingTop":"16px","display":"flex","flexDirection":"column","gap":"10px"}}><span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12.5px","color":"#1D56C9"}}>/01</span><span style={{"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":600,"fontSize":"21px","letterSpacing":"-0.01em","lineHeight":1.2}}>Performance</span></li>
        <li style={{"borderTop":"2px solid #0A1A33","paddingTop":"16px","display":"flex","flexDirection":"column","gap":"10px"}}><span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12.5px","color":"#1D56C9"}}>/02</span><span style={{"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":600,"fontSize":"21px","letterSpacing":"-0.01em","lineHeight":1.2}}>Concurrency</span></li>
        <li style={{"borderTop":"2px solid #0A1A33","paddingTop":"16px","display":"flex","flexDirection":"column","gap":"10px"}}><span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12.5px","color":"#1D56C9"}}>/03</span><span style={{"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":600,"fontSize":"21px","letterSpacing":"-0.01em","lineHeight":1.2}}>Database Optimization</span></li>
        <li style={{"borderTop":"2px solid #0A1A33","paddingTop":"16px","display":"flex","flexDirection":"column","gap":"10px"}}><span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12.5px","color":"#1D56C9"}}>/04</span><span style={{"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":600,"fontSize":"21px","letterSpacing":"-0.01em","lineHeight":1.2}}>Caching</span></li>
        <li style={{"borderTop":"2px solid #0A1A33","paddingTop":"16px","display":"flex","flexDirection":"column","gap":"10px"}}><span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12.5px","color":"#1D56C9"}}>/05</span><span style={{"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":600,"fontSize":"21px","letterSpacing":"-0.01em","lineHeight":1.2}}>System Reliability</span></li>
        <li style={{"borderTop":"2px solid #0A1A33","paddingTop":"16px","display":"flex","flexDirection":"column","gap":"10px"}}><span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12.5px","color":"#1D56C9"}}>/06</span><span style={{"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":600,"fontSize":"21px","letterSpacing":"-0.01em","lineHeight":1.2}}>Cloud Infrastructure</span></li>
      </ul>
    </div>
  </div>
</section>
  );
}
