export function ArchitectureVisual() {
  return (
<figure className="float" style={{"position":"relative","margin":0,"background":"#FFFFFF","border":"1px solid #CFDDF1","borderRadius":"28px","padding":"20px","boxShadow":"0 48px 90px -48px rgba(10, 42, 100, 0.45)","fontFamily":"'JetBrains Mono', ui-monospace, Menlo, monospace"}}>
          <figcaption style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"center","gap":"8px 16px","padding":"2px 4px 14px","fontSize":"12px","color":"#3A4D68"}}>
            <span>sys-arch // cluster-node-01</span>
            <span style={{"display":"inline-flex","alignItems":"center","gap":"8px"}}><span style={{"width":"7px","height":"7px","borderRadius":"50%","background":"#1D56C9"}}></span>healthy (latency: ~0.8ms)</span>
          </figcaption>

          <div style={{"display":"flex","flexDirection":"column","gap":"8px"}}>
            <div style={{"background":"#E4EEFC","borderRadius":"18px","padding":"16px 18px","color":"#0A1A33"}}>
              <div style={{"fontSize":"11px","letterSpacing":"0.1em","color":"#2B4A7A"}}>L1 · EDGE INGRESS &amp; GATEWAY</div>
              <div style={{"marginTop":"6px","fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":600,"fontSize":"22px","letterSpacing":"-0.01em"}}>Cloudflare</div>
              <div style={{"marginTop":"4px","fontSize":"12px","lineHeight":1.55,"color":"#34465F"}}>TLS termination · Rate limit inspection · Anycast routing</div>
            </div>

            <div style={{"background":"#2F6BD8","borderRadius":"18px","padding":"16px 18px","color":"#FFFFFF"}}>
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","gap":"12px"}}>
                <div style={{"fontSize":"11px","letterSpacing":"0.1em","color":"#DCE8FC"}}>L2 · SPRING BOOT BACKEND CORE</div>
                <div style={{"fontSize":"10.5px","letterSpacing":"0.1em","padding":"4px 10px","borderRadius":"999px","background":"rgba(255, 255, 255, 0.18)"}}>ACTIVE</div>
              </div>
              <div style={{"marginTop":"6px","fontFamily":"'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif","fontWeight":600,"fontSize":"22px","letterSpacing":"-0.01em"}}>JVM / Java 21</div>
              <div style={{"marginTop":"4px","fontSize":"12px","lineHeight":1.55,"color":"#E3ECFC"}}>REST APIs · Concurrency Control · Business Invariants</div>
              <div style={{"marginTop":"14px","display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(min(96px, 100%), 1fr))","gap":"8px"}}>
                <div style={{"background":"rgba(255, 255, 255, 0.12)","borderRadius":"12px","padding":"10px 12px"}}><div style={{"fontSize":"10.5px","color":"#DCE8FC"}}>GC Pause</div><div style={{"marginTop":"3px","fontSize":"13.5px","fontWeight":500}}>&lt; 1.5ms</div></div>
                <div style={{"background":"rgba(255, 255, 255, 0.12)","borderRadius":"12px","padding":"10px 12px"}}><div style={{"fontSize":"10.5px","color":"#DCE8FC"}}>Thread Pool</div><div style={{"marginTop":"3px","fontSize":"13.5px","fontWeight":500}}>Non-blocking</div></div>
                <div style={{"background":"rgba(255, 255, 255, 0.12)","borderRadius":"12px","padding":"10px 12px"}}><div style={{"fontSize":"10.5px","color":"#DCE8FC"}}>Health</div><div style={{"marginTop":"3px","fontSize":"13.5px","fontWeight":500}}>UP (100%)</div></div>
              </div>
            </div>

            <div style={{"background":"#17489B","borderRadius":"18px","padding":"16px 18px","color":"#FFFFFF"}}>
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","gap":"12px"}}>
                <div style={{"fontSize":"11px","letterSpacing":"0.1em","color":"#CFDDF5"}}>L3 · REDIS MEMORY</div>
                <div style={{"fontSize":"12px","color":"#CFDDF5"}}>~0.4ms</div>
              </div>
              <div style={{"marginTop":"6px","fontSize":"12px","lineHeight":1.55,"color":"#E3ECFC"}}>Lua atomic scripts · Sliding window &amp; ZSET ranking</div>
              <div style={{"marginTop":"12px","display":"flex","alignItems":"center","gap":"12px"}}>
                <div style={{"flex":1,"height":"6px","borderRadius":"999px","background":"rgba(255, 255, 255, 0.16)","overflow":"hidden"}}><div style={{"width":"98.4%","height":"100%","borderRadius":"999px","background":"#7CCBFF"}}></div></div>
                <div style={{"fontSize":"11.5px","letterSpacing":"0.06em","whiteSpace":"nowrap"}}>CACHE HIT: 98.4%</div>
              </div>
            </div>

            <div style={{"background":"#0B2A5E","borderRadius":"18px","padding":"16px 18px","color":"#FFFFFF"}}>
              <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"center","gap":"8px 12px"}}>
                <div style={{"fontSize":"11px","letterSpacing":"0.1em","color":"#C2D3EE"}}>L4 · SQL STORAGE</div>
                <div style={{"display":"flex","gap":"6px","fontSize":"10.5px","letterSpacing":"0.08em"}}>
                  <span style={{"padding":"4px 10px","borderRadius":"999px","border":"1px solid rgba(194, 211, 238, 0.4)"}}>ACID ATOMIC</span>
                  <span style={{"padding":"4px 10px","borderRadius":"999px","border":"1px solid rgba(194, 211, 238, 0.4)"}}>Indexed</span>
                </div>
              </div>
              <div style={{"marginTop":"8px","fontSize":"12px","lineHeight":1.55,"color":"#DCE6F6"}}>Row-level locks (FOR UPDATE) · Covering B+ Tree indexes</div>
            </div>
          </div>

          <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","gap":"6px 16px","padding":"14px 4px 2px","fontSize":"11.5px","color":"#3A4D68"}}>
            <span>SYSTEM: rate_limiter.lua executed [OK: 0.32ms]</span>
            <span style={{"color":"#1D56C9","fontWeight":500}}>NOMINAL</span>
          </div>
        </figure>
  );
}
