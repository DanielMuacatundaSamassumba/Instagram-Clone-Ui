import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSearch, faCompass, faHeart, faSquarePlus, faBars } from '@fortawesome/free-solid-svg-icons'
import videoIcon from './../assets/chatting_social_media_menu_brand_video_instagram_reel_icon_197364.png'
import instagram from './../assets/instagram-logo-illustration-removebg-preview.png'
import threads from './../assets/threads.png'
import send from './../assets/send.svg'
import foto_perfil from './../assets/Perfil.jpg'
import './../App.css';



export default function Aside() {
    return (
        <div className='aside'>


            <div className="content-aside">
                <aside>
                    <nav>
                        <div className="logo">
                            <img src={instagram} alt="" className='logo' />
                        </div>
                        <ul>
                            <div> <FontAwesomeIcon icon={faHouse} size='2x' />    <li> Página Inicial</li></div>
                            <div> <FontAwesomeIcon icon={faSearch} size='2x' />  <li> Pesquisa</li></div>
                            <div><FontAwesomeIcon icon={faCompass} size='2x' />  <li> Explorar</li></div>
                            <div><img src={videoIcon} alt="" />             <li> Reels</li></div>
                            <div><li><img src={send} alt=""  className='send'/>Mensagens</li></div>
                            <div><FontAwesomeIcon icon={faHeart}  size='2x'/>  <li>Notificações</li></div>
                            <div> <FontAwesomeIcon icon={faSquarePlus}  size='2x'/>   <li> Criar </li></div>
                            <div>   <img src={foto_perfil} alt="" className='foto_perfil' />   <li>Perfil</li></div>
                        </ul>
                    </nav>
                </aside>
            </div>
            <div className="more">
                <ul>
                   <div>
                   <img src={threads} alt="" className='threads' />  
                    <li>
                    Threads
                    </li>
                </div>
                  <div>  <FontAwesomeIcon icon={faBars}  size='lg'/> <li>  Mais</li></div>
                </ul>
            </div>
        </div>
    )
}
{/*  */ }