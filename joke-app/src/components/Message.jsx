export const Message = ({ joke }) => {
  return (
    <>
      <div className="joke-setup">{joke.setup}</div>
      <div className="joke-punchline">{joke.punchline}</div>
    </>
  )
}