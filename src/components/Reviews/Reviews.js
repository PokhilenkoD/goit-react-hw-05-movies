import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/services/API';

export const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const { homeId } = useParams();

  useEffect(() => {
    const fetchReviews = () => {
      try {
        getReviews(homeId).then(resp => setReviews(resp.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [homeId]);

  return (
    <ul>
      {reviews.length &&
        reviews.map(review => {
          return (
            <li key={review.author}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          );
        })}
    </ul>
  );
};
