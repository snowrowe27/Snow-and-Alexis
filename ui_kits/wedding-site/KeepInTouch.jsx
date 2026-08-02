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
const RSVP_OPEN = false;

// Lazily create one Supabase client for the page.
function sbClient(){
 if(window.__sb) return window.__sb;
 if(!window.supabase||!window.SUPA_URL||!window.SUPA_KEY) return null;
 window.__sb=window.supabase.createClient(window.SUPA_URL,window.SUPA_KEY);
 return window.__sb;
}

function KeepInTouch(){
 const [name,setName]=React.useState('');
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
  else if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) e.email='That email looks off — mind checking it?';
  if(RSVP_OPEN && attending===null) e.attending='Let us know if you can make it.';
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
   const ins=await sb.from('wedding_rsvps').insert(row);
   if(ins.error) throw ins.error;
   setOpen(true);
  }catch(err){
   setSendErr((err&&err.message)?err.message:'Something went wrong. Please try again.');
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
     ? "We can't wait to celebrate with you. Tell us whether you'll be joining, how many are in your party, and the one song guaranteed to get you on the dance floor. Leave a note if you'd like — or a favorite photo of us."
     : "You've got the card, so we've got your address, and no RSVP is needed yet. Most of you are flying in, so leave an email and we'll write as we lock things in: room block, the formal invitation, the parts we haven't figured out. Tell us the one song that will get you on the dance floor while you're here."}</p>
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
       {choice(true,'Joyfully accepts')}
       {choice(false,'Regretfully declines')}
      </div>
     </Field>}

    {RSVP_OPEN && attending===true &&
     <Field label="How many in your party?" htmlFor="kg" hint="Including yourself.">
      <Select id="kg" value={guests} onChange={e=>setGuests(e.target.value)}
        options={[1,2,3,4,5,6,7,8].map(n=>({value:String(n),label:String(n)}))}/>
     </Field>}

    <Field label="One song that gets you dancing" htmlFor="ks" hint="We're building the playlist early. No skips allowed.">
     <Input id="ks" placeholder="Artist / Song" value={song} onChange={e=>setSong(e.target.value)}/>
    </Field>

    {RSVP_OPEN &&
     <Field label="A note for us (optional)" htmlFor="km">
      <Textarea id="km" rows={3} value={message} onChange={e=>setMessage(e.target.value)}
        placeholder="Anything you'd like us to know."/>
     </Field>}

    {RSVP_OPEN &&
     <Field label="Share a photo (optional)" htmlFor="kp" hint="A favorite memory of us — or a selfie so we know who to look for.">
      <div style={{display:'flex',alignItems:'center',gap:'var(--space-4)'}}>
       <Button variant="sage" size="sm" onClick={()=>fileRef.current&&fileRef.current.click()}>Choose photo</Button>
       <span style={{fontFamily:'var(--font-body)',fontSize:'var(--text-body-sm)',color:'var(--ink-500)'}}>
        {photo?photo.name:'No file chosen'}</span>
       <input ref={fileRef} id="kp" type="file" accept="image/*" style={{display:'none'}}
         onChange={e=>setPhoto(e.target.files&&e.target.files[0]?e.target.files[0]:null)}/>
      </div>
     </Field>}

    {sendErr && <div style={{fontFamily:'var(--font-ui)',fontSize:13,color:'var(--bougainvillea)',textAlign:'center'}}>{sendErr}</div>}

    <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-2)'}}>
     <Button variant="primary" size="lg" onClick={submit} disabled={busy}>{busy?'SENDING…':(RSVP_OPEN?'SEND RSVP':'KEEP ME POSTED')}</Button>
    </div>
   </div>
  </Card>
  <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
   <Illustration name="couple-on-cake" basePath={ILL} size={140} rotate={-3}/>
  </div>
  <Dialog open={open} title={RSVP_OPEN?(attending?"YOU'RE ON THE LIST":"THANK YOU"):"YOU'RE ON THE LIST"} script={RSVP_OPEN?(attending?"see you on the dance floor":"we'll miss you"):"see you in the garden"} onClose={()=>setOpen(false)}
   footer={<Button variant="butter" onClick={()=>setOpen(false)}>LOVELY</Button>}>
   {RSVP_OPEN
     ? (attending
         ?<span>Thanks, {name||'friend'}. Your RSVP is saved{song?', and your song is going straight on the playlist':''}. We'll be in touch as we lock things in.</span>
         :<span>Thanks for letting us know, {name||'friend'}. We'll miss you — but we're grateful you told us.</span>)
     : <span>Thanks, {name||'friend'}. We'll write when the invitation goes out{song?', and your song is going straight on the playlist':''}.</span>}
  </Dialog>
 </div></StripeSurfaceKeep>;
}
window.KeepInTouch=KeepInTouch;
