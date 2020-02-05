# CHANGELOG for v1.x.x

#### This changelog consists the bug & security fixes and new features being included in the releases listed below.

## **v0.1.0(28th of January 2020)** - *Release*

* [feature] Updated to laravel version 6.

* [feature] Added four new product types - Group, Bundle, Downloadable and Virtaul.

* [feature] Povided default theme (Velocity).

* #1971 [fixed] - Filter is not working properly for id column in autogenerated coupon codes in cart rule.

* #1976 [fixed] - Default attribute set should be selected in root category.

* #1977 [fixed] - On editing the product, selected category for that product is not checked.

* #1978 [fixed] - Getting exception if changing the locale from cart page, if translation is not written for that product.

* #1979 [fixed] - Wrong calculation at customer as well as at admin end in due amount and grandtotal.

* #1980 [fixed] - UI issue in cart on changing locale.

* #1983 [fixed] - Getting exception on deleting admin logo.

* #1986 [fixed] - Subscribe to newsletter does not work.

* #1987 [fixed] - MySQL query very slow if products in category is around 3000

* #1988 [fixed] - Country and City Names in Create Address is not coming based on Locale

* #1994 [fixed] - Tax rate should only depend on zip code, state field should not be mandatory.

* #1997 [fixed] - Getting exception on adding attribute or creating product in bagisto on php version 7.4 .

* #1998 [fixed] - Showing product sale amount as zero when creating a product, and a existing catalog rule apply on it.

* #2001 [fixed] - php artisan route:list throws error.

* #2012 [fixed] - Getting exception when clicking on view all under review section at product page.

* #2033 [fixed] - API route for products throws error

* #2045 [fixed] - Login option is not coming while checkout with existing customer mail id.

* #2051 [fixed] - Forgot password not working due to recent changes in mail keys.

* #2054 [fixed] -Automatically 1st item of bundle is getting selected as a default after saving product.

* #2058 [fixed] - Not getting any validation message if entered admin credentials are wrong.

* #2066 [fixed] - Exception while writing product review.

* #2071 [fixed] - Customer is not getting forget password email.

* #2074 [fixed] - Getting exception while creating bundle type product.

* #2075 [fixed] - Getting exception if trying to select any parent category of root.

* #2087 [fixed] - Getting exception while adding configurable/bundle/grouped/Downloadable Type product to cart.

* #2088 [fixed] - Getting exception on customer login.

* #2089 [fixed] - Info missing on printing invoice at customer and admin end.

* #2114 [fixed] - getting exception while recovering admin password in case admin did not enter the details in env.

* #2118 [fixed] - Installation issue, getting exception on migrate command.

* #2119 [fixed] - confirm password is not matching even if admin is entering similar password in password and confirm password.

* #2120 [fixed] - Not able to add new user as while creating user password its giving error confirm password doesn't match.

* #2124 [fixed] - Able to make all product as default while creating bundle product in select type option.

* #2128 [fixed] - Click on add attribute, error is thrown.

* #2132 [fixed] - Price range slider not displaying.

* #2139 [fixed] - Logic error in exchange rate calculation

* #2143 [fixed] - Attributes filterable checkbox - those who do not know will think that a bug!

* #2145 [fixed] - Emails don't work on registration.

* #2146 [fixed] - Getting exception on creating bundle product without any option.

* #2147 [fixed] - Sort order of bundle product doesn't work.

* #2149 [fixed] - Ui issue when installing through installer.Getting issue on all steps.

* #2162 [fixed] - product's special price should not greater than price

* #2164 [fixed] - Redirect to incorrect url when click on finish button after installing through installer.

* #2165 [fixed] - Incorrect error message for password field of email configuration.

* #2167 [fixed] - Translation issue in Payment description field.

* #2168 [fixed] - locale direction drop down always select ltr.

* #2173 [fixed] - While creating locales value in direction dropdown is in small letters, but when you edit any locale it display in caps.

* #2176 [fixed] - product price section is not getting highlighted if the warning exists

* #2177 [fixed] - Category image can be add from anywhere

* #2181 [fixed] - Getting exception when creating/editing customer address from Admin end.

* #2182 [fixed] - missing option in Customer's Gender at admin end

* #2183 [fixed] - Add toolkit for add address.

* #2185 [fixed] - Issue with configurable product in case of multi-locale. Variation option are not visible.

* #2186 [fixed] - Ui issue in cart for pt_BR locale. Quantity is not visible properly.

* #2190 [fixed] - sku should be shown in product list if new product created

* #2192 [fixed] - For all grid of sales section when you export data in csv file order id heading is mentioned as increment id.

* #2196 [fixed] - No data is visible in state field, issue exist at all section where state field is used.

* #2198 [fixed] - Remove vat id column from customer address list

* #2202 [fixed] - catalog rule is not applied on product if product's special price date expired

* #2203 [fixed] - saved categories are not checked in condition of catalog/cart rule

* #2204 [fixed] - category tree view doesn't visible in catalog rule condition

* #2207 [fixed] - Unable to delete Category.

* #2226 [fixed] - Wrong price of product in case of multiple exchange rates.

* #2225  [fixed] - Not able to export products according to locale.

* #2227 [fixed] - Grand total column is not visible in invoice pdf, also getting incorrect currency symbol for grand total.

* #2237 [fixed] - Error when trying to login with app.php locale set to ja