import Card from "./components/Card";

function App() {
  return (
    <div className="m-12">
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind and Props
      </h1>
      <Card username="Gaurav" />
      <Card username="chaiaurcode" btnText="click me" />
    </div>
  );
}

export default App;
