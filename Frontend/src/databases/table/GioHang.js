const table = "GioHang";

const get = localStorage.getItem(table);

let GioHang = [];
if (get) {
  GioHang = JSON.parse(get);
} else {
  GioHang = [];
  localStorage.setItem(table, JSON.stringify(GioHang));
}

export default GioHang;
