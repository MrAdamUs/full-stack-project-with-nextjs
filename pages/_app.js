import { useEffect, useState } from "react"
import { getSession, session } from "next-auth/client"
import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"

import MainLayout from "components/ui/layout.main.js"

import { Provider, useDispatch } from "react-redux"
import store from "store"
import { createWrapper } from "next-redux-wrapper"
import Loader from "helper/loader"
import { autoSignIn } from "store/actions/user.action"

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        /// dispatch
        dispatch(autoSignIn(session))
      }
      setLoading(false)
    })
  }, [])

  return (
    <Provider store={store}>
      {loading ? (
        <Loader full={true} />
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </Provider>
  )
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
