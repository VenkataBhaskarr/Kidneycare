// SingleDemo.js
import { useParams } from 'react-router-dom';
const routeData = [
    {id: '1',title: "Kidneys and your health", content: <p>It is difficult to calculate the exact rate at which your kidneys work. The best measure of kidney function is called the glomerular filtration rate (GFR). The GFR can be estimated (eGFR) using a mathematical formula. This formula uses the level of creatinine in your blood to estimate how well your kidneys are filtering waste from your blood. It can indicate if there is any kidney damage.
    The higher the filtration rate, the better the kidneys are working. A GFR of 100 mL/min/1.73 m2 is in the normal range. This is about equal to ‘100 per cent kidney function’. Based on this measurement system, a GFR of 50 mL/min/1.73 m2 could be called ’50 per cent kidney function’ and a GFR of 30 mL/min/1.73 m2 could be called ’30 per cent kidney function’.
    If your doctor orders a blood test to learn more about your kidney function, an eGFR result is provided automatically, along with your creatinine results.
    Your doctor may also test for other signs and conditions that may indicate you have chronic kidney disease. </p>},
    {id: '2',title: "How your kidneys work ",content: <p>You have two kidneys, each about the size of an adult fist, located on either side of the spine just below the rib cage. Although they are small, your kidneys perform many complex and vital functions that keep the rest of the body in balance. For example, kidneys:
            Help remove waste and excess fluid
            Filter the blood, keeping some compounds while removing others
            Control the production of red blood cells
            Make vitamins that control growth
            Release hormones that help regulate blood pressure
            Help regulate blood pressure, red blood cells, and the amount of certain nutrients in the body, such as calcium and potassium.</p>},
    {id: '3',title: "About kidneys health",content: <p>Chronic kidney disease includes conditions that damage your kidneys and decrease their ability to keep you healthy by filtering wastes from your blood. If kidney disease worsens, wastes can build to high levels in your blood and make you feel sick. You may develop complications like:
            high blood pressure
            anemia (low blood count)
            weak bones
            poor nutritional health
            nerve damage
            Kidney disease also increases your risk of having heart and blood vessel disease. These problems may happen slowly over a long time. Early detection and treatment can often keep chronic kidney disease from getting worse. When kidney disease progresses, it may eventually lead to kidney failure, which requires dialysis or a kidney transplant to maintain life.</p>},
    {id: '4',title: "newly diagnosed",content: <p>There are many environmental, medical, and social factors that contribute to an increased risk of developing kidney disease, also known as chronic kidney disease or CKD. These factors include: having more than one disease (for example, high blood pressure or diabetes), your family’s medical history, where you live, where you work, where you play, how you are perceived by others, and how you have personally experienced discrimination.
            Environmental and social factors or social determinants of health (SDoH) make it more difficult for people to enjoy healthy lifestyles and get the medical attention, access to care, and support they need. SDoH also include physical and emotional factors, which lead to added stresses and can negatively affect your health. These are some of the SDoH that have been found to contribute to people developing kidney disease.</p>},
    { id: '5', title: 'What you should know?', content: <p>Risk Factors
            The lifetime risk of kidney stones is about 19% in men and 9% in women
            Family or personal history of kidney stones: If you or a family member has had kidney stones, you are more likely to develop a stone.
            Dehydration: Excessive sweating or not drinking enough water can increase your risk for kidney stones.
            Diets high in protein, salt, or sugar:Diets high in one or more of these items increases your risk for certain types of stones.
            Obesity: Obesity has been linked to an increased risk of kidney stones.
            Digestive diseases or surgeries: Surgeries which change your digestive system can affect absorption of calcium and water, increasing the concentration of stone-forming substances in your urine.
            Other medical conditions: Conditions such as high blood pressure, diabetes, and cystinuria may increase the risk for kidney stones.</p> },
    { id: '6', title: 'Symptoms and causes', content: <p>Some kidney stones are as small as a grain of sand. Others are as large as a pebble. A few are as large as a golf ball! As a general rule, the larger the stone, the more noticeable are the symptoms.
            The symptoms could be one or more of the following:
            severe pain on either side of your lower back
            more vague pain or stomach ache that doesn't go away
            blood in the urine
            nausea or vomiting
            fever and chills
            urine that smells bad or looks cloudy
            The kidney stone starts to hurt when it causes irritation or blockage. This builds rapidly to extreme pain. In most cases, kidney stones pass without causing damage-but usually not without causing a lot of pain. Pain relievers may be the only treatment needed for small stones. Other treatment may be needed, especially for those stones that cause lasting symptoms or other complications. In severe cases, however, surgery may be required.
        </p> },
    { id: '7', title: 'Treatment and prevention', content: <p>Did you know that one in ten people will have a kidney stone over the course of a lifetime? Recent studies have shown that kidney stone rates are on the rise across the country. Those in the know believe that some major misconceptions may be the culprit.

            The National Kidney Foundation has teamed up with Dr. Allan Jhagroo, a kidney stone specialist at the University of Wisconsin School of Medicine and Public Health, to help you stay stone-free by debunking some of the major kidney stone myths and misconceptions.

            Don't Underestimate Your Sweat.

            Saunas, hot yoga and heavy exercise may be good for your health, but they also may lead to kidney stones. Why? Loss of water through sweating - whether due to these activities or just the heat of summer—leads to less urine production. The more you sweat, the less you urinate, which allows for stone-causing minerals to settle and bond in the kidneys and urinary tract.

            One of the best measures you can take to avoid kidney stones is to drink plenty of water, leading you to urinate a lot. So, be sure to keep well hydrated, especially when engaging in exercise or activities that cause a lot of sweating.

            It's Not Just the Oxalate.

            Oxalate is naturally found in many foods, including fruits and vegetables, nuts and seeds, grains, legumes, and even chocolate and tea. Some examples of foods that contain high levels of oxalate include: peanuts, rhubarb, spinach, beets, chocolate and sweet potatoes. Moderating intake of these foods may be beneficial for people who form calcium oxalate stones, the leading type of kidney stones.

            A common misconception is that cutting the oxalate-rich foods in your diet alone will reduce the likelihood of forming calcium oxalate kidney stones. While in theory this might be true, this approach isn't smart from an overall health perspective. Most kidney stones are formed when oxalate binds to calcium while urine is produced by the kidneys.

            It is important to eat and drink calcium and oxalate-rich foods together during a meal. In doing so, oxalate and calcium are more likely to bind to one another in the stomach and intestines before the kidneys begin processing, making it less likely that kidney stones will form.

        </p> },
    { id: '8', title: 'Diet', content: <p>Diet Recommendations for Kidney Stones

            General Recommendations
            Drink plenty of fluid: 2-3 quarts/day
            This includes any type of fluid such as water, coffee and lemonade which have been shown to have a beneficial effect with the exception of grapefruit juice and soda.
            This will help produce less concentrated urine and ensure a good urine volume of at least 2.5L/day
            Limit foods with high oxalate content
            Spinach, many berries, chocolate, wheat bran, nuts, beets, tea and rhubarb should be eliminated from your diet intake
            Eat enough dietary calcium
            Three servings of dairy per day will help lower the risk of calcium stone formation. Eat with meals.
            Avoid extra calcium supplements
            Calcium supplements should be individualized by your physician and registered kidney dietitian
            Eat a moderate amount of protein
            High protein intakes will cause the kidneys to excrete more calcium therefore this may cause more stones to form in the kidney
            Avoid high salt intake
            High sodium intake increases calcium in the urine which increases the chances of developing stones
            Low salt diet is also important to control blood pressure.
            Avoid high doses of vitamin C supplements
            It is recommend to take 60mg/day of vitamin C based on the US Dietary Reference Intake
            Excess amounts of 1000mg/day or more may produce more oxalate in the body</p> },
    {id: '9',title: "Glomerular Filtration Rate ",content: <p>Measuring and estimating GFR
            Getting an accurate GFR level is challenging because measured GFR (mGFR) is a complicated and lengthy process. This makes it impractical for both clinicians and patients. It is for this reason that healthcare professionals use a formula to estimate GFR. Often, CKD does not have any symptoms until the later stages of the disease. This is the reason why reliable estimates of GFR are so important for identifying CKD as early as possible.

            The standard way to estimate GFR is with a simple blood test that measures your creatinine levels. Creatinine is a waste product that comes from the digestion of dietary protein and the normal breakdown of muscle tissue. Aside from CKD, creatinine levels can be affected by other factors including diet; muscle(weight of your muscles); malnutrition; and other chronic illnesses.</p>},
    {id: '10',title: "Albumin to creatinine ratio",content: <p>Anyone can develop chronic kidney disease (CKD) – at any age. However, some people are more likely than others to develop CKD. The most common CKD risk factors are:

            Diabetes
            High blood pressure (hypertension)
            Heart disease and/or heart failure
            Obesity (having a body mass index or BMI of 30 or more)
            Over the age of 60
            Family history of CKD or kidney failure
            Personal history of acute kidney injury (AKI)
            Smoking and/or use of tobacco products</p>},
    {id: '11',title: "Understanding your lab values",content: <p>Blood pressure
            A healthy blood pressure is very important for your kidneys and overall health.

            High blood pressure puts extra stress on your kidneys, heart, and blood vessels - increasing your risk for heart attack, stroke, and worsening kidney disease.
            Low blood pressure makes it hard for your blood to deliver oxygen and nutrients to all the different parts of your body. This increases your risk for acute kidney injury. It can also increase your risk for dizziness and falling.
            Your blood pressure is reported as 2 separate numbers – for example “120/80” or “120 over 80”. The first/top number (called “systolic pressure”) is the pressure in your blood vessels during each heartbeat - when blood is actively pumped out of your heart to the rest of your body. The second/bottom number (called “diastolic pressure”) is the pressure in your blood vessels when your heart is resting between each beat.

            The recommended blood pressure target may vary depending on factors like your age, other health conditions, risk of falling, and whether you are on dialysis. Ask your healthcare professional what your goal blood pressure should be.

            Weight
            Maintaining a healthy weight is important for your overall health. The definition of healthy weight depends on many other factors like your height, age, and other health conditions. So, ask your healthcare professional what a healthy body weight is for you.

            If you are underweight or losing weight without trying, you may not be getting the right nutrition to stay healthy.
            If you are overweight or slowly gaining weight, you may be getting too many calories and/or not enough physical activity.
        </p>},
    {id: '12',title: "Signs of kidney disease ",content: <p>You're more tired, have less energy or are having trouble concentrating. A severe decrease in kidney function can lead to a buildup of toxins and impurities in the blood. This can cause people to feel tired, weak and can make it hard to concentrate. Another complication of kidney disease is anemia, which can cause weakness and fatigue.
            You're having trouble sleeping. When the kidneys aren't filtering properly, toxins stay in the blood rather than leaving the body through the urine. This can make it difficult to sleep. There is also a link between obesity and chronic kidney disease, and sleep apnea is more common in those with chronic kidney disease, compared with the general population.
            You have dry and itchy skin. Healthy kidneys do many important jobs. They remove wastes and extra fluid from your body, help make red blood cells, help keep bones strong and work to maintain the right amount of minerals in your blood. Dry and itchy skin can be a sign of the mineral and bone disease that often accompanies advanced kidney disease, when the kidneys are no longer able to keep the right balance of minerals and nutrients in your blood.
            You feel the need to urinate more often. If you feel the need to urinate more often, especially at night, this can be a sign of kidney disease. When the kidneys filters are damaged, it can cause an increase in the urge to urinate. Sometimes this can also be a sign of a urinary infection or enlarged prostate in men.
            You see blood in your urine. Healthy kidneys typically keep the blood cells in the body when filtering wastes from the blood to create urine, but when the kidney's filters have been damaged, these blood cells can start to "leak" out into the urine. In addition to signaling kidney disease, blood in the urine can be indicative of tumors, kidney stones or an infection.</p>},
    {id: '13',title: "Causes of kidney disease",content: <p>There are a few other conditions or circumstances that can cause kidney disease.

            Glomerulonephritis: Glomerulonephritis is a group of diseases that cause inflammation and damage the kidney's filtering units. These disorders are the third most common type of kidney disease.

            Inherited diseases: Polycystic kidney disease, or PKD, is a common inherited disease that causes large cysts to form in the kidneys and damage the surrounding tissue.

            Kidney and urinary tract abnormalities before birth: Malformations that occur as a baby develops in its mother's womb. For example, a narrowing may occur that prevents normal outflow of urine and causes urine to flow back up to the kidney. This causes infections and may damage the kidneys.

            Autoimmune diseases: When the body's defense system, the immune system, turns against the body, it's called an autoimmune disease. Lupus nephritis is one such autoimmune disease that results in inflammation (swelling or scarring) of the small blood vessels that filter wastes in your kidney.

        </p>},
    {id: '14',title: "Diabetes",content: <p>What is Diabetes? Diabetes is a condition in which your body has trouble controlling the level of sugar (glucose) in your blood. Insulin is a hormone that regulates the amount of sugar in your blood. With diabetes, your body either does not make enough insulin or cannot use the insulin your body produces effectively.</p>},
    {id: '15',title: "Heart diseases",content: <p>The heart pumps blood filled with oxygen through all parts of your body, including the kidneys. The kidneys clean the blood, removing waste products and extra water. Without the kidneys, your blood would have too much waste and water. Without the heart, your kidneys would not have the oxygen filled blood needed to do its many important jobs. Without the help of your kidneys, the heart would be working too hard or would not function at all. A healthy functioning cardiovascular system is important for your kidneys to their job.

            What is the connection between heart disease and kidney disease?

            Researchers have been working to understand the clear relationship between kidney disease and heart disease. When your heart or kidneys cannot function normally, it can lead to cardiovascular disease (heart disease) or kidney disease. It is important to know that having kidney disease can directly affect your chances of developing heart disease. Having heart disease can directly affect your chances of developing kidney disease. In fact, kidney disease and heart disease share many of the same risk factors, such as diabetes and high blood pressure.</p>},
    {id: '16',title: "Obesity",content: <p>About obesity
            Overweight and obesity are increasingly common conditions in the United States. Almost 70% of adults in the United States are overweight. And of those, about one third are considered obese. Obesity is a serious chronic illness that can lead to type 2 diabetes, heart disease — two of the leading causes of kidney disease — as well as high blood cholesterol, cancers, and sleep disorders.

            Being overweight or obese are both terms for having more body fat than what is considered healthy. These terms are used to identify people who are at risk for health problems from having too much body fat. However, the term "obese" generally means a much higher amount of body fat than "overweight."

            Everyone needs some body fat for energy, heat insulation, and other body functions. But having too much can lead to serious health problems. The more body fat you have, the greater your risk for diabetes, kidney disease, heart disease, and other medical conditions.</p>},
    {id: '17',title: "High blood pressure",content: <p>Blood pressure is the force of blood pushing against the walls of your blood vessels as your heart pumps blood around your body. Most people with high blood pressure do not have any symptoms. For this reason, it is often called a “silent killer.” The only way to find out if you have high blood pressure is to have it measured.</p>},

    // ... add more routes as needed
];
const Singledemo = () => {
    const demoId = useParams();
    const demo = routeData.find((route) => route.id === demoId.id);
    if (!demo) {
        return <div>Invalid demoId</div>;
    }
    return (
        <div>
            <div className={"font-bold text-2xl mb-4"}>{demo.title}</div>
            <div className={""}>{demo.content}</div>
        </div>
    );
};

export default Singledemo;

