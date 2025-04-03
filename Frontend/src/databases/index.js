import TaiKhoan from "./table/TaiKhoan";
import TinTuc from "./table/TinTuc";
import DanhMuc from "./table/DanhMuc";
import SanPham from "./table/SanPham";
import GioHang from "./table/GioHang";
import HoaDon from "./table/HoaDon";

const Database = function() {
  const TABLE = {
    TaiKhoan,
    TinTuc,
    DanhMuc,
    SanPham,
    GioHang,
    HoaDon
  };

  let cursorTable = null;
  let pageSize = 10;
  let where = null;

  const order = {
    column: null,
    type: null
  };


  const getTable = (table_name) =>  TABLE[table_name || cursorTable] || null;

  this.table = (table_name) => {
    cursorTable = table_name;
    return this;
  };

  this.setWhere = (callback) => {
    where = callback;
    return this;
  };

  this.setPageSize = (size) => {
    pageSize = size;
    return this;
  };

  this.getAll = (table_name) => {
    let table = getTable(table_name) || [];
    if (typeof where == 'function') {
      table = table.filter(where);
      where = null;
    }

    if (order.column) {
      table.sort((a, b) => {
        const isDesc = order.type === "DESC" ? true : false;
        if (isDesc) {
          return b[order.column] - a[order.column];
        }
        return a[order.column]- b[order.column];
      });
      order.column = null;
      order.type = null;
    }
    return table;
  };

  this.getPage = (page, table_name) => {
    const table = this.getAll(table_name);
    const totalPage = Math.ceil(table.length / pageSize);;
    const currentPage = Math.min(totalPage, Math.max(page, 1));

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return {
      data: table.slice(startIndex, endIndex),
      currentPage,
      totalPage
    };
  };

  this.getById = (id, table_name) => {
    return getTable(table_name).find(o => o.id === id);
  };

  this.getByColumn = (column_name, value, table_name) => {
    return getTable(table_name).find(o => o[column_name] === value);
  };

  this.getNextId = (table_name) => {
    const table = getTable(table_name);
    let currentId = 0;
    table.forEach(o => {
      if (currentId < o.id) {
        currentId = o.id;
      }
    });
    return parseInt(currentId) + 1;
  }

  this.orderBy = (column, type) => {
    order.column = column;
    order.type = type.toUpperCase();
    return this;
  };

  this.has = ({column, value, id}, table_name) => {

    const get = this.getByColumn(column, value, table_name);
    if (get) {
      return id ? get.id != id : true;
    }

    return false;
  };

  this.insert = (data, table_name) => {
    if (typeof data != 'object') {
      return false;
    }

    if (!data?.id) {
      data.id = this.getNextId(table_name);
    }

    const table = getTable(table_name);

    if(!table) {
      return false;
    }


    table.push({ ...data });

    localStorage.setItem(
      table_name || cursorTable,
      JSON.stringify(getTable(table_name))
    );
    return true;
  };

  this.clear = (table_name) => {

    const table = getTable(table_name);

    if (!table) {
      return false;
    }

    table.length = 0;

    localStorage.setItem(
      table_name || cursorTable,
      JSON.stringify(getTable(table_name))
    );
  };

  this.delete = (id, table_name) => {
    const get = this.getById(id, table_name);
    if (!get) {
      return false;
    }

    TABLE[table_name || cursorTable] = getTable(table_name).filter(
      (o) => o.id !== id
    );

    localStorage.setItem(
      table_name || cursorTable,
      JSON.stringify(getTable(table_name))
    );
    return true;
  }

  this.update = (data, table_name) => {
    if (!data.id) {
      return false;
    }

    const get = this.getById(data.id, table_name);
    if (!get) {
      return false;
    }

    Object.keys(get).forEach(key => {
      get[key] = data[key] || get[key];
    });

    localStorage.setItem(
      table_name || cursorTable,
      JSON.stringify(getTable(table_name))
    );

    return true;
  };

};

export default Database;
