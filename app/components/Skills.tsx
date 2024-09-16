import { backends, dbs, dbVisualizations, frontends } from "../data/skills";

export default function Skills() {
    return (
        <div id="skills">
            <div className="mt-12 mb-8">
                <p className="uppercase">/ Skills</p>
                <hr />
            </div>

            
                    <div className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Frontend */}
                        <div className="order-1">
                            <h3 className="text-xl mb-5 font-bold uppercase text-center">Frontend</h3>
                            <div className="grid gap-x-6 gap-y-6 grid-cols-2 md:grid-cols-3 mb-5 lg:px-42">
                                {frontends.map((frontend, index) => (
                                    <div key={index} className="mx-auto">
                                        <div className="bg-gray-100 border-2 p-2 rounded-xl shadow-xl w-16 h-16">
                                            <img src={frontend.img} alt="" className="w-full h-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="order-2">
                            <h3 className="text-xl font-bold uppercase mb-5 text-center">Backend</h3>
                            <div className="grid gap-x-6 gap-y-6 grid-cols-2 md:grid-cols-3 sm:grid-cols-3 mb-5 lg:px-42">
                                {backends.map((backend, index) => (
                                    <div key={index} className="mx-auto">
                                        <div className="bg-gray-100 border-2 p-2 rounded-xl shadow-xl w-16 h-16">
                                            <img src={backend.img} alt="" className="w-full h-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Database */}
                        <div className="order-3">
                            <h3 className="text-xl font-bold uppercase mb-5 text-center">Database</h3>
                            <div className="grid gap-x-6 gap-y-6 grid-cols-2 md:grid-cols-2 sm:grid-cols-2 mb-5 lg:px-42">
                                {dbs.map((db, index) => (
                                    <div key={index} className="mx-auto">
                                        <div className="bg-gray-100 border-2 p-2 rounded-xl shadow-xl w-16 h-16">
                                            <img src={db.img} alt="" className="w-full h-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Data Visualization */}
                        <div className="order-4">
                            <h3 className="text-xl font-bold uppercase mb-5 text-center">Data Visualization</h3>
                            <div className="grid gap-x-6 gap-y-6 lg:grid-cols-1 mb-5">
                                {dbVisualizations.map((dbVisualization, index) => (
                                    <div key={index} className="mx-auto">
                                        <div className="bg-gray-100 border-2 p-2 rounded-xl shadow-xl w-16 h-16">
                                            <img src={dbVisualization.img} alt="" className="w-full h-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
        </div>
    );
}
