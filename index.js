
const topArea = document.getElementById("top-area")
const userProfilePic = document.getElementById("user-profile-pic")
const topAreaText = document.getElementById("top-area-text")
const middleSection = document.getElementById("middle-section")
const lowerSection = document.getElementById("lower-section")
const main = document.getElementById("main")
const likeBtn = document.getElementById("like-btn")
// let likesNumber  = Number(document.getElementById("likes-number").textContent)

let html = ''


for (let i=0; i < posts.length; i++) {
    main.innerHTML += `<div class="main-styling"><header>
                        <div class="container">
                         <div class="top-area" id="top-area">
                            <img src="${posts[i].avatar}" alt="" class="user-profile-pic"        id="user-profile-pic">
                            <div class="top-area-text" id="top-area-text">
                               <p class="top-area-name">${posts[i].name}</p>
                               <p>${posts[i].location}</p>
                             </div>  
                         </div>
                         </div>
                        </header>
                             <section>
                              <div class="container">
                                  <div class="middle-section" id="middle-section">
                               <div class="middle-section" id="middle-section">
                                   <img src="${posts[i].post}" alt="" class="middle-section-img" >
                               </div>
                               </div>
                               </div>
                               </section>
                               <section>
                               <div class="container">
                                <div class="lower-section" id="lower-section">
                                 <div class="lower-section" id="lower-section">
                                  <div class="icon-container">
                                     <img src="images/icon-heart.png" alt="" class="icon" class="like-btn" id="like-btn">
                                     <img src="images/icon-comment.png" alt="" class="icon">
                                     <img src="images/icon-dm.png" alt="" class="icon">
                                  </div>
                                  <p class="bold-text" id="likes-number">${posts[i].likes} likes</p>
                                  <P><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
                               <div>
                               </div>
                               </div>
                               </section>
                               </div>
                           `

}

likeBtn.addEventListener("click", function() {
    topArea.style.color = 'red'
    
})

g