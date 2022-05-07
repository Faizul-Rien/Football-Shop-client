import React from 'react';
import { useParams } from "react-router-dom";

const Inventory = () => {
    const { inventoryId } = useParams();
    return (
        
    <div className="inventoryId">
      <h2 className="title">Thank you for choosing Service Number : {inventoryId}</h2>
      <p>{}</p>
        </div>
    );
};

export default Inventory;