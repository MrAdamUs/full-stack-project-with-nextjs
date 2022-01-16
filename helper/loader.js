import { CircularProgress } from "@material-ui/core/CircularProgress"

const Loader = () => (
  <div className={`root_loader ${full ? "full" : ""}`}>
    <CircularProgress />
  </div>
)

export default Loader
