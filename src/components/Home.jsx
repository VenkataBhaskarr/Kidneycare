import {useEffect, useState} from "react";
import axios from "axios";
function Home(){
    const [news1, setNews1] = useState("Novartis says positive interim results on rare kidney disease drug.")
    const [news2, setNews2] = useState("NFK launches kidney cancer videos in eight languages.")
    const [news3, setNews3] = useState("SSH gets lithotripsy machine to treat kidney stone.")
    const [news4, setNews4] = useState("Irrational and prolonged use of medicines may damage kidneys.")
    const [news5, setNews5] = useState("PGI Chandigarh gets kidney diseases research laboratory.")
    const [news6, setNews6] = useState("Mumbai doctors link fairness cream to kidney illness in family.")
    // useEffect(() => {
    //     axios.post("https://python-secret.onrender.com/message", "Tell the latest news happening in the field of kidney health in 20 words", {
    //         headers : {
    //             "Content-Type": "application/json"
    //         },
    //     }).then((res) => setNews1(res.data))
    //     axios.post("https://python-secret.onrender.com/message", "Tell the latest news happening in the field of kidney health in 20 words", {
    //         headers : {
    //             "Content-Type": "application/json"
    //         },
    //     }).then((res) => setNews2(res.data))
    //     axios.post("https://python-secret.onrender.com/message", "Tell the latest news happening in the field of kidney health in 20 words", {
    //         headers : {
    //             "Content-Type": "application/json"
    //         },
    //     }).then((res) => setNews3(res.data))
    //     axios.post("https://python-secret.onrender.com/message", "Tell the latest news happening in the field of kidney health in 20 words", {
    //         headers : {
    //             "Content-Type": "application/json"
    //         },
    //     }).then((res) => setNews4(res.data))
    //     axios.post("https://python-secret.onrender.com/message", "Tell the latest news happening in the field of kidney health in 20 words", {
    //         headers : {
    //             "Content-Type": "application/json"
    //         },
    //     }).then((res) => setNews5(res.data))
    //     axios.post("https://python-secret.onrender.com/message", "Tell the latest news happening in the field of kidney health in 20 words", {
    //         headers : {
    //             "Content-Type": "application/json"
    //         },
    //     }).then((res) => setNews6(res.data))
    // },[])
    return(
        <div>
            <div className={"flex items-center justify-between mt-48"}>
                <div>
                    <p className={"text-6xl mb-3"}>Take care of your <span className={"text-pink-700"}>Kidneys</span></p>
                    <p className={"text-6xl mb-3"}>the way you</p>
                    <p className={"text-6xl"}>take care of your phone.</p>
                </div>
                <div>
                    <img className={"w-96 h-72 rounded-lg"} src={"doc2.jpeg"} alt={"image"}></img>
                </div>
            </div>

            <div className={"grid grid-cols-3 grid-rows-1 gap-4 mt-56"}>
                <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                    <img className={"h-24 w-24"} src={"kh_3in1.svg"} alt={"image"}/>
                    <p>200 million adults in India</p>
                    <p>are at risk for kidney disease.</p>
                </div>
                <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                    <img className={"h-24 w-24"} src={"kh_kidney.svg"} alt={"image"}/>
                    <p>70 million Indian adults have</p>
                    <p>kidney disease, and most don’t know it.</p>
                </div>
                <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                    <img className={"h-24 w-24"} src={"kh_transplant.svg"} alt={"image"}/>
                    <p>200,000 people are on the kidney</p>
                    <p>transplant list.</p>
                </div>
            </div>
            {/*<div>*/}
            {/*    <div>*/}
            {/*        <p className={"font-bold text-lg"}>Prevalence of Chronic Kidney Disease (CKD)</p>*/}
            {/*        <p>The estimated prevalence of CKD in India is between 10% and 15%.</p>*/}
            {/*        <p>CKD is a major public health problem in India, with an estimated 60 to 80 million people suffering from the condition.</p>*/}
            {/*        <p>The prevalence of CKD is increasing in India due to the rising prevalence of diabetes and hypertension, two major risk factors for CKD.</p>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <p className={"font-bold text-lg"}>Mortality from CKD</p>*/}
            {/*        <p>CKD is a major cause of death in India, accounting for an estimated 10% to 15% of all deaths.</p>*/}
            {/*        <p>The mortality rate from CKD is increasing in India due to the increasing prevalence of the condition.</p>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <p className={"font-bold text-lg"}>Factors Contributing to the Rising Burden of CKD in India</p>*/}
            {/*        <p>The increasing prevalence of diabetes and hypertension.</p>*/}
            {/*        <p>The lack of awareness about CKD and its risk factors.</p>*/}
            {/*        <p>The limited availability of screening and treatment facilities for CKD.</p>*/}
            {/*        <p>The high cost of treatment for CKD.</p>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div className={"mt-24"}>
                <div className={"font-bold text-2xl"}>
                    key statistics on kidney health in India:
                </div>
                <div className="bg-gray-950 text-white p-6 rounded-lg mb-6 mt-8">
                    <p className="font-bold text-lg mb-2">Prevalence of Chronic Kidney Disease (CKD)</p>
                    <p>The estimated prevalence of CKD in India is between 10% and 15%.</p>
                    <p>CKD is a major public health problem in India, with an estimated 60 to 80 million people
                        suffering from the condition.</p>
                    <p>The prevalence of CKD is increasing in India due to the rising prevalence of diabetes and
                        hypertension, two major risk factors for CKD.</p>
                </div>

                <div className="bg-gray-950 text-white p-6 rounded-lg mb-6">
                    <p className="font-bold text-lg mb-2">Mortality from CKD</p>
                    <p>CKD is a major cause of death in India, accounting for an estimated 10% to 15% of all deaths.</p>
                    <p>The mortality rate from CKD is increasing in India due to the increasing prevalence of the
                        condition.</p>
                </div>

                <div className="bg-gray-950 text-white p-6 rounded-lg">
                    <p className="font-bold text-lg mb-2">Factors Contributing to the Rising Burden of CKD in India</p>
                    <p>The increasing prevalence of diabetes and hypertension.</p>
                    <p>The lack of awareness about CKD and its risk factors.</p>
                    <p>The limited availability of screening and treatment facilities for CKD.</p>
                    <p>The high cost of treatment for CKD.</p>
                </div>
            </div>


            <div className={"mt-24"}>
                <div className={"font-bold text-2xl mb-4"}>Latest News</div>
                <div className={"grid grid-cols-3 grid-rows-2 gap-4"}>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"h-56 w-80 mb-2"} src={"doctors1.jpeg"} alt={"image"}/>
                        <p className={"text-lg"}>{news1}</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"h-56 w-80 mb-2"} src={"kidneyanimated.jpeg"} alt={"image"}/>
                        <p className={"text-lg"}>{news2}</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"h-56 w-80 mb-2"} src={"kidneyhealth.jpeg"} alt={"image"}/>
                        <p className={"text-lg"}>{news3}</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"h-56 w-80 mb-2"} src={"kidneyu1.jpeg"} alt={"image"}/>
                        <p className={"text-lg"}>{news4}</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"h-56 w-80 mb-2"} src={"patients_at_computer.jpg"} alt={"image"}/>
                        <p className={"text-lg"}>{news5}</p>
                    </div>
                    <div className="max-w-md bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                        <img className={"h-56 w-80 mb-2"} src={"kidneyhealth.jpeg"} alt={"image"}/>
                        <p className={"text-lg"}>{news6}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home