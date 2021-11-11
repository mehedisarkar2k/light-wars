import React from "react";
import { Route, Switch } from "react-router";
import AddService from "../Admin/AddService/AddService";
import Admins from "../Admin/MakeAdmin/Admins";
import ManageService from "../Admin/ManageService/ManageService";
import OrderList from "../Admin/OrderList/OrderList";
import NotFoundDashboard from "../NotFound/NotFoundDashboard";
import MyOrder from "../User/MyOrder/MyOrder";
import Payment from "../User/Payment/Payment";
import Review from "../User/Review/Review";

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
          <h2 className="text-4xl text-gray-600 py-4">Order List</h2>
          <OrderList />
        </Route>

        <Route path={`${path}/add-service`}>
          <h2 className="text-4xl text-gray-600 py-4">Add a new Service</h2>
          <AddService />
        </Route>

        <Route path={`${path}/manage-service`}>
          <h2 className="text-4xl text-gray-600 py-4">Manage Service</h2>
          <ManageService />
        </Route>

        <Route path={`${path}/make-admin`}>
          <h2 className="text-3xl text-gray-600 py-4">Create New Admin</h2>
          <Admins />
        </Route>

        <Route path={`${path}/review`}>
          <h2 className="text-3xl text-gray-600 py-4">Please Review Us</h2>
          <Review />
        </Route>

        <Route path={`${path}/payment`}>
          <h2 className="text-3xl text-gray-600 py-4">Thanks for shopping.</h2>
          <Payment />
        </Route>

        <Route path={`${path}/*`}>
          <NotFoundDashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
