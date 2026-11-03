import snapshot from './roblox-snapshot.json';
export const profile={roblox:'https://www.roblox.com/users/4788080470/profile',discord:'https://discord.gg/rVVVv4V3CZ',avatar:'/avatar.png'};
const gameInfo=[
 {id:7671049560,placeId:'76558904092080',slug:'the-forge',name:'The Forge',genre:'RPG',role:'Former Lead Scripter',description:'Mine rare ores. Forge your build. Fight your way forward.',contribution:'Core gameplay mechanics · 35%+ gameplay contribution',color:'#e6a46a'},
 {id:7082423811,placeId:'76137189788863',slug:'raft-tycoon',name:'Raft Tycoon',genre:'Tycoon',role:'Former Lead Scripter',description:'From a small raft to a floating empire. Build beyond the horizon.',contribution:'Core gameplay mechanics · 35%+ gameplay contribution',color:'#70cbdc'},
 {id:4019583467,placeId:'11276071411',slug:'npc-or-die',name:'NPC or DIE!',genre:'Multiplayer',role:'Former Lead Scripter',description:'Hunt criminals or complete tasks while avoiding the sheriffs.',contribution:'Main gameplay system',color:'#82b7ed'},
 {id:10769589819,placeId:'95405561208852',slug:'pull-a-cube',name:'pull a cube',genre:'Simulator',role:'Lead Scripter',description:'Train, pull, and grow stronger. Every cube is a new challenge.',contribution:'Core gameplay mechanics',color:'#acd885'},
 {id:9019323449,placeId:'112137948403849',slug:'67-scary-troll-slap-tower',name:'67 Scary Troll Slap Tower',genre:'Obby',role:'Lead Scripter',description:'Climb the tower. Survive the chaos. Watch out for the trolls.',contribution:'Core gameplay mechanics',color:'#ed9fbd'}
];
export const projects=gameInfo.map(g=>({...g,visits:snapshot.games.find(s=>s.id===g.id)?.visits??0,icon:`/games/${g.id}-icon.webp`,image:`/games/${g.id}-wide.webp`,url:`https://www.roblox.com/games/${g.placeId}/${g.slug}`}));
export const totalVisits=projects.reduce((sum,g)=>sum+g.visits,0);
export const statsCheckedAt=snapshot.checkedAt;
export const statsSource=snapshot.source;
export function compactVisits(n:number){if(n>=1e9)return `${(n/1e9).toFixed(2)}B`;if(n>=1e6)return `${(n/1e6).toFixed(1)}M`;if(n>=1e3)return `${(n/1e3).toFixed(1)}K`;return String(n)}
export const statsDate=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'Asia/Tbilisi'}).format(new Date(statsCheckedAt));
