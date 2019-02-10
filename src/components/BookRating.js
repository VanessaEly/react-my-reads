import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

/**
 * @description Star rating component that support full and half star.
 * @constructor
 * @param {Object} props - The props that were defined by the caller of this component.
 * @param {string} props.name - Name used to identify the rating.
 * @param {number} props.value - The average value of the ratings.
 * @param {number} props.count - The total number of ratings.
 * @param {onUpdateRating} props.onUpdateRating - The callback executed when a rating is updated.
 */
class BookRating extends Component {
  updateRating = (value) => {
    const { onUpdateRating } = this.props;
    onUpdateRating(value);
  };

  render() {
    const {
      name, value, count,
    } = this.props;
    return (
      <div className="book-rating">
        <StarRatingComponent
          name={name}
          value={value}
          starColor="#ffb400"
          emptyStarColor="#ffb400"
          renderStarIcon={(ratingIndex, ratingValue) => (
            <span className={ratingIndex <= ratingValue ? 'fa fa-star' : 'fa fa-star-o'} />
          )}
          renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
          onStarClick={this.updateRating}
        />
        <span className="book-rating-counter">{`(${count})`}</span>
      </div>
    );
  }
}

// Type checking the props of the component
BookRating.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onUpdateRating: PropTypes.func.isRequired,
};

export default BookRating;
