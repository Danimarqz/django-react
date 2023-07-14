import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Careers(){
    useEffect(() =>{
        windows.scrollTo(0,0)
    },[])
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Careers
            </div>
            <Footer />
        </Layout>
    )
}
export default Careers;