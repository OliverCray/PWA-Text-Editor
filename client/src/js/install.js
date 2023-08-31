const butInstall = document.getElementById('buttonInstall')

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (e) => {
  // Store the triggered event for later
  window.deferredPrompt = e

  // Remove the hidden class from the install button
  butInstall.classList.toggle('hidden', false)
})

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt

  if (!promptEvent) {
    return
  }

  // Show the install prompt
  promptEvent.prompt()

  // Reset the deferred prompt variable
  window.deferredPrompt = null

  // Hide the install button
  butInstall.classList.toggle('hidden', true)
})

window.addEventListener('appinstalled', (e) => {
  // Clear prompt
  window.deferredPrompt = null
})
