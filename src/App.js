import MyModal from "./components/MyModal";
import MyDropdown from "./components/MyDropdown";
import MyList from "./components/MyList";
import MyDisclosure from "./components/Disclosure";
import MyTabs from "./components/MyTabs";
import MyRadio from "./components/MyRadio";
function App() {
  return (
    <div className="App container mx-auto">
      <div className="w-full h-64 bg-blue-400 flex items-center justify-center">
        <MyModal />
      </div>
      <div className="w-full h-64 bg-purple-400 flex items-center justify-center">
        <MyDropdown />
      </div>
      <div className="w-full h-64 bg-yellow-400 flex items-center justify-center">
        <MyList />
      </div>
      <div className="w-full h-64 bg-blue-400 flex items-center justify-center">
        <MyTabs />
      </div>
      <div className="w-full h-64 bg-green-500 flex items-center justify-center">
        <MyRadio />
      </div>
      <div className="w-full h-72 bg-purple-600 pt-8">
        <MyDisclosure />
      </div>
    </div>
  );
}

export default App;
