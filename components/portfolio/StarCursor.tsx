'use client';
import {useEffect,useRef} from 'react';
export default function StarCursor(){
 const canvas=useRef<HTMLCanvasElement>(null),cursor=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const fine=matchMedia('(pointer:fine) and (hover:hover)'),reduced=matchMedia('(prefers-reduced-motion:reduce)');
  const surface=canvas.current,star=cursor.current;if(!surface||!star)return;
  let cleanup=()=>{};
  const setup=()=>{
   cleanup();if(!fine.matches||reduced.matches)return;
   const context=surface.getContext('2d');if(!context)return;
   let frame=0,points:{x:number;y:number;t:number}[]=[],sparks:{x:number;y:number;vx:number;vy:number;t:number}[]=[];
   const resize=()=>{const dpr=Math.min(devicePixelRatio||1,2);surface.width=innerWidth*dpr;surface.height=innerHeight*dpr;surface.style.width=`${innerWidth}px`;surface.style.height=`${innerHeight}px`;context.setTransform(dpr,0,0,dpr,0,0)};
   function draw(now:number){
    context!.clearRect(0,0,innerWidth,innerHeight);points=points.filter(p=>now-p.t<420);sparks=sparks.filter(p=>now-p.t<650);
    for(let i=1;i<points.length;i++){const p=points[i],last=points[i-1],life=1-(now-p.t)/420;context!.beginPath();context!.moveTo(last.x,last.y);context!.lineTo(p.x,p.y);context!.strokeStyle=`rgba(255,255,255,${life*.65})`;context!.lineWidth=life*2.5;context!.lineCap='round';context!.stroke()}
    for(const p of sparks){const age=(now-p.t)/650,life=1-age,x=p.x+p.vx*age,y=p.y+p.vy*age,size=3*life;context!.fillStyle=`rgba(255,255,255,${life})`;context!.beginPath();context!.moveTo(x,y-size*2);context!.lineTo(x+size*.35,y-size*.35);context!.lineTo(x+size*2,y);context!.lineTo(x+size*.35,y+size*.35);context!.lineTo(x,y+size*2);context!.lineTo(x-size*.35,y+size*.35);context!.lineTo(x-size*2,y);context!.lineTo(x-size*.35,y-size*.35);context!.closePath();context!.fill()}
    frame=points.length||sparks.length?requestAnimationFrame(draw):0;
   }
   const start=()=>{if(!frame)frame=requestAnimationFrame(draw)};
   const move=(e:PointerEvent)=>{if(e.pointerType!=='mouse')return;star!.style.left=`${e.clientX}px`;star!.style.top=`${e.clientY}px`;star!.style.opacity='1';document.documentElement.classList.add('star-pointer-active');points.push({x:e.clientX,y:e.clientY,t:performance.now()});if(points.length>45)points.shift();start()};
   const over=(e:PointerEvent)=>{star!.classList.toggle('cursor-hover',Boolean((e.target as Element)?.closest?.('a,button,summary')))};
   const leave=()=>{star!.style.opacity='0';document.documentElement.classList.remove('star-pointer-active');points=[]};
   const click=(e:PointerEvent)=>{if(e.pointerType!=='mouse')return;const now=performance.now();for(let i=0;i<8;i++){const angle=i*Math.PI/4;sparks.push({x:e.clientX,y:e.clientY,vx:Math.cos(angle)*40,vy:Math.sin(angle)*40,t:now})}start()};
   resize();window.addEventListener('resize',resize);window.addEventListener('pointermove',move,{passive:true});window.addEventListener('pointerover',over,{passive:true});window.addEventListener('pointerdown',click,{passive:true});document.documentElement.addEventListener('pointerleave',leave);window.addEventListener('blur',leave);
   cleanup=()=>{cancelAnimationFrame(frame);window.removeEventListener('resize',resize);window.removeEventListener('pointermove',move);window.removeEventListener('pointerover',over);window.removeEventListener('pointerdown',click);document.documentElement.removeEventListener('pointerleave',leave);window.removeEventListener('blur',leave);document.documentElement.classList.remove('star-pointer-active');star!.style.opacity='0';context.clearRect(0,0,innerWidth,innerHeight)};
  };
  setup();fine.addEventListener('change',setup);reduced.addEventListener('change',setup);return()=>{cleanup();fine.removeEventListener('change',setup);reduced.removeEventListener('change',setup)};
 },[]);
 return <><canvas className="cursor-trail" ref={canvas} aria-hidden="true"/><div className="star-cursor" ref={cursor} aria-hidden="true"><svg viewBox="0 0 32 32"><path d="m16 0 3.6 12.4L32 16l-12.4 3.6L16 32l-3.6-12.4L0 16l12.4-3.6Z"/></svg></div></>
}
