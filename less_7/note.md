- Chữa BTVN: Làm Modal React -> comfirm xóa task: code ở less_6
- useEffect

- BTVN: 
    - Todo list sửa dụng api: Fetch + useEffect
    - CRUD:
        - C -> POST: https://638b55067220b45d228d7abc.mockapi.io/task
            ```
            var raw = JSON.stringify({
            "name": "todo 1",
            "status": true
            });

            var requestOptions = {
            method: 'POST',
            body: raw,
            };

            fetch("https://638b55067220b45d228d7abc.mockapi.io/task", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            ```
        - R -> GET: https://638b55067220b45d228d7abc.mockapi.io/task -> get list
            ```
            var requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };

            fetch("https://638b55067220b45d228d7abc.mockapi.io/task", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            ```
        - U -> PUT: https://638b55067220b45d228d7abc.mockapi.io/task/:id
            ```

            var raw = JSON.stringify({
            "name": "female - update",
            "status": true
            });

            var requestOptions = {
            method: 'PUT',
            body: raw,
            redirect: 'follow'
            };

            fetch("https://638b55067220b45d228d7abc.mockapi.io/task/1", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            ```
        - D -> DELETE: https://638b55067220b45d228d7abc.mockapi.io/task/:id
            ```
            var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
            };

            fetch("https://638b55067220b45d228d7abc.mockapi.io/task/1", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            ```

    - Code exam Fetch GET: https://github.com/phamthainb/Mindx_CIJS78/blob/master/less_4_react/src/App.js
