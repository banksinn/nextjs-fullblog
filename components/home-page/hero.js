import Image from "next/image"

import classes from "./hero.module.css"

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/bank.jpg"
          alt="An image showing Bank"
          width={300}
          height={300}
        />
      </div>
      <h1>{`Hi I'm Bank`}</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React
      </p>
      <style jsx global>{`
        .hero_image__OntSE img {
          object-fit: cover;
          object-position: unset;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  )
}

export default Hero
