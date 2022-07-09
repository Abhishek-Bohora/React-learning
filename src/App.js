import Counter from "./useStateBasicUsage/Counter";
import TextFieldString from "./useStateBasicUsage/TextFieldString";
import { Checkbox } from "./useStateBasicUsage/Checkbox";
import { CounterPrevState } from "./useStateBasicUsage/CounterPrevState";
import { UpdatingObjects } from "./useStateBasicUsage/UpdatingObjects";
import { UpdatingNestedObjects } from "./useStateBasicUsage/UpdatingNestedObjects";
function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <TextFieldString/> */}
      {/* <Checkbox/> */}
      {/* <CounterPrevState/> */}
      {/* <UpdatingObjects/> */}
      <UpdatingNestedObjects/>
    </div>
  );
}

export default App;
