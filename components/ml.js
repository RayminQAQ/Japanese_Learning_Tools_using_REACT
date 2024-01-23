import React, {Component} from "react";
import CanvasDraw from "react-canvas-draw";

const defaultProps = {
    lazyRadius: 0,
    catenaryColor: "#0a0302",
    gridColor: "rgba(150,150,150,0.17)",
    canvasWidth: 400,
    canvasHeight: 400,
    disabled: false,
    imgSrc: "",
    saveData: "",
    immediateLoading: false,
    className: "border-[10px]",
    backgroundColor: "#f3f7fb",
    brushColor: "#33CCFF",
    brushRadius: 5,
    hideInterface: false,
    hideGrid: true,
    enablePanAndZoom: true,
    loadTimeOffset: 1,
  };

const colors = [
  "#B80000",
  "#DB3E00",
  "#FCCB00",
  "#008B02",
  "#006B76",
  "#1273DE",
  "#004DCF",
  "#5300EB",
  "#000000",
  "#EB9694",
  "#FAD0C3",
  "#FEF3BD",
  "#C1E1C5",
  "#BEDADC",
  "#C4DEF6",
  "#BED3F3",
  "#D4C4FB",
  "#CCCCCC",
];

class Canvas extends Component {
    constructor(props){
        super(props);
        
        this.canvasRef = React.createRef();
        this.canvasProps = {
            ...defaultProps,
        }
    }
   
    init = () => {
        localStorage.clear(); // init
    }

    handleSave = () => {
        // this.canvasRef.loadSaveData(localStorage.getItem("savedDrawing"));
        localStorage.setItem("arr", this.canvasRef.getSaveData());
        this.canvasRef.clear();
    }

    handleUndo = () => {
        this.canvasRef.undo();
    }

    handleErase = () => {
        this.canvasRef.clear();
    }

    predict = () => {
        // Tensorflow.js
    }

    customCanvas(){
        return(
            <div>
                <CanvasDraw
                    {...this.canvasProps}
                    ref={(canvasDraw) => (this.canvasRef = canvasDraw)} // 這裡最不懂 -> ref 是 REACT 的特殊語法
                />

                <button 
                    className="border-[10px] border-[#ccc]"
                    onClick={this.handleSave}
                >
                    Save
                </button>

                <button 
                    className="border-[10px] border-[#ccc]"
                    onClick={this.handleUndo}
                >
                    Undo
                </button>

                <button 
                    className="border-[10px] border-[#ccc]"
                    onClick={this.handleErase}
                >
                    Erase
                </button>

                <button 
                    className="border-[10px] border-[#ccc]"
                    onClick={this.predict}
                >
                    Predict
                </button>
                <br/>
                生成的圖片：
                <image></image>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.customCanvas()}
                {this.init()}
            </div>
        )
    }
}

export default function ML_box(){
    return (
        <div>
            <div className="flex justify-center mt-[12px]">
                <Canvas />
            </div>
            <br/>
            <prediction></prediction>
            <p className="text-[#cccccc] italic">
                the canvas is from:
                https://www.npmjs.com/package/react-canvas-draw
                <br/>
                its own demo: https://embiem.github.io/react-canvas-draw/
            </p>
        </div>
    )
}