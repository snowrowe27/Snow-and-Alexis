const NSDay=window.LexiSnowDesignSystem_f12512;
const StripeSurfaceDay=NSDay.StripeSurface||function({tone,direction,scale,rounded,as='div',children,style,...p}){
 const F={sage:'var(--stripe-soft-sage)',butter:'var(--stripe-soft-butter)',sky:'var(--stripe-soft-sky)',pink:'var(--stripe-soft-pink)',green:'var(--stripe-soft-green)'};
 return React.createElement(as,{style:{backgroundImage:F[tone]||F.sage,backgroundSize:'68px 68px',position:'relative',...(rounded?{borderRadius:'var(--radius-lg)',overflow:'hidden'}:{}),...style},...p},children);
};
const { Badge, Card, Illustration } = NSDay;
const RUN=[['5:30','Ceremony','cupid'],['6:00','Cocktail hour','champagne-tower'],['7:00','Dinner','banquet-table'],['8:45','Dancing!','disco-ball'],['11:00','Afterparty??','record-player']];
function TheDay(){
 return <React.Fragment>
  <Section id="day" tone="cream" style={{paddingTop:'var(--space-6)'}}>
   <div style={{maxWidth:'var(--container-text)',margin:'0 auto',textAlign:'center'}}>
    <Illustration name="villa-woodbine" basePath={ILL} size={430} rotate={0} style={{margin:'0 auto 4px',maxWidth:'100%'}}/>
    <ScriptHeading script="The day" eyebrow="Friday · April 23, 2027" title="VILLA WOODBINE, COCONUT GROVE"/>
    <p style={{fontSize:'var(--text-lede)',marginTop:20}}>A garden wedding at a 1930s Mediterranean villa, a block from Biscayne Bay. Ceremony and reception are both on site, so settle in for the night.</p>
   </div>
   <style>{".placeCard{display:block;height:100%;transition:transform .18s ease}.placeCard:hover{transform:translateY(-3px)}.placeCard:hover .placeLink{text-decoration:underline;text-underline-offset:4px}"}</style>
   <div className="ds-grid3" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)',marginTop:'var(--space-7)'}}>
    {[['THE PLACE','garden','Villa Woodbine','Coconut Grove, Miami','https://www.villa-woodbine.com/'],
      ['THE TIMING','butter','Doors at 5:00 pm','Ceremony at 5:30 sharp'],
      ['THE DRESS CODE','pink','Garden party formal','Be as extra as you want']].map(([k,tone,t,script,url])=>{
     const body=<Card style={{textAlign:'center',height:'100%'}}>
      <Badge tone={tone}>{k}</Badge>
      <div className={url?'placeLink':undefined} style={{fontFamily:'var(--font-display)',fontSize:'1.625rem',marginTop:12,color:'var(--villa-green)',lineHeight:1.15,minHeight:'2.3em',display:'flex',alignItems:'center',justifyContent:'center'}}>{t.toUpperCase()}</div>
      <div style={{fontFamily:'var(--font-script)',fontSize:26,color:'var(--bougainvillea)',lineHeight:1.2,marginTop:6,minHeight:'2.4em'}}>{script}</div>
     </Card>;
     return url
       ? <a key={k} className="placeCard" href={url} target="_blank" rel="noopener" style={{textDecoration:'none',color:'inherit'}}>{body}</a>
       : <div key={k} style={{height:'100%'}}>{body}</div>;
    })}
   </div>
  </Section>

  <StripeSurfaceDay as="section" tone="sage" style={{padding:'var(--space-9) var(--gutter-page)'}}>
   <div style={{maxWidth:760,margin:'0 auto'}}>
    <div style={{textAlign:'center'}}><span style={{display:'inline-block',fontFamily:'var(--font-ui)',fontSize:18,fontWeight:500,letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:'var(--bougain-600)',background:'var(--cream-50)',border:'2px solid var(--bougainvillea)',borderRadius:'var(--radius-pill)',padding:'14px 34px'}}>How the evening goes</span></div>
    <div style={{marginTop:22}}>
     {RUN.map(([t,label,ill])=>
      <div key={t} className="ds-runrow" style={{display:'grid',gridTemplateColumns:'132px 1fr 84px',gap:20,alignItems:'center',padding:'18px 28px',borderBottom:'1px solid var(--border-hairline)'}}>
       <div className="ds-runtime" style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.875rem,3.4vw,2.5rem)',color:'var(--olive)',letterSpacing:'.04em'}}>{t}</div>
       <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.6rem,3vw,2.125rem)',color:'var(--villa-green)',lineHeight:1.15}}>{label.toUpperCase()}</div>
       <span aria-hidden="true" className="ds-runicon" style={{justifySelf:'end',width:72,height:72,display:'block',transform:'rotate(-3deg)',background:'var(--villa-green)',WebkitMaskImage:'url('+ILL+'/'+ill+'.png)',maskImage:'url('+ILL+'/'+ill+'.png)',WebkitMaskRepeat:'no-repeat',maskRepeat:'no-repeat',WebkitMaskPosition:'center',maskPosition:'center',WebkitMaskSize:'contain',maskSize:'contain'}}/>
      </div>)}
    </div>
    <div style={{marginTop:30,background:'var(--cream-50)',border:'1.5px solid var(--miami-orange)',borderRadius:'var(--radius-lg)',padding:'var(--space-5) var(--space-6)'}}><p style={{fontFamily:'var(--font-hand)',fontWeight:600,fontSize:'clamp(1.875rem,3.2vw,2.5rem)',lineHeight:1.25,color:'var(--orange-600)',textAlign:'center',margin:0}}>Villa Woodbine kicks us out at 11, rude. If you're still standing and want to keep the party going, stick with us. We know a place. That's all we're saying.</p></div>
   </div>
  </StripeSurfaceDay>
 </React.Fragment>;
}
window.TheDay=TheDay;
