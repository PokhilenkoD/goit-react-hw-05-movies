import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/services/API';
import { Text } from './Reviews.styled';
import { PuffLoader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const { homeId } = useParams();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchReviews = () => {
      try {
        setLoader(prevState => !prevState);
        getReviews(homeId).then(resp => setReviews(resp.results));
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(prevState => !prevState);
      }
    };
    fetchReviews();
  }, [homeId]);

  return (
    <>
      {loader && <PuffLoader />}
      <ul>
        {reviews.length &&
          reviews.map(review => {
            return (
              <li key={review.author}>
                <h2>{review.author}</h2>
                <Text>{review.content}</Text>
              </li>
            );
          })}
      </ul>
    </>
  );
};
