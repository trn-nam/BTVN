let kiemtrasoNguyenAm = (value) => {
    return(value < 0 && value % 1 == 0)
}


console.log(kiemtrasoNguyenAm(6));
console.log(kiemtrasoNguyenAm(-5));