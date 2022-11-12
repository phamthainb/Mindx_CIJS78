- Tạo ứng dụng react với link CDN
    - Link CDN: Link js -> import link cdn -> code js ở cdn sẽ đc chạy ở app của mk -> mk có dùng các hàm code sẵn của lib,..
    - Link docs: https://reactjs.org/docs/add-react-to-a-website.html
    - khác nhau giữa dùng react // code bth
    - code tối ưu hơn, nhanh hơn, tiện hơn
    -> ...

- Tạo ứng dụng react với tool: create-react-app
    - Chủ yếu 
    - dễ code
    - nhiều tool: 
        - JSX: html tiện hơn, linh hoạt hơn: code đc JS {}
        - nhiều lib hỗ trợ
    - Chia các phần code ra nhỏ hơn -> reuse đc tối ưu hơn

    - ENV
        - Node, npx
        - https://reactjs.org/docs/create-a-new-react-app.html
    - 

- JSX vs Html
- JSX: là code JS, file .JS
    - JSX: có cú pháp của HTML -> tạo ra các thẻ div, p, a,... -> nhanh hơn
    - <div><div>  ==> document.createElement('div')
    - {}: thao tác vs các biến JS
    - Dễ chi nhỏ hơn: dễ chia task cho nhiều người, teamwork

- Cấu trúc dir
    - public: nơi để lưu trữ các file font, css, image,...
    - src: sẽ viết code JSX: React
        - 