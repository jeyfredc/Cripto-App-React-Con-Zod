import { ReactNode } from 'react'

export default function Error({children}: {children:ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}
