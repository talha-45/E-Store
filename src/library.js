const getCategories = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = await response.json();
  return data; 
};

const getProducts = async (product_id = null) => {
  let API = "https://fakestoreapi.com/products";
  if (product_id) {
    API += "/" + product_id;
  }
  const response = await fetch(API);
  const data = await response.json();
  return data; 
};

export { getCategories, getProducts };
