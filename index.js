document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault(); // prevent form submission

    // get input values
    let totalLootValue = document.getElementById('totalLootValue').value;
    let costOfRepire = document.getElementById('costOfRepire').value;
    let groupSize = document.getElementById('groupSize').value;
    let takePart = document.getElementById('takePart')
  
    let returnForRepair 
    let lootValueBeforFee 
    let settlementFee 
    let allCost 
    let lootValue 
    let other  
    let lootForDivisive 


    // perform calculations
    if(takePart.checked){
        returnForRepair =costOfRepire / 0.935;
        lootValueBeforFee = totalLootValue- returnForRepair;
        settlementFee = lootValueBeforFee * 0.05;
        allCost = returnForRepair + settlementFee;
        lootValue = totalLootValue - allCost;
        other = lootValue /groupSize;
        lootForDivisive = other +allCost;
       
      }
      else{
         returnForRepair =costOfRepire / 0.935;
         lootValueBeforFee = totalLootValue- returnForRepair;
         settlementFee = lootValueBeforFee * 0.05;
         allCost = returnForRepair + settlementFee;
         lootValue = totalLootValue - allCost;
         other = lootValue /groupSize;
         lootForDivisive = allCost;
        }
        console.log(returnForRepair);
        console.log(lootValueBeforFee);
        console.log(settlementFee);
        console.log(allCost);
        console.log(lootValue);
        console.log(other);
        console.log(lootForDivisive);
        
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
    let list = document.querySelector('.unfold-div .list');
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  }

