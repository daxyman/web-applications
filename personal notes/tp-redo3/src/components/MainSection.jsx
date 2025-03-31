import "./MainSection.css";
import { cards } from "../assets/info";
import CardList from "./CardList";
import { profile } from "../assets/info";
import ProfileSection from "./ProfileSection";

function MainSection() {
  return (
    <main>
      <ProfileSection
        src={profile.src}
        alt={profile.alt}
        name={profile.name}
        profileBio={profile.profileBio}
        profilePosts={profile.profilePost}
        profileFollowers={profile.profileFollowers}
        profileFollowing={profile.profileFollowing}
      />
      <CardList 
      cards = {cards}/>
    </main>
  );
}

export default MainSection;
