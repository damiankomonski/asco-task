(function(){
    const items = [
        { name: 'item 9' },
        { name: 'item 20' },
        { name: 'item 11' },
        { name: 'item 30000' },
        { name: 'item 19' }
    ];

    function getItemsMaxNumber(items){
        let numbers = [];
        let maxNumber = 0;

        for(let i = 0; i < items.length; i++){
            let number = items[i].name.match(/\s[0-9]+/);

            if(number){
                number = Number(number[0]);
                numbers.push(number);

                if(number > maxNumber){
                    maxNumber = number;
                }
            }
        }

        if(numbers.length === 0){
            return 0;
        } else{
            return maxNumber;
        }
    }

    console.log(getItemsMaxNumber(items));
})();