import Product from "../models/Products.js";

export const createProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const {
      name,
      by,
      energy,
      fat,
      saturated_fat,
      carbs,
      sugar,
      edible,
      protein,
      salt,
      category,
    } = req.body;

    const newProduct = new Product({
      name: name,
      by: by,
      energy: energy,
      fat: fat,
      saturated_fat: saturated_fat,
      carbs: carbs,
      sugar: sugar,
      edible: edible,
      protein: protein,
      salt: salt,
      category: category,
    });

    const product = await Product.findById(id);
    if (product) {
      // Define the filter to find the document to update
      const filter = { _id: id };
      // Define the update operation
      const product = await Product.findOneAndUpdate(filter, req.body);
      await product.save();
      const updatedProduct = await Product.findOne(filter);
      const products = await Product.find()
        .select(["-createdAt", "-updatedAt"])
        .sort({ createdAt: -1 });
      return res.status(201).json({
        product: updatedProduct,
        products: products,
        msg: "Επιτυχημένη ανανέωση προιόντος",
      });
    } else {
      await newProduct.save();
      const products = await Product.find()
        .select(["-createdAt", "-updatedAt"])
        .sort({ createdAt: -1 });
      res.status(201).json({
        products: products,
        msg: "Επιτυχημένη εγγραφη προιόντος",
      });
      // send(newProduct.firstName);
    }
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getProducts = async (req, res) => {
  try {
    // const { id } = req.params;
    const products = await Product.find()
      .select(["-createdAt", "-updatedAt"])
      .sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    const products = await Product.find()
      .select(["-createdAt", "-updatedAt"])
      .sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// export const getProductFriends = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);

//     const friends = await Promise.all(
//       product.friends.map((id) => Product.findById(id))
//     );
//     const formattedFriends = friends.map(
//       ({ _id, firstName, lastName, occupation, location, picturePath }) => {
//         return { _id, firstName, lastName, occupation, location, picturePath };
//       }
//     );
//     res.status(200).json(formattedFriends);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

/* UPDATE */
// export const addRemoveFriend = async (req, res) => {
//   try {
//     const { id, friendId } = req.params;
//     const product = await Product.findById(id);
//     const friend = await Product.findById(friendId);

//     if (product.friends.includes(friendId)) {
//       product.friends = product.friends.filter((id) => id !== friendId);
//       friend.friends = friend.friends.filter((id) => id !== id);
//     } else {
//       product.friends.push(friendId);
//       friend.friends.push(id);
//     }
//     await product.save();
//     await friend.save();

//     const friends = await Promise.all(
//       product.friends.map((id) => Product.findById(id))
//     );
//     const formattedFriends = friends.map(
//       ({ _id, firstName, lastName, occupation, location, picturePath }) => {
//         return { _id, firstName, lastName, occupation, location, picturePath };
//       }
//     );

//     res.status(200).json(formattedFriends);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };
