import ReactDraggableItem from "./components/ReactDraggableItem";

const ReactDraggableSample = () => {
    return (
        <>
            <div>react-draggable sample</div>
            <div className="flex ml-6" style={{ "flex-wrap": "wrap" }}>
                <ReactDraggableItem />
                <ReactDraggableItem />
                <ReactDraggableItem />
                <ReactDraggableItem />
            </div>
        </>
    )
};

export default ReactDraggableSample;
