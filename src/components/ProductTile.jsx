export default function ProductTile(params) {
  const productPrice = params.productPrice;
  return (
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
          <span>${productPrice}</span>
        </div>
      </div>
    </article>
  );
}
