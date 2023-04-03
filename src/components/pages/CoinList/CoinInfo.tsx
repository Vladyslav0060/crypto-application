import { useParams } from "react-router-dom";
import { TwitterOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import FramerWrapper from "../../wrapper/FramerWrapper";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antLoadingIcon = <LoadingOutlined style={{ color: "white" }} spin />;
const CoinInfo = () => {
  const { id } = useParams();
  const [data, setData]: any = useState();
  const fetchData = async () => {
    const response = await axios.get(
      process.env[`REACT_APP_COIN_DETAILS_${process.env.REACT_APP_NODE_ENV}`] ||
        "",
      { headers: { id: id } }
    );
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <FramerWrapper>
      <div className="details-wrapper">
        <div className="details">
          {data?.name ? (
            <>
              <h1>CoinInfo page</h1>
              <div className="title">
                <div className="col">
                  <img src={data?.logo} alt="" />
                  <span>{data?.name}</span>
                </div>
                <div className="col">
                  <span>
                    <h3>Contract addresses</h3>
                    {!data?.contract_address
                      ? ""
                      : !data?.contract_address.length
                      ? "Not found!"
                      : data?.contract_address.map((el: any) => (
                          <div key={el.contract_address}>
                            <span>{el.contract_address}</span>
                          </div>
                        ))}
                  </span>
                </div>
              </div>
              <div className="description">
                <h1>What is {data?.name}?</h1>
                <p>{data?.description}</p>
                <a
                  href={`https://twitter.com/${data?.twitter_username}`}
                  target="_blank"
                >
                  <TwitterOutlined
                    style={{ color: "#3aaff5", paddingRight: "5px" }}
                  />
                  twitter:{" "}
                  {data?.twitter_username ? data?.twitter_username : "-"}{" "}
                </a>
              </div>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Spin size="large" indicator={antLoadingIcon} />
            </div>
          )}
        </div>
      </div>
    </FramerWrapper>
  );
};

export default CoinInfo;
