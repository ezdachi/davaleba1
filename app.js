const fs = require('fs');      // იმისთვის რომ ვიმუშაო ფაილურ სისტემასთან

const jsonData = fs.readFileSync('exercises.json');  // აქ უკვე ფაილის შინაარსი იკითხება და ვინახავთ ახალ ცვლადში jsonDataში.
// fs.readFileSync კითხულობს ფაილის შინაარს  
const data = JSON.parse(jsonData); // JSON მონაცემები გარდაიქმნება ჯავასკრიპტის ობიექტად და აისახება
// მონაცემთა ცვლადში და საშუალება გვაქ ვიმუშაოთ ამ მონაცემებზე როგორც ჯავასკრიპტის ობიექტი
const allDataInfo = data.map (person =>[
    {
        first_name : person.first_name,
        last_name : person.last_name,
        email : person.email,
        // mobile : person.mobile,
    }
]);

// const allDataInfo = data.map(item => `${item.first_name},  ${item.last_name}, ${item.email}`);// ვიყენებთ map რომელიც წაიკითხავს მასივის თითოეულ
//მონაცემს  და ფუნქციით  ვამუშავებთ თითოეულ ელემენტს  , შემდეგ ვაერთიდანებთ

console.log(allDataInfo);


const dataToString = JSON.stringify(allDataInfo);
fs.writeFile('data.txt' , dataToString , (err)=>{
    if(err){
        console.log('error');
    }else {
        console.log();
    }
});

