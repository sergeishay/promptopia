import React from 'react'
import Feed from '../components/Feed'
const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className='head_text text-center' >Discover and share 
                <br className='max-md:hidden' />
                <span className='orange_gradient text-center' > AI-Powered Prompts</span>
            </h1>

            <p className='desc text-center'>
                Promtopia is a open-source AI prompting toll for modern world to discover, create and share creatibe prompts
            </p>
            <Feed />
        </section>
    )
}

export default Home