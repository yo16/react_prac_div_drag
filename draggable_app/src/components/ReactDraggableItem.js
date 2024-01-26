import Draggable from "react-draggable";

const ReactDraggableItem = () => {
    const handleStart = () => {
        console.log("handleStart!!");
    };
    const handleDrag = () => {
        console.log("handleDrag!!");
    };
    const handleStop = () => {
        console.log("handleStop!!");
    };
    return (
        <Draggable
            /*axis="x"*/
            handle=".handle"
            defaultPosition={{x:0, y:0}}
            position={null}
            /*grid={[25, 25]}*/
            scale={1}
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
        >
            <div className="border-4 border-green-700 bg-green-200 w-60 h-40" >
                <div className="handle bg-green-500 p-5">
                    Drag from here
                </div>
                <div>
                    This readme is really dragging on...
                </div>
            </div>
        </Draggable>
    )
}

export default ReactDraggableItem;
