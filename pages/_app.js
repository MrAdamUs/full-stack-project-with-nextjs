import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"

import MainLayout from "components/ui/layout.main.js"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp
