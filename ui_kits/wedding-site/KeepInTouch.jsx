const NSKeep=window.LexiSnowDesignSystem_f12512;
const StripeSurfaceKeep=NSKeep.StripeSurface||function({tone,direction,scale,rounded,as='div',children,style,...p}){
 const F={sage:'var(--stripe-soft-sage)',butter:'var(--stripe-soft-butter)',sky:'var(--stripe-soft-sky)',pink:'var(--stripe-soft-pink)',green:'var(--stripe-soft-green)'};
 return React.createElement(as,{style:{backgroundImage:F[tone]||F.sage,backgroundSize:'68px 68px',position:'relative',...(rounded?{borderRadius:'var(--radius-lg)',overflow:'hidden'}:{}),...style},...p},children);
};
const { Button, Card, Field, Input, Dialog, StripeRule, Illustration } = NSKeep;
function KeepInTouch(){
 const [name,setName]=React.useState('');
 const [err,setErr]=React.useState('');
 const [open,setOpen]=React.useState(false);
 function send(){ if(!name.trim()){setErr('We need a name to put on the list.');return;} setErr(''); setOpen(true); }
 return <StripeSurfaceKeep as="section" tone="butter" id="keep" style={{padding:'var(--space-9) var(--gutter-page)',scrollMarginTop:70}}><div style={{maxWidth:'var(--container-max)',margin:'0 auto'}}>
  <div style={{maxWidth:'var(--container-text)',margin:'0 auto',textAlign:'center'}}>
   <ScriptHeading script="Keep in touch" eyebrow="No RSVP needed yet" title="WE'LL EMAIL YOU WHEN THE INVITATION GOES OUT"/>
   <p style={{fontSize:'var(--text-lede)',marginTop:20}}>You've got the card, so we've got your address, and no RSVP is needed yet. Most of you are flying in, so leave an email and we'll write as we lock things in: room block, the formal invitation, the parts we haven't figured out. Tell us the one song that will get you on the dance floor while you're here.</p>
  </div>
  <Card variant="feature" style={{maxWidth:760,margin:'var(--space-7) auto 0',padding:0,overflow:'hidden'}}>
   <StripeRule height={14}/>
   <div style={{padding:'var(--space-7)',display:'grid',gap:'var(--space-5)'}}>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-5)'}}>
     <Field label="Your name" htmlFor="kn" error={err}>
      <Input id="kn" invalid={!!err} value={name} placeholder="Jamie Rivera" onChange={e=>setName(e.target.value)}/>
     </Field>
     <Field label="Email" htmlFor="ke"><Input id="ke" type="email" placeholder="jamie@email.com"/></Field>
    </div>
    <Field label="One song that gets you dancing" htmlFor="ks" hint="We're building the playlist early. No skips allowed.">
     <Input id="ks" placeholder="Artist / Song"/>
    </Field>
    <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-2)'}}>
     <Button variant="primary" size="lg" onClick={send}>KEEP ME POSTED</Button>
    </div>
   </div>
  </Card>
  <div style={{display:'flex',justifyContent:'center',marginTop:'var(--space-6)'}}>
   <Illustration name="couple-on-cake" basePath={ILL} size={140} rotate={-3}/>
  </div>
  <Dialog open={open} title="YOU'RE ON THE LIST" script="see you in the garden" onClose={()=>setOpen(false)}
   footer={<Button variant="butter" onClick={()=>setOpen(false)}>LOVELY</Button>}>
   Thanks, {name||'friend'}. We'll write when the invitation goes out. Your song is going straight on the playlist.
  </Dialog>
 </div></StripeSurfaceKeep>;
}
window.KeepInTouch=KeepInTouch;
