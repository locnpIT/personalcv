import Link from "next/link";

export function Navbar() {
  return (
<header style={{"maxWidth":"1200px","margin":"0 auto","padding":"22px clamp(16px, 4vw, 48px)","boxSizing":"border-box","display":"flex","flexWrap":"wrap","alignItems":"center","justifyContent":"space-between","gap":"12px 32px","position":"relative","zIndex":2}}>
    <Link href="/#top" style={{"display":"flex","alignItems":"center","gap":"12px","textDecoration":"none","color":"#0A1A33","minHeight":"44px"}}>
      <span style={{"width":"38px","height":"38px","borderRadius":"50%","background":"#1D56C9","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center"}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2.8c3.6 4.5 6.6 8.2 6.6 11.8a6.6 6.6 0 0 1-13.2 0c0-3.6 3-7.3 6.6-11.8z"></path><path d="M9 15.2a3 3 0 0 0 3 3"></path></svg>
      </span>
      <span style={{"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":700,"fontSize":"20px","letterSpacing":"-0.01em"}}>Phuoc Loc</span>
    </Link>
    <nav aria-label="Primary" style={{"display":"flex","flexWrap":"wrap","alignItems":"center","gap":"0 26px","fontSize":"15px","fontWeight":500}}>
      <Link href="/#about" style={{"color":"#22344F","textDecoration":"none","padding":"12px 0"}}>About</Link>
      <Link href="/#services" style={{"color":"#22344F","textDecoration":"none","padding":"12px 0"}}>What I Do</Link>
      <Link href="/#projects" style={{"color":"#22344F","textDecoration":"none","padding":"12px 0"}}>Projects</Link>
      <Link href="/#experience" style={{"color":"#22344F","textDecoration":"none","padding":"12px 0"}}>Experience</Link>
      <Link href="/#interests" style={{"color":"#22344F","textDecoration":"none","padding":"12px 0"}}>Interests</Link>
      <Link href="/#contact" style={{"color":"#22344F","textDecoration":"none","padding":"12px 0"}}>Contact</Link>
    </nav>
    <div style={{"display":"flex","flexWrap":"wrap","gap":"8px"}}>
      <a href="https://github.com/locnpIT" style={{"display":"inline-flex","alignItems":"center","gap":"6px","minHeight":"44px","padding":"0 16px","borderRadius":"999px","border":"1px solid #C3D5EE","background":"#FFFFFF","color":"#0A1A33","textDecoration":"none","fontSize":"14px","fontWeight":600}}>GitHub <span aria-hidden="true">↗</span></a>
      <a href="https://www.linkedin.com/in/loc-nguyen-phuoc-82247a294/" style={{"display":"inline-flex","alignItems":"center","gap":"6px","minHeight":"44px","padding":"0 16px","borderRadius":"999px","border":"1px solid #C3D5EE","background":"#FFFFFF","color":"#0A1A33","textDecoration":"none","fontSize":"14px","fontWeight":600}}>LinkedIn <span aria-hidden="true">↗</span></a>
    </div>
  </header>
  );
}
