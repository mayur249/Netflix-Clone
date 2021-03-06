import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./PlansScreen.css";

const PlansScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  console.log("The values of the products", products);

  const loadCheckout = async(priceId) => {
      
  }

  return (
    <div className="plansScreen">
      {Object.entries(products).map(([productId, productData]) => {
          // TODO: add some logic to check if the user's subscription is active..
          return (
              <div className="plansScreen_plan">
                  <div className="plansScreen_info">
                     <h5>{productData.name}</h5>
                     <h6>{productData.description}</h6>
                  </div>
                  <button onClick={() => loadCheckout(productData.prices.priceId)}>Subscribe</button>
              </div>
          )
      })}
    </div>
  );
};

export default PlansScreen;
