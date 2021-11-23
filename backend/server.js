// require("dotenv").config();
const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRouter = require("./routes/userRouter");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

// *cannot read property email of undefined* during test
// solution : add these middlewares to transform request that contain data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRouter);

// Error catcher middleware
app.use(notFound);
app.use(errorHandler);
// app.use((err, req, res, next) => {
//   res.status(500).send({ message: err.message });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
