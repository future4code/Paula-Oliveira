import React, { useEffect } from "react";
import CardFeed from "../../components/CardFeed/CardFeed";
import useProtectedPage from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";

const ListPostPage = () => {
  useProtectedPage();
  const listFeed = useRequestData([], `${BASE_URL}/posts`);


  return (
    <div>
      {listFeed.map((post) => {
        return <CardFeed post={post} />;
      })}
    </div>
  );
};

export default ListPostPage;
