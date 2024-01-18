import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
const App = () => {
  return (
    <div>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter the Text to Analyze" />
      </div>
    </div>
  );
}
export default App;