let weapon = [
    {key:'att',val:'low',per:5/90},
    {key:'str',val:'low',per:5/90},
    {key:'dex',val:'low',per:5/90},
    {key:'int',val:'low',per:5/90},
    {key:'hp',val:'low',per:5/90},
    {key:'maxMp',val:'',per:5/90},
    {key:'att',val:'high',per:8/90},
    {key:'str',val:'high',per:8/90},
    {key:'dex',val:'high',per:8/90},
    {key:'int',val:'high',per:8/90},
    {key:'hp',val:'high',per:8/90},
    {key:'화속강',val:'3%',per:4/90},
    {key:'명속강',val:'3%',per:4/90},
    {key:'암속강',val:'3%',per:4/90},
    {key:'수속강',val:'3%',per:4/90},
    {key:'무속강',val:'3%',per:4/90},
] // 무기 일반옵션 확률표
let weapon_special = [
    {key:'☆치피',val:'20%',per:0.1699248},
    {key:'☆우두피해',val:'20%',per:0.1699248},
    {key:'☆힘',val:'10%',per:0.1699248},
    {key:'☆민첩',val:'10%',per:0.1699248},
    {key:'☆지능',val:'10%',per:0.1699248},
    {key:'☆버프효과',val:'25%',per:0.1503759},
] // 무기 특수옵션 확률표

// 확률 총합 계산
function check(box){
    sum = 0
    box.map((item,index)=>{
        sum += item.per
    })
    console.log(sum)
}
// 뽑기
function dice(box){
    let ranNum = Math.random()
    let find = false
    let i = 0

    while(!find){
        ranNum -= box[i].per
        if(ranNum<0){
            find = true
            return box[i]
        }
        i++
    }
}

// check(weapon_special)

let aa = [
    ['b',10]
]

let upgrade_per = 1/30 //한줄추가확률
let special_per = 0.15 //특수옵션확률

function run(item){
    let ranNum = Math.random()
    if(ranNum < upgrade_per && item.length < 6){
        item.push([])
    }

    let newItem = item.map(()=>{
        let ranNum = Math.random()
        if(ranNum<special_per){
            return dice(weapon_special)
        } else{
            return dice(weapon)
        }
    })

    return newItem
}

const button = document.getElementById('button')
button.addEventListener('click',()=>{
    aa = run(aa)
    aa.map((item)=>{
        console.log(item.key + ' ' + item.val)
    })
    console.log('-------------')
})