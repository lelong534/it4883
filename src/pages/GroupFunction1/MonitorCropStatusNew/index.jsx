import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import StyleVideoSurveillance, { droneHoverStyle, droneStyle } from "./index.style";
import ReactTooltip from 'react-tooltip';
import { Row, Col, Modal, Button, Popover, Image } from 'antd';
import { IMAGES } from '../../../constants';

class VideoSurveillance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 20.91507,
        lng: 105.74766
      },
      zoom: 16,
      dronePlaces: [
        { id: 'A', lat: 20.91507, lng: 105.74766 },
        { id: 'B', lat: 59.724, lng: 30.080 }
      ],
      selectedDroneId: '',
      displayMap: 'block',
      displayVideo: 'none',
    };
    this.onCenterChange = this.onCenterChange.bind(this);
    this.onZoomChange = this.onZoomChange.bind(this);
    this.onBoundsChange = this.onBoundsChange.bind(this);
    this.onSelectedDroneIdChange = this.onSelectedDroneIdChange.bind(this);
    this.onShowMapChange = this.onShowMapChange.bind(this);
  }

  onCenterChange(center) {
    this.setState({ center: center });
  }
  onZoomChange(zoom) {
    this.setState({ zoom: zoom });
  }
  onBoundsChange = (center, zoom) => {
    this.setState({ center: center, zoom: zoom });
  }
  onSelectedDroneIdChange = (droneId) => {
    this.setState({ selectedDroneId: droneId });
  }
  onShowMapChange = (showMap) => {
    if (showMap == true) {
      this.setState({ displayMap: "block", displayVideo: "none" });
    } else {
      this.setState({ displayMap: "none", displayVideo: "block" });
    }

  }
  render() {
    return (
      <div className="h-100 bg-white">
        <h2>Giám sát tình trạng cây trồng</h2>
        <div className="row">
          <div className="col col-md-2">
            <h5 className="m-1">Danh sách các sự cố</h5>
            <div className="border-top mt-2"></div>
            <div className="overflow-auto" style={{ maxHeight: '400px' }}>
              <DroneList
                onCenterChange={this.onCenterChange}
                onSelectedDroneIdChange={this.onSelectedDroneIdChange}
              />
            </div>
            <div className="border-bottom mt-2"></div>
          </div>
          <div className="col col-md-10">
            <div style={{ display: this.state.displayMap }}>
              <DroneInfoMap
                center={this.state.center}
                zoom={this.state.zoom}
                selectedDroneId={this.state.selectedDroneId}
                onBoundsChange={this.onBoundsChange}
                onSelectedDroneIdChange={this.onSelectedDroneIdChange}
              />
            </div>
            <div style={{ display: this.state.displayVideo }}>
              <Video></Video>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

class DroneInfoMap extends Component {
  constructor(props) {
    super(props);
  }

  createMapOptions(maps) {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
      mapTypeId: maps.MapTypeId.SATELLITE,
    };
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDUJI3UXw2arRqiUIIYaANQtMurg6__hnI" }}
          center={this.props.center}
          zoom={this.props.zoom}
          onBoundsChange={this.props.onBoundsChange}
          options={this.createMapOptions}
          hoverDistance={20}
        >
          <DroneIcon
            id={1}
            lat={20.91507}
            lng={105.74766}
            checked={1 == this.props.selectedDroneId}
          />
          <DroneIcon
            id={2}
            lat={20.91907}
            lng={105.74766}
            checked={2 == this.props.selectedDroneId}
          />
          <DroneIcon
            id={3}
            lat={20.91707}
            lng={105.74966}
            checked={3 == this.props.selectedDroneId}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

class DroneList extends Component {
  render() {
    return (
      <div>
        <div className="custom-control custom-radio mt-2">
          <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"
            onChange={
              (e) => {
                this.props.onCenterChange({ lat: 20.91507, lng: 105.74766 }, e);
                this.props.onSelectedDroneIdChange(1);
              }
            }
          />
          <label className="custom-control-label" for="customRadio1">Sự cố gãy đổ SC01</label>
        </div>
        <div className="custom-control custom-radio mt-2">
          <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"
            onChange={
              (e) => {
                this.props.onCenterChange({ lat: 20.91907, lng: 105.74766 }, e);
                this.props.onSelectedDroneIdChange(2);
              }
            }
          />
          <label className="custom-control-label" for="customRadio2">Sự cố gãy đổ SC02</label>
        </div>
        <div className="custom-control custom-radio mt-2">
          <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input"
            onChange={
              (e) => {
                this.props.onCenterChange({ lat: 20.91707, lng: 105.74966 }, e);
                this.props.onSelectedDroneIdChange(3);
              }
            }
          />
          <label className="custom-control-label" for="customRadio3">Sự cố gãy đổ SC03</label>
        </div>
        <div className="custom-control custom-radio mt-2">
          <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input"
            onChange={
              (e) => {
                this.props.onCenterChange({ lat: 20.91507, lng: 105.74766 }, e);
                this.props.onSelectedDroneIdChange(1);
              }
            } />
          <label className="custom-control-label" for="customRadio4">Sự cố gãy đổ SC04</label>
        </div>
        <div className="custom-control custom-radio mt-2">
          <input type="radio" id="customRadio5" name="customRadio" className="custom-control-input" />
          <label className="custom-control-label" for="customRadio5">Sự cố gãy đổ SC05</label>
        </div>
        <div className="custom-control custom-radio mt-2">
          <input type="radio" id="customRadio6" name="customRadio" className="custom-control-input" />
          <label className="custom-control-label" for="customRadio6">Sự cố gãy đổ SC06</label>
        </div>
        <div className="custom-control custom-radio mt-2">
          <input type="radio" id="customRadio7" name="customRadio" className="custom-control-input" />
          <label className="custom-control-label" for="customRadio7">Sự cố gãy đổ SC07</label>
        </div>
        <div className="custom-control custom-radio mt-2">
          <input type="radio" id="customRadio8" name="customRadio" className="custom-control-input" />
          <label className="custom-control-label" for="customRadio8">Sự cố gãy đổ SC08</label>
        </div>
        <div className="custom-control custom-radio mt-2">
          <input type="radio" id="customRadio9" name="customRadio" className="custom-control-input" />
          <label className="custom-control-label" for="customRadio9">Sự cố gãy đổ SC09</label>
        </div>
        <div className="custom-control custom-radio mt-2">
          <input type="radio" id="customRadio10" name="customRadio" className="custom-control-input" />
          <label className="custom-control-label" for="customRadio10">Sự cố gãy đổ SC10</label>
        </div>
      </div>
    );
  }
}
class DroneIcon extends Component {
  render() {
    const droneStyleCss = this.props.checked ? droneHoverStyle : droneStyle;
    const content = (
      <div>
        <h6>Cây trồng bị gãy đổ</h6>       
        <p>Vị trí: 20.912, 105.23</p>
        <TreeDetail />
      </div>
    );
    return (
      <StyleVideoSurveillance>
        <div>
          <Popover content={content} title="Sự cố">
          <i className="fas fa-tree-alt drone-icon" style={{ ...droneStyleCss }}></i>
          </Popover>
        </div>
      </StyleVideoSurveillance>
    )
  }
}

class TreePopover extends React.Component {
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    const content = (
      <div>
        <h6>Cây trồng bị gãy đổ</h6>       
        <p>Vị trí: 20.912, 105.23</p>
        <TreeDetail />
        <a onClick={this.hide}>Close</a>
      </div>
    );
    return (
      <Popover
        content={content}
        title="Title"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary">Click me</Button>
      </Popover>
    );
  }
}

class Video extends Component {
  render() {
    const droneStyleCss = this.props.checked ? droneHoverStyle : droneStyle;
    return (
      <div class="embed-responsive embed-responsive-16by9">
        <iframe width="900" height="506" src="https://www.youtube.com/embed/J-4fvFERlnY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}

class TreeDetail extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Xem chi tiết
        </Button>
        <Modal
          title="Tình trạng cây trồng"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          style={{zIndex: "100 !important"}}
          width={1000}
        >
          <h6>Loại sự cố: cây trồng bị gãy đổ</h6>
          <p>Mức độ: nghiêm trọng</p>
          <p>Vị trí tọa độ: 41.40338, 2.17403</p>
          <p>Hình ảnh thu thập từ drone:</p>
          <Image
            width={700}
            src={IMAGES.fallTree}
          />
        </Modal>
      </>
    );
  }
}

export default VideoSurveillance;