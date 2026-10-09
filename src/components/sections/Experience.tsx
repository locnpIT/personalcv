export function Experience() {
  return (
<section id="experience" style={{"background":"#0D3168","color":"#FFFFFF","padding":"clamp(72px, 9vw, 120px) 0"}}>
  <div style={{"maxWidth":"1200px","margin":"0 auto","padding":"0 clamp(16px, 4vw, 48px)","boxSizing":"border-box"}}>
    <div style={{"display":"flex","alignItems":"baseline","gap":"18px","flexWrap":"wrap"}}>
      <span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"14px","color":"#7CCBFF"}}>04</span>
      <h2 style={{"margin":0,"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":700,"fontSize":"clamp(38px, 4.6vw, 60px)","letterSpacing":"-0.03em","lineHeight":1}}>Experience</h2>
    </div>

    <div style={{"marginTop":"56px","display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(min(340px, 100%), 1fr))","gap":"40px 72px","alignItems":"start","borderTop":"1px solid rgba(164, 196, 240, 0.24)","paddingTop":"40px"}}>
      <div style={{"display":"flex","flexDirection":"column","gap":"10px"}}>
        <p style={{"margin":0,"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"13px","letterSpacing":"0.06em","color":"#B4C7E4"}}>04/2025 — Present</p>
        <h3 style={{"margin":"6px 0 0","fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":600,"fontSize":"clamp(32px, 3.4vw, 44px)","letterSpacing":"-0.025em","lineHeight":1.05}}>Software Engineer</h3>
        <p style={{"margin":0,"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":500,"fontSize":"24px","color":"#7CCBFF"}}>Rikkeisoft</p>
        <p style={{"margin":0,"fontSize":"16px","color":"#B4C7E4"}}>Da Nang, Vietnam</p>
      </div>
      <div>
        <ul style={{"margin":0,"padding":0,"listStyle":"none","display":"flex","flexDirection":"column","gap":"18px","fontSize":"18px","lineHeight":1.6,"color":"#D6E2F4"}}>
          <li style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}><span aria-hidden="true" style={{"flex":"none","marginTop":"9px","width":"9px","height":"9px","borderRadius":"50%","border":"1.5px solid #7CCBFF"}}></span><span>Developing and maintaining scalable backend services with Spring Boot.</span></li>
          <li style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}><span aria-hidden="true" style={{"flex":"none","marginTop":"9px","width":"9px","height":"9px","borderRadius":"50%","border":"1.5px solid #7CCBFF"}}></span><span>Optimizing database queries to improve API response times and reduce database I/O.</span></li>
          <li style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}><span aria-hidden="true" style={{"flex":"none","marginTop":"9px","width":"9px","height":"9px","borderRadius":"50%","border":"1.5px solid #7CCBFF"}}></span><span>Implementing Redis-based solutions for high-throughput caching and distributed state management.</span></li>
          <li style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}><span aria-hidden="true" style={{"flex":"none","marginTop":"9px","width":"9px","height":"9px","borderRadius":"50%","border":"1.5px solid #7CCBFF"}}></span><span>Improving system reliability through structured error handling, health checks, and robust logging.</span></li>
          <li style={{"display":"flex","gap":"16px","alignItems":"flex-start"}}><span aria-hidden="true" style={{"flex":"none","marginTop":"9px","width":"9px","height":"9px","borderRadius":"50%","border":"1.5px solid #7CCBFF"}}></span><span>Working with cross-functional teams to deliver production features on schedule.</span></li>
        </ul>
        <div style={{"marginTop":"32px","display":"flex","flexWrap":"wrap","alignItems":"center","gap":"10px 16px"}}>
          <p style={{"margin":0,"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12px","letterSpacing":"0.14em","color":"#B4C7E4"}}>STACK</p>
          <ul style={{"margin":0,"padding":0,"listStyle":"none","display":"flex","flexWrap":"wrap","gap":"8px","fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12.5px","color":"#DCE7F7"}}>
            <li style={{"padding":"6px 12px","borderRadius":"999px","background":"rgba(255, 255, 255, 0.08)"}}>Java</li>
            <li style={{"padding":"6px 12px","borderRadius":"999px","background":"rgba(255, 255, 255, 0.08)"}}>Spring Boot</li>
            <li style={{"padding":"6px 12px","borderRadius":"999px","background":"rgba(255, 255, 255, 0.08)"}}>MySQL</li>
            <li style={{"padding":"6px 12px","borderRadius":"999px","background":"rgba(255, 255, 255, 0.08)"}}>Redis</li>
            <li style={{"padding":"6px 12px","borderRadius":"999px","background":"rgba(255, 255, 255, 0.08)"}}>Docker</li>
            <li style={{"padding":"6px 12px","borderRadius":"999px","background":"rgba(255, 255, 255, 0.08)"}}>REST APIs</li>
            <li style={{"padding":"6px 12px","borderRadius":"999px","background":"rgba(255, 255, 255, 0.08)"}}>Git</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
