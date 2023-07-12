import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo_dm from 'assets/img/DaniMarqz white.png'
import loading from 'assets/img/loadingdots.gif'


function Navbar(){
    return(
        <nav className='w-full py-4 top-0 fixed'>
            <div className="bg-white px-4 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px:2">
                <div className="ml-4 mt-2">
                    <img src={logo_dm}
                    width={80}
                    height={70}
                    className=""/>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                <Link to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Casos</Link>
                <Link to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Servicios</Link>
                <Link to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Nosotros</Link>
                <Link to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Carreras</Link>
                <Link to='/blog'className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Blog</Link>
                <Link to='/contacto'className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Contacto</Link>
                    <button
                        type="button"
                        className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-4 py-2 text-lg font-bold text-white shadow-sm hover:transition hover:duration-300 hover:ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-button focus:ring-offset-2"
                    >
                    Hire us
                    <img src={loading} className='w-7 h-2 ml-3'></img>
                    </button>
                </div>
            </div>
            </div>
        </nav>
    )
}

const mapToStateToProps=state=>({

})
export default connect(mapToStateToProps, {
    
}) (Navbar)