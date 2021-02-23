
/**
 * BAI 04: Tính tổng 2 ký số
 * 
 * khối 1: input
 * n, soHangDV, soHangChuc
 * 
 * khối 2: 
 * _b1: khai báo các biến input
 * _b2: gán giá trị cho biến
 * _b3: lấy số hàng chục
 *          soHangChuc = n / 10;
 * _b4: lấy số hàng đơn vị
 *          soHangDV = n % 10;
 * 
 * khối 3:
 * tong
 */

var n, soHangDV, soHangChuc, tong;

n = 45;

soHangChuc = Math.floor(n/10);
soHangDV = n % 10;

tong = soHangChuc + soHangDV;

console.log("n = " + n);
console.log("số hàng chục: " + soHangChuc);
console.log("số hàng đơn vị: " + soHangDV);
console.log("tổng 2 số: " + tong);