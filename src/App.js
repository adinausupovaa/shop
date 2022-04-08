import "./App.css";
import "antd/dist/antd.css";
import Routing from "./Routing";
import ProductContextProvider from "./context/ProductContext";

function App() {
  return (
    <>
      <div className="App">
        <ProductContextProvider>
          <Routing />
        </ProductContextProvider>
      </div>
    </>
  );
}

export default App;
