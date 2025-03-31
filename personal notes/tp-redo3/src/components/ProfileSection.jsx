import './ProfileSection.css'

function ProfileSection(props) {

  return (
    <>
    <div className="profile">
        <div className="profile-name-image">
          <img
            src={props.src}
            alt={props.alt}
          />
          <h1 className="profile-user-name">{props.name}</h1>
        </div>
        <div className="profile-bio">
          <p>{props.profileBio}</p>
        </div>
        <div className="profile-stats">
          <ul>
            <li>{props.profilePosts}</li>
            <li>{props.profileFollowers}</li>
            <li>{props.profileFollowing}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProfileSection
