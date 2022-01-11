import Link from "next/link"
import Image from "next/image"
// import { Button } from "@material-ui/core"
import Button from "@material-ui/core/Button"
const Events = () => {
  return (
    <>
      <section className='page-section'>
        <div className='container px-4 px-lg-5'>
          <div className='row gx-4 gx-lg-5 justify-content-center'>
            <div className='col=lg-8 text-center'>
              <h2 className='text-white mt-1'>
                Check out our event for this year
              </h2>
              <Link href={"/shows"} passHref>
                <Button variant='contained' color='primary' size='small'>
                  Watch all the events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Events
