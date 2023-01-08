const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.delayedPrompt = event;
    butInstall.classList.toggle('hidden', false)
});

// TODO: Implement a click event handler on the `buttonInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.delayedPrompt;
    if (!promptEvent) {
        return;
    } else {
    console.log(promptEvent);
    window.delayedPrompt = null;
    butInstall.classList.toggle('hidden', true)
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.delayedPrompt = null;
});
