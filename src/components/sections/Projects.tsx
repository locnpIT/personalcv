import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
<section id="projects" style={{"position":"relative","overflow":"hidden","background":"#12407F","color":"#FFFFFF","padding":"clamp(72px, 9vw, 120px) 0"}}>
  <div aria-hidden="true" style={{"position":"absolute","inset":0,"pointerEvents":"none"}}>
    <span className="bub b1" style={{"left":"3%","width":"10px","height":"10px"}}></span>
    <span className="bub b2" style={{"left":"15%","width":"6px","height":"6px"}}></span>
    <span className="bub b3" style={{"left":"49%","width":"14px","height":"14px"}}></span>
    <span className="bub b4" style={{"left":"51%","width":"7px","height":"7px"}}></span>
    <span className="bub b5" style={{"left":"78%","width":"9px","height":"9px"}}></span>
    <span className="bub b6" style={{"left":"96%","width":"12px","height":"12px"}}></span>
    <span className="bub b7" style={{"left":"34%","width":"5px","height":"5px"}}></span>
  </div>
  <div style={{"position":"relative","zIndex":1,"maxWidth":"1200px","margin":"0 auto","padding":"0 clamp(16px, 4vw, 48px)","boxSizing":"border-box"}}>
    <div style={{"display":"flex","alignItems":"baseline","gap":"18px","flexWrap":"wrap"}}>
      <span style={{"fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace","fontSize":"14px","color":"#7CCBFF"}}>03</span>
      <h2 style={{"margin":0,"fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":700,"fontSize":"clamp(38px, 4.6vw, 60px)","letterSpacing":"-0.03em","lineHeight":1}}>Selected Engineering Work</h2>
    </div>

    <div style={{"marginTop":"56px","display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(min(500px, 100%), 1fr))","gap":"20px"}}>
      {projectsData.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}

    </div>
  </div>
</section>
  );
}
