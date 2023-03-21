import React, { useState } from "react";

const styleInput = {
  justifyContent: "space-between",
  marginBottom: "10px",
};

export default function Tugas3() {
  const [daftarBuah, setDaftarBuah] = useState([
    { nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    { nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
    { nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
    { nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
    { nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 },
  ]);

  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState(0);
  const [berat, setBerat] = useState(0);
  const [isEdit, setIsEdit] = useState(false)
  const [isCreate, setIsCreate] = useState(false)
  const [index,setIndex] = useState(-1)

  const handleDelete = (index) => {
    let newArr = [...daftarBuah];
    newArr.splice(index, 1);
    setDaftarBuah(newArr);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let arrTemp = [...daftarBuah];
    let tempObj = {
      nama,
      hargaTotal: harga,
      beratTotal: berat,
    };

    if(isEdit && index !== -1){
      arrTemp[index] = tempObj
      setIsEdit(false)
    } else {
      arrTemp.push(tempObj);
      setIsCreate(false)
    }
    setDaftarBuah(arrTemp);
    setBerat(0);
    setHarga(0);
    setNama("");
    
  };
  const setStoreIndex = (index) =>{
    setIndex(index)
  }
  const handleEdit = (index) => {
    let obj = daftarBuah[index];
    setBerat(obj.beratTotal);
    setHarga(obj.hargaTotal);
    setNama(obj.nama);
    setIsEdit(true)
    setIsCreate(false)
  }
  const handleCancel = () =>{
    setIsEdit(false)
    setIsCreate(false)
    setIndex(-1)
  }

  const handleCreate =() =>{
    setIsCreate(true)
    setIsEdit(false)
    setIndex(-1)
    setBerat(0);
    setHarga(0);
    setNama("");
  }
  return (
    <div>
      {(isCreate || isEdit) ? <div>
        <h2>Form {!isEdit ? "Daftar" : "Ubah"} Harga Buah</h2>
        <form onSubmit={onSubmit} style={{ padding: "20px", width: '30rem' }}>
          <div className="d-flex" style={styleInput}>
            <label>Nama </label>
            <input
              type={"text"}
              value={nama}
              placeholder="Isi Nama Buah"
              onChange={(e) => setNama(e.target.value)}
            ></input>
          </div>
          <div className="d-flex" style={styleInput}>
            <label>Harga Total </label>
            <input
              type={"number"}
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
            ></input>
          </div>
          <div className="d-flex" style={styleInput}>
            <label>Berat Total (dalam gram) </label>
            <input
              type={"number"}
              value={berat}
              onChange={(e) => setBerat(e.target.value)}
            ></input>
          </div>
          <div
            className="d-flex"
            style={{ justifyContent: "end", marginTop: "20px" }}
          >
            <button type="button" onClick={handleCancel}>batal</button>
            <button type="submit">submit</button>
          </div>
        </form>
      </div> : <div>
        <h2>Daftar Buah</h2>
        <div className="d-flex" style={styleInput}>
        <button type="button" onClick={handleCreate}>Tambah</button>
        </div>
        
        <table>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga Total</th>
            <th>Berat Total</th>
            <th>Harga Per Kg</th>
            <th>Aksi</th>
          </tr>
          {daftarBuah.map((item, index) => (
            <RenderList index={index} item={item} key={index} />
          ))}
        </table>
      </div>}
      
      
    </div>
  );
  function RenderList({ item, index }) {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.nama}</td>
        <td>{item.hargaTotal}</td>
        <td>{item.beratTotal / 1000} Kg</td>
        <td>{item.hargaTotal / (item.beratTotal / 1000)}</td>
        <td>
          <button type="button" onClick={()=> {handleEdit(index); setStoreIndex(index);}}>Edit</button>
          <button type="button" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
