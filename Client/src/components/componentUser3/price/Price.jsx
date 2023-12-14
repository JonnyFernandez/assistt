import React, { useState, useEffect } from 'react';
import style from '../price/Price.module.css';
import axios from 'axios';
import ModalPrice from './ModalPrice'; 

const Price = () => {
  const [quotes, setQuotes] = useState(null);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [selectedQuoteDetails, setSelectedQuoteDetails] = useState(null);  
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('http://localhost:3001/order');
        if (response.ok) {
          const data = await response.json();
          setQuotes(data);
        } else {
          console.error('Error al cargar las cotizaciones');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    fetchQuotes();
  }, []);

  const approveQuotes = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3001/order/${id}`, {
        quotes: true,
      });
      setQuotes((prevQuotes) =>
        prevQuotes.map((quote) =>
          quote.id === id ? { ...quote, quotes: true } : quote
        )
      );
    } catch (error) {
      console.error('Error al aprobar cotizaciones:', error);
    }
  };

  const disapproveQuotes = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3001/order/${id}`, {
        quotes: false,
      });
      console.log('Disapprove Response:', response.data);
      setQuotes((prevQuotes) =>
        prevQuotes.map((quote) =>
          quote.id === id ? { ...quote, quotes: false } : quote
        )
      );
    } catch (error) {
      console.error('Error al desaprobar cotizaciones:', error);
    }
  };
  

  const openQuoteDetails = (quoteId) => {
    const selectedQuoteDetails = quotes.find((quote) => quote.id === quoteId);
    setSelectedQuoteDetails(selectedQuoteDetails);
    setSelectedQuote(quoteId);
    setIsModalOpen(true);
  };
  
  

  return (
    <div className={style.container}>
   
      {quotes === null ? (
        <p>Cargando cotizaciones...</p>
      ) : (
        <div className={style.cardContainer}>
          {quotes.map((quote) => (
            <div key={quote.id} className={style.card}>
              <button
                className={`${style.h3buton} ${style.codeButton}`}
                onClick={() => openQuoteDetails(quote.id)}
              >
                {quote.codeOrder}
              </button>
              <p>Aprobado: {quote.quotes !== null ? (quote.quotes ? 'Sí' : 'No') : 'En espera'}</p>
              {quote.quotes === null && (
                <div>
                  <button onClick={() => approveQuotes(quote.id)}>
                    Aprobar
                  </button>
                  <button onClick={() => disapproveQuotes(quote.id)}>
                    Desaprobar
                  </button>
                  <button onClick={() => openQuoteDetails(quote.id)}>
                      Detalles
                    </button>

                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <ModalPrice
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productDetails={selectedQuoteDetails}
          id={selectedQuote}
        />
      )}
    </div>
  );
};

export default Price;






  