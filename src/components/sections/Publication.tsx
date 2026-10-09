import { publicationData } from "@/data/education";

export function Publication() {
  return (
<article style={{"background":"#0C2A57","border":"1px solid rgba(164, 196, 240, 0.2)","borderRadius":"24px","padding":"clamp(26px, 3.4vw, 44px)","display":"flex","flexDirection":"column","gap":"16px"}}>
      <div style={{"display":"flex","alignItems":"baseline","gap":"14px","flexWrap":"wrap"}}>
        <span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"14px","color":"#7CCBFF"}}>06</span>
        <h2 style={{"margin":0,"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":700,"fontSize":"clamp(28px, 2.8vw, 36px)","letterSpacing":"-0.025em"}}>Research &amp; Publication</h2>
      </div>
      <p style={{"margin":"18px 0 0","fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"12.5px","letterSpacing":"0.1em","color":"#B4C7E4"}}>{publicationData.conferenceOrJournal.toUpperCase()} · {publicationData.year}</p>
      <h3 style={{"margin":0,"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":500,"fontSize":"clamp(22px, 2.1vw, 27px)","lineHeight":1.3,"letterSpacing":"-0.01em","textWrap":"pretty"}}>{publicationData.title}</h3>
      <p style={{"margin":0,"fontSize":"16px","color":"#B4C7E4"}}>{publicationData.authors}</p>
      <a href={publicationData.url} style={{"marginTop":"auto","alignSelf":"flex-start","display":"inline-flex","alignItems":"center","gap":"8px","minHeight":"44px","padding":"0 20px","borderRadius":"999px","background":"#FFFFFF","color":"#071D41","fontWeight":600,"fontSize":"15px","textDecoration":"none"}}>Read on IEEE Xplore <span aria-hidden="true">↗</span></a>
    </article>
  );
}
