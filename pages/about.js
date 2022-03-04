const About = () => {
  return (
    <>
      <p className='about'>
        {" "}
        I don't know, I see other website have an about section so I also made
        one ,but don't know what to write, anyways most people don't even read
        the about section an
      </p>
      <p style={{ textAlign: "center", padding: "1rem" }}>
        {" "}
        Anyways, here are my last year's playlist{" "}
      </p>
      <iframe
        style={{ borderRadius: "12px", margin: "1rem auto" }}
        src='https://open.spotify.com/embed/playlist/37i9dQZF1EUMDoJuT8yJsl?utm_source=generator'
        width='90%'
        height='380'
        frameBorder='0'
        allowFullScreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>
    </>
  );
};

export default About;
