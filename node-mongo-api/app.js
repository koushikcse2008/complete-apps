require('dotenv').config();
require('./_helpers/db');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
  origin:  '*', // allow to server to accept request from different origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type, Authorization, Origin, X-Requested-With, Accept, currency, timezone, country",
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

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
