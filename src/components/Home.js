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
              I'm a Software Engineer proficient in Angular 2+, .net, SQL, COSMOS DB and Mongo DB with over 5 years of experience. I like to work with new people to get new experience.
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
