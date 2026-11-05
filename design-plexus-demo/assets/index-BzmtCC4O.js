const n=[{v:30,d:0,suffix:"+",label:"Projects"},{v:20,d:0,suffix:" lac+",label:"Sq. ft. designed"},{v:6.3,d:1,suffix:" cr",label:"Saved for clients"},{v:10,d:0,suffix:"+",label:"Years of combined experience"}],p=[{name:"Ar. Mandar Kamble",role:"Co-founder & Principal Architect",img:"mandar-new-crop",alt:"Mandar Kamble standing with arms folded on a terrace, city towers behind",text:"An alumnus of Sir J.J. College of Architecture, Mumbai, Mandar is a master of spatial storytelling, conceptual design and luxury interior architecture. His expertise in data-driven architecture keeps every space visually striking and highly functional."},{name:"Ar. Arzu Jaria",role:"Co-founder",img:"arzu-new-crop",alt:"Arzu Jaria seated on a terrace ledge, city towers and trees behind",text:"A strong believer in “form follows function”, Arzu is a distinction graduate of Sir J.J. College of Architecture who redefines spaces by tweaking common elements to enhance functionality. Much like an octagon among circles, her work stands apart."}];let r=[];function f(t,{gsap:i,ScrollTrigger:s,reduced:u}){if(t.insertAdjacentHTML("beforeend",`
  <div class="ab-wrap">
    <section class="ab-intro" aria-label="The Plexus perspective">
      <p class="mono ab-kicker">About · The Plexus perspective</p>
      <h2 class="ab-title">Great design begins with a bold question: <em>Why not?</em></h2>
      <div class="ab-copy">
        <p>Founded in 2020 in Mumbai by Arzu and Mandar, The Design Plexus practises <strong>conventionally unconventional design</strong>: experimental yet deeply functional spaces that shift perspective and invite curiosity.</p>
        <p>Architecture, interior design and landscape are offered as one integrated studio, across luxury residences, hospitality, commercial, institutional and landscape-driven work, with fresh ideas delivered on accelerated timelines.</p>
      </div>
    </section>
    <dl class="ab-stats">
      ${n.map((e,a)=>`<div><dt class="mono">${e.label}</dt><dd><span data-stat="${a}">${o(e,e.v)}</span></dd></div>`).join("")}
    </dl>
    <section class="ab-founders" aria-labelledby="ab-f">
      <header><p class="mono ab-kicker">Meet the founders</p><h2 id="ab-f">Two architects from Sir J.J. College of Architecture</h2></header>
      <div class="ab-pair">
      ${p.map(e=>`
      <article class="ab-founder">
        <img src="/design-plexus-demo/media/tdp/team/${e.img}-900.webp" alt="${e.alt}" width="900" height="1200" loading="lazy" decoding="async">
        <div><p class="mono">${e.role}</p><h3>${e.name}</h3><p>${e.text}</p></div>
      </article>`).join("")}
      </div>
    </section>
    <p class="mono ab-src">Text, figures and portraits: thedesignplexus.com</p>
  </div>`),u)return;const c=[...t.querySelectorAll("[data-stat]")];r.push(s.create({trigger:t.querySelector(".ab-stats"),start:"top 80%",once:!0,onEnter:()=>c.forEach((e,a)=>{const d=n[a],l={x:0};i.to(l,{x:d.v,duration:1.2,ease:"power2.out",delay:a*.08,onUpdate:()=>{e.textContent=o(d,l.x)}})})})),c.forEach((e,a)=>{e.textContent=o(n[a],0)}),r.push(...[...t.querySelectorAll(".ab-intro, .ab-stats, .ab-founder")].map(e=>(i.set(e,{opacity:0,y:32}),s.create({trigger:e,start:"top 85%",once:!0,onEnter:()=>i.to(e,{opacity:1,y:0,duration:.9,ease:"power2.out"})}))))}function o(t,i){return`${t.prefix||""}${i.toFixed(t.d)}${t.suffix}`}function h(){r.forEach(t=>t.kill()),r=[]}export{h as destroy,f as mount};
