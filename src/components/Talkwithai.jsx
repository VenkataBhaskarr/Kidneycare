import {useState} from "react";
import axios from "axios";
function Talkwithai(){
    const [query, setQuery] = useState("")
    const [answer, setAnswer] = useState("Response...")
    const sendData = () => {
        if(query === ""){ /* empty */ }else{
            axios.post("https://python-secret.onrender.com/message", query, {
                headers : {
                  "Content-Type": "application/json"
                },
            }).then((res) => setAnswer(res.data))
        }
    }
    return(
        <div>
            <div className={"font-bold text-xl"}>Try our AI which clears all your doubts before talking to the professionals. </div>
            <div className={"mt-8"}>
                <div className="max-w-6xl bg-gray-600 bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg flex">
                        <div className={"w-3/4"}>
                            <input
                                className={"h-12 w-11/12 text-white p-2 bg-white bg-opacity-10 rounded-lg"}  // Tailwind CSS classes for height and width
                                placeholder={"enter your query"}  // Placeholder text for the input
                                value={query}  // The value of the input controlled by the state variable 'query'
                                onChange={(e) => {setQuery(e.target.value)}}  // Event handler to update 'query' when the input value changes
                            />
                        </div>
                        <div className={"w-1/4"}>
                            <button onClick={sendData} className={"bg-white h-12 rounded-lg p-2 text-black special w-full"}>Get the response</button>
                        </div>
                </div>
                <div className={"mt-8"}>
                    {answer}
                </div>
            </div>
        </div>
    )
}

export default Talkwithai