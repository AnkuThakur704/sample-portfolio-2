let main = document.querySelector("main");
function about() {
    main.innerHTML = `<div class="name">
            <p class="greet">Hi</p>
            <p class="Ankush">I'm <b>Ankush</b></p>
        </div>
        <img src="utilities/Adobe-Express-file-modified.png" alt="" class="pic">
        <div class="colorbox"></div>
        <p class="para1">Hey! I’m just a curious human currently on a wild journey of learning how to make computers do
            cool stuff. I recently started exploring the world of code—and it’s been a mix of “why
            won’t this work?” moments and “oh! that's why” adventures.</p>
        <p class="para2">Right now, I’m busy turning tutorials into tiny wins, bugs into lessons, and Stack Overflow
            into my browser’s favorite tab. I may not know it all (yet), but I’m enjoying every step of figuring it out.
        </p>`;
}
function projects() {
    main.innerHTML = `<p class="note">This section is currently under construction! I’m actively learning and plan to showcase my projects here soon. <br> Stay tuned — the bugs will be interesting, and so will the breakthroughs!</p>
        <img class="cartoon" src="utilities/programmer-cartoon.webp" alt="">`;
    
}

function contact() {
    main.innerHTML = `<div class="form">
            <p class="drop">Drop your conatct info</p>
            <div class="fields">
                <input class="in" type="text" placeholder="Full Name" >
                <input class="in" type="email" placeholder="email">
                <input  class="in" type="text" placeholder="A message for me" spellcheck="true">
                <div class="sent">
                <button class="send" onclick="sent()">Send</button>
            </div>
             </div>    
        </div>
        <div class="mycontact">
            <a href="https://www.linkedin.com/in/ankush-thakur-5b3a11347" target="_blank"><img class="linkedin logo" src="utilities/linkedin.svg" alt=""></a>
            <a href="https://github.com/AnkuThakur704"target="_blank" ><img class="github logo" src="utilities/github.svg" alt=""></a>
            <a href="https://www.instagram.com/anku_thakur277?igsh=bWVqNXI0ZDR6Z2Nx" target="_blank"><img class="instagram logo" src="utilities/insta.svg" alt=""></a>
        </div>`;
}




function sent() {
    let send =   document.querySelector(".sent")
    send.innerHTML = `<p class="thanks">Thanks, I'll get back to you soon!</p>
    <button class="sendmore" onclick="sendmore()">Send more</button>`;
}
function sendmore() {
    let send =   document.querySelector(".sent")
    send.innerHTML = `<button class="send" onclick="sent()">Send</button>`;
}