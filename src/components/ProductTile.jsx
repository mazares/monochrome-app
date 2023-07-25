export default function ProductTile(params) {
  const productName = params.productName;

  const productImage = params.productImage;

  const productPrice = params.productPrice;

  return (
    <article className="product-tile">
      <div className="product-image-container">
        <a href="" title={productName}>
          <img src={productImage} alt={productName} />
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
          <a href="" title={productName}>
            <span>{productName}</span>
          </a>
        </h1>

        <div className="product-tile-pricing">
          <span>${productPrice}</span>
        </div>
      </div>
    </article>
  );
}
