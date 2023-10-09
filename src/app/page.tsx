import Test from "./Components/Test";
import "../app/Styles/TestStyles.scss";
import "./Breakpoints/Breakpoints.scss";
export default function Home() {
  return (
    <div className="global-container">
      <Test />
    </div>
  );
}
