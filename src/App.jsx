import './App.css'
 import {Route, Routes} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Getintouch from "./components/Getintouch.jsx"
import Home from "./components/Home.jsx";
import Kidneybasics from "./components/Kidneybasics.jsx";
import Testyourkidneys from "./components/Testyourkidneys.jsx";
import Kidneyhealth from "./components/Kidneyhealth.jsx";
import Talkwithai from "./components/Talkwithai.jsx";
import Singledemo from "./components/Singledemo.jsx";
function App() {
    const navigate = useNavigate()
  return (
    <div>
        <div className={"header mt-8 ml-8 flex items-center justify-between"}>
            <div className={"flex items-center gap-4"}>
                <div>
                    <img className={"w-20 h-16 rounded-full"} src={"kidney.jpg"}  alt={"kidney image"}/>
                </div>
                <div className={"text-3xl font-bold"}><button onClick={() => {navigate((""))}}>Kidney Care</button></div>
            </div>

            <div className={"flex gap-8 text-xl mr-8"}>
                <div><button className={"under"} onClick={() => {navigate("/kidneybasics")}}>Kidney health</button></div>
                <div><button className={"under"} onClick={() => {navigate("/testyourkidneys")}}>Test your kidneys</button></div>
                <div><button className={"under"} onClick={() => {navigate("/getintouch")}}>FAQ</button></div>
            </div>
        </div>
        <div className={"ml-8 mr-8 mt-16 mb-16"}>
            <Routes>
                <Route path={""} element={<Home />}></Route>
                <Route path={"/kidneybasics"} element={<Kidneybasics />}></Route>
                <Route path={"/testyourkidneys"} element={<Testyourkidneys />}></Route>
                <Route path={"/getintouch"} element={<Getintouch />}></Route>
                <Route path={"/kidneyhealth"} element={<Kidneyhealth/>}></Route>
                <Route path={"/talkwithai"} element={<Talkwithai/>}></Route>
                <Route path={"/singledemo/:id"} element={<Singledemo />}></Route>
            </Routes>
        </div>
        <div className={"footer ml-8"}>
            <div className={"flex items-center flex-col"}>
                <div className={"flex gap-2"}>
                    <div>
                        Kidney Care.
                    </div>
                    <div>
                        &copy;2023 Kidney Care Inc. All rights reserved.
                    </div>
                </div>

                <div className={"flex gap-2"}>
                    <div>Terms of use |</div>
                    <div>License agreement |</div>
                    <div>Privacy policy |</div>
                    <div>Social media guidelines</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
