import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <div className="home_container">
          <h1>Food Website</h1>
          <p>Best Food in india</p>
          <button>order now</button>
        </div>
      </div>
    </Layout>
  );
}
