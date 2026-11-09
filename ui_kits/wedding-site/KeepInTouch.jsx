const NSKeep=window.LexiSnowDesignSystem_f12512;
const StripeSurfaceKeep=NSKeep.StripeSurface||function({tone,direction,scale,rounded,as='div',children,style,...p}){
 const F={sage:'var(--stripe-soft-sage)',butter:'var(--stripe-soft-butter)',sky:'var(--stripe-soft-sky)',pink:'var(--stripe-soft-pink)',green:'var(--stripe-soft-green)'};
 return React.createElement(as,{style:{backgroundImage:F[tone]||F.sage,backgroundSize:'68px 68px',position:'relative',...(rounded?{borderRadius:'var(--radius-lg)',overflow:'hidden'}:{}),...style},...p},children);
};
const { Button, Card, Field, Input, Textarea, Select, Dialog, StripeRule, Illustration } = NSKeep;

// Flip to true when formal invitations go out. Save-the-date phase only
// collects name, email and a song; RSVP mode adds attending / party size /
// note / photo. (When re-opening RSVP, also restore the "RSVP" nav label in
// index.html.)
const RSVP_OPEN = true;
// Shown under the RSVP heading and above the send button.
const RSVP_BY = 'February 1, 2027';

// Lazily create one Supabase client for the page.
function sbClient(){
 if(window.__sb) return window.__sb;
 if(!window.supabase||!window.SUPA_URL||!window.SUPA_KEY) return null;
 window.__sb=window.supabase.createClient(window.SUPA_URL,window.SUPA_KEY);
 return window.__sb;
}

// Dinner options. `value` is what lands in the database's `meals` column.
const MEALS=[
 {value:'chicken',label:'Roasted Sage Chicken',desc:'Marcona almond gremolata, pan jus, baby vegetables and tri-color fingerling potatoes.'},
 {value:'steak',label:'Churrasco Steak',desc:'Red pepper chimichurri, herb-roasted new potatoes and haricots verts. Gluten-free.'},
 {value:'veg',label:'Pumpkin Ravioli',desc:'Sage brown butter. Vegetarian.'}];

function KeepInTouch(){
 const [name,setName]=React.useState('');
 const [shuttle,setShuttle]=React.useState(''); // '' | 'yes' | 'no' | 'unsure'
 const [party,setParty]=React.useState([{name:'',meal:''}]); // one entry per guest; [0] is the person filling the form
 const [email,setEmail]=React.useState('');
 const [attending,setAttending]=React.useState(null); // null | true | false
 const [guests,setGuests]=React.useState('1');
 const [song,setSong]=React.useState('');
 const [message,setMessage]=React.useState('');
 const [photo,setPhoto]=React.useState(null);
 const [errs,setErrs]=React.useState({});
 const [busy,setBusy]=React.useState(false);
 const [sendErr,setSendErr]=React.useState('');
 const [open,setOpen]=React.useState(false);
 const fileRef=React.useRef(null);

 function validate(){
  const e={};
  if(!name.trim()) e.name='We need a name to put on the list.';
  if(!email.trim()) e.email='Leave an email so we can reach you.';
  else if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) e.email='That email looks off. Mind checking it?';
  if(RSVP_OPEN && attending===null) e.attending='Let us know if you can make it.';
  if(RSVP_OPEN && attending===true){
   party.forEach((g,i)=>{
    if(i>0 && !g.name.trim()) e['pn'+i]='Who are we seating here?';
    if(!g.meal) e['pm'+i]='Pick a dinner.';
   });
   if(!shuttle) e.shuttle='Let us know about the shuttle.';
  }
  setErrs(e);
  return Object.keys(e).length===0;
 }

 async function submit(){
  setSendErr('');
  if(!validate()) return;
  const sb=sbClient();
  if(!sb){ setSendErr("We couldn't reach the server. Please refresh and try again."); return; }
  setBusy(true);
  try{
   let photo_url=null;
   if(RSVP_OPEN && photo){
    const clean=photo.name.replace(/[^a-zA-Z0-9._-]/g,'_');
    const path='rsvps/'+Date.now()+'_'+clean;
    const up=await sb.storage.from('wedding-photos').upload(path,photo,{upsert:false});
    if(up.error) throw up.error;
    photo_url=sb.storage.from('wedding-photos').getPublicUrl(path).data.publicUrl;
   }
   const row={
    name:name.trim(),
    email:email.trim(),
    attending: RSVP_OPEN ? attending : null,
    guests: RSVP_OPEN ? (attending?parseInt(guests,10)||1:0) : 0,
    song:song.trim()||null,
    message: RSVP_OPEN ? (message.trim()||null) : null,
    photo_url:photo_url
   };
   if(RSVP_OPEN && attending) row.shuttle=shuttle;
   if(RSVP_OPEN && attending) row.meals=party.map((g,i)=>({name:i===0?name.trim():g.name.trim(),meal:g.meal}));
   const ins=await sb.from('wedding_rsvps').insert(row);
   if(ins.error) throw ins.error;
   setOpen(true);
  }catch(err){
   // Raw Postgres/storage errors are meaningless to a guest. Keep them in the
   // console for us and show something human on the page.
   console.error('Wedding form submit failed:',err);
   setSendErr("We couldn't save that just now. Please try again in a moment \u2014 or text us and we'll add you by hand.");
  }finally{
   setBusy(false);
  }
 }

 const choice=(val,label)=>{
  const on=attending===val;
  return <button type="button" onClick={()=>{setAttending(val);setErrs({...errs,attending:undefined});}}
    style={{flex:1,padding:'14px 16px',cursor:'pointer',fontFamily:'var(--font-ui)',fontSize:14,letterSpacing:'.06em',textTransform:'uppercase',
      borderRadius:'var(--radius-md)',border:'1.5px solid '+(on?'var(--villa-green)':'var(--ink-200)'),
      background:on?'var(--villa-green)':'var(--surface-card)',color:on?'var(--villa-cream)':'var(--ink-800)',transition:'all .15s'}}>
    {label}</button>;
 };

 return <StripeSurfaceKeep as="section" tone="butter" id="keep" style={{padding:'var(--space-9) var(--gutter-page)',scrollMarginTop:70}}><div style={{maxWidth:'var(--container-max)',margin:'0 auto'}}>
  <div style={{maxWidth:'var(--container-text)',margin:'0 auto',textAlign:'center'}}>
   {RSVP_OPEN
     ? <ScriptHeading script="Will you be there?" eyebrow="RSVP" title="LET US KNOW YOU'RE COMING"/>
     : <ScriptHeading script="Keep in touch" eyebrow="No RSVP needed yet" title="WE'LL EMAIL YOU WHEN THE INVITATION GOES OUT"/>}
   <p style={{fontSize:'var(--text-lede)',marginTop:20}}>{RSVP_OPEN
     ? "We can't wait to celebrate with you. Tell us whether you'll be joining, who's in your party and what they'd like for dinner."
     : "You've got the card, so we've got your address, and no RSVP is needed yet. Most of you are flying in, so leave an email and we'll write as we lock things in: the shuttle, the formal invitation, the parts we haven't figured out. Tell us the one song that will get you on the dance floor while you're here."}</p>
   {RSVP_OPEN && <div style={{display:'inline-block',marginTop:'var(--space-5)',fontFamily:'var(--font-ui)',fontSize:14,fontWeight:600,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--bougain-600)',background:'var(--cream-50)',border:'1.5px solid var(--bougain-400)',borderRadius:'var(--radius-pill)',padding:'10px 22px'}}>Kindly reply by {RSVP_BY}</div>}
  </div>
  <Card variant="feature" style={{maxWidth:760,margin:'var(--space-7) auto 0',padding:0,overflow:'hidden'}}>
   <StripeRule height={14}/>
   <div style={{padding:'var(--space-7)',display:'grid',gap:'var(--space-5)'}}>
    <div className="ds-grid2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-5)'}}>
     <Field label="Your name" htmlFor="kn" error={errs.name}>
      <Input id="kn" invalid={!!errs.name} value={name} onChange={e=>setName(e.target.value)}/>
     </Field>
     <Field label="Email" htmlFor="ke" error={errs.email}>
      <Input id="ke" type="email" invalid={!!errs.email} value={email} onChange={e=>setEmail(e.target.value)}/>
     </Field>
    </div>

    {RSVP_OPEN &&
     <Field label="Will you be joining us?" htmlFor="ka" error={errs.attending}>
      <div style={{display:'flex',gap:'var(--space-4)'}}>
       {choice(true,'See you in Miami!')}
       {choice(false,"Can't make it, but cheers!")}
      </div>
     </Field>}

    {RSVP_OPEN && attending===true &&
     <Field label="How many in your party?" htmlFor="kg" hint="Including yourself. Please only include guests named on your invitation, or your “& Guest.”">
      <Select id="kg" value={guests} onChange={e=>{
          const n=parseInt(e.target.value,10)||1;
          setGuests(e.target.value);
          setParty(p=>Array.from({length:n},(_,i)=>p[i]||{name:'',meal:''}));
        }}
        options={[1,2,3,4].map(n=>({value:String(n),label:String(n)}))}/>
     </Field>}

    {RSVP_OPEN && attending===true &&
     <div style={{display:'grid',gap:'var(--space-4)'}}>
      <div style={{fontFamily:'var(--font-ui)',fontSize:13,fontWeight:600,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--ink-800)'}}>Dinner</div>
      <p style={{fontSize:16,color:'var(--ink-600)',margin:'-8px 0 0'}}>Please choose a dinner for everyone in your party when you RSVP.</p>
      <div style={{display:'grid',gap:10,background:'var(--cream-100)',border:'1px solid var(--ink-200)',borderRadius:'var(--radius-md)',padding:'var(--space-4) var(--space-5)'}}>
       {MEALS.map(m=><div key={m.value}>
        <span style={{fontFamily:'var(--font-display)',fontSize:'1.0625rem',color:'var(--villa-green)'}}>{m.label.toUpperCase()}</span>
        <span style={{fontSize:15,color:'var(--ink-600)'}}> · {m.desc}</span>
       </div>)}
      </div>
      {party.map((g,i)=>{
       const upd=(k,v)=>{setParty(p=>p.map((x,j)=>j===i?{...x,[k]:v}:x));setErrs(er=>({...er,[(k==='name'?'pn':'pm')+i]:undefined}));};
       return <div key={i} className="ds-grid2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-4)',alignItems:'start'}}>
        {i===0
          ? <Field label="Guest 1" htmlFor="kpn0"><Input id="kpn0" value={name} placeholder="Your name" onChange={e=>setName(e.target.value)}/></Field>
          : <Field label={'Guest '+(i+1)} htmlFor={'kpn'+i} error={errs['pn'+i]}><Input id={'kpn'+i} invalid={!!errs['pn'+i]} value={g.name} placeholder="Full name" onChange={e=>upd('name',e.target.value)}/></Field>}
        <Field label="Dinner" htmlFor={'kpm'+i} error={errs['pm'+i]}>
         <Select id={'kpm'+i} value={g.meal} onChange={e=>upd('meal',e.target.value)}
           options={[{value:'',label:'Choose one'}].concat(MEALS.map(m=>({value:m.value,label:m.label})))}/>
        </Field>
       </div>;})}
     </div>}

    {RSVP_OPEN && attending===true &&
     <Field label="Taking the shuttle from Miami Beach?" htmlFor="ksh" error={errs.shuttle} hint="We're planning a shuttle from Miami Beach to the villa. This helps us count seats.">
      <div className="ds-grid2" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'var(--space-3)'}}>
       {[['yes','Yes, save us seats'],['no','No thanks'],['unsure','Not sure yet']].map(([v,l])=>{
        const on=shuttle===v;
        return <button key={v} type="button" onClick={()=>{setShuttle(v);setErrs(er=>({...er,shuttle:undefined}));}}
          style={{padding:'12px 10px',cursor:'pointer',fontFamily:'var(--font-ui)',fontSize:13,letterSpacing:'.06em',textTransform:'uppercase',
            borderRadius:'var(--radius-md)',border:'1.5px solid '+(on?'var(--villa-green)':'var(--ink-200)'),
            background:on?'var(--villa-green)':'var(--surface-card)',color:on?'var(--villa-cream)':'var(--ink-800)',transition:'all .15s'}}>{l}</button>;})}
      </div>
     </Field>}

    {/* Song was collected with the save-the-date, so the RSVP form skips it.
        Note and photo were dropped from the RSVP form too. */}
    {!RSVP_OPEN &&
     <Field label="One song that gets you dancing" htmlFor="ks" hint="We're building the playlist early. No skips allowed.">
      <Input id="ks" placeholder="Artist / Song" value={song} onChange={e=>setSong(e.target.value)}/>
     </Field>}

    {sendErr && <div style={{fontFamily:'var(--font-ui)',fontSize:13,color:'var(--bougainvillea)',textAlign:'center'}}>{sendErr}</div>}

    {RSVP_OPEN && <div style={{textAlign:'center',fontSize:15,color:'var(--ink-600)'}}>Please RSVP by {RSVP_BY}.</div>}
    <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-2)'}}>
     <Button variant="primary" size="lg" onClick={submit} disabled={busy}>{busy?'SENDING…':(RSVP_OPEN?'SEND RSVP':'KEEP ME POSTED')}</Button>
    </div>
   </div>
  </Card>
  <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
   <Illustration name="couple-on-cake" basePath={ILL} size={140} rotate={0}/>
  </div>
  <Dialog open={open} title={RSVP_OPEN?(attending?"SEE YOU IN MIAMI!":"WE'LL MISS YOU"):"YOU'RE ON THE LIST"} script={RSVP_OPEN?(attending?"we can't wait to celebrate":"we'll raise a glass to you"):"see you in the garden"} onClose={()=>setOpen(false)}
   footer={<Button variant="butter" onClick={()=>setOpen(false)}>LOVELY</Button>}>
   {RSVP_OPEN
     ? (attending
         ?<span>Thanks, {name.trim()||'friend'}! Your RSVP is saved, dinner's ordered and the champagne's on ice.</span>
         :<span>Thanks for letting us know, {name.trim()||'friend'}. We'll be toasting to you from Miami.</span>)
     : <span>Thanks, {name||'friend'}. We'll write when the invitation goes out{song?', and your song is going straight on the playlist':''}.</span>}
  </Dialog>
 </div></StripeSurfaceKeep>;
}
window.KeepInTouch=KeepInTouch;
