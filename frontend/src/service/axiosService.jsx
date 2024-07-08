import axiosInstance from "../utils/axiosInstance";

//Functions to send requests to backend

async function getAllRestaurant() {
  // Send request to the backend to get a list of restaurants currently opened
  const res = await axiosInstance({
    method: "get",
    url: "/restaurant-list/",
  });

  // Return the list of restaurants
  return res.data;
}

async function getRestaurantMenu(body) {
  // Send request to the backend to get a avaialble orders
  const res = await axiosInstance({
    method: "get",
    url: "/order-menu",
    params: body,
  });

  // Return the response JSON
  return res.data;
}

async function getAvailableOrders() {
  // Send request to the backend to get a avaialble orders
  const res = await axiosInstance({
    method: "get",
    url: "/order-list/",
  });

  // Return the list of avaialble orders
  return res.data;
}

export {
    getAllRestaurant,
    getAvailableOrders,
    getRestaurantMenu,
};