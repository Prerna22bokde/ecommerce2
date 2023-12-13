import Layout from "../components/Layout";
import idli from "../pages/images/idli.jpg";
import { data } from "../data/data";

function BasicExample() {
  return (
    <Layout>
      <div className="maincard">
        {data.map((item) => {
          const { image, des, price, name } = item;
          return (
            <div className="card">
              <img src={item.image} alt="" />

              <div className="carddis">
                <h4>{item.name}</h4>
                <p>{item.des}</p>
                <p className="price">price: {item.price}$</p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default BasicExample;
