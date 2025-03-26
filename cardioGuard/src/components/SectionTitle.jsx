import PropTypes from "prop-types";

function SectionTitle({ header, description, isBig = false }) {
  if(isBig) {
    header = header.split("-")
    return (
      <>
        <h1 style={{ textAlign: "left" }}><span>{header[0]}</span>{header[1]}</h1>
        <p className="tagline">{description}</p>
      </>
    );
  }
  return (
    <>  <h2>{header}</h2>
      <p className="tagline">{description}</p></>
  );
}

SectionTitle.propTypes = {
    header: PropTypes.string.isRequired,
    description: PropTypes.string,
    isBig: PropTypes.bool
};

export default SectionTitle;