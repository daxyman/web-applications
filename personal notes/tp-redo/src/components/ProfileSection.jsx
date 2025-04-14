import "./ProfileSection.css";
import profile from "../assets/info";

function ProfileSection(props) {
  return (
    <div class="profile">
      <div class="profile-name-image">
        <img
          src={props.profileNameImage}
          alt=""
        />
        <h1 class="profile-user-name">{props.profileUserName}</h1>
      </div>
      <div class="profile-bio">
        <p>{profile.Bio}</p>
      </div>
      <div class="profile-stats">
        <ul>
          <li>{props.profileStats}</li>
          <li>{props.profileStats}</li>
          <li>{props.profileStats}</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSection;
