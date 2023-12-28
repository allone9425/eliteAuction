import { useEffect, useState } from "react";
import { fetchGetAuctions } from "../api/auction";
import { supabase } from "../supabase";
import { Auction_post, Category } from "../types/databaseRetrunTypes";

const Home = () => {
  const [auctionData, setAuctionData] = useState<Auction_post[] | null>();
  const queryOption = {
    searchKeyword: "",
    categories: [] as Pick<Category, "category_id">[],
    limit: 20,
    offset: 0,
    orderBy: "created_at",
    order: false,
  };

  useEffect(() => {
    (async () => {
      const fetchData = await fetchGetAuctions(
        queryOption.searchKeyword,
        queryOption.categories,
        queryOption.limit,
        queryOption.offset,
        queryOption.orderBy,
        queryOption.order
      );
      setAuctionData(fetchData);
    })();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      console.log("현재 유저 정보", data);
    };
    fetchUser();
  }, []);

  console.log(auctionData);

  return <div>Home</div>;
};

export default Home;
