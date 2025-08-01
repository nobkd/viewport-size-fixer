
if (document.querySelector('meta[name=viewport]') == null) {
  const meta = document.createElement('meta')
  meta.name = 'viewport'
  meta.content = 'width=display-width, initial-scale=1.0'

  document.head.appendChild(meta)
}
