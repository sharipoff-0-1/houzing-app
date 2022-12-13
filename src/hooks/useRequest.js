import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL } = process.env;

export const useRequest = () => {
  const navigate = useNavigate();
  const request = async ({
    url,
    method = "GET",
    body,
    token,
    headers = {},
  }) => {
    headers["Content-Type"] = "appplication/json";
    if (token) headers.Authorization = `Bearer ${token}`;

    fetch(`${REACT_APP_BASE_URL}${url}`, {
      method,
      headers,
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => res);
    // .then((res) => {
    //   if (res) {
    //     navigate("/signin");
    //   } else return res;
    // });
  };

  return request;
};

export default useRequest;
