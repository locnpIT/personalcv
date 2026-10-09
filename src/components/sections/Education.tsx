import { educationData } from "@/data/education";

export function Education() {
  return (
<article id="education" style={{"background":"#0C2A57","border":"1px solid rgba(164, 196, 240, 0.2)","borderRadius":"24px","padding":"clamp(26px, 3.4vw, 44px)","display":"flex","flexDirection":"column","gap":"16px"}}>
      <div style={{"display":"flex","alignItems":"baseline","gap":"14px","flexWrap":"wrap"}}>
        <span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"14px","color":"#7CCBFF"}}>07</span>
        <h2 style={{"margin":0,"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":700,"fontSize":"clamp(28px, 2.8vw, 36px)","letterSpacing":"-0.025em"}}>Education</h2>
      </div>
      <p style={{"margin":"18px 0 0","fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12.5px","letterSpacing":"0.1em","color":"#B4C7E4"}}>{educationData.period}</p>
      <h3 style={{"margin":0,"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":500,"fontSize":"clamp(22px, 2.1vw, 27px)","lineHeight":1.3,"letterSpacing":"-0.01em"}}>{educationData.degree}</h3>
      <p style={{"margin":0,"fontSize":"16px","lineHeight":1.55,"color":"#B4C7E4"}}>{educationData.institution}</p>
      <div style={{"marginTop":"auto","paddingTop":"20px","borderTop":"1px solid rgba(164, 196, 240, 0.2)","display":"flex","alignItems":"baseline","flexWrap":"wrap","gap":"6px 14px"}}>
        <span style={{"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":700,"fontSize":"64px","lineHeight":1,"letterSpacing":"-0.04em","color":"#7CCBFF"}}>{educationData.gpa.split(" / ")[0]}</span>
        <span style={{"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontSize":"22px","color":"#B4C7E4"}}>/ {educationData.gpa.split(" / ")[1]}</span>
        <span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12px","letterSpacing":"0.14em","color":"#B4C7E4"}}>CUMULATIVE GPA</span>
      </div>
    </article>
  );
}
