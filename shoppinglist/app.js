const addItemBtn = document.getElementById('add-item-btn');
    const itemInput = document.getElementById('item-input');
    const itemList = document.getElementById('item-list');
    const filterInput = document.getElementById('filter-input');

    const items = [];

    addItemBtn.addEventListener('click', function() {
        const itemName = itemInput.value.trim(); 
        if (itemName !== "") {
            const newItem = {
                name: itemName,
                purchased: false
            };

            items.push(newItem);

            const li = document.createElement('li');
            li.textContent = itemName;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';

            deleteBtn.addEventListener('click', function() {
                itemList.removeChild(li);
                const itemIndex = items.findIndex(item => item.name === newItem.name);
                if (itemIndex > -1) {
                    items.splice(itemIndex, 1);
                }
            });

            li.appendChild(deleteBtn);
            itemList.appendChild(li);

            itemInput.value = "";
        } else {
            alert("Please enter an item name.");
        }
    });
    filterInput.addEventListener('input', function() {
        const filterText = filterInput.value.toLowerCase();
        const listItems = itemList.getElementsByTagName('li');

        Array.from(listItems).forEach(function(item) {
            const itemName = item.firstChild.textContent.toLowerCase();
            if (itemName.includes(filterText)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });