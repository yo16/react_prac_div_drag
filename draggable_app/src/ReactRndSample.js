/* 参考
https://github.com/bokuweb/react-rnd
https://zenn.dev/xbit/articles/aa923b3c9000e5
*/
import ReactRndItem from "./components/ReactRndItem";

const ReactRndSample = () => {
    return (
        <>
            <div>react-rnd sample</div>
            <div className="flex ml-6" style={{ "flex-wrap": "wrap" }}>
                <ReactRndItem />
                <ReactRndItem />
                <ReactRndItem />
                <ReactRndItem />
            </div>
        </>
    );
};

export default ReactRndSample;

