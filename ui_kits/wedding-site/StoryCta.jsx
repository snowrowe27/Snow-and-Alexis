const { Button, Illustration } = window.LexiSnowDesignSystem_f12512;
function StoryCta(){
 return <Section tone="card" style={{paddingTop:'var(--space-5)',paddingBottom:'var(--space-8)'}}>
  <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'var(--space-6)',flexWrap:'wrap',textAlign:'center'}}>
   <Illustration name="cupid" basePath={ILL} size={100} rotate={-6}/>
   <div>
    <div style={{fontFamily:'var(--font-script)',fontSize:'clamp(2rem,4vw,2.75rem)',color:'var(--bougainvillea)',lineHeight:1.05}}>Our story</div>
    <p style={{fontSize:'var(--text-body-lg)',margin:'6px 0 16px',maxWidth:'46ch'}}>We ran into each other on vacation. Neither of us has left since.</p>
    <Button variant="outline" size="lg" href="story.html">READ THE LONG VERSION</Button>
   </div>
   <Illustration name="record-player" basePath={ILL} size={110} rotate={5}/>
  </div>
 </Section>;
}
window.StoryCta=StoryCta;
