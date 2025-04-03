const table = "HoaDon";

const get = localStorage.getItem(table);

let HoaDon = [];
if (get) {
  HoaDon = JSON.parse(get);
} else {
  HoaDon = [];
  localStorage.setItem(table, JSON.stringify(HoaDon));
}

export default HoaDon;
