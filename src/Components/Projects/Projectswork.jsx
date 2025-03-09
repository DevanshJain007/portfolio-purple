import React from "react";
import gg from'../Projects/gg.png'
const Projectswork = () => {
    const data = [
        {id: 1, title: "CIB on the Mobile", description: "Take your careers to a new level with our amazing tools", icon: "⭐"},
        {id: 2, title: "CIB on the Mobile", description: "Take your careers to a new level with our amazing tools", icon: "🔮"},
        {id: 3, title: "CIB on the Mobile", description: "Take your careers to a new level with our amazing tools", icon: "🪄"},
        {id: 4, title: "CIB on the Mobile", description: "Take your careers to a new level with our amazing tools", icon: "📡"},
    ];

    return (
        <section className="
        text-white py-12 flex flex-col items-center w-full h-screen">
           <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
           <img src={gg} alt="" className="absolute    obejct-cover z-0" />
           <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl m-20' 
        >
               {data.map((exp) => (
                   <Exp key={exp.id} {...exp} />
               ))}
           </div>
       </section>

        
    );
};
const Exp = ({ title, description, icon }) => {
    return (
        <div className="bg-[693B93] text-[#FFFFFF] p-6 rounded-2xl shadow-lg flex flex-col items-start text-left w-full h-[12em] relative overflow-hidden  border-t-[#4F228D] " style={{
            background: "linear-gradient(to bottom, #13042B 7%, #251043 34%, #38126D 57%, #261045 85%, #190634 100%)" 
        }} 
 >
            <div className="text-4xl mb-4 absolute top-4 left-4">{icon}</div>
            <h3 className="text-xl font-semibold mt-10">{title}</h3>
            <p className="text-sm mt-2">{description}</p>
            <button className="mt-4 px-4 py-2  border-[#693B93] border-2 rounded-lg  self-start">Learn More</button>
        </div>
    );
}; 




export default Projectswork;
