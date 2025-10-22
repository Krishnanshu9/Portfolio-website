import { useEffect, useState } from "react"

export const StarBackground = () =>{
    const [stars,setStars]= useState([]);
    const [meteors,setMeteors] = useState([]);

    useEffect(()=> {
        generateStar();
        generateMeteor();
    },[]);

    const generateStar =() =>{
        const numberOfStar = Math.floor((window.innerHeight*window.innerWidth)/ 10000);

        const newStars = [];

        for(let i = 0 ; i<numberOfStar ; i++){
            
            newStars.push({
                id:i,
                size:Math.random() * 3 + 1,
                opacity:Math.random() * 0.5 + 0.5,
                x:Math.random() * 100,
                y:Math.random() * 100,
                animationDuration:Math.random() * 4 + 2,
            });
        };
        setStars(newStars);
    };
    const generateMeteor =() =>{
        const numberOfMeteor = 8;
        
        const newMeteors = [];
        
        for(let i = 0 ; i<numberOfMeteor ; i++){
            
            newMeteors.push({
                id:i,
                size:Math.random() * 2 + 1,
                delay:Math.random() * 2,
                x:Math.random() * 100,
                y:Math.random() * 60,
                animationDuration:Math.random() * 4 + 2,
            });
        };
        setMeteors(newMeteors);
    };
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* .map() loops through each star */}
        {/* Returns a <div> for each star, applying its properties (size, position, etc.) */}
        {stars.map((star)=>( 
            <div key={star.id} className="star animate-pulse-subtle " style={{
                width: star.size + "px",
                height : star.size + "px",
                top : star.y + "%",
                left : star.x +"%",
                opacity : star.opacity,
                animationDuration : star.animationDuration + "s",
            }}/> 
        ))}

        {meteors.map((meteor)=>(
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size * 20 + "px",
                height : meteor.size * 0.8 + "px",
                top : meteor.y + "%",
                left : meteor.x +"%",
                animationDelay : meteor.delay ,
                animationDuration : meteor.animationDuration + "s",
            }}/> 
        ))}

    </div>
}