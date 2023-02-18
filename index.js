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


for (let i=0; i < posts.length; i++) {
    topArea.innerHTML = `
                      <img src="${posts[i].avatar}" alt="" class="user-profile-pic" id="user-profile-pic">
                      <div class="top-area-text" id="top-area-text">
                      <p class="top-area-name">${posts[i].name}</p>
                      <p>${posts[i].location}</p>
                      </div>
                    `

    middleSection.innerHTML = `
                           <img src="${posts[i].post}" alt="" class="middle-section-img" >
                           `
    lowerSection.innerHTML = ` <div class="icon-container">
                               <img src="images/icon-heart.png" alt="" class="icon">
                               <img src="images/icon-comment.png" alt="" class="icon">
                               <img src="images/icon-dm.png" alt="" class="icon">
                           </div>
                           <p class="bold-text">${posts[i].likes} likes</p>
                           <P><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
                           `

}

// topArea.innerHTML = `
//                       <img src="${posts[0].avatar}" alt="" class="user-profile-pic" id="user-profile-pic">
//                       <div class="top-area-text" id="top-area-text">
//                       <p class="top-area-name">${posts[0].name}</p>
//                       <p>${posts[0].location}</p>
//                       </div>
//                     `

// middleSection.innerHTML = `
//                            <img src="${posts[0].post}" alt="" class="middle-section-img" >
//                            `
// lowerSection.innerHTML = ` <div class="icon-container">
//                                <img src="images/icon-heart.png" alt="" class="icon">
//                                <img src="images/icon-comment.png" alt="" class="icon">
//                                <img src="images/icon-dm.png" alt="" class="icon">
//                            </div>
//                            <p class="bold-text">${posts[0].likes} likes</p>
//                            <P><span class="bold-text">${posts[0].username}</span> ${posts[0].comment}</p>
//                            `