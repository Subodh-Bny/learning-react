import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GithubData() {
  const data = useLoaderData();
  /* const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://api.github.com/users/Subodh-Bny")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []); */
  console.log(data);
  return (
    <div className="py-10 px-20 flex gap-6 flex-col text-center justify-center align-middle">
      <img src={data.avatar_url} alt="" className="h-1/4 w-1/6 rounded-full self-center" />

      <h1>Username: {data.login}</h1>

      <p>Followers: {data.followers}</p>
    </div>
  );
}

export default GithubData;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Subodh-Bny");
  return response.json();
};
