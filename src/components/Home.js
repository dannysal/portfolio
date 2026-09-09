const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="row">
          {/* Main Title */} 
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Introduction</h3>
            <h3 className="title">Software Engineer</h3>
            <p className="desc">
              I'm a Full Stack Software Engineer with 7+ years of experience building modern, scalable SaaS applications and business solutions. My expertise spans Angular, React, .NET Core, Node.js, SQL, MongoDB, and Cosmos DB, with a strong focus on building reliable products from architecture and development through testing and production delivery.
            </p>
            <p className="desc">

              Beyond traditional software development, I'm increasingly focused on AI-assisted and agentic engineering workflows—using tools such as Claude Code to improve how software is researched, designed, built, tested, and delivered.
            </p>
            <p className="desc">
              I enjoy solving complex engineering problems, improving application performance, and turning ideas into production-ready products.
            </p>
            <img className="sign-img" src="img/signature.png" alt="image" />
          </div>
          {/* /Main Title */}
        </div>
      </div>
    </section>
  );
};

export default Home;
