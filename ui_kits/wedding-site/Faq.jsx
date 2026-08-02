const { Button, Card, Badge, Illustration } = window.LexiSnowDesignSystem_f12512;
const QA=[
 ['DO I NEED TO RSVP NOW?','Nope. The card in your hands is the save-the-date. The formal invitation with the full schedule, meal choices and RSVP follows closer to the day.'],
 ['HOW DO I GET THERE?','Miami International (MIA) is about 20 minutes from the Grove. Fort Lauderdale (FLL) is often cheaper and roughly an hour out, worth a look if you’re coming from the Northeast.'],
 ['HOW DO I GET AROUND?',"Rideshare is easy and everywhere in Miami, so take one. You're going to want a drink, and nobody should be finding their car at midnight."],
 ["WHAT'S THE WEATHER LIKE IN APRIL?",'Sunny, mid 80s, breezy by dinner. Perfect, basically.']];
const HOTELS=[
 ['MAYFAIR HOUSE HOTEL & GARDEN','garden','our pick','Our favorite for its boutique feel, beautiful design, and central Grove location.','https://www.mayfairhousemiami.com/'],
 ['COURTYARD BY MARRIOTT COCONUT GROVE','sky','the easy one','Kinder on the wallet and still walkable to the Grove restaurants and shops.','https://www.marriott.com/en-us/hotels/miagv-courtyard-miami-coconut-grove/overview/']];
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
    <p style={{fontSize:17,color:'var(--ink-600)',margin:'8px 0 0'}}>For the true Miami experience, stay on <strong style={{color:'var(--villa-green)'}}>Miami Beach</strong>. We're working on a room block now — and if you go this route, we're planning a shuttle to the villa from our block hotel. South Beach is walkable, so you can hop on wherever you land.</p>
    <p style={{fontSize:17,color:'var(--ink-600)',margin:'var(--space-5) 0 0',fontWeight:600}}>Or, if you'd like to stay near the venue, here are two great options — both about five minutes from Villa Woodbine:</p>
    <div className="ds-grid2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-4)',marginTop:'var(--space-4)'}}>
     {HOTELS.map(([n,tone,tag,desc,url])=>
      <div key={n} style={{border:'var(--border-ink)',borderRadius:'var(--radius-md)',padding:'var(--space-5)',display:'flex',flexDirection:'column',gap:8,alignItems:'flex-start'}}>
       <Badge tone={tone}>{tag}</Badge>
       <div style={{fontFamily:'var(--font-display)',fontSize:'1.1875rem',color:'var(--villa-green)',marginTop:4}}>{n}</div>
       <div style={{fontFamily:'var(--font-hand)',fontWeight:600,fontSize:'1.25rem',color:'var(--olive-600)',lineHeight:1.2}}>5 minutes from Villa Woodbine</div>
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
