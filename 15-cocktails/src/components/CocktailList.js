import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context/context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length <= 0) {
    return (
      <>
        <h2 className="section-title">
          No cocktails matched your search criteria!
        </h2>
      </>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails?.map((item) => (
          <Cocktail key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
