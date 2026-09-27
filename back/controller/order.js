// const express = require("express");
// const router = express.Router();
// const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const ErrorHandler = require("../utils/ErrorHandler");
// const { isAuthenticated } = require("../middleware/auth");
// const Order = require("../model/order");
// const Book = require("../model/book");

// //craetion un order
// router.post("/order/create-order", isAuthenticated, catchAsyncErrors(async (req, res, next) => {
//     try {
//         const { cart, shippingAddress, user, totalPrice, paymentInfo } = req.body;

//         const librarieItemsMap = new Map();
//         for (const item of cart) {
//             const librarieId = item.librarieId;
//             if (!librarieItemsMap.has(librarieId)) {
//                 librarieItemsMap.set(librarieId, []);
//             }
//             librarieItemsMap.get(librarieId).push(item);
//         }

//         //creation de orderr
//         const orders = [];
//         for (const [librarieId, items] of librarieItemsMap) {
//             const order = await Order.create({ cart: items, shippingAddress, user, totalPrice, paymentInfo });
//             orders.push(order);
//         }
//         res.status(201).json({
//             success: true,
//             orders,
//         });
//     } catch (error) {
//         return next(new ErrorHandler(error.message, 400));
//     }
// }));

// module.exports = router;

const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const { isAuthenticated,isSeller } = require("../middleware/auth");
const Order = require("../model/order");
const Book = require("../model/book");

// router.post("create-order", isAuthenticated, catchAsyncErrors(async (req, res, next) => {
//     try {
//         const { cart, shippingAddress, user, totalPrice, paymentInfo } = req.body;

//         // Check if required fields are present
//         if (!cart || !shippingAddress || !user || !totalPrice || !paymentInfo) {
//             throw new ErrorHandler("Missing required fields", 400);
//         }

//         // Create order for each item in the cart
//         const orders = await Promise.all(cart.map(async (item) => {
//             const order = await Order.create({ cart: [item], shippingAddress, user, totalPrice, paymentInfo });
//             return order;
//         }));

//         res.status(201).json({
//             success: true,
//             orders,
//         });
//     } catch (error) {
//         return next(new ErrorHandler(error.message || "Internal Server Error", error.statusCode || 500));
//     }
// }));
router.post(
  "/create-order",

  catchAsyncErrors(async (req, res, next) => {
    try {
      const { cart, shippingAddress, user, totalPrice, paymentInfo } = req.body;

      // grp cartt items id
      const librarieItemsMap = new Map();

      for (const item of cart) {
        // const librarieId = item && item.librarieId;
       const librarieId = item.librarieId;
        if (!librarieItemsMap.has(librarieId)) {
          librarieItemsMap.set(librarieId, []);
        }
        librarieItemsMap.get(librarieId).push(item);
      }

      //   create order pour chaque librarie
      const orders = [];
      for (const [librarieId, items] of librarieItemsMap) {
        const order = await Order.create({
          cart: items,
          shippingAddress,
          user,
          totalPrice,
          paymentInfo,
        });
        orders.push(order);
      }
    //   for (const item of cart) {
    //     const librarieId = item && item.librarieId;
    //     if (!librarieId) {
    //         // Handle the case where librarieId is not present
    //         continue; // Skip this item and move to the next one
    //     }
    //     if (!librarieItemsMap.has(librarieId)) {
    //         librarieItemsMap.set(librarieId, []);
    //     }
    //     librarieItemsMap.get(librarieId).push(item);
    // }
    
      res.status(201).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  })
);

// get all orders ofuser
router.get(
  "/get-all-orders/:userId",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const orders = await Order.find({ "user._id": req.params.userId }).sort({
        createdAt: -1,
      });
      res.status(201).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get all order de seller
router.get(
  "/get-seller-all-orders/:librarieId",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const orders = await Order.find({
        "cart.librarieId": req.params.librarieId,
      }).sort({
        createdAt: -1,
      });

      res.status(200).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);



// router.put("/update-order-status/:id", isSeller, catchAsyncErrors(async(req, res, next) => {
//   const order = await Order.findById(req.params.id);

//   if (!order) {
//     return next(new ErrorHandler("order not found with this id", 400));
//   }
  
//   if (req.body.status === "Transferred to delivery service") {
//     order.cart.forEach(async(o) => {
//       await updateOrder(o._id, o.qty);
//     });
    
//     order.status = req.body.status;
    
//     if (req.body.status === "Delivered") {
//       order.deliveredAt = Date.now();
//       order.paymentInfo.status = "Succeeded";
//     }
    
//     await order.save({ validateBeforeSave: false });
    
//     res.status(200).json({
//       success: true,
//       order,
//     });
    
//     async function updateOrder(id, qty) {
//       const book = await Book.findById(id);

//       book.stock -= qty;
//       book.sold_out += qty;
      
//       await book.save({ validateBeforeSave: false });
//     }
//   }
// }));

// router.put("/update-order-status/:id", isSeller, catchAsyncErrors(async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     // Check if order exists
//     const order = await Order.findById(id);
//     if (!order) {
//       return res.status(404).json({ success: false, message: "Order not found" });
//     }

//     // Update order status
//     order.status = status;
//     if (status === "Transferred to delivery service" ||status === "Shipping" || status === "Received" ||status === "Delivered" ) {
//       order.deliveredAt = Date.now();
//       order.paymentInfo.status = "Succeeded";
      
//       // Update book stock
//       for (const item of order.cart) {
//         await updateBookStock(item.book, item.qty);
//       }
//     }

//     // Save the updated order
//     await order.save();

//     res.status(200).json({ success: true, order });
//   } catch (error) {
//     next(error); // Pass error to the error handling middleware
//   }


// async function updateBookStock(bookId, qty) {
//   const book = await Book.findById(bookId);
//   if (!book) {
//     throw new Error(`Book with ID ${bookId} not found`);
//   }

//   book.stock -= qty;
//   book.sold_out += qty;

//   await book.save({ validateBeforeSave: false });
// }
// }));



// router.put("/update-order-status/:id" , isSeller, catchAsyncErrors(async(req,res,next)=>{
//   try {
//     const order = await Order.findById(req.params.id);
//     if(!order){
//       return next(new ErrorHandler("Order not fpound with this id", 400));

//     }

//     if(req.body.status === "Transferred to delivery service"){
//       order.cart.forEach(async(o) =>{
//         await updateOrder(o._id,o.qty);
//       });
//     }
//     async function updateOrder(id,qty){
//       const book = await Book.findById(id);

//       book.stock -= qty;
//       book.sold_out += qty;

//       await book.save({validateBeforeSave: false});

//     }
//   } catch (error) {
//     return next(new ErrorHandler(error.message, 500));
//   }

//   res.status(200).json({ success: true, message: "Order status updated successfully" });
// } ).catch ((error)=> {
//   next(error);
// }
// }))
router.put("/update-order-status/:id", isSeller, catchAsyncErrors(async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return next(new ErrorHandler("Order not found with this id", 400));
    }

    if (req.body.status === "Shipping" ||req.body.status === "Transferred to delivery service" ||req.body.status === "Shipping" ||req.body.status === "Delivered") {
      // Mettre à jour les stocks des livres associés
      for (const item of order.cart) {
        await updateBook(item._id, item.qty);
      }
    }

    // Mettre à jour le statut de la commande
    order.status = req.body.status;
    await order.save();

    res.status(200).json({ success: true, message: "Order status updated successfully" });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
}));

// Fonction pour mettre à jour le stock du livre
async function updateBook(id, qty) {
  const book = await Book.findById(id);
  if (!book) {
    throw new Error(`Book with ID ${id} not found`);
  }

  book.stock -= qty;
  book.sold_out += qty;

  await book.save({ validateBeforeSave: false });
}

module.exports = router;
