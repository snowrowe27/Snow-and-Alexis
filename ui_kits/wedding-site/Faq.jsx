const { Button, Card, Badge, Illustration } = window.LexiSnowDesignSystem_f12512;
const QA=[
 ['DO I NEED TO RSVP NOW?','Nope. The card in your hands is the save-the-date. The formal invitation with the full schedule, meal choices and RSVP follows closer to the day.'],
 ['HOW DO I GET THERE?','Miami International (MIA) is about 20 minutes from the Grove. Fort Lauderdale (FLL) is often cheaper and roughly an hour out, worth a look if you’re coming from the Northeast.'],
 ['HOW DO I GET AROUND?',"Rideshare is easy and everywhere in Miami, so take one. You're going to want a drink, and nobody should be finding their car at midnight."],
 ["WHAT'S THE WEATHER LIKE IN APRIL?",'Sunny, mid 80s, breezy by dinner. Perfect, basically.']];
const BEACH=[
 ['LOEWS MIAMI BEACH HOTEL','sky','the splurge','Miami Beach · South Beach, on the sand','Big, polished and freshly renovated, right on the beach and a short walk to Lincoln Road.','https://www.loewshotels.com/miami-beach'],
 ['FONTAINEBLEAU MIAMI BEACH','garden','the icon','Miami Beach · Mid-Beach, LIV downstairs','The classic Miami Beach resort, with pools for days and LIV nightclub right in the building.','https://www.fontainebleau.com/'],
 ['FREEHAND MIAMI','sky','the fun one','Miami Beach · South Beach, home of Broken Shaker','Leafy and laid-back, with the Broken Shaker, one of the best bars in the country, right in the courtyard. Big personality, great value.','https://freehandhotels.com/miami/'],
 ['THE TONY HOTEL SOUTH BEACH','garden','budget-friendly','Miami Beach · South Beach, Art Deco charm','A cute Art Deco boutique hotel with a rooftop pool, steps from the beach. Great reviews for the price.','https://www.thetonyhotel.com/']];
const HOTELS=[
 ['MAYFAIR HOUSE HOTEL & GARDEN','garden','our pick','Our favorite for its boutique feel, beautiful design, and central Grove location.','https://www.mayfairhousemiami.com/'],
 ['COURTYARD BY MARRIOTT COCONUT GROVE','sky','the easy one','A more affordable option, still walkable to the Grove restaurants and shops.','https://www.marriott.com/en-us/hotels/miagv-courtyard-miami-coconut-grove/overview/']];
function Faq(){
 return <Section id="faq" tone="cream" style={{paddingBottom:'var(--space-6)'}}>
  <div style={{maxWidth:'var(--container-text)',margin:'0 auto',textAlign:'center'}}>
   <ScriptHeading script="Good questions" eyebrow="Most of you are flying in" title="EVERYTHING WE KNOW SO FAR"/>
   <p style={{fontSize:'var(--text-lede)',marginTop:18}}>We're still working out the final details. More will land here when the formal invitations go out.</p>
  </div>
  <div style={{maxWidth:900,margin:'var(--space-7) auto 0',display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
   {QA.map(([q,a])=>
    <Card key={q}>
     <div style={{fontFamily:'var(--font-display)',fontSize:'1.375rem',color:'var(--villa-green)'}}>{q}</div>
     <p style={{fontSize:17,color:'var(--ink-600)',margin:'8px 0 0'}}>{a}</p>
    </Card>)}
   <Card>
    <div style={{fontFamily:'var(--font-display)',fontSize:'1.375rem',color:'var(--villa-green)'}}>WHERE SHOULD WE STAY?</div>
    <div style={{marginTop:'var(--space-5)',background:'var(--bougain-200)',border:'1.5px solid var(--bougain-400)',borderRadius:'var(--radius-md)',padding:'var(--space-5) var(--space-6)'}}>
     <span style={{display:'inline-block',fontFamily:'var(--font-ui)',fontSize:12,fontWeight:600,letterSpacing:'.16em',textTransform:'uppercase',color:'var(--bougain-600)',background:'var(--cream-50)',border:'1px solid var(--bougain-400)',borderRadius:'var(--radius-pill)',padding:'5px 14px'}}>Option 1 · Where we'd stay</span>
     <div style={{fontFamily:'var(--font-display)',fontSize:'1.75rem',color:'var(--villa-green)',marginTop:12,lineHeight:1.1}}>MIAMI BEACH</div>
     <p style={{fontSize:17,color:'var(--ink-600)',margin:'10px 0 0'}}>For the true Miami experience, stay on the beach. We're planning a shuttle from Miami Beach to the villa, and the beach hotels are all close together, so getting to it will be easy wherever you stay.</p>
    </div>
    <p style={{fontSize:17,color:'var(--ink-600)',margin:'var(--space-6) 0 0',fontWeight:600}}>A few Miami Beach hotels we'd book, from splurge to wallet-friendly. Honestly though, there are a thousand great ones, so don't feel boxed in:</p>
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
   </Card>
  </div>
  <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
   <span aria-hidden="true" style={{display:'block',width:110,height:138,transform:'rotate(-5deg)',background:'var(--villa-green)',WebkitMaskImage:'url('+ILL+'/champagne-bottle.png)',maskImage:'url('+ILL+'/champagne-bottle.png)',WebkitMaskRepeat:'no-repeat',maskRepeat:'no-repeat',WebkitMaskPosition:'center',maskPosition:'center',WebkitMaskSize:'contain',maskSize:'contain'}}/>
  </div>
 </Section>;
}
window.Faq=Faq;
