import React from "react";

export default function ResultTracking() {
    return <TrackResult></TrackResult>
}

function TrackResult() {
    return (
        <div className="bg-white h-100">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên sự cố</th>
                        <th scope="col">mã sự cố</th>
                        <th scope="col">Loại sự cố</th>
                        <th scope="col">Tiến độ</th>
                        <th scope="col">Báo cáo</th>
                        <th scope="col">Người xử lý</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Sự cố sâu bệnh 1</td>
                        <td>SC012</td>
                        <td>Sâu bệnh</td>
                        <td>50%</td>
                        <td>
                            <a className="text-primary">Link báo cáo</a>
                        </td>
                        <td>
                            Nguyễn Văn Nam
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Sự cố sâu bệnh 2</td>
                        <td>SC013</td>
                        <td>Sâu bệnh</td>
                        <td>50%</td>
                        <td>
                            <a className="text-primary">Link báo cáo</a>
                        </td>
                        <td>
                            Nguyễn Văn Ba
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Sự cố ngập úng 1</td>
                        <td>SC014</td>
                        <td>Ngập úng</td>
                        <td>0%</td>
                        <td>
                            <a className="text-primary">Link báo cáo</a>
                        </td>
                        <td>
                            Trần Văn Đức
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Sự cố ngập úng 2</td>
                        <td>SC015</td>
                        <td>Ngập úng</td>
                        <td>100%</td>
                        <td>
                            <a className="text-primary">Link báo cáo</a>
                        </td>
                        <td>
                            Nguyễn Văn Nam
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>sự cố héo úa</td>
                        <td>SC016</td>
                        <td>Héo úa</td>
                        <td>100%</td>
                        <td>
                            <a className="text-primary">Link báo cáo</a>
                        </td>
                        <td>
                            Hoàng Văn Hoàng
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function SelectPerson() {
    return (
        <select class="custom-select">
            <option selected>Chọn người xử lý</option>
            <option value="1">NXLSC001</option>
            <option value="2">NXLSC002</option>
            <option value="3">NXLSC003</option>
            <option value="4">NXLSC004</option>
            <option value="5">NXLSC005</option>
        </select>
    )
}