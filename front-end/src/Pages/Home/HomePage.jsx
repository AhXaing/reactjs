import Products from "../../components/Product/Products.jsx";

const HomePage = () => {
  return (
    <div>
      {Products.map((items, index) => (
        <div
          style={{
            backgroundColor: "#eee",
            width: 450,
            padding: 10,
            margin: 10,
            display: "flex",
          }}
          key={index}
        >
          <div style={{}}>
            <img style={{ width: "20%" }} src={items.image} />
            <div>Product Name: {items.name}</div>
            <div>Price: ${items.price}</div>
            <div>Qty: {items.qty} pcs</div>
            <div>Total: ${items.price * items.qty}</div>
          </div>
          {items.color.map((items1, index) => (
            <div style={{ display: "flex" }} key={index}>
              <div
                style={{
                  backgroundColor: items1,
                  width: 42,
                  height: 42,
                  margin: 2,
                  textAlign: "center",
                  color: "white",
                  display: "flex",
                }}
              >
                {items1}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
