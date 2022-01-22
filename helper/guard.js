import { getSession, session } from "next-auth/client"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Loader from "./loader"

const RouterGuard = ({ children }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        // push
        router.push("/users/sign_in")
      } else {
        //
        setLoading(false)
      }
    })
  }, [])

  if (loading) {
    return <Loader full={true} />
  }

  return <>{children}</>
}

export default RouterGuard
