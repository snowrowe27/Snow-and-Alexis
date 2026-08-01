function Photos(){
 return <Section id="photos" tone="card">
  <div style={{maxWidth:'var(--container-text)',margin:'0 auto',textAlign:'center'}}>
   <ScriptHeading script="Us, lately" eyebrow="A few favorites" title="PHOTOS"/>
  </div>
  <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)',marginTop:'var(--space-7)'}}>
   <Photo name="gondola-kiss" alt="Matthew kissing Alexis's forehead in a gondola under the Bridge of Sighs in Venice" ratio="4 / 5"/>
   <Photo name="terrace" alt="Alexis and Matthew on a terrace in Todi" ratio="4 / 5"/>
   <Photo name="dancing" alt="Alexis and Matthew out dancing" ratio="4 / 5"/>
  </div>
  <p style={{textAlign:'center',fontFamily:'var(--font-script)',fontSize:'clamp(1.5rem,2.6vw,2rem)',color:'var(--olive)',marginTop:'var(--space-6)'}}>Venice, Todi, and a night we don't fully remember.</p>
 </Section>;
}
window.Photos=Photos;
