import connectToDb from "database/db"
import User from "database/models/user.model"

const handler = async (req, res) => {
  await connectToDb()

  if (req.method === "POST") {
    const { email, password } = req.body

    res.status(200).json({ email, password, ok: "ok" })
  }
}

export default handler
