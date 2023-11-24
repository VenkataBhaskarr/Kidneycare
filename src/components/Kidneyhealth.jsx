function Kidneyhealth(){
    return(
        <div>
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
    )
}

export default Kidneyhealth