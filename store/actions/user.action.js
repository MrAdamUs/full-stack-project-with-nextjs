import * as type from "../types"
import { successDispatcher } from "./notifications.action"

import axios from "axios"

export const signInUser = (session, router) => {
  return async (dispatch) => {
    try {
      const user = await axios.get("/api/users")

      dispatch(successDispatcher("Welcome back"))
      dispatch({
        type: type.SIGN_IN,
        payload: {
          data: {
            _id: session.user._id,
            email: session.user.email,
            role: session.user.role,
          },
          auth: true,
        },
      })

      router.push("/users/dashboard")
    } catch (error) {
      console.log(error)
    }
  }
}
