const users = {
    anant: {
        name: "Anant Joshi",
        profileBg: "url('jakob-owens-lkMJcGDZLVs-unsplash.jpg')"
    },
    sumanyun: {
        name: "Sumanyun",
        profileBg: "url('drew-hays-Kt8eGw8_S8Y-unsplash.jpg')"
    }
};


document.querySelectorAll(".chats").forEach(chatDiv => {
    chatDiv.addEventListener("click", () => {
        document.body.classList.add("chat-mode");
        const subCont = document.getElementsByClassName("sub-cont2")[0];
        if (subCont) {
            const chatId = chatDiv.id;
            const user = users[chatId];
            // subCont.style.height = "98%";
            // subCont.style.width = "98%";
            subCont.innerHTML = `
                <div class="chat-navbar">
                     <div class="profile" style="background-image: ${user.profileBg};background-size:cover;">
                     </div>
                     <h3>${user.name}</h3>
                </div>
                <div class="chat-view"></div>
                <div class="chat-input">
                    <input type="text" placeholder="Type a message">
                    <button id="send-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
            `;
            
            const sendBtn = subCont.querySelector("#send-btn");
            const input = subCont.querySelector("input");
            const chatView = subCont.querySelector(".chat-view");

            
            
            sendBtn.addEventListener("click", sendMessage);
            input.addEventListener("keydown", function(e) {
                if (e.key === "Enter") {
                    sendMessage();
                }
            });

            function sendMessage() {
                const message = input.value.trim();
                    if (message) {
                        const msgDiv = document.createElement("div");
                        msgDiv.className = "message";
                        msgDiv.textContent = message;
                        chatView.appendChild(msgDiv);
                        // chat.scrollTop = chat.scrollHeight;
                        input.value = "";
                        chatView.scrollTop = chatView.scrollHeight; // Scroll to bottom       
                    }
            }
        }
    });
});