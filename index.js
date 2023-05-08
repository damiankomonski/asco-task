(function(){
    const items = [
        { name: 'item 1' },
        { name: 'item 2' },
        { name: 'item 11' },
        { name: 'item 3' },
        { name: 'item 10' }
    ];

    function getItemsMaxNumber(items){
        let numbers = [];

        numbers = items.map((element) => {
            return Number(element.name.match(/[0-9]+/)[0]);
        });

        if(numbers.length === 0){
            return 0;
        }

        numbers.sort((a, b) => {return a - b});
        return numbers[numbers.length - 1];
    }

    console.log(getItemsMaxNumber(items));
})();