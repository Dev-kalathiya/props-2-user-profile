import React from "react";
import Profile from "./Profile";
function App() {
  return (
    <div>
      <Profile
        istrue="true"
        bio="WHAT U WANT KNOW ABOUT ME"
        loc="surat"
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9ML0QbGwOiQvUlDh1_E4PSKmHPyTRxjuaQ&s"
        }
        name="DEV"
        age="22"
      />
    </div>
  );
}

export default App;
