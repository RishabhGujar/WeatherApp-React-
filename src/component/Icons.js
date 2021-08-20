
import {getIcons} from "../utils/CommonFunction"

function Icon(props){
    const{main,sunrise,sunset} = props
    const View =getIcons(main,sunset,sunrise);
    return View
}


export {Icon}