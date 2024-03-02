# Sole Admin
Sole Admin is a store-management system designed to streamline operations for store managers. Sole provides admins with the ability to manage multiple stores at once, CRUD products, track orders, and more. Additionally, admins can add categories, colors and sizes to each product to appeal to the right target shoppers. It also features a beautiful dashboard with graphs to summary important store information, and the ability to toggle light/dark theme. All of the changes made will be reflected on [Sole Customer](https://github.com/Dalton-G/Sole-Customer) page

## To Preview

You may visit the deployed website [here](https://sole-admin.vercel.app), or clone this repository and run it using:

```bash
npm run dev
```

## Features
- **🏪 store management**: create as many store as your want
- **👟 product management**: feature your product, manage inventory, archive items, and more
- **💵 track revenue and sales**: easily track your orders, total sales per month, and inventory all in one dashboard
- **🔗 api embedded**: each page have an 'api' section for easy debugging and data validation

## Technologies used
| Technologies               | Purpose                              |
|----------------------------|--------------------------------------|
| Next.js                    | main framework                       |
| React, Tailwind, Shadcn UI | front-end libraries used for styling |
| PostgreSQL                 | open-source relational DBMS          |
| Prisma                     | ORM for generating & executing SQL   |
| Supabase                   | Database host                        |
| Cloudinary                 | Media Upload                         |
| Clerk                      | Authentication                       |
| Stripe                     | Checkout                             |

## Screenshots
![dashboard](https://github.com/Dalton-G/Sole-Admin/blob/master/assets/dashboard.png?raw=true)
![auth](https://github.com/Dalton-G/Sole-Admin/blob/master/assets/clerk_auth.png?raw=true)
![adjust_sizes](https://github.com/Dalton-G/Sole-Admin/blob/master/assets/adjust_sizes.png?raw=true)
![product_page](https://github.com/Dalton-G/Sole-Admin/blob/master/assets/product_page.png?raw=true)
![edit_product](https://github.com/Dalton-G/Sole-Admin/blob/master/assets/edit_product.png?raw=true)
![order](https://github.com/Dalton-G/Sole-Admin/blob/master/assets/order.png?raw=true)
![theme_toggle](https://github.com/Dalton-G/Sole-Admin/blob/master/assets/theme_toggle.png?raw=true)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://github.com/Dalton-G/Sole-Admin/blob/main/LICENSE)