import { component } from 'picoapp'

export default component((node, ctx) => {
  // Options for the Intersection Observer
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0, // Adjust as needed, 0.5 means at least 50% of the video must be in view
  }

  // Callback function when the video comes into view
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Load the video
        node.src = node.dataset.video
        node.autoplay = true
        node.loop = true

        // Unobserve to prevent further unnecessary checks
        observer.unobserve(node)
      } else {
        // Pause the video when it goes out of view
        const video = document.querySelector('video')
        if (video) {
          video.pause()
        }
      }
    })
  }

  // Create the Intersection Observer with the callback and options
  const observer = new IntersectionObserver(handleIntersection, options)

  // Observe the video placeholder
  observer.observe(node)
})
