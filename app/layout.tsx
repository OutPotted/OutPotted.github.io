import type {Metadata} from 'next';
import './globals.css';
import StarCursor from '../components/portfolio/StarCursor';
import {compactVisits,totalVisits} from '../data/portfolio';
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://outpotted.github.io'),title:'Qv4x — Lead Scripter / QvxStudios',description:`4+ years of LUA. Core gameplay across five Roblox experiences with ${compactVisits(totalVisits)} combined visits. Explore Qv4x’s work and connect on Discord.`,openGraph:{title:'Qv4x / QvxStudios',description:'LUA scripting. Exceptional gameplay. Let’s build your next Roblox experience.',images:['/games/7671049560-wide.webp']}};
export default function Layout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><StarCursor/>{children}</body></html>}
