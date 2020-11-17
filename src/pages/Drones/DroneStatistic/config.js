export const columns = [
    {
        title: 'Mã drone',
        dataIndex: 'key',
    },
    {
        title: 'Tên',
        dataIndex: 'name',
    },
    {
        title: 'Hình ảnh',
        dataIndex: 'image',
    },
    {
        title: 'Sự cố đã phát hiện',
        dataIndex: 'problemDetected',
    },
    {
        title: 'Sự cố đang xử lý',
        dataIndex: 'problemHandling',
    },
    {
        title: 'Sự cố đã xử lý',
        dataIndex: 'problemHanded',
    },
    {
        title: 'Phần trăm pin',
        dataIndex: 'power',
    },
    {
        title: 'Vị trí',
        dataIndex: 'position',
    },
    {
        title: 'Hoạt động',
        dataIndex: 'active',
    },
];

export const data = [
    {
        key: '1',
        name: 'DJI Mavic 2 Pro',
        image: "https://fado.vn/blog/wp-content/uploads/2019/08/Drone-mua-o-dau-bao-nhieu-tien.jpg",
        position: "Cột 4 - Hàng 5",
        power: 32,
        address: 'New York No. 1 Lake Park',
        active: true,
        problemDetected: 5,
        problemHandling: 5,
        problemHanded: 0
    },
    {
        key: '2',
        name: 'DJI Inspire 2',
        image: "https://fado.vn/blog/wp-content/uploads/2019/08/flycam-nao-tot-nhat-hien-nay.jpg",
        position: "",
        power: 0,
        address: 'London No. 1 Lake Park',
        active: false,
        problemDetected: 7,
        problemHandling: 5,
        problemHanded: 2
    },
    {
        key: '3',
        name: 'Autel Robotics EVO',
        image: "https://fado.vn/blog/wp-content/uploads/2019/08/flycam-co-dat-tien-khong.jpg",
        position: "Cột 7 - Hàng 10",
        power: 69,
        address: 'Sidney No. 1 Lake Park',
        active: true,
        problemDetected: 3,
        problemHandling: 2,
        problemHanded: 1
    },
    {
        key: '4',
        name: 'DJI Mavic 2 Zoom',
        image: "https://fado.vn/blog/wp-content/uploads/2019/08/Drone-mua-o-dau-uy-tin.jpg",
        position: "Cột 9 - Hàng 8",
        power: 55,
        address: 'London No. 2 Lake Park',
        active: true,
        problemDetected: 6,
        problemHandling: 4,
        problemHanded: 2
    },
    {
        key: '5',
        name: 'Parrot Anafi',
        image: "https://fado.vn/blog/wp-content/uploads/2019/08/drone-co-gia-bao-nhieu.jpg",
        position: "",
        power: 99,
        address: 'London No. 2 Lake Park',
        active: false,
        problemDetected: 6,
        problemHandling: 2,
        problemHanded: 4
    },
    {
        key: '6',
        name: 'DJI Mavic Air',
        image: "https://fado.vn/blog/wp-content/uploads/2019/08/mua-flycam-o-dau-cho-tot.jpg",
        position: "",
        power: 100,
        address: 'London No. 2 Lake Park',
        active: false,
        problemDetected: 8,
        problemHandling: 1,
        problemHanded: 7
    },
    {
        key: '7',
        name: 'DJI Spark',
        image: "https://fado.vn/blog/wp-content/uploads/2019/08/flycam-mua-tu-Amazon.jpg",
        position: "",
        power: 87,
        address: 'London No. 2 Lake Park',
        active: false,
        problemDetected: 3,
        problemHandling: 0,
        problemHanded: 3
    },
];