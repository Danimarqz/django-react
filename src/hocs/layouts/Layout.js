import { connect } from 'react-redux'
import { motion } from 'framer-motion'

function Layout({children}){
    return(
        <motion.div
            initial={{opacity:0, transition: {duration: 0.5}}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.4}}}
            >
            {children}
        </motion.div>
    )
}

const mapStateToProp = state => ({

})

export default connect(mapStateToProp,{

}) (Layout)