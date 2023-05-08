(function(){
    const items = [
        { name: 'item 1' },
        { name: 'item 2' },
        { name: 'item 11' },
        { name: 'item 3' },
        { name: 'item 1009' }
    ];

    function getItemsMaxNumber(items){
        let numbers = [];

        for(let i = 0; i < items.length; i++){
            let number = items[i].name.match(/\s[0-9]+/);

            if(number){
                numbers.push(number[0]);
            }
        }

        if(numbers.length === 0){
            return 0;
        }

        numbers.sort((a, b) => {return a - b});
        return numbers[numbers.length - 1];
    }

    console.log(getItemsMaxNumber(items));
})();