import Link from "next/link";

export function Footer() {
  return (
<footer style={{"background":"#020A1A","color":"#9DB2D2"}}>
  <div style={{"maxWidth":"1200px","margin":"0 auto","padding":"28px clamp(16px, 4vw, 48px)","boxSizing":"border-box","display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"center","gap":"12px 32px","fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12.5px"}}>
    <span>Nguyen Phuoc Loc — Backend Software Engineer · Da Nang, Vietnam</span>
    <nav aria-label="Footer" style={{"display":"flex","flexWrap":"wrap","gap":"0 22px"}}>
      <a href="https://github.com/locnpIT" style={{"color":"#C9D7EC","textDecoration":"none","padding":"12px 0"}}>GitHub</a>
      <a href="https://www.linkedin.com/in/loc-nguyen-phuoc-82247a294/" style={{"color":"#C9D7EC","textDecoration":"none","padding":"12px 0"}}>LinkedIn</a>
      <Link href="/#top" style={{"color":"#C9D7EC","textDecoration":"none","padding":"12px 0"}}>Back to top ↑</Link>
    </nav>
  </div>
</footer>
  );
}
