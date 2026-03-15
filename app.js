const typewriterPhrases = [
    "Looking for learning, developing, and growing.",
    "Curious about scalability and architecture.",
    "Focused on practicality."
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let isTypewriterPaused = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseDelay = 1000;

function typeWriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;

    if (isTypewriterPaused) {
        setTimeout(typeWriter, pauseDelay);
        isTypewriterPaused = false;
        return;
    }

    const currentPhrase = typewriterPhrases[currentPhraseIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isTypewriterPaused = true;
        isDeleting = true;
        delay = pauseDelay;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % typewriterPhrases.length;
        delay = typingSpeed;
    }

    setTimeout(typeWriter, delay);
}

const chatMessages = [
    {
        type: 'received',
        text: "Hey there! 👋 Who are you?"
    },
    {
        type: 'sent',
        text: "Hi! I'm <span class='highlight'>Ameer Suhail</span>, a passionate <span class='highlight'>MERN Stack Developer</span>. 🚀"
    },
    {
        type: 'received',
        text: "Awesome! What's your experience like? 💼"
    },
    {
        type: 'sent',
        text: "I completed a six-month MERN training at <span class='highlight'>Entri Elevate</span> and just finished a great internship at <span class='highlight'>Euphoricoders Pvt. Ltd</span>! 💻"
    },
    {
        type: 'received',
        text: "Cool! What kind of projects have you built? 🛠️"
    },
    {
        type: 'sent',
        text: "I built a full-stack <span class='highlight'>Job Portal Platform</span> with role-based auth, and a <span class='highlight'>Workforce Management Software</span>! 📊"
    },
    {
        type: 'received',
        text: "That is impressive. 😱"
    },
    {
        type: 'sent',
        text: "Recently I have given life to a full-stack <span class='highlight'>One-to-One real-time</span> <span class='highlight'>Chat Application</span> too 💬"
    },
    {
        type: 'received',
        text: "Wow, impressive stack! What are your core skills? ⚙️"
    },
    {
        type: 'sent',
        text: "My main tools are <span class='highlight'>MongoDB, Express.js, React, and Node.js</span>. I also love using Tailwind CSS, Redux, and Socket.io! 🌐"
    },
    {
        type: 'received',
        text: "What about your education and soft skills? 🎓"
    },
    {
        type: 'sent',
        text: "I studied <span class='highlight'>Computer Science</span> at DHSE, Kerala. I'm big on <span class='highlight'>problem-solving</span>, <span class='highlight'>teamwork</span>, and I love cycling and reading! 📚🚴‍♂️"
    },
    {
        type: 'received',
        text: "So, how can i <span class='highlight'>connect</span> with out? 🔗"
    },
    {
        type: 'sent',
        text: `I'm available on <a href='https://www.linkedin.com/in/ameer-suhali-kk-2aa11723b/' target='_blank' class='highlight pointer' style='text-decoration:none;' title='LinkedIn'>Linked<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="#0a66c2" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"/></svg></a>, <a href='https://github.com/AmeerTmsy' target='_blank' class='highlight pointer' style='text-decoration:none;' title='GitHub'><svg class='github-icon' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.249c-5.484 0-10 4.452-10 10c0 4.387 2.871 8.13 6.871 9.484c.516.097.677-.226.677-.452s0-.87-.032-1.742c-2.774.645-3.355-1.355-3.355-1.355c-.451-1.129-1.129-1.451-1.129-1.451c-.903-.645.033-.645.033-.645c1 .032 1.548 1.032 1.548 1.032c.87 1.548 2.355 1.097 2.903.806c.097-.645.355-1.096.645-1.354c-2.193-.226-4.548-1.097-4.548-4.904c0-1.096.42-1.967 1.032-2.645c-.097-.226-.451-1.258.097-2.645c0 0 .87-.258 2.774 1.032a9.3 9.3 0 0 1 2.516-.355c.871 0 1.742.097 2.516.355c1.904-1.258 2.742-1.032 2.742-1.032c.549 1.355.226 2.42.097 2.645c.645.678 1.032 1.58 1.032 2.645c0 3.807-2.355 4.678-4.548 4.904c.355.322.677.967.677 1.87c0 1.355-.032 2.42-.032 2.742c0 .259.194.549.678.452C19.129 20.314 22 16.604 22 12.185c-.032-5.484-4.516-9.936-10-9.936"/></svg>GitHub</a>, and I am going to drop my hear my email also <a href='mailto:tmsyameer@gmail.com' class='highlight pointer' style='text-decoration:none;' title='Email'><svg class='email-icon' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32"><path fill="#42a5f5" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 6l-12 6l-12-6V8l12 6l12-6Z"/></svg>tmsyameer@gmail.com</a>.`
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // Start typewriter effect
    typeWriter();

    const chatContainer = document.getElementById('chat-container');

    if (chatContainer) {
        // Clear anything just in case
        chatContainer.innerHTML = '';
        
        chatMessages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${msg.type}`;
            messageDiv.innerHTML = `<p>${msg.text}</p>`;
            chatContainer.appendChild(messageDiv);
        });
    }

    // Scroll function for navbar
    window.scrollToSection = function(section) {
        
        if (section === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (section === 'about') {
            const aboutSec = document.querySelector('.about');
            if (aboutSec) aboutSec.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'findme') {
            const aboutSec = document.querySelector('.about');
            if (aboutSec) {
                aboutSec.scrollIntoView({ behavior: 'smooth' });
                // Delay to allow scrolling to finish before scrolling chat
                setTimeout(() => {
                    const chatCont = document.getElementById('chat-container');
                    if (chatCont) {
                        chatCont.scrollTo({
                            top: chatCont.scrollHeight,
                            behavior: 'smooth'
                        });
                    }
                }, 500);
            }
        }
    };
});