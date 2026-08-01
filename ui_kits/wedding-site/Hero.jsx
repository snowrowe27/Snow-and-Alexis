const { Button, Illustration } = window.LexiSnowDesignSystem_f12512;
function Hero({go}){
 return <div id="top" style={{position:'relative',background:'var(--cream-100)',padding:'var(--space-8) var(--gutter-page) var(--space-7)',overflow:'hidden',textAlign:'center'}}>
  <Illustration name="disco-ball" basePath={ILL} size={104} rotate={4} sway style={{position:'absolute',top:8,left:'6%'}}/>
  <div style={{maxWidth:'var(--container-text)',margin:'0 auto'}}>
   <div style={{fontFamily:'var(--font-ui)',fontSize:13,letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:'var(--olive)'}}>You found us. Ready for a weekend in Miami?</div>
   <div style={{fontFamily:'var(--font-script)',fontSize:'clamp(2.25rem,4.6vw,3.25rem)',color:'var(--bougainvillea)',lineHeight:1.05,marginTop:6}}>We're getting married</div>
   <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2.75rem,7vw,5.75rem)',lineHeight:'var(--leading-tight)',margin:'10px 0 0',color:'var(--villa-green)'}}>MATTHEW <span style={{color:'var(--miami-orange)'}}>&amp;</span> ALEXIS</h1>
   <div style={{fontFamily:'var(--font-hand)',fontWeight:600,fontSize:'clamp(1.875rem,3vw,2.375rem)',color:'var(--orange-600)',marginTop:8}}>or Lexi &amp; Snow, if you know us</div>
  </div>
  <div style={{maxWidth:980,margin:'var(--space-7) auto 0'}}>
   <Photo name="venice-bridge" alt="Matthew and Alexis on a bridge over a Venice canal" ratio="16 / 10"/>
  </div>
  <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(1rem,1.8vw,1.375rem)',letterSpacing:'var(--tracking-caps)',marginTop:'var(--space-6)',color:'var(--olive)'}}>FRIDAY · APRIL 23, 2027 <span style={{color:'var(--butter-600)'}}>·</span> VILLA WOODBINE <span style={{color:'var(--butter-600)'}}>·</span> COCONUT GROVE, MIAMI</div>
  <div style={{display:'flex',gap:14,justifyContent:'center',marginTop:'var(--space-5)',flexWrap:'wrap'}}>
   <Button variant="primary" size="lg" onClick={()=>go('day')}>WHAT WE KNOW SO FAR</Button>
   <Button variant="outline" size="lg" onClick={()=>go('keep')}>GET UPDATES</Button>
  </div>
 </div>;
}
window.Hero=Hero;
