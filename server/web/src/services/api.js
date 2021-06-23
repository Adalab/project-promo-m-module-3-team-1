const sendDataToApi = (data) => {
  const url = "http://localhost:3000/card";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
export default sendDataToApi;
