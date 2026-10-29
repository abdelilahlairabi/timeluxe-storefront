# TimeLuxe storefront

Responsive French-language storefront for the TimeLuxe watch collection. The current order flow prepares an order summary and opens a prefilled WhatsApp message; there is no payment processor or order database connected yet.

## Run locally

```bash
npm install
npm run dev
```

Create a production bundle with `npm run build` and preview it with `npm run preview`.

## Store details to update

- Edit `src/data/catalog.js` to change product names, prices, image paths, the Pack Duo offer, delivery charge, or contact number.
- Product and lifestyle images are in `public/timeluxe/`.
- Orders are sent to the WhatsApp number in `src/data/catalog.js` after the visitor reviews the prepared message.

Before publishing, confirm the offer price, free-delivery setting, exchange conditions, and contact number with the shop owner. Replace any promotional images or product details that do not match the items being sold.
