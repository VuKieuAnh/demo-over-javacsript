//hiển thị thông báo
// alert("Xin chào C0920G1");

//Ghi lên trang web
// document.write("C0920G1 đi CodeGym Day 2020 <br>");
// document.write("C0920G1 đi CodeGym Day 2020");

//
// console.log("C0920G1 có 5 bạn");


// document.write("C0920G1 đi CodeGym Day 2020");


// document.getElementById("C09").innerText = "Thương";
// document.getElementById("address").value = "Lâm";

// document.getElementById("name").innerHTML = "<h1>Tuyết, Uyên, Thương, Đức, Lâm</h1>";


function getName(){
    let name = document.getElementById("name").value;
    let age = prompt(name + " bao nhiêu tuổi?");
    // console.log("tên là: "+name);
    let monthOfBirth = document.getElementById("monthOfBirth").value;
    let gioitinh = confirm("Bạn có phải giới tính nam không?");
    document.getElementById("result").innerText = "Nam "+gioitinh;
}
