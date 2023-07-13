import { connect } from 'react-redux'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo_dm_white from 'assets/img/DaniMarqz white.png'
import logo_dm_dark from 'assets/img/DaniMarqz dark.png'
import DotLoader from 'react-spinners/DotLoader'


function Navbar(){

    const [loading,setLoading]=useState(true)

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("navbar").classList.add('shadow-navbar');
                document.getElementById("navbar").classList.add('bg-white');
            } else {
                document.getElementById("navbar").classList.remove('shadow-navbar');
                document.getElementById("navbar").classList.remove('bg-white');
            }
        }
    }

    return(
        <nav data-scroll data-scroll-id="hey" id='navbar' className='w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className="px-4 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px:2">
                <Link to='/' className="ml-4 mt-2">
                    <img src={logo_dm_white}
                    alt="Logo DaniMarqz"
                    width={80}
                    height={70}
                    className=""/>
                </Link>
                <div className="ml-4 mt-2 flex-shrink-0">
                <NavLink to='/cases' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Cases</NavLink>
                <NavLink to='/services' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Services</NavLink>
                <NavLink to='/about' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">About</NavLink>
                <NavLink to='/careers' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Career</NavLink>
                <NavLink to='/blog'className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Blog</NavLink>
                <NavLink to='/contact'className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Contact</NavLink>
                    <Link
                        to="/contact"

                       type="button"
                       className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                     >
                       Hire us
                       <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color='white' />

                    </Link>
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