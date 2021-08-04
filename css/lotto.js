function nextDrawDate (date) {
    let checkDate;
    
    if(date == null || undefined) {
      checkDate = new Date();
    }
    else {
      checkDate = new Date(date);
    }

    let wednesday = new Date();
    wednesday.setDate(wednesday.getDate() + (3 + 7 - wednesday.getDay()) % 7);

    let saturday = new Date();
    saturday.setDate(saturday.getDate() + (6 + 7 - saturday.getDay()) % 7);

    if (checkDate > wednesday){
        console.log("Next Draw Wednesday :",wednesday);
    }
    else{
        console.log("Next Draw Saturday :", saturday);
    }
}
nextDrawDate();