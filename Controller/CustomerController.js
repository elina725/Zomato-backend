const User = require("../Models/UserModel");
const Order = require("../Models/OrderModel");

async function GetVendorCustomers(req, res) {
  try {
    const orders = await Order.findAll({
      where: {
        vendorId: req.vendor.id,
      },
      include: [
        {
          model: User,
          as: "user",
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    const customers = [];

    orders.forEach((order) => {
      if (!order.user) return;

      const existing = customers.find(
        (c) => c.id === order.user.id
      );

      if (existing) {
        existing.totalOrders += 1;
        existing.totalSpent += order.total;
        existing.lastOrder = order.createdAt;
      } else {
        customers.push({
          id: order.user.id,
          name: order.user.name,
          phone: order.user.mobile,
          email: order.user.email || "",
          city: "",
          totalOrders: 1,
          totalSpent: order.total,
          lastOrder: order.createdAt,
        });
      }
    });

    res.json(customers);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

module.exports = {
  GetVendorCustomers,
};