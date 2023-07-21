import ProductTile from "./ProductTile";

export default function HomeCatalogPreview(params) {
  const homeCatalogHeader = params.homeCatalogHeader;
  return (
    <section
      className="home-catalog-preview"
      homeCatalogHeader={homeCatalogHeader}
    >
      <section className="home-catalog-preview">
        <header>
          <h1 className="catalog-title">{homeCatalogHeader}</h1>
        </header>

        <main className="catalog-tiles">
          <ProductTile productPrice="500" />

          <ProductTile productPrice="600" />

          <ProductTile productPrice="700" />

          <article className="product-tile">
            <div className="product-image-container">
              <a href="" title="MONOCHROME">
                <img
                  src="images/products/recently_viewed_thumbnail_2.png"
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
