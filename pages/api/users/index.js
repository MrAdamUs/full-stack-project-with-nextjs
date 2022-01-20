import nc from "next-connect"
import connectToDb from "database/db"
import checkAuth from "database/middleware/checkauth"

const handler = nc()

handler
  .use(checkAuth)
  .get(async (req, res) => {
    console.log(req.session.user._id)
    res.statusCode(200).json({ ok: "ok" })
  })
  .path(async (req, res) => {})

export default handler
