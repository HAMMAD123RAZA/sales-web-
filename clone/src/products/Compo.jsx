import React from "react";
// import product from './List'
import List from "./List";
import { Grid,Button } from "@mui/material";

const Compo = () => {
  return (
    <>
      <Grid spacing={3} container className="my-5">
        <Grid item md={3}>
          <List
            title="small business"
            content="Sales, service, and email outreach tools in a single app "
          />
        </Grid>
        <Grid item md={3}>
          <List
            title="sales cloud"
            content="Close more deals and speed up growth with the #1 CRM."
          />
        </Grid>

        <Grid item md={3}>
          <List
            title="service cloud"
            content="Make customers happy faster and build loyalty with Service Cloud."
          />
        </Grid>

        <Grid item md={3}>
          <List
            title="marketing cloud"
            content="Build customer relationships for life with data-first digital marketing."
          />
        </Grid>

        {/* <img src="bg.png" alt="" /> */}

      </Grid>

<div class="d-flex justify-content-center">
  <Button variant="outlined" className="my-3 py-3">View All Products</Button>
</div>

    </>
  );
};

export default Compo;
