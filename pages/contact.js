import { Fragment } from "react"
import ContactForm from "../components/contact/contact-form"
import Head from "next/head"

function ContactPage() {
  console.log("uri", process.env.NEXT_PUBLIC_MONGODB_URI)
  console.log("db", process.env.NEXT_PUBLIC_MONGODB_DB)
  console.log("test")
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </Fragment>
  )
}

export default ContactPage
