import PropTypes from "prop-types";

function SectionTitle({ header, description, isBig = false }) {
  return (
    <>  {isBig ? <h1>{header}</h1> : <h2>{header}</h2>}
      <p className="tagline">{description}</p></>
  );
}

SectionTitle.propTypes = {
    header: PropTypes.string.isRequired,
    description: PropTypes.string,
    isBig: PropTypes.bool
};

export default SectionTitle;