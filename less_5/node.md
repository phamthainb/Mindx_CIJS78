- Chữa bt

---

- Event: onClick, onBlur, onChange,... -> nhiều event khác

  - Sự kiện: user có tương tác với website: click, hover, typing,...
  - Link docs: https://reactjs.org/docs/handling-events.html
  - Link docs: https://developer.mozilla.org/en-US/docs/Web/Events#:~:text=%2C%20MessagePort.-,Event%20listing,-This%20section%20lists
  - type React.MouseEventHandler<T = Element> = (event: MouseEvent<T, globalThis.MouseEvent>) => void
  - event: MouseEvent<T, globalThis.MouseEvent>: cung cấp các thông tin sự kiện của user: vị trí, mouse -> laptop, touch: smart phone, ipad,.. => dựa vào các sự kiện để xử lý
  - Arrow function vs function

- State nâng cao:
  - List movies -> phân trang: 1,2,3,...n
  - fetch: params

---

- BTVN 1: Color box: click -> random đổi màu box
- BTVN 2: Search movie: onChange input
  - api: https://api.themoviedb.org/3/search/movie?api_key=85ac6156be17ea981b54c406910fdc7a&page=1&query=tên_phim_ở_đây
