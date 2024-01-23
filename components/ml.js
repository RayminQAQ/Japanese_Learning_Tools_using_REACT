import React from "react";
import CanvasDraw from "react-canvas-draw";

class Canvas extends React.Component {
    a = () => {

    }

    customCanvas(){
        return(
            <CanvasDraw />
        )
    }

    render(){
        return(
            <div>
                {this.customCanvas()}
            </div>
        )
    }
}

export default function ML_box(){
    return (
        <div>
            <div className="flex justify-center">
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