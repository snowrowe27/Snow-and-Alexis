const { Illustration } = window.LexiSnowDesignSystem_f12512;
function SiteFooter({go}){
 return <footer style={{background:'var(--villa-green)',color:'var(--villa-cream)',textAlign:'center',padding:'var(--space-9) var(--gutter-page) var(--space-7)'}}>
  <div style={{fontFamily:'var(--font-display-outline)',fontSize:'clamp(2.75rem,8.5vw,6.5rem)',lineHeight:1,letterSpacing:'.02em'}}>SEE YOU IN MIAMI</div>
  <Illustration name="monogram-bow" basePath={ILL} size={110} rotate={0} style={{margin:'22px auto 0',filter:'invert(1)'}}/>
  <div style={{fontFamily:'var(--font-script)',fontSize:'clamp(2.25rem,5vw,3.5rem)',lineHeight:1.05,marginTop:14}}>Matthew &amp; Alexis</div>
  <div style={{fontFamily:'var(--font-display)',fontSize:'1rem',letterSpacing:'var(--tracking-caps)',color:'var(--garden-200)',marginTop:12}}>APRIL 23, 2027 · VILLA WOODBINE · COCONUT GROVE, MIAMI</div>
  <nav style={{display:'flex',gap:'var(--space-6)',justifyContent:'center',flexWrap:'wrap',marginTop:'var(--space-6)'}}>
   {[['day','The day'],['faq','Good questions'],['photos','Photos'],['keep','Get updates']].map(([v,l])=>
    <a key={v} href={'#'+v} onClick={e=>{e.preventDefault();go(v);}} style={{fontFamily:'var(--font-body)',fontSize:19,color:'var(--villa-cream)',textDecoration:'none'}}>{l}</a>)}
   <a href="story.html" style={{fontFamily:'var(--font-body)',fontSize:19,color:'var(--villa-cream)',textDecoration:'none'}}>Our story</a>
  </nav>
  <div style={{fontSize:15,color:'var(--garden-200)',marginTop:'var(--space-7)'}}>Registry &amp; RSVP coming with the invitation · #MatthewAndAlexis</div>
 </footer>;
}
window.SiteFooter=SiteFooter;
