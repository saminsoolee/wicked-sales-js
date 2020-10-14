import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="col-md-4 shadow-sm">
        <div className="card p-1">
          <img className="card-img-top img-size text-center p-1 m-1" src={this.props.card.image.toString()}></img>
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
