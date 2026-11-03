import Moon from './Moon';
export default function NightSky(){return <div className="night-sky" aria-hidden="true"><div className="night-moon"><Moon/></div>{Array.from({length:55},(_,i)=><i className="night-star" key={i} style={{left:`${i*137.5%100}%`,top:`${i*73.3%100}%`,animationDelay:`${i*-.43}s`,width:i%8===0?3:1,height:i%8===0?3:1}}/>)}<span className="night-shooting"/></div>}
