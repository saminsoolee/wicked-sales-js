import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="col-md-3 shadow-sm m-4 card-container">
        <div className="card p-1 border-0">
          <img className="card-img-top mb-0 image-container" src={this.props.card.image.toString()}></img>
        </div>
        <div className="card-body">
          <h4>{this.props.card.name}</h4>
          <p className="text-secondary">${this.props.card.price}</p>
          <p className="card-text">{this.props.card.shortDescription}</p>
        </div>
      </div>
    );

  }
}

export default ProductListItem;
