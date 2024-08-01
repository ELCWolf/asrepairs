async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatContainer = document.getElementById('chat-container');

    if (!userInput.trim()) return;

    // Display user's message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user';
    userMessageDiv.textContent = userInput;
    chatContainer.appendChild(userMessageDiv);

    // Clear input field
    document.getElementById('user-input').value = '';

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-proj-Q5uE6BHQe2zZxx44OnrtT3BlbkFJQtfVFqDrMxbDHD9D9YOm'
        },
        body: JSON.stringify({
            model: 'gpt-4-turbo',
            messages: [
                { role: 'system', content: 'Welcome to ASRepairs! I am your virtual assistant here to help you with any tech repair or consulting needs. How can I assist you today? If you have a specific issue or question, please describe it in detail, and I\'ll do my best to help you. If you\'d prefer to make an appointment directly with one of our experts, just let me know. If I am unable to provide a sufficient answer to your query, you can skip to making an appointment with one of our experts. How would you like to proceed?' },
                { role: 'user', content: userInput }
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        })
    });

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    // Display assistant's message
    const assistantMessageDiv = document.createElement('div');
    assistantMessageDiv.className = 'message assistant';
    assistantMessageDiv.textContent = assistantMessage;
    chatContainer.appendChild(assistantMessageDiv);

    // Scroll to the bottom of the chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;
}
