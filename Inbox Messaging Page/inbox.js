document.addEventListener('DOMContentLoaded', () => {

    function selectConvo(el, username) {
        document.querySelectorAll('.person').forEach(p => p.classList.remove('active'));
        el.classList.add('active');

        const dot = el.querySelector('.unread-dot');
        if (dot) dot.remove();

        document.querySelector('.chat-username').textContent = username;
        document.getElementById('chat-container').innerHTML = '';
    }

    function sendMessage() {
        const input = document.getElementById('message-input');
        const text = input.value.trim();
        if (!text) return;

        const container = document.getElementById('chat-container');
        const msg = document.createElement('div');
        msg.className = 'chat-message sent';
        msg.innerHTML = `<div class="bubble">${text}</div>`;
        container.appendChild(msg);
        container.scrollTop = container.scrollHeight;

        input.value = '';
    }

    document.getElementById('message-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    document.getElementById('send-button')?.addEventListener('click', sendMessage);

    window.selectConvo = selectConvo;

});