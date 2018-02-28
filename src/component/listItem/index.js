import React, { Component } from "react";
import { Col, Card } from "./../view";
import "./styles.css";

class ListItem extends Component {
  render() {
    let title = this.props.item.title;
    let address =
      this.props.item.realestateSummary.address.street +
      " " +
      this.props.item.realestateSummary.address.number +
      " " +
      this.props.item.realestateSummary.address.postalCode +
      " " +
      this.props.item.realestateSummary.address.city +
      " " +
      this.props.item.realestateSummary.address.street;
    let rooms = this.props.item.realestateSummary.numberOfRooms;
    let space = this.props.item.realestateSummary.space.toFixed(0);
    let sellPrice = this.props.item.advertisementPrice.sellPrice;

    const advertisementAssets = this.props.item.advertisementAssets;
    console.log(typeof advertisementAssets);
    let coverImage = this.props.item.advertisementAssets[0]
      ? this.props.item.advertisementAssets[0].advertisementThumbnails
          .inventory_m.url
      : this.props.item.advertisementAssets.advertisementThumbnails.inventory_m
          .url;

    return (
      <div>
        <Col colNumber={4}>
          <Card>
            <div
              className="list-header"
              style={{
                backgroundImage: "url(" + coverImage + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            >
              <div className="list-header-button-panal">
                <button className="btn btn-default click">Mieten</button>
              </div>
            </div>
            <div className="list-footer">
              <div className="list-main-content">
                <h3 className="action-color font-regular list-title">
                  {title}
                </h3>
                <h5 className="action-color font-regular margin-top-15 second-ction-color list-address">
                  {address}
                </h5>
              </div>
              <div className="bottom-section">
                <div className="bottom-section-item bottom-section-price">
                  <h4 className="padding-10 action-color font-medium margin-top-7">
                    {sellPrice === undefined
                      ? "Price not available"
                      : sellPrice + "€"}
                  </h4>
                </div>
                <div className="bottom-section-item bottom-section-rooms">
                  <h4 className="padding-10 font-regular action-color margin-top-7">
                    {rooms} Zimmer
                  </h4>
                </div>
                <div className="bottom-section-item bottom-section-size">
                  <h4
                    style={{ marginTop: "6px" }}
                    className="padding-10 font-regular action-color margin-top-4"
                  >
                    ab {space} m<sup>2</sup>
                  </h4>
                </div>
                <div />
              </div>
            </div>
          </Card>
        </Col>
      </div>
    );
  }
}

export default ListItem;
