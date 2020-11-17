import React from "react";
import { IMAGES } from '../../../constants';

export default function ProblemReport() {
    return (
        <div className="px-5">
            <h4>Báo cáo tiến độ xử lý sự cố</h4>
            <div className="row mt-3">
                <div className="col col-md-3 py-1">
                    <p><span className="font-weight-bold">Tên sự cố:</span> sự cố cây trồng 102</p>
                    <p><span className="font-weight-bold">Mã sự cố:</span> SC012</p>
                    <p><span className="font-weight-bold">Loại sự cố:</span> Sâu bệnh</p>
                    <p><span className="font-weight-bold">Thời gian xử lý:</span> 12/02/2020-14/02/2020</p>
                    <p><span className="font-weight-bold">Mức độ hoàn thành:</span> 70%</p>
                    <p><span className="font-weight-bold">Mô tả chi tiết:</span> Cây trồng tại nơi xảy ra sự cố bị sâu bệnh tàn phá nghiêm trọng. Qua quá trình xử lý, phần khu vực này đã được phun thuốc trừ sâu. Quan sát kết quả ghi nhận tại ngày 14/2 đã xử lý được sâu hại.</p>
                </div>
                <div className="col col-md-9 py-1">
                    <h6>Hình ảnh trước khi xử lý:</h6>
                    <img className="w-75" src={IMAGES.weakTree}></img>
                    <h6 className="mt-3">Hình ảnh sau khi xử lý:</h6>
                    <img className="w-75" src={IMAGES.goodTree}></img>
                </div>
                <div></div>
            </div>
        </div>
    );
}