import CakeView from "./app/features/cake/cakeView";
import IcecreamView from "./app/features/icecream/icecreamView";
import UsersView from "./app/features/user/usersView";

function App() {
  return (
    <div id="root" className="App">
      <CakeView />
      <IcecreamView />
      <UsersView />
    </div>
  );
}

export default App;
