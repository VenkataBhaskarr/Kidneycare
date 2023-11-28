
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Testyourkidneys(){
    const navigate = useNavigate()
    const [selectedFile, setSelectedFile] = useState(null);
    const [stonedata, setStonedata] = useState("...");
    const handleFileChange = (e) => {
        // Get the selected file from the input
        const file = e.target.files[0];

        // Update the state with the selected file
        setSelectedFile(file);
    };
    const handleUpload = () => {
        if (selectedFile) {
            // Create FormData
            const formData = new FormData();
            formData.append("image", selectedFile);

            // Send POST request with FormData
            axios.post("http://3.110.184.69:5000/predict",  formData)
                .then((res) => { setStonedata(res.data.prediction) })
                .catch((err) => { console.log("Error posting data:", err) });
        } else {
            console.log("No file selected.");
        }
    };
    return(
        <div>
            <div className={"font-bold text-xl mb-12"}>Test whether your <span className={"text-pink-600"}>CT scans of kidneys</span> contains stones or not!</div>
            <div>
                <div>
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />
                    <button onClick={handleUpload} className={"bg-white rounded-lg p-2 text-black special w-48"}>Upload</button>
                </div>
            </div>
            {
                stonedata === "..." ? <div className={"mt-8"}> ... </div> :
                    <div className={"mt-8"}>
                        <div className={"mt-12"}>
                            It seems like your kidney CT scans are/contains <span className={"text-pink-700"}>{stonedata}</span>
                        </div>
                        <div className={"mt-8"}>
                            <button onClick={() => {navigate("getintouch")}} className={"bg-white rounded-lg p-2 text-black special w-48"}>Get in touch</button>
                        </div>
                    </div>
            }
            <div className={"mt-28"}>
                <p className="font-bold text-lg mb-2">How is this test evaluated?</p>
                <p className="mb-4">The evaluation of the kidney CT scan is conducted using a Support Vector Machine
                    (SVM) model. This advanced machine learning algorithm analyzes the scan images to identify patterns
                    and features associated with different kidney conditions.</p>
                <p className="mb-4">The evaluation process involves the following key steps:</p>
                <ul className="list-disc ml-6 mb-4">
                    <li>Image Preprocessing: The CT scan images are preprocessed to enhance their quality and extract
                        relevant features.
                    </li>
                    <li>Feature Extraction: Important features related to kidney health are extracted from the processed
                        images.
                    </li>
                    <li>Support Vector Machine Model: The extracted features are then fed into a trained <span className={"text-pink-600"}>SVM model</span>, a
                        powerful machine learning algorithm.
                    </li>
                    <li>Classification: The SVM model classifies the features, determining the presence or absence of
                        kidney conditions.
                    </li>
                    <li>Result Generation: Based on the classification, the system generates a comprehensive result
                        indicating the health status of the kidneys.
                    </li>
                </ul>
                <p>The SVM model has been trained on a diverse dataset to ensure accurate and reliable evaluations. It
                    is continually refined to improve its performance and adapt to emerging medical insights.</p>
            </div>
        </div>
    )
}
export default Testyourkidneys
