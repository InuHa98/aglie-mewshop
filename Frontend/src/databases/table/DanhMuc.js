const table = "DanhMuc";

const get = localStorage.getItem(table);

let DanhMuc = [];
if (get) {
  DanhMuc = JSON.parse(get);
} else {
  DanhMuc = [
    {
      id: 1,
      name: "CAT ACCESSORIES",
    },
    {
      id: 2,
      name: "CAT FOOD",
    },
    {
      id: 3,
      name: "CAT FURNITURE",
    },
    {
      id: 4,
      name: "CAT PROOF HOME",
    },
    {
      id: 5,
      name: "CAT FEEDERS",
    },
    {
      id: 6,
      name: "CAT LITTLE BOXES",
    },
  ];
  localStorage.setItem(table, JSON.stringify(DanhMuc));
}

export default DanhMuc;
