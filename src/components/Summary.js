import PropTypes from 'prop-types';

const Summary = ({ingredients , steps , title = '[recipe]'}) => {
  return <div>
    <h1>{title}</h1>
    <p>{ingredients.length} Ingredients | {steps.length} Steps</p>
  </div>
};
Summary.displayName = 'Summary';

Summary.propTypes = {
  ingredients: PropTypes.array.isRequired,
  steps: PropTypes.array.isRequired,
  title: PropTypes.string
};


export default Summary;
