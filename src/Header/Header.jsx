import Navigation from "./Navigation/Navigation";
import UserInfo from "./UserInfo/UserInfo";

export default function Header() {
  return (
    <header>
      <img
        src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png"
        alt="Aperture science"
        className="logo"
      />

      <UserInfo />

      <Navigation />
      
    </header>
  );
}
