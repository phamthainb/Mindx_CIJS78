## Ôn tập

### Làm Todolist
- CRUD: thêm, đọc, sửa, xóa
- Sử dụng state

### Code
- UI -> done
- Logic:
    - state: todos -> lưu lại toàn bộ list item
    - CRUD:
        - Create: -> done
            + state: value của input -> done
            + click btn add -> get value của input -> set vào state todos
        - Get: render -> done
        - Update: sửa 1 cái todo item -> done
            + tìm cái muốn sửa -> input checkbox -> cần 1 cái state để lưu lại -> done
            + khi có item đã đc pick -> biết đc item nào cần update -> cho item đó lên trên ô input, để có thể edit lại nội dung -> 
            + cập nhật content của item todo -> set lại item.content
            + -> item todo updated -> set lại state todos -> render ra item vừa đc update 
        - Delete: giống Update


### Thư viện
- Nó là 1 tập hợp đoạn code có sẵn -> xử lý 1 task nào đó
- Links: https://www.npmjs.com/
- 


