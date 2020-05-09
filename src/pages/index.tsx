import React from "react"
import { PageProps } from "gatsby"
import "../css/styles.css"
import { useColorMode } from "theme-ui"

const modes = ["light", "dark", "blue"]

export default function IndexRoute(props: PageProps) {
  const [mode, setMode] = useColorMode()
  return (
    <header>
      <button
        {...props}
        onClick={e => {
          const index = modes.indexOf(mode)
          const next = modes[(index + 1) % modes.length]
          setMode(next)
        }}
      >
        Toggle
      </button>
      <div className="m-20">Combining theme-ui with tailwindcss</div>
    </header>
  )
}
