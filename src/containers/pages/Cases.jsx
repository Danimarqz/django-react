import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Cases(){
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Cases
            </div>
            <Footer />
        </Layout>
    )
}
export default Cases;