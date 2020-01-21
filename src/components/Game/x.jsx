const bonusClickPackage = (id) => {
    console.log("Bonus Package :",tabInterval)
    if(payment(id)){
        levelup(id)
        if (action[id].lvl === 0){
            let idInterval = setInterval(() => {
                setClickCounter( clickCounter => clickCounter + action[id].increase)
            },action[id].time)
            dispatchInterval({type:"time", idInterval: idInterval ,idAction: id})
    
        }
        if(action[id].lvl === 1){
            tabInterval.forEach((element) => {
                console.log(element)
                console.log(element.actionId === id)
                if(element.idAction === id)
                {
                    console.log("This interval is erase :  ",element.idInterval)
                    clearInterval(element.idInterval)
                }
            })
            let idInterval = setInterval(() => {
                setClickCounter( clickCounter => clickCounter + action[id].increase)
            },action[id].time)
            setTimeout(()=> {
                dispatchInterval({type:"time", idInterval :idInterval ,idAction: id})
                dispatch({type:"disabled", index:id})
            },0)
        }
        if(action[id].lvl === 2){
            tabInterval.forEach((element) => {
                if(element.actionId === id)
                {
                    console.log("erase")
                    element.actionId.clearInterval()
                }
            })
            setInterval(() => {
                setClickCounter( clickCounter => clickCounter + action[id].increase)
            },action[id].time)
            setTimeout(() => {
                dispatch({type:"disabled", index:id})
            },0)
        }
    }
}