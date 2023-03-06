let weapon = {
  normal: [
    { key: "공격력", val: "+100", per: 5 / 90 },
    { key: "힘", val: "+100", per: 5 / 90 },
    { key: "민첩", val: "+100", per: 5 / 90 },
    { key: "지능", val: "+100", per: 5 / 90 },
    { key: "활력", val: "+100", per: 5 / 90 },
    { key: "최대마나", val: "+100", per: 5 / 90 },
    { key: "공격력", val: "+200", per: 8 / 90 },
    { key: "힘", val: "+200", per: 8 / 90 },
    { key: "민첩", val: "+200", per: 8 / 90 },
    { key: "지능", val: "+200", per: 8 / 90 },
    { key: "활력", val: "+200", per: 8 / 90 },
    { key: "화속강", val: "+3%", per: 4 / 90 },
    { key: "명속강", val: "+3%", per: 4 / 90 },
    { key: "암속강", val: "+3%", per: 4 / 90 },
    { key: "수속강", val: "+3%", per: 4 / 90 },
    { key: "무속강", val: "+3%", per: 4 / 90 },
  ],
  special: [
    { key: "★치피", val: "+20%", per: 0.1699248 },
    { key: "★우두피해", val: "+20%", per: 0.1699248 },
    { key: "★힘", val: "+10%", per: 0.1699248 },
    { key: "★민첩", val: "+10%", per: 0.1699248 },
    { key: "★지능", val: "+10%", per: 0.1699248 },
    { key: "★버프효과", val: "+25%", per: 0.1503759 },
  ],
}; // 무기 확률표

let watch = {
  normal: [
    { key: "공격력", val: "+100", per: 5 / 90 },
    { key: "힘", val: "+100", per: 5 / 90 },
    { key: "민첩", val: "+100", per: 5 / 90 },
    { key: "지능", val: "+100", per: 5 / 90 },
    { key: "활력", val: "+100", per: 5 / 90 },
    { key: "최대마나", val: "+200", per: 5 / 90 },
    { key: "공격력", val: "+200", per: 6 / 90 },
    { key: "힘", val: "+200", per: 6 / 90 },
    { key: "민첩", val: "+200", per: 6 / 90 },
    { key: "지능", val: "+200", per: 6 / 90 },
    { key: "활력", val: "+200", per: 6 / 90 },
    { key: "화 속성 강화", val: "+3%", per: 3 / 90 },
    { key: "명 속성 강화", val: "+3%", per: 3 / 90 },
    { key: "암 속성 강화", val: "+3%", per: 3 / 90 },
    { key: "수 속성 강화", val: "+3%", per: 3 / 90 },
    { key: "무 속성 강화", val: "+3%", per: 3 / 90 },
    { key: "화 속성 저항", val: "+3%", per: 3 / 90 },
    { key: "명 속성 저항", val: "+3%", per: 3 / 90 },
    { key: "암 속성 저항", val: "+3%", per: 3 / 90 },
    { key: "수 속성 저항", val: "+3%", per: 3 / 90 },
    { key: "무 속성 저항", val: "+3%", per: 3 / 90 },
  ],
  special: [
    { key: "★원거리 피해", val: "+8%", per: 0.0773067 },
    { key: "★근거리 피해", val: "+8%", per: 0.0773067 },
    { key: "★스킬 재사용 속도", val: "+5%", per: 0.0773067 },
    { key: "★힘", val: "+5%", per: 0.0773067 },
    { key: "★민첩", val: "+5%", per: 0.0773067 },
    { key: "★지능", val: "+5%", per: 0.0773067 },
    { key: "★체력", val: "+10%", per: 0.0773067 },
    { key: "★활력", val: "+6%", per: 0.0773067 }, ////////
    { key: "★버프 효과", val: "+10%", per: 0.0773067 },
    { key: "★치명타 피해", val: "+10%", per: 0.0773067 }, ////////
    { key: "★모든 속성 저항", val: "+10%", per: 0.0773067 },
    { key: "★우두머리 추가 피해", val: "+10%", per: 0.0498753 },
    { key: "★모든 속성 강화", val: "+10%", per: 0.0498753 }, ////////
    { key: "★피해 감소", val: "+6%", per: 0.0498753 }, ////////
  ],
};

// 확률 총합 계산
function check(box) {
  sum = 0;
  box.map((item, index) => {
    sum += item.per;
  });
  console.log(sum);
}
// 뽑기
function dice(box) {
  let ranNum = Math.random();
  let find = false;
  let i = 0;

  while (!find) {
    ranNum -= box[i].per;
    if (ranNum < 0) {
      find = true;
      return box[i];
    }
    i++;
  }
}

let aa = [["b", 10]];

let upgrade_per = 1 / 30; //한줄추가확률
let special_per = 0.15; //특수옵션확률

function run(item, weapon) {
  let ranNum = Math.random();
  if (ranNum < upgrade_per && item.length < 6) {
    item.push([]);
  }

  let newItem = item.map(() => {
    let ranNum = Math.random();
    if (ranNum < special_per) {
      return dice(weapon.special);
    } else {
      return dice(weapon.normal);
    }
  });

  return newItem;
}

const before = document.getElementById("before");
const after = document.getElementById("after");
const count_box = document.getElementById("count");
const log_button = document.getElementById("log_button");
const log_list = document.getElementById("log_list");
let count = 0;
let log = [];

const button = document.getElementById("button");
button.addEventListener("click", () => {
  aa = run(aa, watch);
  count++;
  count_box.textContent = "사용횟수 : " + count;

  log_data = "";
  aa.map((item, index) => {
    after.children[index].textContent = item.key + " " + item.val;
    if (item.key[0] === "★") {
      after.children[index].style.color = "#33FFFF";
    } else {
      after.children[index].style.color = "#7572cb";
    }
    log_data += item.key + " " + item.val + ",";
  });
  if (log.length >= 10) {
    log.shift();
  }
  log.push(log_data);
});

log_button.addEventListener("click", () => {
  log.map((item, index) => {
    log_list.children[index].textContent = item;
  });
});
