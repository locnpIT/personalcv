export function WaterTransition() {
  return (
<div aria-hidden="true" style={{"position":"relative","height":"clamp(360px, 38vw, 560px)","background":"#D7E6F8","overflow":"hidden","marginBottom":"-1px","touchAction":"pan-y"}}>
  <canvas data-lake="dive" style={{"position":"absolute","left":0,"top":0,"width":"100%","height":"100%","display":"block"}}></canvas>
  <div className="gl-fallback">
    <svg className="wave wv-back" viewBox="0 0 2880 120" preserveAspectRatio="none" style={{"position":"absolute","left":0,"bottom":0,"width":"200%","height":"120px"}}><path d="M0 50 Q360 18 720 50 T1440 50 T2160 50 T2880 50 V120 H0 Z" fill="#A6C1E8"></path></svg>
    <svg className="wave wv-mid" viewBox="0 0 2880 120" preserveAspectRatio="none" style={{"position":"absolute","left":0,"bottom":0,"width":"200%","height":"120px"}}><path d="M0 62 Q120 86 240 62 T480 62 T720 62 T960 62 T1200 62 T1440 62 T1680 62 T1920 62 T2160 62 T2400 62 T2640 62 T2880 62 V120 H0 Z" fill="#3C6BB3" fillOpacity="0.55"></path></svg>
    <svg className="wave wv-front" viewBox="0 0 2880 120" preserveAspectRatio="none" style={{"position":"absolute","left":0,"bottom":0,"width":"200%","height":"120px"}}><path d="M0 76 Q180 54 360 76 T720 76 T1080 76 T1440 76 T1800 76 T2160 76 T2520 76 T2880 76 V120 H0 Z" fill="#12407F"></path></svg>
  </div>
</div>
  );
}
