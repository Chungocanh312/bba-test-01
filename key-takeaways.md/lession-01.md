### Getting started:
### GIT
Mỗi project sẽ dùng 1 tài khoản riêng

1. #### Set global cho tài khoản cá nhân (mặc định cho tất cả các project có trên máy cá nhân)
```typescript
git config --global user.name "<global name>"
git config --global user.email "<global email>"
// Cái này dùng cho:
// - Project cá nhân
// - Open source
// - Repo ngoài công ty
```
2. #### Set tài khoản cho từng project riêng :
```typescript
git config user.name "<project userName>"
git config user.email "<project userEmail>"
// Cái này dùng cho:
// - Chỉ áp dụng cho 1 project hiện tại đang làm việc
// - Không áp dụng cho các project khác có trên máy local
// - Không cần set lại lần sau
```
3. #### Kiểm tra từng project đang dùng account nào
```typescript
git config --local user.name
git config --local user.email
// Hoặc:
git config --list --show-origin | grep user
```

4. #### Set global default branch
Ta sẽ set default branch là main (Để mỗi khi git init (tạo repo git cho 1 dự án mới) thì nhánh main sẽ luôn là nhánh chính và là nhánh default của dự án đó)
```typescript
git config --global init.defaultBranch main
// Cách kiểm tra toàn bộ git global config hiện tại:
git config --global --list
```
5. #### Cách kết nối giữa local và git
SSH key là gì?
Nó bao gồm 2 cặp khóa:
- id_rsa: cần giữ bí mật
- id_rsa.pub: có thể publish/ gửi cho người khác
=> giúp cho việc xác thực đăng nhập trên Git đơn giản hơn
=> SSH key được lưu ở file ~/.ssh (~ ở đây đại diện cho thư mục home)

Lệnh tạo SSH key
```typescript
ssh-key-t rsa -b 4096 -C"<your email"
//VD:
ssh-key-t rsa -b 4096 -C"chungocanh312@gmail.com"
// Trong đó:
// t: là thuật toán
// rsa: tên thuật toán
// b: độ dài của khóa
// 4096: giá trị của độ dài khóa
// C: địa chỉ email của git
```
Lưu ý: nếu máy đã từng generate ssh key trước đó rồi. Khi dùng lệnh thì terminal sẽ báo là đã tồn tại và có muốn overwrite lại không?
Thì khi đó hãy ctrl + C để hủy lệnh tạo ssh key đi
=> sau đó gõ `open ~/.ssh/`

=> sẽ mở thư mục .ssh => Trong đó sẽ chứa 2 file: id_rsa và id_rsa.pub đã tồn tại trước đó
=> nên copy 2 file này và lưu ra 1 thư mục khác. Phòng trường hợp sau này dùng lại

Lệnh xóa SSH key cũ và tạo 2 file mới:
1. #### Xóa 2 file ssh key cũ:
`rm ~/.ssh/id_rsa~/.ssh/id_rsa.pub`

kiểm tra lại: `ls ~/.ssh/`

=> nếu không thấy 2 file id_rsa và id_rsa.pub => đã xóa thành công

2. #### Tạo lại SSH key mới (không PASSPHASE):
Chaỵ lại lệnh:

`ssh-keygen -t rsa -b 4096 -C "chungocanh312@gmail.com"`

Khi hiện:
`Enter file in which to save the key (/Users/chungocanh/.ssh/id_rsa): `
 => Bấm enter

Khi hiện:
`Enter passphrase:` => bấm enter

Khi hiện: `Enter same passphrase again:` => bấm enter tiếp

=> như vậy SSH key mới đã được tạo mà không có passphase

Kết nối SSH key tới gitHub:
Gõ lệnh để hiển thị nội dung key public:

`cat ~/.ssh/id_rsa.pub`

Trong đó:

cat dùng để mở file

~/.ssh/id_rsa.pub là đường dẫn đến file cần mở

Copy key rồi vào github:

click vào avatar tài khoản git > setting > SSH và GPG keys > new SSH key >
    - Điền title
2. Giữ nguyên key type: Authentication
3. Copy key vào key

3. ### Khởi tạo 1 dự án playwright
Tạo 1 thu mục mà bạn muốn chứa project
Với máy mác, click chuột phải vào tên file vừa tạo ở phần path > chọn open in terminal
Gõ lệnh:

`npm init playwright@latest`

Sau đó cứ enter hết (Bao gồm sẽ chọn typescript là ngôn ngữ chính)

Giới thiệu các file cơ bản trong 1 project playwright: 
1. playwright.config.tsĐây là file config (cấu hình) để chúng ta set up:- Các file test của chúng ta sẽ nằm ở đâu- Các file test sẽ chạy trên bao nhiêu loại trình duyệt (Browser)- Các hành động cần thiết khi chạy test …
2. package.json - Chứa các thông tin cơ bản của dự án- Chưa tên và version của các thư viện mà chúng ta sẽ dùng
3. package-lock.json
4. .gitignore
5. node_modules : Chứa các thư viện mà chúng ta sẽ sử dụng trong suốt quá trình implement/ chạy code
6. test: chứa toàn bộ các file test của chúng ta
7. tests-example

Tạo repo trên git / kết nối SSH và đẩy code từ local lên repo của git
Vào git / chọn create new repository

Điền 2 thông tin cơ bản:
- Repository name
- Chọn Public

Sau đó ta liên kết project vs git bằng các lệnh sau:
Mở terminal project trong VS code: 
`git init`

`git remote add origin <>` (Trong <> sẽ chứa đường link git repo. Ở đây ta đang dùng SSH nên sẽ dùng link SSH) 
VD: git remote add origin git@github.com:Chungocanh312/playwright-typeScript.git 
`git add . `

`git commit -m”init project”`

`git push origin main`