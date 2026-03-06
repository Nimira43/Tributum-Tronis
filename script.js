const scene = document.querySelector('.scene')
const root = document.documentElement
const disk = document.querySelector('.disk')
const layers = document.querySelectorAll('.stars')
const hudText = document.querySelector('.hud-text')

scene.addEventListener('mousemove', (e) => {
  const relX = e.clientX / window.innerWidth - 0.5
  const relY = e.clientY / window.innerHeight - 0.5
  const tiltY = relX * 30 
  const tiltX = -relY * 30 

  root.style.setProperty('--tilt-y', `${tiltY}deg`)
  root.style.setProperty('--tilt-x', `${tiltX + 12}deg`)

  layers.forEach((layer, i) => {
    const depth = (i + 1) * 4
    layer.style.transform = `translate(${(relX * 20) / depth}px, ${(relY * 20) / depth}px)`
  })
})

disk.addEventListener('mouseenter', () => {
  root.style.setProperty('--glow-strength', '1.8')
})

disk.addEventListener('mouseleave', () => {
  root.style.setProperty('--glow-strength', '1')
})

disk.addEventListener('click', () => {
  disk.classList.add('pulse')
  hudText.textContent = 'ENERGY SURGE'
  hudText.style.opacity = '1'

  setTimeout(() => {
    disk.classList.remove('pulse')
    hudText.textContent = 'SYSTEM ONLINE'
    hudText.style.opacity = '0.7'
  }, 600)
})
