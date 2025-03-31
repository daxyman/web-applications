import "./MainSection.css";
import { profile } from "../assets/info";
import ProfileSection from "./ProfileSection";
import { cards } from "../assets/info";
import CardList from "./CardList";

function MainSection() {
  return (
    <>
      <main>
        <ProfileSection
          profileNameImage={profile.profileNameImage}
          profileUserName={profile.profileUserName}
          profileBio={profile.profileBio}
          profileStats={profile.profileStats}
          followers={profile.followers}
          following={profile.following}
        />
        <CardList cards={cards} />
      </main>
    </>
  );
}

export default MainSection;
