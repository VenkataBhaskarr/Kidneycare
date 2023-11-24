import {useNavigate} from "react-router-dom";
function Getintouch(){
    const navigate = useNavigate()

    return(
        <div>
            <div>
                <div className={"font-bold text-xl"}>with Dr. Leslie Spry, MD, FACP</div>
                <div className={"mb-4"}>All these question are answered by Dr.spry!</div>
                <div className={"flex gap-6 mb-6"}>
                    <div className={"w-3/4"}>
                        Dr. Spry practices consultative nephrology and is the medical director of the Dialysis Center of Lincoln in Lincoln, Nebraska where he participates in research and innovative projects for the benefit of dialysis patients. His areas of professional interests focus on nephrology, hypertension, dialysis, acute renal failure, kidney stone disease, and chronic kidney disease.

                        Dr. Spry is an active member of the Public Policy Committee at the National Kidney Foundation, which is dedicated to developing policies on health care issues that affect kidney patients, transplant recipients and organ and tissue donors. Dr. Spry received his medical degree from the University of Nebraska and his nephrology training at Washington University in St. Louis, Missouri.
                    </div>
                    <div className={"w-1/4"}>
                        <img className={"h-48 w-full rounded-lg"} src={"Drspry.jpeg"} alt={"image"}/>
                    </div>
                </div>
                <div className={"font-bold"}>
                    Q: Can anything be done to prevent recurring Urinary Tract Infections (UTI)?
                </div>
                <div>
                    A. You can help lessen the chance of recurring UTIs by recognizing signs and symptoms of a UTI and taking appropriate action to see your doctor early. You should follow your doctor's advice and take all prescribed antibiotics as ordered and drink plenty of fluids. You should empty your bladder frequently, especially at night before going to bed. New studies show that drinking cranberry juice daily or eating cranberry products may help. Cranberries contain certain compounds that may stop bacteria from attaching to the urinary tract wall.
                </div>
                <div className={"mt-6 font-bold"}>
                    Q: How common is CKD?
                </div>
                <div>
                    A: Some 37 million Americans (1 in 7 U.S. adult population) suffer from CKD—a figure experts predict will rise due to high obesity rates (1/3 of all adults), the link between obesity, diabetes and high blood pressure (all risk factors) and the aging of the Baby Boom generation (since age is another risk factor for CKD). Young and middle-aged adults can also develop CKD.
                </div>
                <div className={"mt-6 font-bold"}>
                    Q: What are the risk factors of CKD?
                </div>
                <div>
                    A: Primary risk factors include diabetes, high blood pressure, cardiovascular disease, a family history of kidney failure and age over 60. Secondary risk factors include obesity, autoimmune diseases, urinary tract infections, systemic infections, and kidney loss, damage, injury or infection.
                </div>
                <div className={"mt-6 font-bold"}>
                    Q: Can CKD be prevented?
                </div>
                <div>
                    A: Taking care of overall health helps protect kidney health. Wise practices include exercising regularly, low salt diet, controlling weight, monitoring blood pressure, cholesterol and glucose levels, not smoking, drinking moderately, avoiding non-steroidal anti-inflammatory drugs (NSAIDs) and getting an annual physical.
                </div>
                <div className={"mt-6 font-bold"}>
                    Q: What are the warning signs of CKD?
                </div>
                <div>
                    A: Most people have no symptoms until CKD is advanced. “If you wait until you have symptoms to be tested, you’ve waited too long,” says Leslie Spry, MD, spokesperson for the National Kidney Foundation. Signs of advancing CKD include swollen ankles, fatigue, difficulty concentrating, decreased appetite, blood in the urine and foamy urine.
                </div>
            </div>
            <div className={"mt-12"}>
                <button onClick={() => {navigate("/talkwithai")}} className={"bg-white rounded-lg p-3 text-black special w-48"}>Talk with AI</button>
            </div>
        </div>
    )
}
export default Getintouch