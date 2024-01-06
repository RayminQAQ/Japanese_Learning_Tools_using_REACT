import React from "react";
import dict from "../public/wordConverter.json"

let init = true;
let history = {}; // Problem

export default function Hiragana_QA() {
    function getEN(Hgn, dictionary){
        /*
        for(let i=0; i<dictionary["word"].length; i++){
            if(dictionary["word"][i]["JP_Hgn"] === Hgn){
                return  dictionary["word"][i]["EN"];
            }
        }
        */
        let foundWord = dictionary["word"].filter(word => word["JP_Hgn"] === Hgn );
        return foundWord.length === 1 ? foundWord[0]["EN"] : "";
    }

    function getRandomHgn(dictionary){
        const sampleIdx = Math.floor(Math.random() * dictionary.length);
        return dictionary[sampleIdx]["JP_Hgn"];
    }

    const setResult = (ansLabel, answerLabel, resetInput, dict) => {
        // Check for Answers, set AnswerLabel(Illustration)
        const userInput = resetInput.value;
        const answer = getEN(ansLabel.innerHTML.toLowerCase(), dict);
        
        if(!(userInput === answer)){
            answerLabel.innerHTML = "正確答案為 " + ansLabel.innerHTML + "(" + answer + ")，而你的輸入為：" + userInput;
        }
        
        // Reset Input
        resetInput.value = ""; 
    }

    const setNextQuestion = (AskLabel, dict) => {
        AskLabel.innerHTML = getRandomHgn(dict.word);
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col m-4 p-4 border-solid border-2 border-111111 text-2xl ">
                <div className="askDiv">
                    <span className="font-bold">問題:</span>
                    <label id="AskLabel" className="flex justify-center">日文字
                        {
                            init ? (() => {
                                init = false;
                                return setNextQuestion(document.getElementById("AskLabel"), dict);
                            })() : ""
                        }
                    </label>
                </div>
                <div className="inDiv">
                    <label className="font-bold mr-2">答案:</label>
                    <input
                        id="wordInput"
                        className="pt-2 pb-2 mt-6"
                        type=""
                        name=""
                        onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            setResult(AskLabel, result, wordInput, dict);
                            setNextQuestion(AskLabel, dict);
                        }
                    }}/>
                    <label className="ml-2 text-xl">(英文拼音)</label>
                </div>
                <span id="result" className="flex justify-center mt-2">答案在這裡!!</span>
            </div>
        </div>

    )
}