import React from "react";
import dict from "./wordConverter.json";

export default function Hiragana_QA() {
  const history = React.useRef({});
  const [question, setQuestion] = React.useState(""); // getRandomHgn 回傳變數

  // 只有第一次會執行
  React.useEffect(() => {
    setQuestion(getRandomHgn(dict.word));
  }, []);

  function getEN(Hgn, dictionary) {
    let foundWord = dictionary["word"].filter((word) => word["JP_Hgn"] === Hgn);
    return foundWord.length === 1 ? foundWord[0]["EN"] : "";
  }

  function getRandomHgn(dictionary) {
    const sampleIdx = Math.floor(Math.random() * dictionary.length);
    return dictionary[sampleIdx]["JP_Hgn"];
  }

  const setResult = (ansLabel, answerLabel, resetInput, dict) => {
    // Check for Answers, set AnswerLabel(Illustration)
    const userInput = resetInput.value;
    const answer = getEN(ansLabel.innerHTML.toLowerCase(), dict);

    if (!(userInput === answer)) {
      answerLabel.innerHTML =
        "正確答案為 " +
        ansLabel.innerHTML +
        "(" +
        answer +
        ")，而你的輸入為：" +
        userInput;

      // Save to history
      history.current[ansLabel.innerHTML] = userInput;
    } else {
      answerLabel.innerHTML = "正確答案!!";
    }

    // Reset Input
    resetInput.value = "";
  };

  const setNextQuestion = (AskLabel, dict) => {
    return getRandomHgn(dict.word);
  };

  // JS

  return (
    <div className="flex justify-center">
      <div className="flex flex-col m-4 p-4 border-solid border-2 border-111111 text-2xl ">
        <div className="askDiv">
          <span className="font-bold">問題: </span>
          <span id="AskLabel" className="font-bold">
            {question}
          </span>
        </div>
        <div className="inDiv">
          <label className="font-bold mr-2">答案:</label>
          <input
            id="wordInput"
            className="pt-2 pb-2 mt-6 mb-6 border-solid border-2 border-111111"
            type="text"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setResult(
                  document.getElementById("AskLabel"),
                  document.getElementById("result"),
                  document.getElementById("wordInput"),
                  dict
                );
                setQuestion(
                  setNextQuestion(document.getElementById("AskLabel"), dict)
                );
              }
            }}
          />
          <label className="ml-2 text-xl">(英文拼音)</label>
        </div>
        <span id="result" className="flex justify-center mt-2">
          錯誤會顯示在這裡!!
        </span>
      </div>
      <div className="flex flex-col m-4 p-4 border-solid border-2 border-111111 text-2xl ">
        <div>History</div>
        <div className="flex flex-col">
          {Object.keys(history.current).map((key) => (
            <div className="flex justify-between">
              <p className="pr-1">{key + "(" + getEN(key, dict) + ")"}&nbsp;</p>
              <p>{history.current[key]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
