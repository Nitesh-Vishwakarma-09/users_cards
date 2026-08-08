let users = [
    {
        name: "Nitesh Rathore",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        bio: "Software Developer passionate about building modern web applications."
    },
    {
        name: "Aarav Sharma",
        pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800",
        bio: "Full Stack Developer who loves JavaScript, APIs and clean UI design."
    },
    {
        name: "Priya Verma",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
        bio: "Frontend Developer focused on creating beautiful and responsive websites."
    },
    {
        name: "Rahul Mehta",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
        bio: "Backend Developer working with Node.js, Express and MongoDB."
    },
    {
        name: "Ananya Singh",
        pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
        bio: "UI/UX enthusiast and Web Developer who enjoys solving real-world problems."
    },
    {
        name: "Vikram Patel",
        pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        bio: "Software Engineer interested in scalable systems and modern technologies."
    },
    {
        name: "Sneha Kapoor",
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        bio: "JavaScript Developer building interactive and user-friendly web experiences."
    },
    {
        name: "Aditya Joshi",
        pic: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800",
        bio: "Web Developer exploring React, Node.js and full-stack application development."
    }
];
const cards = document.querySelector(".cards")
function showUsers(arr) {
    arr.forEach(function (user) {
        const card = document.createElement("div");
        card.classList.add("card");

        // Image
        const img = document.createElement("img");
        img.classList.add("bg-img");
        img.src = user.pic;
        img.alt = user.name;

        // Blurred layer
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundColor = user.pic
        blurredLayer.classList.add("blurred-layer");

        // Content
        const content = document.createElement("div");
        content.classList.add("content");

        // Name
        const name = document.createElement("h3");
        name.textContent = user.name;

        // Bio
        const bio = document.createElement("p");
        bio.textContent = user.bio;

        // Content ke andar name aur bio
        content.appendChild(name);
        content.appendChild(bio);

        // Card ke andar sab elements
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // Cards container ke andar card
        cards.appendChild(card);
    });

}
showUsers(users);

let inp = document.querySelector(".search");

inp.addEventListener('input', function () {
    let newusers = users.filter((user) => {
        return user.name.startsWith(inp.value);
    })
    document.querySelector(".cards").innerHTML = ""
    showUsers(newusers)
})  
