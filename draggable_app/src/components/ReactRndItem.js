import { Rnd } from "react-rnd";

/* バグの懸念
- ハンドル要素の指定ができない？
- リサイズのハンドルを無効にしても、上と左はできてしまう。
*/

const ReactRndItem = () => {
    return (
        <Rnd
            default={{
                // 初期位置
                // 上位の要素に対する相対位置。
                // つまり並びの要素の影響は受けないので、重なる。
                x:0,
                y:0,
                // ハンドルしたいクラス名
                // （指定しても全部できちゃう。bug?）
                dragHandleClassName: "handle",
                // 上と左にリサイズできちゃう。bug?
                enableResizing: {
                    top:false, right:false, bottom:false, left:false,
                    topRight:false, bottomRight:false, bottomLeft:false, topLeft:false },
            }}
            onDragStart={()=>{console.log("start!!");}}
            onDrag={()=>{console.log("dragging!!");}}
            onDragStop={()=>{console.log("stop!!");}}
        >
            <div className="border-4 border-blue-700 bg-blue-200 w-60 h-40" >
                <div className="handle bg-blue-500 p-5">
                    Drag from here
                </div>
                This readme is really dragging on...
            </div>
        </Rnd>
    );
};

export default ReactRndItem;
