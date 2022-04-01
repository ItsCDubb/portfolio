import PortfolioData from "../../assets/data/PortfolioData";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>View My</h5>
      <h2>Portfolio & Certificates</h2>
      <div className="container portfolio__container">
        {PortfolioData.map(({ id, image, title, url, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              {url ? (
                <div className="portfolio__cta">
                  <a
                    className="btn btn-primary"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              ) : null}
              {github ? (
                <div className="portfolio__cta">
                  <a
                    className="btn"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
