import ProductTile from "./ProductTile";

import products from "./database/products";

import image0 from "./database/products/recently_viewed_thumbnail_2-0.png";
import image1 from "./database/products/recently_viewed_thumbnail_2-1.png";
import image2 from "./database/products/recently_viewed_thumbnail_2-2.png";
import image3 from "./database/products/recently_viewed_thumbnail_2-3.png";
import image4 from "./database/products/recently_viewed_thumbnail_2-4.png";
import image5 from "./database/products/recently_viewed_thumbnail_2-5.png";
import image6 from "./database/products/recently_viewed_thumbnail_2-6.png";
import image7 from "./database/products/recently_viewed_thumbnail_2-7.png";
import image8 from "./database/products/recently_viewed_thumbnail_2-8.png";
import image9 from "./database/products/recently_viewed_thumbnail_2-9.png";
import image10 from "./database/products/recently_viewed_thumbnail_2-10.png";
import image11 from "./database/products/recently_viewed_thumbnail_2-11.png";
import image12 from "./database/products/recently_viewed_thumbnail_2-12.png";
import image13 from "./database/products/recently_viewed_thumbnail_2-13.png";
import image14 from "./database/products/recently_viewed_thumbnail_2-14.png";
import image15 from "./database/products/recently_viewed_thumbnail_2-15.png";

import PRODUCTS from "./database/products/products1";

export default function HomeCatalogPreview(params) {
  const homecatalogheader = params.homecatalogheader;

  console.log(PRODUCTS);

  return (
    <section
      className="home-catalog-preview"
      homecatalogheader={homecatalogheader}
    >
      <section className="home-catalog-preview">
        <header>
          <h1 className="catalog-title">{homecatalogheader}</h1>
        </header>

        <main className="catalog-tiles">
          <ProductTile
            productName={PRODUCTS.w1.name}
            productImage={PRODUCTS.w1.image}
            productPrice={PRODUCTS.w1.price}
          />

          <ProductTile
            productName={products[1].name}
            productImage={image1}
            productPrice={products[1].price}
          />

          <ProductTile
            productName={products[2].name}
            productImage={image2}
            productPrice={products[2].price}
          />

          <article className="product-tile">
            <div className="product-image-container">
              <a href="" title="MONOCHROME">
                <img
                  src="images/products/recently_viewed_thumbnail_2-0.png"
                  alt="MONOCHROME"
                />
              </a>
              <div className="product-tile-controls">
                <a href="" title="">
                  <i className="far fa-heart" title="add to favorites"></i>
                </a>

                <a href="" title="">
                  <i className="far fa-plus-square" title="add to cart"></i>
                </a>
              </div>
            </div>

            <div className="product-tile-details">
              <h1>
                <a href="" title="MONOCHROME">
                  <span>MONOCHROME</span>
                </a>
              </h1>

              <div className="product-tile-pricing">
                <span>$425</span>
              </div>
            </div>
          </article>
        </main>
      </section>
    </section>
  );
}
