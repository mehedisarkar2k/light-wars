import React from "react";
import { Route, Switch } from "react-router";
import AddService from "../Admin/AddService/AddService";
import OrderList from "../Admin/OrderList/OrderList";
import MyOrder from "../User/MyOrder/MyOrder";

const Content = ({ path }) => {
  return (
    <div className="ml-0 md:ml-60 px-10 bg-teal-50">
      <Switch>
        <Route exact path={path}>
          <h2>User Admin</h2>
        </Route>

        <Route path={`${path}/my-order`}>
          <h2 className="text-5xl text-gray-600 py-4">My Order</h2>
          <MyOrder />
        </Route>

        <Route path={`${path}/order-list`}>
          <h2 className="text-5xl text-gray-600 py-4">My Order</h2>
          <OrderList />
        </Route>

        <Route path={`${path}/add-service`}>
          <h2 className="text-5xl text-gray-600 py-4">My Order</h2>
          <AddService />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
