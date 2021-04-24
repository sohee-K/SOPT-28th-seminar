import React from "react";

const ResultCard = ({ data }) => {
  return (
    data && (
      <div className="result_card">
        <img src={data.avatar_url} alt="" />
        <p className="result_name">{data.name}</p>
        <p className="result_id">{data.login}</p>
        <p className="result_bio">{data.bio}</p>
        <div className="result_list">
          <p className="result_followers">Followers: {data.followers}</p>
          <p className="result_following">Following: {data.following}</p>
          <p className="result_repos">Repos: {data.public_repos}</p>
        </div>
      </div>
    )
  );
};

export default ResultCard;
