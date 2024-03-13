import { HashRouter } from "react-router-dom";
import UnauthenticatedContent from "./UnauthenticatedContent";
import userUsersStore from "./store/useUsersStore";
import { NavigationProvider } from "./contexts/navigation";

function RootApp() {
  const { loading, user } = userUsersStore((state) => ({
    loading: state.loading,
    user: state.user
  }));

  if (loading) {
    return <><h1>loading</h1></>;
  }

  if(!user){
    return <UnauthenticatedContent/>
  }

  console.log(user)

}
function App() {

  return (
    <HashRouter>
      <NavigationProvider>
        <RootApp />
      </NavigationProvider>
    </HashRouter>
  );
}

export default App;
