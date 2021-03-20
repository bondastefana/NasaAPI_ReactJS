const detectDevice = () => {
  const width = window.screen.width
  if (width <= 575) {
    return 'mobile'
  } else if (width > 575 && width <= 1024) {
    return 'tablet'
  } else if (width > 1024) {
    return 'desktop'
  }
}

export { detectDevice }
