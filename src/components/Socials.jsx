import {React} from "react";
import {ImFacebook, ImInstagram, ImYoutube} from "react-icons/im";



const Socials = () => {
  return (

    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href='https://www.facebook.com/chloeguillerm000?locale=fr_FR'>
            <ImFacebook/>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/chloe.guillermin/'>
            <ImInstagram/>
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/channel/UCsgbToZ6cF7jFXXxwNF9xmQ'>
            <ImYoutube/>
          </a>
        </li>
      </ul>
    </div>
    )
  }

export default Socials;