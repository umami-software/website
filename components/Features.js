const Block = ({ children }) => {
  return <div>{children}</div>
}

export default function Features() {
  return <div>
    <Block>Privacy matters</Block>
    <Block>Performance matters</Block>
    <Block>Trust matters</Block>
  </div>
}
