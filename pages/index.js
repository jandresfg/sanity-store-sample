import { Alert, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import client from "../utils/client";

export default function Home() {
  const [state, setState] = useState({
    products: [],
    error: ",",
    loading: true,
  });
  const { products, error, loading } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        setState({ products, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <Layout>
      {loading && <CircularProgress />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!error && !loading && (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.slug}>
              {<Typography>{product.name}</Typography>}
            </Grid>
          ))}
        </Grid>
      )}
    </Layout>
  );
}
