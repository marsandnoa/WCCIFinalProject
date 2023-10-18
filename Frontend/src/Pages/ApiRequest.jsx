import React, { useState, useEffect } from 'react';

const EbayRequest = (props) => {
  const [item, setItem] = useState({});
  const value = props.keyword;
  const info=props.info;
  useEffect(() => {
    const fetchData = async () => {
    
      try {
        const response = await fetch('https://api.ebay.com/buy/browse/v1/item_summary/search?q='+value+'&limit=1', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer v^1.1#i^1#p^3#I^3#f^0#r^0#t^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',
            'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US', 
            'X-EBAY-C-ENDUSERCTX': 'affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId>',
          },
        });

        if (!response.ok) {
        console.log("Error");
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setItem(data); 
        console.log(data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchData();
  }, []); 

  return (
        <div>
          {item.itemSummaries && item.itemSummaries.map((item) => (
            <div key={item.itemId}>
              <h3><span className="font-bold">Item Name: </span>{item.title}</h3>
              {info === 'false' ? null : <img src={item.image.imageUrl} alt={item.title} />}
              <p><span className="font-bold">Price: </span>${item.price.value} {item.price.currency}</p>
              <a href={item.itemWebUrl} target="_blank" rel="noopener noreferrer"><span className="font-bold">View on eBay</span></a>
              <hr />
            </div>
          ))}
        </div>
      );
  
};

export default EbayRequest;
