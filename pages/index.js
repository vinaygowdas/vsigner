import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DefaultWelcome from '../assets/svg/default-welcome-dark.svg';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Dev</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#603cba" />
                <meta name="theme-color" content="#ffffff" />

                <script 
                    dangerouslySetInnerHTML={
                        { 
                        __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="de074f9a-2221-44a6-98d6-79fa92f1db60";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
                        }
                    }
                />
            </Head>

            <DefaultWelcome />
        </div>
    )
}
