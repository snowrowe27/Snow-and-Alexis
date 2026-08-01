function Story(){
 return <Section id="story" tone="cream">
  <div style={{display:'grid',gridTemplateColumns:'.9fr 1.1fr',gap:'var(--space-8)',alignItems:'center'}}>
   <Photo name="gondola" alt="Matthew and Alexis on a Venice canal ledge, rose petals at their feet, ring in the air" ratio="2 / 3"/>
   <div style={{maxWidth:'58ch'}}>
    <ScriptHeading align="left" script="Our story" eyebrow="It started in Miami" title="FROM FAST FRIENDS TO FOREVER"/>
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)',marginTop:'var(--space-5)',fontSize:'var(--text-body-lg)'}}>
     <p style={{margin:0}}>We met completely by chance. Or fate, depending on who's telling it.</p>
     <p style={{margin:0}}>We were both on vacation when we ran into each other on the street. Lexi mentioned it was her birthday, Snow looked at her and said, "Shut up." Without missing a beat, she replied, "No, you shut up." It was the start of an unexpected friendship.</p>
     <p style={{margin:0}}>For the next year, we were just friends. But our shared love of art eventually brought us together, and the rest is history.</p>
     <p style={{margin:0}}>Today, we call Miami home, run our own animation studio together, and have even had our work featured in Times Square.</p>
     <p style={{margin:0}}>If you know us, you know we're a good time. Bring that same energy.</p>
     <p style={{margin:0,fontFamily:'var(--font-script)',fontSize:'2.25rem',lineHeight:1.15,color:'var(--olive)'}}>We can't wait to celebrate with you. xo, Lexi &amp; Snow</p>
    </div>
   </div>
  </div>
 </Section>;
}
window.Story=Story;
