const getOffset = ele => {
  let X = ele.offsetLeft
  let Y = ele.offsetTop
  let parent = ele.offsetParent
  while (parent) {
    X += parent.offsetLeft
    Y += parent.offsetTop
    parent = parent.offsetParent
  }
  return {
    X,
    Y
  }
}

export { getOffset }
