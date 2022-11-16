import { useState, useEffect } from "react";

const useFetchPost = (endpoint, data) => {
  var requestOptions = {
    method: "POST",
    body: data,
    redirect: "follow",
  };

  fetch(endpoint, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const useFetchGet = (endpoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(endpoint, requestOptions)
      .then((response) => response.text())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
};

export { useFetchPost, useFetchGet };
