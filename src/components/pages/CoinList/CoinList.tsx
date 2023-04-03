import { FC, useEffect, useState } from "react";
import axios from "axios";
import FramerWrapper from "../../wrapper/FramerWrapper";
import { ICoinRequest } from "../../../types/types";
import AntTable from "./AntTable";

const CoinList: FC = () => {
  const [fetchedData, setFetchedData] = useState<ICoinRequest[]>([]);
  const [searchField, setSearchField] = useState<string>("");
  useEffect(() => {
    request();
    let timer = setInterval(() => {
      request();
    }, 120000);
    return () => clearInterval(timer);
  }, []);
  const request = async () => {
    const response = await axios.get(
      process.env[`REACT_APP_ASSETS_${process.env.REACT_APP_NODE_ENV}`] || ""
    );
    setFetchedData(response.data);
  };

  return (
    <FramerWrapper>
      <div className="coinlist-wrapper" style={{ backgroundColor: "black" }}>
        <div className="content">
          <AntTable
            fetchedData={fetchedData}
            searchField={searchField}
            setSearchField={setSearchField}
          />
        </div>
      </div>
    </FramerWrapper>
  );
};
export default CoinList;
