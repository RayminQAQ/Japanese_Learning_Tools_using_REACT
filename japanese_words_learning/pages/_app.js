import React from "react";

import "../styles/globals.css"
import "./_app.css"
import "../styles/font.css" // shigen

import Menu from "../layouts/menu" // Menu要大寫 -> export function
import Hiragana_QA from "../components/hiragana"
import Footer from "../layouts/footer"

// import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
    // const [usr_input, setUsr_input] = useState(""); const [isLogin, setIsLogin] =
    // useState(false); // 是否登入

    const menu_list = ["平假名", "片假名", "ML 辨識相關"];

    const binding = ["平假名的binding", "片假名的binding", "ML辨識的binding"];

    return (
        // import banner
        // main function
        <div className="" style={{
            fontFamily: 'shigen'
        }}>
            <Menu menuList={menu_list}/>
            <Hiragana_QA/>
            <Footer/>
            <br/>
            TO-DO list for ML：Can be train from
            https://github.com/Nippon2019/Handwritten-Japanese-Recognition/tree/master
        </div>
    )
}

/**
Reference:
[1]: https://github.com/simpleepic/react-beginner-course/tree/main/src
 */