const COK = document.getElementById("cok")
const NUM = document.getElementById("num")
const PL = document.getElementById("pl")
const CPSD = document.getElementById("cp")

const SLAVEPRICE = document.getElementById("bsl")
const SUMMONERPRICE = document.getElementById("bsu")
const ROBOTPRICE = document.getElementById("bro")
const FACTORYPRICE = document.getElementById("bfa")
const VOLCANOPRICE = document.getElementById("bvo")

let copese;

function updateDisplay() {
    NUM.innerHTML = `Cookies: ${Math.round(cookies)}`
    CPSD.innerHTML = `CPS: ${copese}`
    PL.innerHTML = `<ul id="pl" class="pl my-2">
    <h2>Purchases</h2>
    <li>Cookie slaves: ${incomeSources.slaves}</li>
    <li>Cookie summoners: ${incomeSources.summoners}</li>
    <li>Cookie robots: ${incomeSources.robot}</li>
    <li>Cookie factories: ${incomeSources.factories}</li>
    <li>Cookie volcanoes: ${incomeSources.volcanoes}</li>
    </ul>`

    SLAVEPRICE.innerHTML = ` Buy cookie slave: ${Math.round(prices.slaves)}C`
    SUMMONERPRICE.innerHTML = ` Buy cookie summoner: ${Math.round(prices.summoners)}C`
    ROBOTPRICE.innerHTML = ` Buy cookie robot: ${Math.round(prices.robot)}C`
    FACTORYPRICE.innerHTML = ` Buy cookie factory: ${Math.round(prices.factories)}C`
    VOLCANOPRICE.innerHTML = ` Buy cookie volcano: ${Math.round(prices.volcanoes)}C`
}


let cookies = 0;

let incomeSources = {
    slaves: 0,
    summoners: 0,
    robot: 0,
    factories: 0,
    volcanoes: 0
};

let prices = {
    slaves: 50,
    summoners: 600,
    robot: 7500,
    factories: 85000,
    volcanoes: 1000000
}

let cps = {
    slaves: 1,
    summoners: 10,
    robot: 100,
    factories: 1000,
    volcanoes: 10000
};

setInterval(() =>{
    cookies += (incomeSources.slaves * cps.slaves)/100; 
    cookies += (incomeSources.summoners * cps.summoners)/100; 
    cookies += (incomeSources.robot * cps.robot)/100; 
    cookies += (incomeSources.factories * cps.factories)/100; 
    cookies += (incomeSources.volcanoes * cps.volcanoes)/100; 

    copese = (incomeSources.slaves * cps.slaves) +
        (incomeSources.summoners * cps.summoners) +
        (incomeSources.robot * cps.robot) + 
        (incomeSources.factories * cps.factories) +
        (incomeSources.volcanoes * cps.volcanoes); 
    updateDisplay();
},1000/100)

COK.addEventListener("click", (e) => {
    cookies++
    updateDisplay();
});

function buySlaves() {
    if (cookies >= prices.slaves ) {
        cookies -=prices.slaves
        prices.slaves *= 1.05
        incomeSources.slaves++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buySummoners() {
    if (cookies >= prices.summoners ) {
        cookies -=prices.summoners
        prices.summoners *= 1.05
        incomeSources.summoners++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buyRobots() {
    if (cookies >= prices.robot ) {
        cookies -=prices.robot
        prices.robot *= 1.05
        incomeSources.robot++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buyFactories() {
    if (cookies >= prices.factories ) {
        cookies -=prices.factories
        prices.factories *= 1.05
        incomeSources.factories++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buyVolcanoes() {
    if (cookies >= prices.volcanoes ) {
        cookies -=prices.volcanoes
        prices.volcanoes *= 1.05
        incomeSources.volcanoes++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}

function gC(x) {
    cookies +=  x;
    updateDisplay();
}