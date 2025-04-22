import UserProfile from "./components/UserProfile/UserProfile";
import userData from "./data/user-data.json";

import friends from "./data/friends.json";
import FriendList from "./components/FriendList/FriendList";

function App() {
  return (
    <>
      <UserProfile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
    </>
  );
}

export default App;
