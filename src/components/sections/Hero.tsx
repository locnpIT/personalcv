import { Navbar } from "@/components/layout/Navbar";
import { ArchitectureVisual } from "@/components/ui/ArchitectureVisual";

export function Hero() {
  return (
<section style={{"position":"relative","background":"#F4F8FD","overflow":"hidden"}}>
  <div aria-hidden="true" style={{"position":"absolute","inset":0,"pointerEvents":"none","zIndex":0}}>
    <canvas data-lake="hero" style={{"position":"absolute","left":0,"top":0,"width":"100%","height":"100%","display":"block"}}></canvas>
    <div className="gl-fallback">
    <div className="wd d1" style={{"left":"7%","top":"650px"}}><span className="wd-drop"></span><span className="wd-hit"></span><span className="wd-ring r1"></span><span className="wd-ring r2"></span><span className="wd-ring r3"></span><i className="wd-sp s1"></i><i className="wd-sp s2"></i><i className="wd-sp s3"></i><i className="wd-sp s4"></i><i className="wd-sp s5"></i></div>
    <div className="wd d2" style={{"left":"53%","top":"170px"}}><span className="wd-drop"></span><span className="wd-hit"></span><span className="wd-ring r1"></span><span className="wd-ring r2"></span><span className="wd-ring r3"></span><i className="wd-sp s1"></i><i className="wd-sp s2"></i><i className="wd-sp s3"></i><i className="wd-sp s4"></i><i className="wd-sp s5"></i></div>
    <div className="wd d3" style={{"left":"95%","top":"430px"}}><span className="wd-drop"></span><span className="wd-hit"></span><span className="wd-ring r1"></span><span className="wd-ring r2"></span><span className="wd-ring r3"></span><i className="wd-sp s1"></i><i className="wd-sp s2"></i><i className="wd-sp s3"></i><i className="wd-sp s4"></i><i className="wd-sp s5"></i></div>
    <div style={{"display":"contents"}}>
      <div className="wd d4" style={{"left":"30%","top":"800px"}}><span className="wd-drop"></span><span className="wd-hit"></span><span className="wd-ring r1"></span><span className="wd-ring r2"></span><span className="wd-ring r3"></span><i className="wd-sp s1"></i><i className="wd-sp s2"></i><i className="wd-sp s3"></i><i className="wd-sp s4"></i><i className="wd-sp s5"></i></div>
      <div className="wd d5" style={{"left":"3%","top":"330px"}}><span className="wd-drop"></span><span className="wd-hit"></span><span className="wd-ring r1"></span><span className="wd-ring r2"></span><span className="wd-ring r3"></span><i className="wd-sp s1"></i><i className="wd-sp s2"></i><i className="wd-sp s3"></i><i className="wd-sp s4"></i><i className="wd-sp s5"></i></div>
      <div className="wd d6" style={{"left":"97%","top":"820px"}}><span className="wd-drop"></span><span className="wd-hit"></span><span className="wd-ring r1"></span><span className="wd-ring r2"></span><span className="wd-ring r3"></span><i className="wd-sp s1"></i><i className="wd-sp s2"></i><i className="wd-sp s3"></i><i className="wd-sp s4"></i><i className="wd-sp s5"></i></div>
    </div>
    </div>
  </div>
  <Navbar />

  <div style={{"maxWidth":"1200px","margin":"0 auto","padding":"0 clamp(16px, 4vw, 48px)","boxSizing":"border-box","position":"relative","zIndex":1}}>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(min(460px, 100%), 1fr))","gap":"56px","alignItems":"center","padding":"56px 0 72px"}}>

      <div style={{"position":"relative","zIndex":2,"display":"flex","flexDirection":"column","alignItems":"flex-start","minWidth":0}}>
        <p style={{"margin":0,"display":"inline-flex","alignItems":"center","gap":"10px","padding":"8px 16px 8px 12px","borderRadius":"999px","background":"#FFFFFF","border":"1px solid #C9DAF1","fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12.5px","color":"#22344F"}}>
          <span style={{"width":"8px","height":"8px","borderRadius":"50%","background":"#1D56C9","boxShadow":"0 0 0 4px #D6E4F8"}}></span>
          Available for Backend Engineering Roles
        </p>
        <h1 style={{"margin":"30px 0 0","fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":700,"fontSize":"clamp(52px, 8.2vw, 112px)","lineHeight":0.92,"letterSpacing":"-0.04em","color":"#0A1A33"}}>
          <span style={{"display":"block"}}>Nguyen</span>
          <span style={{"display":"block"}}>Phuoc Loc<span className="drip" style={{"color":"#1D56C9"}}><span className="drip-dot">.</span><i className="drip-drop"></i><i className="drip-ring"></i><i className="drip-ring r2"></i></span></span>
        </h1>
        <p style={{"margin":"26px 0 0","fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":600,"fontSize":"clamp(22px, 2.3vw, 30px)","letterSpacing":"-0.015em","color":"#1D56C9"}}>Backend Software Engineer</p>
        <p style={{"margin":"14px 0 0","fontSize":"19px","lineHeight":1.6,"color":"#34465F","maxWidth":"32ch","textWrap":"pretty"}}>I build reliable backend systems with Java, Spring Boot, Redis and SQL.</p>
        <p style={{"margin":"18px 0 0","display":"flex","flexWrap":"wrap","alignItems":"center","gap":"8px 18px","fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"13px","color":"#3A4D68"}}>
          <span style={{"display":"inline-flex","alignItems":"center","gap":"6px"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"></path><circle cx="12" cy="10" r="2.3"></circle></svg>Da Nang, Vietnam</span>
          <span>Open to remote</span>
        </p>
        <div style={{"marginTop":"34px","display":"flex","flexWrap":"wrap","gap":"12px"}}>
          <a href="#projects" style={{"display":"inline-flex","alignItems":"center","gap":"10px","minHeight":"54px","padding":"0 28px","borderRadius":"999px","background":"#1D56C9","color":"#FFFFFF","textDecoration":"none","fontWeight":600,"fontSize":"16px"}}>View My Work <span aria-hidden="true">→</span></a>
          <a href="#contact" style={{"display":"inline-flex","alignItems":"center","minHeight":"54px","padding":"0 28px","borderRadius":"999px","border":"1.5px solid #0A1A33","color":"#0A1A33","textDecoration":"none","fontWeight":600,"fontSize":"16px","boxSizing":"border-box"}}>Let&apos;s Talk</a>
        </div>
      </div>

      <div style={{"position":"relative","minWidth":0,"perspective":"1200px"}}>
        <div data-tilt="panel" style={{"position":"relative","transition":"transform 0.5s cubic-bezier(0.2, 0.7, 0.3, 1)","transformStyle":"preserve-3d"}}>
        <ArchitectureVisual />
        </div>
      </div>
    </div>

    <div style={{"position":"relative","zIndex":2,"borderTop":"1px solid #D3E0F2","padding":"28px 0 56px","display":"flex","flexWrap":"wrap","alignItems":"center","gap":"14px 24px"}}>
      <p style={{"margin":0,"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12px","letterSpacing":"0.14em","color":"#3A4D68"}}>CORE TECHNOLOGIES</p>
      <ul style={{"margin":0,"padding":0,"listStyle":"none","display":"flex","flexWrap":"wrap","gap":"8px","fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"13.5px","color":"#0A1A33"}}>
        <li style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","border":"1px solid #CBDBF0"}}>Java</li>
        <li style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","border":"1px solid #CBDBF0"}}>Spring Boot</li>
        <li style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","border":"1px solid #CBDBF0"}}>MySQL</li>
        <li style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","border":"1px solid #CBDBF0"}}>PostgreSQL</li>
        <li style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","border":"1px solid #CBDBF0"}}>Redis</li>
        <li style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","border":"1px solid #CBDBF0"}}>MongoDB</li>
        <li style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","border":"1px solid #CBDBF0"}}>Docker</li>
        <li style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","border":"1px solid #CBDBF0"}}>AWS</li>
        <li style={{"padding":"8px 14px","borderRadius":"999px","background":"#FFFFFF","border":"1px solid #CBDBF0"}}>Cloudflare</li>
      </ul>
    </div>
  </div>
</section>
  );
}
