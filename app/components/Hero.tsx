export default function Hero() {
    return (
        <div id="hero">
            <div className="font-sans grid grid-flow-col justify-between mt-12">
                <div className="col-span-2">
                    <div className="text-6xl lg:text-9xl">
                        <h1 className="uppercase font-semibold">andres</h1>
                        <h1 className="uppercase font-semibold">elacion III <span className="font-suse">dev</span></h1>
                    </div>
                    <p className="text-2xl">He is a Full Stack Web Developer based in The Philippines. He`s creating stunning, eye-catching and user-friendly websites and web applications.</p>
                    <br />
                    <p className="text-2xl">He has a solid foundation in deploying applications on AWS EC2 and setting up SSL certificates, continuously enhancing his skills in cloud computing.</p>
                    <br />
                    <p className="text-2xl">When he`s not coding, he loves to play guitar and online games. Even though he`s not very good at it, it does help him bring out his creative side when building websites.</p>

                    <div className="mt-5 space-x-1">
                        <button type="button" className="inline-block px-6 py-2.5 border-2 border-cyan-500 font-medium text-xs leading-tight uppercase rounded-xl hover:text-white hover:bg-cyan-500 focus:outline-none focus:ring-0 transform transition duration-500 hover:scale-125">
                            <a href="mailto:andreielacion5@gmail.com">
                                get in touch
                            </a>
                        </button>

                        <button type="button" className="inline-block px-6 py-2.5 border-2 border-cyan-500 font-medium text-xs leading-tight uppercase rounded-xl hover:text-white hover:bg-cyan-500 focus:outline-none focus:ring-0 transition duration-500 hover:scale-125">
                            <a href="/asset/ElacionAndresIII.pdf" download="Andres_Elacion_III_CV">
                                Download CV
                            </a>
                        </button>

                        <button type="button" className="inline-block px-6 py-2.5 border-2 border-cyan-500 font-medium text-xs leading-tight uppercase rounded-xl hover:text-white hover:bg-cyan-500 focus:outline-none focus:ring-0 transition duration-500 hover:scale-125">
                            <a href="https://github.com/AndresElacion" target="_blank" rel="noreferrer">
                                github
                            </a>
                        </button>
                    </div>
                </div>
                <div className="mx-auto col-span-5 px-3 py-4 hidden xl:contents">
                    <img src="/img/avatar.png" alt=""/>
                </div>
            </div>
        </div>
    )
}