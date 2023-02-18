const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const topArea = document.getElementById("top-area")
const userProfilePic = document.getElementById("user-profile-pic")
const topAreaText = document.getElementById("top-area-text")
const middleSection = document.getElementById("middle-section")
const lowerSection = document.getElementById("lower-section")
let html = ''
// for (let i=0; i < posts.length; i++) {
//     html += ``

// }

userProfilePic.src = posts[0].avatar
topAreaText.innerHTML += `
                          <p class="top-area-name">${posts[0].name}</p>
                          <p>${posts[0].location}</p>
                        `
middleSection.innerHTML = `
                           <img src="${posts[0].post}" alt="" class="middle-section-img" >
                           `
lowerSection.innerHTML = `
                          
                          `