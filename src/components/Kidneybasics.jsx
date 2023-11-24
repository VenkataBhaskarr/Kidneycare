import {useNavigate} from "react-router-dom";
function Kidneybasics(){
    const navigate = useNavigate()
    return(
        <div>

            <div className={"mb-24"}>
                <div className={"mb-8 font-bold text-2xl"}>
                    Lifestyle
                </div>
                <div className={"grid grid-cols-3 grid-rows-2 gap-4"}>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"h-24 w-24"} src={"nutrition.svg"} alt={"image"}/>
                        <p className={"font-bold mb-1 text-lg"}>Nutrition</p>
                        <p>Learn about a kidney-friendly diet, so you can stay healthy with kidney disease whether you are at home or dining out.</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"h-24 w-24"} src={"exercise.svg"} alt={"image"}/>
                        <p className={"font-bold mb-1 text-lg"}>Exercise</p>
                        <p>Exercise is important for everyone, especially for people with kidney disease.</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"h-24 w-24"} src={"sexualhealth.svg"} alt={"image"}/>
                        <p className={"font-bold mb-1 text-lg"}>Sexual Health</p>
                        <p>Kidney disease can affect your sexuality in many ways — from hormones, nerves, energy levels, even medicine.</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"h-24 w-24"} src={"insurance.svg"} alt={"image"}/>
                        <p className={"font-bold mb-1 text-lg"}>Insurance</p>
                        <p>Insurance doesn’t have to be overwhelming. Learn about insurance options and choosing a plan that is right for you.</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"h-24 w-24"} src={"vaccinations.svg"} alt={"image"}/>
                        <p className={"font-bold mb-1 text-lg"}>Vaccinations</p>
                        <p>As a dialysis patient or transplant recipient you may be wondering — are vaccines safe for me? Do I need them?</p>
                    </div>
                </div>
            </div>

                <div>
                    <div className={"mb-8 font-bold text-2xl"}>
                        Basic Kidney health Information
                    </div>
                    <div className={"mt-5 mb-5 grid grid-cols-2 grid-rows-2 gap-4"}>
                        <div className={"max-w-xl bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg flex gap-6 p-4"}>
                            <div>
                                <img className={"w-56 h-full"} src={"kidney_health_screening.jpg"} alt={"image"}/>
                            </div>
                            <div>
                                <div className={"font-bold text-xl"}>Understanding Kidney health</div>
                                <div><button onClick={() => {navigate("/singledemo/1")}} className={"underline"}>Kidneys and your health</button></div>
                                <div><button onClick={() => {navigate("/singledemo/2")}} className={"underline"}>How your kidneys work</button></div>
                                <div><button onClick={() => {navigate("/singledemo/3")}} className={"underline"}>About kidney disease</button></div>
                                <div><button onClick={() => {navigate("/singledemo/4")}} className={"underline"}>Newly diagnosed?</button></div>
                            </div>
                        </div>
                        <div className={"max-w-xl bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg flex gap-6 p-4"}>
                            <div>
                                <img className={"w-56 h-full"} src={"kidneystone_adobestock_264233451.jpg"} alt={"image"}/>
                            </div>
                            <div>
                                <div className={"font-bold text-xl"}>Kidney stones</div>
                                <div><button onClick={() => {navigate("/singledemo/5")}} className={"underline"}>What you should know?</button></div>
                                <div><button onClick={() => {navigate("/singledemo/6")}} className={"underline"}>Symptoms and causes</button></div>
                                <div><button onClick={() => {navigate("/singledemo/7")}} className={"underline"}>Treatement and prevention</button></div>
                                <div><button onClick={() => {navigate("/singledemo/8")}} className={"underline"}>Diet</button></div>
                            </div>
                        </div>
                        <div className={"max-w-xl bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg flex gap-6 p-4"}>
                            <div>
                                <img className={"w-56 h-full"} src={"lab_test_header.jpg"} alt={"image"}/>
                            </div>
                            <div>
                                <div className={"font-bold text-xl"}>Kidneys health testing</div>
                                <div><button onClick={() => {navigate("/singledemo/9")}} className={"underline"}>Glomerular Filtration Rate</button></div>
                                <div><button onClick={() => {navigate("/singledemo/10")}} className={"underline"}>Albumin to creatinine ratio</button></div>
                                <div><button onClick={() => {navigate("/singledemo/11")}} className={"underline"}>Understanding your lab values</button></div>
                            </div>
                        </div>
                        <div className={"max-w-xl h-64 bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg flex gap-6 p-4"}>
                            <div>
                                <img className={"w-56 h-full"} src={"patients_at_computer.jpg"} alt={"image"}/>
                            </div>
                            <div>
                                <div className={"font-bold text-xl"}>Risk factors and causes</div>
                                <div><button onClick={() => {navigate("/singledemo/12")}} className={"underline"}>Signs of kidney disease</button></div>
                                <div><button onClick={() => {navigate("/singledemo/13")}} className={"underline"}>Causes of kidney disease</button></div>
                                <div><button onClick={() => {navigate("/singledemo/14")}} className={"underline"}>Diabetes</button></div>
                                <div><button onClick={() => {navigate("/singledemo/15")}} className={"underline"}>Heart diesease</button></div>
                                <div><button onClick={() => {navigate("/singledemo/16")}} className={"underline"}>Obesity</button></div>
                                <div><button onClick={() => {navigate("/singledemo/17")}} className={"underline"}>High blood pressure</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"mt-24 font-bold text-2xl"}>
                    Diet and Nutrition
                </div>
            <div className={"mt-4"}>
                <div className={"grid grid-cols-3 grid-rows-2 gap-4"}>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"rounded mb-3 h-56 w-96"} src={"oninons.jpeg"} alt={"image"}/>
                        <p className={"font-bold mb-1 text-lg underline"}>Nutrition</p>
                        <p>Nutrition is key to managing kidney disease and your overall health.</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"rounded mb-3 h-56 w-96"} src={"spices.jpeg"} alt={"image"}/>
                        <p className={"font-bold mb-1 text-lg underline"}>Spice up your diet</p>
                        <p>Giving up salt does not mean giving up flavor. Learn to season your food with herbs and spices.</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"rounded mb-3 h-56 w-96"} src={"dash_soup.jpg"} alt={"image"}/>
                        <p className={"font-bold mb-1 text-lg underline"}>DASH</p>
                        <p>The DASH diet has been shown to help decrease blood pressure and lower the risk for heart disease, stroke, cancer, and kidney stones.</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"rounded mb-3 h-56 w-96"} src={"plant.jpeg"} alt={"image"}/>
                        <p className={"font-bold mb-1 text-lg underline"}>Plant based</p>
                        <p>Studies show that eating whole grains, nuts, fruits and vegetables is one of the most important ways to keep kidneys healthy.</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"rounded mb-3 h-56 w-96"} src={"salt-reduction.jpg"} alt={"image"}/>
                        <p className={"font-bold mb-1 text-lg underline"}>Kidney disease stages 1-4</p>
                        <p>Most patients in the early stages of kidney disease need to limit the amount of sodium in their diet.</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"rounded mb-3 h-56 w-96"} src={"dietist.png"} alt={"image"}/>
                        <p className={"font-bold mb-1 text-lg underline"}>Find a dietitian</p>
                        <p>Looking for guidance on a kidney-friendly diet? Find a dietitian in your area.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Kidneybasics