require('dotenv').config();
require('./_helpers/db');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const winston = require("winston");
const debug = require("debug")("app");


//Routes inclusion
const contactRouter = require('./contacts/contact.controller');
const pageContentRouter = require('./page-contents/page-content.controller');
const brandRouter = require('./brands/brand.controller');
const categoryRouter = require('./categories/category.controller');
const userRouter = require('./users/user.controller');
const orderRouter = require('./orders/order.controller');
const orderDetailsRouter = require('./order-details/order-detail.controller');
const productRouter = require('./products/product.controller');
const productEnquiryRouter = require('./product-enquiries/product-enquiry.controller');
const faqRouter = require('./faqs/faq.controller');
const serviceRouter = require('./services/service.controller');
const aboutRouter = require('./about/about.controller');


const app = express();


//morgan
const logStream = fs.createWriteStream(path.join(__dirname, "logs/access.log"), { flags: "a" });
app.use(morgan("combined", { stream: logStream }));


//winstone
const logger = winston.createLogger({
  level: "info", // Logging level (error, warn, info, verbose, debug, silly)
  format: winston.format.simple(), // Log format
  transports: [
      new winston.transports.Console(), // Log to console
      new winston.transports.File({ filename: "logs/app.log" }) // Log to file
  ],
});


logger.info("Info message");
logger.warn("Warning message");
logger.error("Error message");

debug("This is a debug message");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Middleware to parse JSON
app.use(express.json());


//cors
app.use(cors({
  origin:  '*', // allow to server to accept request from different origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type, Authorization, Origin, X-Requested-With, Accept, currency, timezone, country",
  preflightContinue: false,
  optionsSuccessStatus: 204
}));


//npm log message
const npmLog = require("npmlog");
npmLog.info("server", "Server started on port 3000");
npmLog.warn("config", "Missing config file, using defaults");
npmLog.error("db", "Failed to connect to database");
npmLog.verbose("debug", "This is a verbose log");
npmLog.silly("trace", "Detailed trace log");


//console log level
//const logLevel = require("console-log-level")({ level: "info" });
// logLevel.trace("This is a trace log");   // Won't be shown (default level is 'info')
// logLevel.debug("This is a debug log");   // Won't be shown
// logLevel.info("Server started on port 3000");
// logLevel.warn("Warning: Low disk space");
// logLevel.error("Database connection failed");
const logLevel = require("console-log-level")({
  level: "info",
  stdout: fs.createWriteStream("logs/console-log-level.log", { flags: "a" }) // Append to file
});

logLevel.info("This log will be saved to console-log-level.log");


//Routes
app.use('/contact', contactRouter);
app.use('/page-content', pageContentRouter);
app.use('/brand', brandRouter);
app.use('/category', categoryRouter);
app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use('/order-details', orderDetailsRouter);
app.use('/product', productRouter);
app.use('/product-enquiry', productEnquiryRouter);
app.use('/faq', faqRouter);
app.use('/service', serviceRouter);
app.use('/about', aboutRouter);


app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is running in 4000 port');
});




