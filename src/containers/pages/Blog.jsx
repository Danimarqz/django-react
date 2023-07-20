import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog/blog";
import CategoriesHeader from "components/blog/CategoriesHeader";
import BlogList from "components/blog/BlogList";

function Blog({
    get_categories, 
    categories,
    get_blog_list,
    get_blog_list_page,
    posts,
    count,
    next,
    previous,
}){
    useEffect(() =>{
        window.scrollTo(0,0)
        get_categories()
        get_blog_list()
        get_blog_list_page()
    },[])
    return (
        <Layout>
            <Helmet>
                <title>DMS | Blog</title>
                <meta name="description" content="Agencia de software y marketing digital. Servicios de creación de páginas web y desarrollo de aplicaciones." />
                <meta name="keywords" content="DaniMarqz, DaniMarqz Systems, Software, Marketing, Digital, Web, Web Design, Web Development, Software Development, Software Development Company"/>
                <meta name="robots" content="all" />
                <link rel="canonical" href="https://www.danimarqz.com/" />
                <meta name="author" content="Daniel Marquez" />
                <meta name="publisher" content="Daniel Marquez" />

                <meta property="og:title" content="DaniMarqz Systems" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.danimarqz.com/" />
                <meta property="og:image" content="https://bafybeifdiqwohyxxd54kquaynlguzernofxi64fltcabpwpxhrzvoscywy.ipfs.w3s.link/ipfs/bafybeifdiqwohyxxd54kquaynlguzernofxi64fltcabpwpxhrzvoscywy/DaniMarqz%20white.png" />
                <meta name="twitter:title" content="DaniMarqz Systems" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://bafybeifdiqwohyxxd54kquaynlguzernofxi64fltcabpwpxhrzvoscywy.ipfs.w3s.link/ipfs/bafybeifdiqwohy"/>
                <meta name="twitter:site" content="@dani_marqz_33" />
            </Helmet>
            <Navbar />
            <div className="pt-24">
                <CategoriesHeader categories={categories && categories} />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl">
                        <BlogList posts={posts&&posts}/>
                    </div>
                </div> 
            </div>
            <Footer />
        </Layout>
    )
}
const mapStateToProps = state => ({
    categories: state.categories.categories,
    posts: state.blog.blog_list,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,

})
export default connect(mapStateToProps, {
    get_categories,
    get_blog_list,
    get_blog_list_page,
}) (Blog)