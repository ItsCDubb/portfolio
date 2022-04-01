import Resume from "../../assets/Chris-Warren.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={Resume} download>
        My Résumé
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
