document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const optionsContainer = document.getElementById('options-container');

    // Start handling flow
    let currentStep = 'start';

    // Initial Greeting
    displayBotMessage(careerData[currentStep].message);
    displayOptions(careerData[currentStep].options);

    function displayBotMessage(message) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', 'bot-message');
        msgDiv.innerHTML = message; // Using innerHTML to allow bold text
        chatBox.appendChild(msgDiv);
        scrollToBottom();
    }

    function displayUserMessage(message) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', 'user-message');
        msgDiv.textContent = message;
        chatBox.appendChild(msgDiv);
        scrollToBottom();
    }

    function displayOptions(options) {
        optionsContainer.innerHTML = ''; // Clear old options

        if (!options) return; // No options provided (e.g., end of flow)

        options.forEach(optionText => {
            const btn = document.createElement('button');
            btn.classList.add('option-btn');
            btn.textContent = optionText;
            btn.addEventListener('click', () => handleOptionClick(optionText));
            optionsContainer.appendChild(btn);
        });
    }

    function handleOptionClick(selection) {
        // 1. Show user selection as a message
        displayUserMessage(selection);

        // 2. Clear options momentarily
        optionsContainer.innerHTML = '';

        // 3. Find next step
        const nextStepData = careerData[selection];

        if (nextStepData) {
            // Delay bot response slightly for natural feel
            setTimeout(() => {
                displayBotMessage(nextStepData.message);

                if (nextStepData.isResult) {
                    // End of flow, offer restart
                    showRestartOption();
                } else {
                    // Continue flow
                    displayOptions(nextStepData.options);
                }
            }, 600);
        } else {
            // Fallback if data is missing
            setTimeout(() => {
                displayBotMessage("That's interesting! I don't have specific data for that yet, but it sounds like a great path.");
                showRestartOption();
            }, 600);
        }
    }

    function showRestartOption() {
        const btn = document.createElement('button');
        btn.classList.add('option-btn', 'restart-btn');
        btn.textContent = "Start Over";
        btn.addEventListener('click', resetChat);
        optionsContainer.appendChild(btn);
    }

    function resetChat() {
        chatBox.innerHTML = '';
        currentStep = 'start';
        displayBotMessage(careerData[currentStep].message);
        displayOptions(careerData[currentStep].options);
    }

    function scrollToBottom() {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
