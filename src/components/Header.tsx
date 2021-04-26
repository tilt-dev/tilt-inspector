import Cookie from 'universal-cookie'

type HeaderProps = {
  contexts: string[],
  currentContext: string
}

function setTiltContextCookie(val: string) {
  let cookies = new Cookie()
  cookies.set('tilt-context', val, {path: '/', maxAge: 60 * 60 * 24})
  window.location.reload()
}

export default function Header(props: HeaderProps) {
  let {contexts, currentContext} = props
  contexts = contexts || []
  let otherContextButtons = contexts.filter((c) => c != currentContext).map((c) => {
    return (
        <button
      className="linkButton" style={{'margin': '0 1em'}}
      key={c} onClick={() => setTiltContextCookie(c)}>
      {c}
      </button>
    )
  })

  let children = []
  if (!contexts.length) {
    children.push(<div key="404">No clusters found</div>)
  } else if (!otherContextButtons.length) {
    children.push(<div key={currentContext}>{currentContext}</div>)
  } else {
    children.push(...otherContextButtons)
    children.push(<div key={currentContext}>{currentContext} (current)</div>)
  }
  
  return (
    <nav>
      <div className="cell">
      <a href="/">🕵 <img src="/wordmark.svg" alt="Home" className="logo" />&nbsp; 🕵</a>
      </div>
      <div className="cell">
      {children}
      </div>
    </nav>
  );
}
