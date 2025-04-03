const table = "TaiKhoan";

const get = localStorage.getItem(table);

let TaiKhoan = [];
if (get) {
  TaiKhoan = JSON.parse(get);
} else {
  TaiKhoan = [
    {
      id: 1,
      username: "admin",
      password: "123",
      fullname: "Nguyên tùng lâm",
      phone: "0898284022",
      adm: true,
    },
    {
      id: 2,
      username: "user",
      password: "123",
      fullname: "Nguyên hùng trang",
      phone: "0898284022",
      adm: false,
    },
  ];
  localStorage.setItem(table, JSON.stringify(TaiKhoan));
}

export default TaiKhoan;
