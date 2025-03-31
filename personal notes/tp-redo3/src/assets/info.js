export const cards =[
    {
        id : 1,
        src :"https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg",
        alt : "Psychopomp",
        descriptionTitle : "Psychopomp",
        descriptionText : "Japanese Breakfast"
    },
    {
        id : 2,
        src :"https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/lets-go-500.jpg",
        alt : "let's go",
        descriptionTitle : "let's go",
        descriptionText : "In Love With A Ghost"
    },
    {
        id : 3,
        src :"https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/beautiful-game-500.jpg",
        alt : "The Beautiful Game",
        descriptionTitle : "The Beautiful Game",
        descriptionText : "Vulfpeck"
    },
    {
        id : 4,
        src :"https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/jane-doe-500.jpg",
        alt : "Jane Doe",
        descriptionTitle : "Jane Doe",
        descriptionText : "Converge"
    }
];

export const profile = {
    src: "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces",
    alt : "",
    name: "Jane Doe",
    profileBio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️",
    profilePosts: cards.length,
    profileFollowers: 188,
    profileFollowing: 206,
}

export default {profile, cards}