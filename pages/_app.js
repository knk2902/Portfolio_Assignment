import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((response) => response.json())
      .then((data) => { setData(data)})
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} data={data} />
    </Fragment>
  );
};
export default App;
