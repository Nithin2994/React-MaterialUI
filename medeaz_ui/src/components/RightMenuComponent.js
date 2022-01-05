import React from 'react'

export default function RightMenuComponent(props){
    return <div  class="HomeRtMenu" id="rightmenus">
    <div  class="rightmenu">
        <ul  class="no-padding list-unstyled">
            <li>
                <a href="">
                    <div ><i  aria-hidden="true" class="fa fa-user-md fa-2x clr-3"></i></div>
                    <div >find a doctor</div>
                </a>
                <div  class="rightmenumed"></div>
            </li>
            <li>
                <a href="">
                    <div><i  aria-hidden="true" class="fa fa-binoculars fa-2x clr-3"></i></div>
                    <div>health Checks</div>
                </a>
                <div  class="rightmenumed"></div>
            </li>
            <li>
                <a href="">
                    <div><i class="far fa-file-alt"></i></div>
                    <div>Speak To a Doctor </div>

                </a>
                <div  class="rightmenumed"></div>
            </li>
            <li>
                <a href="">
                    <div><i class="far fa-envelope"></i></div>
                    <div>enquire now</div>

                </a>
            </li>
        </ul>
    </div>
</div>
}