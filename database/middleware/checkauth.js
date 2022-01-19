import { getSession } from "next-auth/client"

const checkAuth = async (req, res, next) => {
  const session = await getSession({ req: req })

  if (!session) {
    return res.status(401).json({ message: "you are not auth" })
  }
  req.session = session

  next()
}

export default checkAuth
