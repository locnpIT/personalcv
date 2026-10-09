import { engineeringInterests } from "@/data/interests";

export function Interests() {
  return (
<section id="interests" style={{"background":"#0A2752","color":"#FFFFFF","padding":"clamp(72px, 9vw, 120px) 0"}}>
  <div style={{"maxWidth":"1200px","margin":"0 auto","padding":"0 clamp(16px, 4vw, 48px)","boxSizing":"border-box"}}>
    <div style={{"display":"flex","alignItems":"baseline","gap":"18px","flexWrap":"wrap"}}>
      <span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"14px","color":"#7CCBFF"}}>05</span>
      <h2 style={{"margin":0,"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":700,"fontSize":"clamp(38px, 4.6vw, 60px)","letterSpacing":"-0.03em","lineHeight":1}}>Engineering Interests</h2>
    </div>

    <ul style={{"margin":"56px 0 0","padding":0,"listStyle":"none","display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(min(320px, 100%), 1fr))","gap":"0 40px"}}>
      {engineeringInterests.map((interest, index) => (
<li key={interest.title} style={{"display":"flex","alignItems":"baseline","gap":"18px","padding":"26px 0","borderTop":"1px solid rgba(164, 196, 240, 0.24)"}}><span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12.5px","color":"#7CCBFF"}}>{String(index + 1).padStart(2, "0")}</span><span style={{"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":500,"fontSize":"23px","letterSpacing":"-0.015em","lineHeight":1.2}}>{interest.title}</span></li>
))}

    </ul>
  </div>
</section>
  );
}
