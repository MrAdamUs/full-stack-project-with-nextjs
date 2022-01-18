import { useEffect } from "react"
import Head from "next/head"
import Header from "components/navigation/header"
import Footer from "components/navigation/footer"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { showToast } from "helper/functions"
import { useSelector, useDispatch } from "react-redux"
import { clearNotifications } from "store/actions/notifications.action"

const MainLayout = (props) => {
  const notifications = useSelector((state) => state.notifications)
  const dispatch = useDispatch()

  useEffect(() => {
    // do something
    if (notifications && notifications.error) {
      const msg = notifications.msg ? notifications.msg : "Error"
      showToast("ERROR", msg)
      dispatch(clearNotifications())
    }

    if (notifications && notifications.success) {
      const msg = notifications.msg ? notifications.msg : "Success"
      showToast("SUCCESS", msg)
      dispatch(clearNotifications())
    }
  }, [notifications, dispatch])

  return (
    <>
      <Head>
        <title>The smelly cats</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='The homepage of the smelly cats, the greatest band in the whole world'
        />
        <meta name='keywords' content='Music, shows, smelly cats' />
        <meta name='author' content='The smelly cats' />
      </Head>
      <Header />
      {props.children}
      <ToastContainer />
      <Footer />
    </>
  )
}

export default MainLayout
