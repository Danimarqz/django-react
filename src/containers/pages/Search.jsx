import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { search_blog, search_blog_page } from 'redux/actions/blog/blog'
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import BlogCardSearch from "components/blog/BlogCardSearch";
import BlogList from "components/blog/search/BlogList";

function Search({
    posts,
    count,
    next,
    previous,
    search_blog,
    search_blog_page,
}){
    const params = useParams()
    const term = params.term

    useEffect(() =>{
        window.scrollTo(0,0)
        search_blog(term)
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
            <Navbar/>
            <div className="pt-24">
                <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="mx-auto max-w-full my-10">
                    {/* Content goes here */}
                    <BlogList posts={posts&&posts} get_blog_list_page={search_blog_page} term={term} count={count&&count}/>
                    </div>
                </div>
            </div>
                <Footer/>
        </Layout>
    )
}
const mapStateToProps = state => ({
    posts: state.blog.filter_posts,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,

})
export default connect(mapStateToProps, {
    search_blog,
    search_blog_page,
}) (Search)