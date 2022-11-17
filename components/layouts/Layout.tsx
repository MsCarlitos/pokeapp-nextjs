import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../utils";

interface Props {
  children: JSX.Element;
  title?: string;
}

const origin = (typeof window === "undefined") ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title ? title : 'Pokemon App'}</title>
        <meta name="author" content="Carlos Mendoza" />
        {/* <meta name="description" content={`Informacion sobre el pokemon ${ title }`} /> */}
        <meta name="description" content={`EL neto es puto`} />
        <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}` }/>
        <meta property="og:description" content={`Esta es la informacion sobre ${ title }.`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{ padding: '0px 20px' }}>
        {children}
      </main>
    </>
  )
}
