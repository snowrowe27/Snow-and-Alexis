const { Button, Card, Badge, Illustration, ArchFrame, StripeRule } = window.LexiSnowDesignSystem_f12512;
const ILL='../../assets/illustrations';
const PHOTO='../../assets/photos';
function Section({id,tone='cream',children,style}){
  const bg={cream:'var(--cream-100)',card:'var(--cream-50)',green:'var(--villa-green)'}[tone];
  return <section id={id} data-screen-label={id} style={{background:bg,padding:'var(--space-9) var(--gutter-page)',position:'relative',overflow:'hidden',scrollMarginTop:70,...style}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto'}}>{children}</div></section>;
}
function ScriptHeading({script,eyebrow,title,tone='ink',align='center',style}){
  const light=tone==='light';
  return <div style={{textAlign:align,display:'flex',flexDirection:'column',alignItems:align==='center'?'center':'flex-start',...style}}>
    <div style={{fontFamily:'var(--font-script)',fontSize:'clamp(2.75rem,6vw,4.5rem)',lineHeight:1.02,color:light?'var(--bougain-400)':'var(--bougainvillea)'}}>{script}</div>
    {eyebrow&&<div style={{fontFamily:'var(--font-ui)',fontSize:13,letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:light?'var(--butter-300)':'var(--olive)',marginTop:6}}>{eyebrow}</div>}
    {title&&<h2 style={{margin:'8px 0 0',fontFamily:'var(--font-display)',fontSize:'var(--text-display-2)',lineHeight:'var(--leading-display)',color:light?'var(--villa-cream)':'var(--villa-green)'}}>{title}</h2>}
  </div>;
}
function Photo({name,alt,ratio='3 / 4',style}){
  return <div style={{aspectRatio:ratio,borderRadius:'var(--radius-lg)',overflow:'hidden',border:'var(--border-hair)',boxShadow:'var(--shadow-card)',...style}}>
    <img src={PHOTO+'/'+name+'.jpg'} alt={alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></div>;
}
function PhotoSlot({label,ratio='3 / 4',style}){
  return <ArchFrame tone="cream" ratio={ratio} style={style}>
    <div style={{textAlign:'center',padding:'0 18px'}}>
      <div style={{fontFamily:'var(--font-ui)',fontSize:12,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--ink-400)'}}>Photo</div>
      <div style={{fontFamily:'var(--font-script)',fontSize:26,color:'var(--ink-400)',lineHeight:1.15,marginTop:4}}>{label}</div>
    </div></ArchFrame>;
}
Object.assign(window,{Section,ScriptHeading,Photo,PhotoSlot,ILL,PHOTO});
