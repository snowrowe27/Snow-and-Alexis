const { Button, Card, Badge, Illustration } = window.LexiSnowDesignSystem_f12512;
const QA=[
 ['HOW DO I RSVP?','Right here on the site, by February 1, 2027. Use the RSVP form above to let us know if you can make it, who\'s coming and what they\'d like for dinner.'],
 ['WHAT SHOULD I WEAR?',<span>Garden party formal: bold, bright colors and be as extra as you want. It's a garden, so maybe skip the stilettos. <a href="https://pin.it/4PigzV81V" target="_blank" rel="noopener" style={{color:'var(--bougain-600)',fontWeight:600,textUnderlineOffset:3}}>See our outfit inspo board ↗</a></span>],
 ['HOW DO I GET THERE?','Fly into Miami International (MIA). It’s about 20 minutes to Miami Beach or Coconut Grove. Fort Lauderdale (FLL) is often cheaper and about 45 minutes to an hour away.'],
 ['HOW DO I GET AROUND?',"Rideshare is easy and everywhere in Miami, so take one. You're going to want a drink, and nobody should be finding their car at midnight."],
 ["WHAT'S THE WEATHER LIKE IN APRIL?",'Sunny, mid 80s, breezy by dinner. Perfect, basically.']];
const BEACH=[
 ['LOEWS MIAMI BEACH HOTEL','sky','the splurge','Miami Beach · South Beach, on the sand','Big, polished and freshly renovated, right on the beach and a short walk to Lincoln Road.','https://www.loewshotels.com/miami-beach'],
 ['FONTAINEBLEAU MIAMI BEACH','garden','the icon','Miami Beach · Mid-Beach, LIV downstairs','The classic Miami Beach resort, with pools for days and LIV, home of our after party, right in the building.','https://www.fontainebleau.com/'],
 ['GRAND BEACH HOTEL','pink','on the sand','Miami Beach · Mid-Beach, pink umbrellas on the sand','Bright, roomy and right on the beach, with three pools and rows of those famous pink umbrellas. A great middle ground between splurge and budget.','https://www.grandbeachhotel.com/miami-beach'],
 ['FREEHAND MIAMI','butter','fun + budget-friendly','Miami Beach · Mid-Beach, home of Broken Shaker','Leafy and laid-back, with the Broken Shaker, one of the best bars in the country, right in the courtyard. Big personality, great value. Book a king for two, or grab a bunk room and split it with friends.','https://freehandhotels.com/miami/']];
const HOTELS=[
 ['MAYFAIR HOUSE HOTEL & GARDEN','garden','our pick','Our favorite for its boutique feel, beautiful design, and central Grove location.','https://www.mayfairhousemiami.com/'],
 ['COURTYARD BY MARRIOTT COCONUT GROVE','sky','the easy one','A more affordable option, still walkable to the Grove restaurants and shops.','https://www.marriott.com/en-us/hotels/miagv-courtyard-miami-coconut-grove/overview/']];
function WhereToStay(){
 return <Section id="stay" tone="card">
  <div style={{maxWidth:'var(--container-text)',margin:'0 auto',textAlign:'center'}}>
   <ScriptHeading script="Where to stay" eyebrow="Most of you are flying in" title="MIAMI BEACH OR COCONUT GROVE"/>
  </div>
  <div style={{maxWidth:900,margin:'var(--space-7) auto 0'}}>
    <div style={{background:'var(--bougain-200)',border:'1.5px solid var(--bougain-400)',borderRadius:'var(--radius-md)',padding:'var(--space-5) var(--space-6)'}}>
     <span style={{display:'inline-block',fontFamily:'var(--font-ui)',fontSize:12,fontWeight:600,letterSpacing:'.16em',textTransform:'uppercase',color:'var(--bougain-600)',background:'var(--cream-50)',border:'1px solid var(--bougain-400)',borderRadius:'var(--radius-pill)',padding:'5px 14px'}}>Option 1 · Where we'd stay</span>
     <div style={{fontFamily:'var(--font-display)',fontSize:'1.75rem',color:'var(--villa-green)',marginTop:12,lineHeight:1.1}}>MIAMI BEACH</div>
     <p style={{fontSize:17,color:'var(--ink-600)',margin:'10px 0 0'}}>For the true Miami experience, stay on the beach. We're planning a shuttle from Miami Beach to the villa, and the beach hotels are all close together, so getting to it will be easy wherever you stay.</p>
    </div>
    <p style={{fontSize:17,color:'var(--ink-600)',margin:'var(--space-6) 0 0',fontWeight:600}}>A few Miami Beach hotels we'd book, from splurge to wallet-friendly. Honestly though, there are a thousand great ones, so don't feel boxed in. Miami fills up fast in April, so book early!</p>
    <div className="ds-grid2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-4)',marginTop:'var(--space-4)'}}>
     {BEACH.map(([n,tone,tag,loc,desc,url])=>
      <div key={n} style={{border:'var(--border-ink)',borderRadius:'var(--radius-md)',padding:'var(--space-5)',display:'flex',flexDirection:'column',gap:8,alignItems:'flex-start'}}>
       <Badge tone={tone}>{tag}</Badge>
       <div style={{fontFamily:'var(--font-display)',fontSize:'1.1875rem',color:'var(--villa-green)',marginTop:4}}>{n}</div>
       <div style={{fontFamily:'var(--font-hand)',fontWeight:600,fontSize:'1.25rem',color:'var(--olive-600)',lineHeight:1.2}}>{loc}</div>
       <p style={{fontSize:16,color:'var(--ink-600)',margin:'2px 0 12px'}}>{desc}</p>
       <Button size="sm" variant="outline" href={url} target="_blank" rel="noopener" style={{marginTop:'auto'}}>HAVE A LOOK</Button>
      </div>)}
    </div>
    <div style={{marginTop:'var(--space-7)',background:'var(--sage-100)',border:'1.5px solid var(--sage-300)',borderRadius:'var(--radius-md)',padding:'var(--space-5) var(--space-6)'}}>
     <span style={{display:'inline-block',fontFamily:'var(--font-ui)',fontSize:12,fontWeight:600,letterSpacing:'.16em',textTransform:'uppercase',color:'var(--sage-600)',background:'var(--cream-50)',border:'1px solid var(--sage-300)',borderRadius:'var(--radius-pill)',padding:'5px 14px'}}>Option 2 · Near the venue</span>
     <div style={{fontFamily:'var(--font-display)',fontSize:'1.75rem',color:'var(--villa-green)',marginTop:12,lineHeight:1.1}}>COCONUT GROVE</div>
     <p style={{fontSize:17,color:'var(--ink-600)',margin:'10px 0 0'}}>Prefer to be close to the party? The Grove is leafy and walkable, and these two are about 5 minutes from Villa Woodbine.</p>
    </div>
    <div className="ds-grid2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-4)',marginTop:'var(--space-4)'}}>
     {HOTELS.map(([n,tone,tag,desc,url])=>
      <div key={n} style={{border:'var(--border-ink)',borderRadius:'var(--radius-md)',padding:'var(--space-5)',display:'flex',flexDirection:'column',gap:8,alignItems:'flex-start'}}>
       <Badge tone={tone}>{tag}</Badge>
       <div style={{fontFamily:'var(--font-display)',fontSize:'1.1875rem',color:'var(--villa-green)',marginTop:4}}>{n}</div>
       <div style={{fontFamily:'var(--font-hand)',fontWeight:600,fontSize:'1.25rem',color:'var(--olive-600)',lineHeight:1.2}}>Coconut Grove · 5 min from the villa</div>
       <p style={{fontSize:16,color:'var(--ink-600)',margin:'2px 0 12px'}}>{desc}</p>
       <Button size="sm" variant="outline" href={url} target="_blank" rel="noopener" style={{marginTop:'auto'}}>HAVE A LOOK</Button>
      </div>)}
    </div>
  </div>
 </Section>;
}
window.WhereToStay=WhereToStay;

function Faq(){
 return <Section id="faq" tone="cream" style={{paddingBottom:'var(--space-6)'}}>
  <div style={{maxWidth:'var(--container-text)',margin:'0 auto',textAlign:'center'}}>
   <ScriptHeading script="Good questions" eyebrow="The fine print" title="EVERYTHING YOU NEED TO KNOW"/>
   <p style={{fontSize:'var(--text-lede)',marginTop:18}}>Still wondering about something? Just text us.</p>
  </div>
  <div style={{maxWidth:900,margin:'var(--space-7) auto 0',display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
   {QA.map(([q,a])=>
    <Card key={q}>
     <div style={{fontFamily:'var(--font-display)',fontSize:'1.375rem',color:'var(--villa-green)'}}>{q}</div>
     <p style={{fontSize:17,color:'var(--ink-600)',margin:'8px 0 0'}}>{a}</p>
    </Card>)}
  </div>
  <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
   <span aria-hidden="true" style={{display:'block',width:110,height:138,transform:'rotate(-5deg)',background:'var(--villa-green)',WebkitMaskImage:'url('+ILL+'/champagne-bottle.png)',maskImage:'url('+ILL+'/champagne-bottle.png)',WebkitMaskRepeat:'no-repeat',maskRepeat:'no-repeat',WebkitMaskPosition:'center',maskPosition:'center',WebkitMaskSize:'contain',maskSize:'contain'}}/>
  </div>
 </Section>;
}
window.Faq=Faq;
