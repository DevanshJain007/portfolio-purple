import React from "react";

const Projectswork = () => {
    const data = [
        {id: 1, title: "CIB on the Mobile", description: "Take your careers to a new level with our amazing tools", icon: "⭐"},
        {id: 2, title: "CIB on the Mobile", description: "Take your careers to a new level with our amazing tools", icon: "🔮"},
        {id: 3, title: "CIB on the Mobile", description: "Take your careers to a new level with our amazing tools", icon: "🪄"},
        {id: 4, title: "CIB on the Mobile", description: "Take your careers to a new level with our amazing tools", icon: "📡"},
    ];

    return (
        <section className="bg-black text-white py-12 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl'>
                {data.map((exp) => (
                    <Exp key={exp.id} {...exp} />
                ))}
            </div>
        </section>
    );
};

const Exp = ({ title, description, icon }) => {
    return (
        <div className="bg-purple-900 text-white p-6 rounded-2xl shadow-lg flex flex-col items-start text-left w-full relative overflow-hidden">
            <div className="text-4xl mb-4 absolute top-4 left-4">{icon}</div>
            <h3 className="text-xl font-semibold mt-10">{title}</h3>
            <p className="text-sm mt-2">{description}</p>
            <button className="mt-4 px-4 py-2 bg-purple-700 rounded-lg hover:bg-purple-600 self-start">Learn More</button>
        </div>
    );
};

export default Projectswork;
