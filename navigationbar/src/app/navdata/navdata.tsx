import { FaExclamationCircle } from "react-icons/fa";
import { MdLocationOff } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { FiCompass } from "react-icons/fi";


const NavData = [
  {
    title: "All",
    count: 12735,
  },
  {
    title: "Asset Failures",
    count: 47,
    icon: <FaExclamationCircle />
  },
  {
    title: "Asset Down",
    count: 1,
    icon: <RxCountdownTimer />
  },
  {
    title: "Unused Assets",
    count: 132,
    icon: <FiCompass />
  },
  {
    title: "Unassigned",
    count: 31,
    icon: <MdLocationOff />
  },
]

export default NavData;