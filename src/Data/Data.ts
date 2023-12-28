import DogImage1 from "src/assets/images/Dog-Images/dog-image-not-found.jpg";
import DogImage2 from "src/assets/images/Dog-Images/Dog-Image-2.jpg";
import DogImage3 from "src/assets/images/Dog-Images/Dog-Image-3.jpg";
import DogImageLast from "src/assets/images/Dog-Images/Dog-Image-last.jpg";
export const categoryList = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing, Shoes, and Jewelry" },
  { id: 3, name: "Books" },
  { id: 4, name: "Home and Kitchen" },
  { id: 5, name: "Toys and Games" },
  { id: 6, name: "Health and Household" },
  { id: 7, name: "Sports and Outdoors" },
  { id: 8, name: "Automotive" },
  { id: 9, name: "Beauty and Personal Care" },
  { id: 10, name: "Grocery and Gourmet Food" },
  { id: 11, name: "Furniture" },
  { id: 12, name: "Tools and Home Improvement" },
  { id: 13, name: "Office Products" },
  { id: 14, name: "Pet Supplies" },
  { id: 15, name: "Movies and TV Shows" },
  { id: 16, name: "Video Games" },
  { id: 17, name: "Industrial and Scientific" },
  { id: 18, name: "Baby Products" },
  { id: 19, name: "Arts, Crafts, and Sewing" },
  { id: 20, name: "Computers and Accessories" },
  { id: 21, name: "Kindle Store" },
  { id: 22, name: "Digital Music" },
  { id: 23, name: "Software" },
  { id: 24, name: "Luggage and Travel Gear" },
  { id: 25, name: "Musical Instruments" },
  { id: 26, name: "Handmade" },
  { id: 27, name: "Collectibles and Fine Art" },
  { id: 28, name: "Gift Cards" },
];

export const nav2Links = [
  { name: "Todays Deals", id: 2, link: "" },
  {
    name: "Customer Service",
    id: 3,
    link: "https://www.amazon.com/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fhz%2Fcontact-us%3FnodeId%3D508510%26source%3Dhubgateway&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_contactus_desktop_us&openid.mode=checkid_setup&language=de_DE&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=login&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0",
  },
  {
    name: "Registry",
    id: 4,
    link: "https://www.amazon.com/registries?ref_=nav_cs_registry&ref_=nav_cs_registry",
  },
  {
    name: "Gift Cards",
    id: 5,
    link: "https://www.amazon.com/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc",
  },
  {
    name: "Sell",
    id: 6,
    link: "https://www.amazon.com/b/?_encoding=UTF8&ld=AZUSSOA-sell&node=12766669011&ref_=nav_cs_sell",
  },
];

export const footerLinks = [
  {
    category: "Get to Know Us",
    links: [
      { name: "Careers", link: "/careers" },
      { name: "Blog", link: "/blog" },
      { name: "About Amazon", link: "/about" },
      { name: "Investor Relations", link: "/investor-relations" },
      { name: "Amazon Devices", link: "/amazon-devices" },
      { name: "Amazon Science", link: "/amazon-science" },
    ],
  },
  {
    category: "Make Money with Us",
    links: [
      { name: "Sell products on Amazon", link: "/sell-on-amazon" },
      { name: "Sell on Amazon Business", link: "/sell-on-amazon-business" },
      { name: "Sell apps on Amazon", link: "/sell-apps-on-amazon" },
      { name: "Become an Affiliate", link: "/become-an-affiliate" },
      { name: "Advertise Your Products", link: "/advertise-your-products" },
      { name: "Self-Publish with Us", link: "/self-publish-with-us" },
      { name: "Host an Amazon Hub", link: "/host-an-amazon-hub" },
    ],
  },
  {
    category: "Amazon Payment Products",
    links: [
      { name: "Amazon Business Card", link: "/amazon-business-card" },
      { name: "Shop with Points", link: "/shop-with-points" },
      { name: "Reload Your Balance", link: "/reload-your-balance" },
      {
        name: "Amazon Currency Converter",
        link: "/amazon-currency-converter",
      },
    ],
  },
  {
    category: "Let Us Help You",
    links: [
      { name: "Amazon and COVID-19", link: "/amazon-and-covid-19" },
      { name: "Your Account", link: "/your-account" },
      { name: "Your Orders", link: "/your-orders" },
      {
        name: "Shipping Rates & Policies",
        link: "/shipping-rates-and-policies",
      },
      { name: "Returns & Replacements", link: "/returns-and-replacements" },
      {
        name: "Manage Your Content and Devices",
        link: "/manage-your-content-and-devices",
      },
      { name: "Amazon Assistant", link: "/amazon-assistant" },
      { name: "Help", link: "/help" },
    ],
  },
];

export const amazonServices = [
  { name: "Amazon Music", description: "Streams millions of songs" },
  {
    name: "Amazon Advertising",
    description: "Find, attract, and engage customers",
  },
  { name: "6PM", description: "Score deals on fashion brands" },
  { name: "AbeBooks", description: "Books, art & collectibles" },
  { name: "ACX", description: "Audiobook Publishing Made Easy" },
  { name: "Sell on Amazon", description: "Start a Selling Account" },
  { name: "Amazon Business", description: "Everything For Your Business" },
  {
    name: "Amp",
    description: "Host your own live radio show with music you love",
  },
  { name: "AmazonGlobal", description: "Ship Orders Internationally" },
  {
    name: "Home Services",
    description: "Experienced Pros Happiness Guarantee",
  },
  {
    name: "Amazon Web Services",
    description: "Scalable Cloud Computing Services",
  },
  {
    name: "Audible",
    description: "Listen to Books & Original Audio Performances",
  },
  { name: "Box Office Mojo", description: "Find Movie Box Office Data" },
  { name: "Goodreads", description: "Book reviews & recommendations" },
  { name: "IMDb", description: "Movies, TV & Celebrities" },
  {
    name: "IMDbPro",
    description: "Get Info Entertainment Professionals Need",
  },
  {
    name: "Kindle Direct Publishing",
    description: "Indie Digital & Print Publishing Made Easy",
  },
  { name: "Prime Video Direct", description: "Video Distribution Made Easy" },
  { name: "Shopbop", description: "Designer Fashion Brands" },
  { name: "Woot!", description: "Deals and Shenanigans" },
  { name: "Zappos", description: "Shoes & Clothing" },
  { name: "Ring", description: "Smart Home Security Systems" },
  { name: "eero WiFi", description: "Stream 4K Video in Every Room" },
  { name: "Blink", description: "Smart Security for Every Home" },
  { name: "Neighbors App", description: "Real-Time Crime & Safety Alerts" },
  {
    name: "Amazon Subscription Boxes",
    description: "Top subscription boxes - right to your door",
  },
  { name: "PillPack", description: "Pharmacy Simplified" },
];

export const dogImagesArr = [DogImage1, DogImage2, DogImage3, DogImageLast];
