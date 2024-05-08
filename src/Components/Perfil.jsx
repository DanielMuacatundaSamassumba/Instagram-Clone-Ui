import foto_perfil from './../assets/Perfil.jpg'
import './../App.css'
export default function Perfil() {
  return (
    <div className='perfil'>
      <div className="perfil-content">
        <div className="foto-content">
          <img src={foto_perfil} alt="" className='perfil-foto' />
        </div>
        <div className="perfil-data">
          <div className="perfil-data-1">
            <div className="perfil-name">
              <h3>@nakolobatina</h3>
            </div>
            <div className="perfil-btn">
              <button>Editar Perfil</button><button>Ver Perfil</button><button>Ferramentas para Anúncio</button>
            </div>
          </div>
          <div className="perfil-data-2">
            <div><strong>790</strong> publicações</div>
            <div>     <div><strong>1M</strong> seguidores</div></div>
            <div>     <div><strong>1</strong> A seguir</div></div>
          </div>
          <div className="perfil-data-3">
            <strong>@Nakolobaina</strong>
            <p>10M contas alcançadas nos últimos 30 dias. <strong>Ver estatísticas</strong></p>
          </div>
        </div>
       
      </div>
      <div className="gallery">
      <div className="content-foto">
        <div className="foto"></div>
        <div className="foto"></div>
        <div className="foto"></div>
        </div>
        <div className="content-foto">
        <div className="foto"></div>
        <div className="foto"></div>
        <div className="foto"></div>
        </div>
        <div className="content-foto">
        <div className="foto"></div>
        <div className="foto"></div>
        <div className="foto"></div>
        </div>
        </div>
    </div>
  )
}
