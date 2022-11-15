import Link from "next/link";
import Head from "next/head";

const Layout = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title} | Next course</title>
                <meta charSet='utf-8'/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta property="og:title" content="My page title" key="title"/>
                <meta name="description"
                      content="This is an example of a meta description. This will often show up in search results."/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Charmonman:wght@700&display=swap"
                      rel="stylesheet"/>
            </Head>
            <nav>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/posts'>Posts</Link></li>
                </ul>
            </nav>

            <main>
                {children}
            </main>

            <style jsx global>
                {`
                  nav {
                    background: aquamarine;
                    padding: 30px 60px;
                  }
                  
                  ul {
                      display: flex;
                      justify-content: space-between;
                      list-style: none;
                      font-size: 24px;
                      
                    }
                    
                    a {
                      text-decoration: none;
                      color: firebrick;
                    }
                `}
            </style>
        </>
    );
};

export default Layout;
