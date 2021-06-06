import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../modules/Movies';
const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        setTimeout(() => {
          setShow(results);
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [id]);
  console.log('show', show);
  if (isLoading) {
    return <div>Date is being loaded</div>;
  }
  if (error) {
    return <div>Errore occured : {error}</div>;
  }
  return <div>This is a show page</div>;
};

export default Show;
