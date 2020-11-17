import React from "react";
import { IMAGES } from '../../../../constants';

export default function MonitorPage() {

    return (
        <Monitor></Monitor>
    );
};
class Monitor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultUrl: IMAGES.areaMonitor,
        };
        this.onResultUrlChange = this.onResultUrlChange.bind(this);

    }

    onResultUrlChange(resultUrl) {
        this.setState({ resultUrl: resultUrl });
    }

    render() {
        return (
            <div className="h-100 bg-white">
                <div className="row">
                    <div className="col col-md-3">
                        <h5 className="m-1">Giám sát tình trạng cây trồng</h5>
                        <form>
                            <div className="form-row">
                                <div className="form-group col px-1 mt-2">
                                    <label>
                                        Chọn chế độ giám sát
                                    </label>
                                    <select class="custom-select">
                                        <option selected>Chọn chế độ giám sát</option>
                                        <option value="1">Giám sát chặt phá</option>
                                        <option value="2">Giám sát gãy đổ</option>
                                        <option value="3">Giám sát sâu bệnh</option>
                                        <option value="3">Giám sát ngập úng</option>
                                        <option value="3">Giám sát héo úa</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row px-1">
                                <label for="inputName">
                                    Chọn thời điểm giám sát
                                </label>
                                <input type="date" className="form-control" id="inputName" />
                            </div>

                            <button type="button" className="btn btn-primary mt-4" onClick={(e) => this.onResultUrlChange(IMAGES.resultMonitor, e)}>Giám sát cây trồng</button>
                            <div className="form-row px-1 mt-3">
                                <label for="inputName" className="col-12">
                                    Chú thích:
                                </label>
                                <div className="row w-100 mt-1">
                                    <div className="col-3">
                                        <div style={{ width: "20px", height: "20px", backgroundColor: "#FF0000" }}></div>
                                    </div>
                                    <div className="col-9">
                                        <span>Rất xấu</span>
                                    </div>
                                </div>
                                <div className="row w-100 mt-1">
                                    <div className="col-3">
                                        <div style={{ width: "20px", height: "20px", backgroundColor: "#FF5D00" }}></div>
                                    </div>
                                    <div className="col-9">
                                        <span>Xấu</span>
                                    </div>
                                </div>
                                <div className="row w-100 mt-1">
                                    <div className="col-3">
                                        <div style={{ width: "20px", height: "20px", backgroundColor: "#FFFC00" }}></div>
                                    </div>
                                    <div className="col-9">
                                        <span>Trung bình</span>
                                    </div>
                                </div>
                                <div className="row w-100 mt-1">
                                    <div className="col-3">
                                        <div style={{ width: "20px", height: "20px", backgroundColor: "#A7FF00" }}></div>
                                    </div>
                                    <div className="col-9">
                                        <span>Tốt</span>
                                    </div>
                                </div>
                                <div className="row w-100 mt-1">
                                    <div className="col-3">
                                        <div style={{ width: "20px", height: "20px", backgroundColor: "#0CCF00" }}></div>
                                    </div>
                                    <div className="col-9">
                                        <span>Rất tốt</span>
                                    </div>
                                </div>

                            </div>

                        </form>

                    </div>
                    <div className="col col-md-9">
                        <div>
                            <img className="w-100" src={this.state.resultUrl}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}
