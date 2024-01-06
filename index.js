

document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault(); // prevent form submission

    // get input values
    let totalLootValue = document.getElementById('totalLootValue').value;
    let costOfRepire = document.getElementById('costOfRepire').value;
    let groupSize = document.getElementById('groupSize').value;

    // perform calculations
   
    let returnForRepair =costOfRepire *0.065
    console.log(returnForRepair)
    let lootValueBeforFee = totalLootValue - costOfRepire - returnForRepair;
    console.log(lootValueBeforFee)
    let settlementFee = lootValueBeforFee * 0.035;
    console.log(settlementFee)
    let allCost = returnForRepair + settlementFee;
    console.log(allCost)
    let lootValue = totalLootValue - allCost;
    console.log(lootValue)
    let other = lootValue /groupSize;
    console.log(other)
     let lootForDivisive = other +allCost;
    console.log(lootForDivisive)
    
    //rounding

    totalLootValue = Number(totalLootValue).toFixed(0);
    allCost = Number(allCost).toFixed(0);
    lootForDivisive = Number(lootForDivisive).toFixed(0);
    other = Number(other).toFixed(0);
 

    // update table
    let table = document.querySelector('.data');
    table.rows[1].cells[0].innerText = totalLootValue;
    table.rows[1].cells[1].innerText = allCost;
    table.rows[1].cells[2].innerText = lootForDivisive;
    table.rows[1].cells[3].innerText = other;
});

function toggleList() {
    var list = document.querySelector('.unfold-div .list');
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  }