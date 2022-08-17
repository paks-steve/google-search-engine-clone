import Search from "./Search";
import React from "react";
import { useSelector } from "react-redux";
import "./SearchPage.css";

import "./SearchPage.css";
import googlePagination from "../images/googlePagination.JPG";
import Footer from "../components/Footer";
import response from "./response";
import { Link } from "react-router-dom";

import FilterOption from "../components/FilterOption";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";


function SearchPage() {
 
  const searchTerm = useSelector((state) => state.searchTerm);
  

  const pageNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const data = response;
  const history = useHistory();

  if (!searchTerm) {
    history.push("/");
  }

  console.log(data);

  return (
    <div>
      <div className="searchPage">
        <div className="searchPage__header">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="Company Logo"
            />
          </Link>

          <Search hideButtons />
        </div>
        <div className="filters">
          <FilterOption Icon={SearchIcon} selected title="All" />
          <FilterOption Icon={DescriptionIcon} title="News" />
          <FilterOption Icon={ImageIcon} title="Images" />
          <FilterOption Icon={LocalOfferIcon} title="Shopping" />
          <FilterOption Icon={RoomIcon} title="Maps" className="extra__filter" />
          <FilterOption
            Icon={MoreVertIcon}
            title="More"
            className="extra__filter"
          />
          <FilterOption extra title="Settings" className="extra__filter" />
          <FilterOption title="Tools" className="extra__filter" />
        </div>
      </div>

      <div className="searchPage__results">
        {searchTerm ? (
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} Results (
            {data?.searchInformation.formattedSearchTime}seconds)
          </p>
        ) : (
          ""
        )}
      </div>
      {data?.items.map((item) => (
        <div className="searchPage__result">
          <a className="searchPage__displayLink" href={item.link}>
            {item.displayLink}▽
          </a>
          <a className="searchPage__resultTitle" href={item.link}>
            {" "}
            <h2>{item.title}</h2>
          </a>
          <p className="searchPage__resultSnippet">{item.snippet}</p>
        </div>
      ))}
      <div className="searchPage__pagination">
        <center>
          <img src={googlePagination} alt="google Pagination Logo" />{" "}
        </center>
        <div className="pageNumbers">
          {pageNumbers.map((n) => {
            console.log(n);
            return (
              <a href="#">
                <p>{n}</p>
              </a>
            );
          })}
        </div>
      </div>

      <div className="searchPage__footer">
        <Footer />
      </div>
    </div>
  );
}

export default SearchPage;
