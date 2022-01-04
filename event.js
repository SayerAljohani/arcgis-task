
function createEvent(tagName, callBack) {
    document.getElementById(tagName).addEventListener("click", function () {
        callBack();
    });
}
function searchInMap(graphics, graphicsLayer) { debugger
    // init html element 
    let status = document.getElementById("status");
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;

    showMsg(true);

    let flitterG = [];
    graphicsLayer.removeAll()
    graphics.forEach(g => {
        if ((status.value || name || date) &&
            (g.attributes.Name == name
                || g.attributes.Status == status.value
                || dateIsEqual(g.attributes.Date, new Date(date))
            )) {
            flitterG.push(g);
        }
    })
    if (flitterG.length == 0) {
        showMsg(false);
        graphicsLayer.addMany(graphics)
    }
    else
        graphicsLayer.addMany(flitterG)
}
function clear(graphics, graphicsLayer) {
    graphicsLayer.removeAll()
    graphicsLayer.addMany(graphics);
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById("status").selectedIndex = 0
     showMsg(true);
}

function fullDropDown() {
    var select = document.getElementById("status");
    Object.entries(Status).forEach(([key, value]) => {
        var option = document.createElement('option');
        option.text = option.value = value;
        select.add(option);
    });
}

function dateIsEqual(date1, date2) {
    var d1 = new Date(date1);
    var d2 = new Date(date2);
    if (d1.getTime() == d2.getTime()) return true;
    return false;
}

function showMsg(isHidden = true) {
    var element = document.getElementById("msg");
    if (isHidden) {
        element.classList.remove("show");
        element.classList.add("hidden");
    }
    else {
        element.classList.remove("hidden");
        element.classList.add("show");
    }
}
 