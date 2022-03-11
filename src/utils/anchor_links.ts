/**
 * @description Enable Anchor smooth scrolling to target section
 */

export function enableAnchorLinks() {
  const forEach = Array.prototype.forEach
  forEach.call(document.querySelectorAll('*[href*="#"]'), (anchor: Element) => {
    anchor.addEventListener('click', (e: Event) => {
      e.preventDefault()
      const href = anchor.getAttribute('href')
      if (href) {
        document.querySelector(href.slice(href.indexOf('#')))!.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
}
